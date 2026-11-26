"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#020617", color: "#0f172a", width: "100%", overflowX: "hidden" }}>
      {/* ================= SECTION 1: HERO (Video Background) ================= */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "92vh",
          overflow: "hidden",
          borderBottomLeftRadius: "36px",
          borderBottomRightRadius: "36px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.45)",
          backgroundColor: "#020617",
          zIndex: 10,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            zIndex: 1,
          }}
        >
          <source src="/krishna-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Top Gradient Overlay on the video */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "45%",
            background:
              "linear-gradient(180deg, rgba(2, 6, 23, 0.88) 0%, rgba(2, 6, 23, 0.6) 50%, rgba(2, 6, 23, 0) 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Bottom soft gradient blend */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "25%",
            background:
              "linear-gradient(0deg, rgba(2, 6, 23, 0.7) 0%, rgba(2, 6, 23, 0) 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Hero Content Positioned towards the Top */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            width: "100%",
            paddingTop: "6vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            userSelect: "none",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            boxSizing: "border-box",
          }}
        >
          <h1
            className="text-reveal"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "clamp(3rem, 9vw, 8rem)",
              fontWeight: 800,
              letterSpacing: "0.02em",
              margin: 0,
              color: "#ffffff",
              lineHeight: 1.1,
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            Hare Krishna
          </h1>

          <p
            className="text-reveal"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              marginTop: "0.75rem",
              fontSize: "clamp(1rem, 2vw, 1.6rem)",
              fontWeight: 300,
              color: "rgba(255, 255, 255, 0.95)",
              letterSpacing: "0.04em",
              textTransform: "none",
              maxWidth: "850px",
              lineHeight: 1.4,
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.4)",
            }}
          >
            The timeless wisdom of the Bhagavad Gita
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: WELCOME ================= */}
      <section
        className="welcome-section"
        style={{
          backgroundColor: "#ffffff",
          padding: "4rem 0",
          position: "relative",
          zIndex: 5,
          width: "100%",
        }}
      >
        <div
          className="welcome-container"
          style={{
            maxWidth: "1690px",
            margin: "0 auto",
            padding: "0 2.5rem",
            boxSizing: "border-box",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="welcome-banner-img" style={{ width: "100%", position: "relative" }}>
            <Image
              src="/welcome-banner.png"
              alt="Krishna welcome banner"
              width={2149}
              height={949}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "contain",
              }}
              priority
            />
          </div>

          {/* Text positioned directly on the image on desktop, neatly stacked on mobile */}
          <div
            className="welcome-text-overlay"
            style={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "85%",
              maxWidth: "950px",
              textAlign: "center",
              zIndex: 2,
            }}
          >
            <h2
              className="text-reveal welcome-title"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                fontSize: "clamp(2rem, 3.8vw, 2.85rem)",
                fontWeight: 700,
                color: "#0f172a",
                marginBottom: "1.25rem",
                letterSpacing: "0.02em",
              }}
            >
              Welcome to this website about Krishna and Bhagavad Gita
            </h2>
            <p
              className="text-reveal welcome-desc"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "1.15rem",
                color: "#475569",
                maxWidth: "850px",
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              Step into the sacred teachings of Sri Krishna and the divine philosophy of the Shrimad Bhagavad Gita.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: WHO IS KRISHNA (Balanced Width: 1480px) ================= */}
      <section
        style={{
          backgroundColor: "#ffffff",
          width: "100%",
          padding: "7rem 2.5rem",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1480px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "4.5rem",
          }}
        >
          {/* Left: Text Content */}
          <div style={{ flex: "1 1 580px", minWidth: "320px" }}>
            <span
              className="text-reveal"
              style={{
                color: "#2563eb",
                fontWeight: 600,
                fontSize: "0.95rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "inline-block",
              }}
            >
              Divine Incarnation
            </span>
            <h3
              className="text-reveal"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                fontSize: "clamp(2.2rem, 3.8vw, 3rem)",
                color: "#1e3a8a",
                margin: "0.5rem 0 1.5rem",
              }}
            >
              Who is Krishna?
            </h3>
            <p
              className="text-reveal"
              style={{
                fontSize: "1.08rem",
                lineHeight: 1.85,
                color: "#334155",
                marginBottom: "1.75rem",
              }}
            >
              Krishna is a major Hindu deity worshipped as the eighth avatar (incarnation) of Vishnu and, in many traditions, as the Supreme God in his own right. Known for love, compassion, wisdom, and playfulness, his name comes from a Sanskrit word meaning &quot;black&quot; or &quot;dark&quot; (often also interpreted as &quot;all-attractive&quot;).
            </p>

            <h4
              className="text-reveal"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                fontSize: "1.3rem",
                color: "#0f172a",
                margin: "1.75rem 0 0.75rem",
              }}
            >
              Key Roles and Stories
            </h4>
            <ul
              style={{
                paddingLeft: "1.5rem",
                lineHeight: 1.8,
                color: "#475569",
                fontSize: "1.02rem",
              }}
            >
              <li className="text-reveal" style={{ marginBottom: "0.75rem" }}>
                <strong>Childhood &amp; Youth:</strong> Born to Vasudeva and Devaki in Mathura to escape his tyrannical uncle Kamsa, he was raised in Vrindavan by foster parents Yashoda and Nanda. Tales of his youth depict him as a mischievous cowherd boy, a flute player, and a beloved figure among the gopis (cowherdesses), especially Radha.
              </li>
              <li className="text-reveal" style={{ marginBottom: "0.75rem" }}>
                <strong>The Bhagavad Gita:</strong> In the epic Mahabharata, Krishna serves as prince Arjuna&apos;s charioteer and guide on the battlefield of Kurukshetra. Their conversation forms the Bhagavad Gita, a core Hindu scripture covering duty (dharma), devotion (bhakti), action without attachment, and the nature of the soul.
              </li>
              <li className="text-reveal" style={{ marginBottom: "0.75rem" }}>
                <strong>Statesman &amp; Protector:</strong> He later defeats Kamsa, establishes the city of Dwarka, and plays a central strategic role in the Mahabharata war and the restoration of righteousness.
              </li>
            </ul>

            <h4
              className="text-reveal"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                fontSize: "1.3rem",
                color: "#0f172a",
                margin: "1.75rem 0 0.75rem",
              }}
            >
              Cultural &amp; Spiritual Impact
            </h4>
            <ul
              style={{
                paddingLeft: "1.5rem",
                lineHeight: 1.8,
                color: "#475569",
                fontSize: "1.02rem",
              }}
            >
              <li className="text-reveal" style={{ marginBottom: "0.75rem" }}>
                <strong>Devotion &amp; Festivals:</strong> Krishna is central to devotional (bhakti) traditions and is celebrated worldwide on Krishna Janmashtami, which marks his birth.
              </li>
              <li className="text-reveal">
                <strong>Arts:</strong> Stories of his life have deeply shaped Indian classical dance, music, poetry, and painting.
              </li>
            </ul>
          </div>

          {/* Right: Full Uncropped Image */}
          <div
            style={{
              flex: "0 1 500px",
              minWidth: "320px",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ position: "relative", width: "100%", maxWidth: "500px" }}>
              <Image
                src="/krishna-banner.jpg"
                alt="Lord Krishna"
                width={500}
                height={680}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
              />
              {/* Subtle edge gradient on the left side */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.35) 12%, rgba(255, 255, 255, 0) 35%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: BHAGAVAD GITA (Balanced Width: 1480px) ================= */}
      <section
        style={{
          backgroundColor: "#f8fafc",
          width: "100%",
          padding: "7rem 2.5rem",
          boxSizing: "border-box",
          borderTop: "1px solid #e2e8f0",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            maxWidth: "1480px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "4.5rem",
          }}
        >
          {/* Left: Full Book Image */}
          <div
            style={{
              flex: "0 1 450px",
              minWidth: "300px",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              order: 1,
            }}
          >
            <div style={{ position: "relative", width: "100%", maxWidth: "450px" }}>
              <Image
                src="/boek.jpg"
                alt="Srimad Bhagavad Gita Book"
                width={450}
                height={620}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
              />
              {/* Subtle edge gradient on right side blending into #f8fafc */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(270deg, #f8fafc 0%, rgba(248, 250, 252, 0.4) 12%, rgba(248, 250, 252, 0) 35%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div style={{ flex: "1 1 580px", minWidth: "320px", order: 2 }}>
            <span
              className="text-reveal"
              style={{
                color: "#dc2626",
                fontWeight: 600,
                fontSize: "0.95rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "inline-block",
              }}
            >
              The Song of God
            </span>
            <h3
              className="text-reveal"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                fontSize: "clamp(2.2rem, 3.8vw, 3rem)",
                color: "#0f172a",
                margin: "0.5rem 0 1.5rem",
              }}
            >
              The Bhagavad Gita
            </h3>
            <p
              className="text-reveal"
              style={{
                fontSize: "1.08rem",
                lineHeight: 1.85,
                color: "#334155",
                marginBottom: "1.75rem",
              }}
            >
              The <strong>Bhagavad Gita</strong> (often simply called the Gita, meaning &quot;Song of God&quot; or &quot;Song of the Lord&quot;) is a 700-verse Sanskrit Hindu scripture that forms part of the ancient epic poem Mahabharata. Structured as an 18-chapter dialogue, it takes place on the Kurukshetra battlefield between the warrior prince Arjuna and his charioteer and guide, Krishna (an avatar of Vishnu).
            </p>

            <h4
              className="text-reveal"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                fontSize: "1.3rem",
                color: "#0f172a",
                margin: "1.75rem 0 0.75rem",
              }}
            >
              Setting and Story
            </h4>
            <p
              className="text-reveal"
              style={{
                fontSize: "1.02rem",
                lineHeight: 1.8,
                color: "#475569",
                marginBottom: "1.75rem",
              }}
            >
              Right before a massive war between rival cousins (the Pandavas and the Kauravas), Arjuna is overwhelmed by grief and moral conflict about fighting his own relatives and teachers. Krishna steps in to counsel him, moving the conversation from Arjuna&apos;s immediate battlefield dilemma to deeper questions about life, purpose, and the soul.
            </p>

            <h4
              className="text-reveal"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                fontSize: "1.3rem",
                color: "#0f172a",
                margin: "1.75rem 0 0.75rem",
              }}
            >
              Core Teachings
            </h4>
            <ul
              style={{
                paddingLeft: "1.5rem",
                lineHeight: 1.8,
                color: "#475569",
                fontSize: "1.02rem",
              }}
            >
              <li className="text-reveal">
                <strong>Dharma (Duty):</strong> Fulfilling one&apos;s rightful responsibilities and moral duty, rather than abandoning action out of fear or doubt.
              </li>
              <li className="text-reveal">
                <strong>Karma Yoga (Selfless Action):</strong> Doing your duty wholeheartedly without obsessing over or clinging to the results.
              </li>
              <li className="text-reveal">
                <strong>Jnana Yoga (Knowledge):</strong> Understanding the difference between the temporary physical body and the eternal soul (atman).
              </li>
              <li className="text-reveal">
                <strong>Bhakti Yoga (Devotion):</strong> Cultivating love, trust, and devotion toward the divine.
              </li>
            </ul>

            <h4
              className="text-reveal"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                fontSize: "1.3rem",
                color: "#0f172a",
                margin: "1.75rem 0 0.75rem",
              }}
            >
              Synonyms and Titles
            </h4>
            <ul
              style={{
                paddingLeft: "1.5rem",
                lineHeight: 1.8,
                color: "#475569",
                fontSize: "1.02rem",
              }}
            >
              <li className="text-reveal">
                <strong>The Gita:</strong> Shortened colloquial form
              </li>
              <li className="text-reveal">
                <strong>Shrimad Bhagavad Gita:</strong> An honorific form showing high respect
              </li>
              <li className="text-reveal">
                <strong>Gitopanishad or Yogopanishad:</strong> Reflecting its status as a philosophical teaching akin to an Upanishad
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: FULL BLUE SECTION (Balanced Width: 1480px) ================= */}
      <section
        style={{
          backgroundColor: "#0a192f", // Deep divine blue
          color: "#ffffff",
          width: "100%",
          padding: "7rem 2.5rem",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1480px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "4.5rem",
          }}
        >
          {/* Left: Featured Quote and Button */}
          <div style={{ flex: "1 1 580px", minWidth: "320px" }}>
            <span
              className="text-reveal"
              style={{
                color: "#f59e0b",
                fontSize: "0.95rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                display: "inline-block",
              }}
            >
              Divine Revelation
            </span>

            <blockquote
              className="text-reveal"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)",
                lineHeight: 1.35,
                margin: "1.25rem 0 1.25rem",
                color: "#ffffff",
                fontWeight: 700,
              }}
            >
              &ldquo;You are what you believe in. You become that which you believe you can become.&rdquo;
            </blockquote>

            <p
              className="text-reveal"
              style={{
                color: "#94a3b8",
                fontSize: "1.15rem",
                marginBottom: "2.75rem",
                fontFamily: "var(--font-montserrat), sans-serif",
              }}
            >
              — Bhagavad Gita
            </p>

            {/* Interactive animated Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              style={{ display: "inline-block" }}
            >
              <Link
                href="/quotes"
                style={{
                  display: "inline-block",
                  backgroundColor: "#f59e0b",
                  color: "#0f172a",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  padding: "1.1rem 2.6rem",
                  borderRadius: "50px",
                  textDecoration: "none",
                  boxShadow: "0 10px 30px rgba(245, 158, 11, 0.45)",
                  transition: "background-color 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                Lees de Gita quotes →
              </Link>
            </motion.div>
          </div>

          {/* Right: Full Uncut Image with subtle glow and edge fade */}
          <div
            style={{
              flex: "0 1 500px",
              minWidth: "320px",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ position: "relative", width: "100%", maxWidth: "500px" }}>
              <Image
                src="/quotes-krishna.jpg"
                alt="Lord Krishna and Arjuna on chariot"
                width={500}
                height={350}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
              />
              {/* Subtle edge gradient on left edge into the blue background */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg, #0a192f 0%, rgba(10, 25, 47, 0.4) 10%, rgba(10, 25, 47, 0) 30%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          backgroundColor: "#020617",
          color: "#94a3b8",
          textAlign: "center",
          padding: "2.5rem 1rem",
          fontSize: "0.95rem",
        }}
      >
        <p style={{ margin: 0 }}>
          Hare Krishna • Timeless Wisdom of the Bhagavad Gita
        </p>
      </footer>
    </div>
  );
}
