"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import SplitType from "split-type";
import "./text-reveal.css";

export default function SmoothScrollAndTextReveal() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.07,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);

    let splitInstances: SplitType[] = [];

    const setTextRevealAnimations = () => {
      // Revert previous splits if any
      splitInstances.forEach((st) => {
        try {
          st.revert();
        } catch {}
      });
      splitInstances = [];

      // Kill previous text reveal ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => {
        const id = trigger.vars.id;
        if (id && id.toString().startsWith("text-reveal-")) {
          trigger.kill();
        }
      });

      const targets = document.querySelectorAll<HTMLElement>(".text-reveal");

      targets.forEach((text, i) => {
        const splitText = new SplitType(text, { types: "lines" });
        splitInstances.push(splitText);

        if (splitText.lines) {
          splitText.lines.forEach((line) => {
            const lineWrapper = document.createElement("div");
            lineWrapper.classList.add("line-wrapper");
            line.parentNode?.insertBefore(lineWrapper, line);
            lineWrapper.appendChild(line);
          });

          gsap.to(splitText.lines, {
            y: 0,
            ease: "power1.inOut",
            stagger: 0.15,
            scrollTrigger: {
              id: `text-reveal-${i}`,
              trigger: text,
              start: "top bottom",
              toggleActions: "play reset play reset",
            },
          });
        }
      });
    };

    // Initial run
    setTextRevealAnimations();

    // Debounced ResizeObserver
    let timer: NodeJS.Timeout;
    const debounce = (func: () => void, timeout = 300) => {
      return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func();
        }, timeout);
      };
    };

    const handleResize = debounce(() => {
      setTextRevealAnimations();
    }, 500);

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(document.body);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      resizeObserver.disconnect();
      splitInstances.forEach((st) => {
        try {
          st.revert();
        } catch {}
      });
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return null;
}
