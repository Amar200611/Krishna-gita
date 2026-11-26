"use client";

import { motion } from "motion/react";
import { useState, useMemo } from "react";
import quotesData from "./queotes.json";

interface QuoteItem {
  id: number;
  quote: string;
}

type Emotion =
  | "All"
  | "Anxiety & Worry"
  | "Stress & Overthinking"
  | "Motivation & Duty"
  | "Inner Peace & Calm"
  | "Anger & Desire"
  | "Self-Doubt & Fear"
  | "Devotion & Love"
  | "Wisdom & Truth";

const EMOTIONS: { label: Emotion; icon: string }[] = [
  { label: "All", icon: "✨" },
  { label: "Motivation & Duty", icon: "⚡" },
  { label: "Inner Peace & Calm", icon: "🕊️" },
  { label: "Anxiety & Worry", icon: "🌧️" },
  { label: "Stress & Overthinking", icon: "🧘" },
  { label: "Self-Doubt & Fear", icon: "🛡️" },
  { label: "Anger & Desire", icon: "🔥" },
  { label: "Wisdom & Truth", icon: "💡" },
  { label: "Devotion & Love", icon: "🌸" },
];

function getQuoteEmotion(text: string): Emotion {
  const lower = text.toLowerCase();

  if (
    lower.includes("anger") ||
    lower.includes("lust") ||
    lower.includes("greed") ||
    lower.includes("passion") ||
    lower.includes("enemy") ||
    lower.includes("poison") ||
    lower.includes("desire")
  ) {
    return "Anger & Desire";
  }

  if (
    lower.includes("grieve") ||
    lower.includes("sorrow") ||
    lower.includes("anxiety") ||
    lower.includes("worry") ||
    lower.includes("fear") ||
    lower.includes("deathless") ||
    lower.includes("death") ||
    lower.includes("unborn") ||
    lower.includes("inevitable")
  ) {
    return "Anxiety & Worry";
  }

  if (
    lower.includes("mind") ||
    lower.includes("still") ||
    lower.includes("meditation") ||
    lower.includes("peace") ||
    lower.includes("calm") ||
    lower.includes("unwavering") ||
    lower.includes("restless") ||
    lower.includes("steady") ||
    lower.includes("tranquil")
  ) {
    return "Stress & Overthinking";
  }

  if (
    lower.includes("dharma") ||
    lower.includes("work") ||
    lower.includes("action") ||
    lower.includes("duty") ||
    lower.includes("karma") ||
    lower.includes("fruits") ||
    lower.includes("warrior") ||
    lower.includes("arise") ||
    lower.includes("stand up") ||
    lower.includes("perform") ||
    lower.includes("determination")
  ) {
    return "Motivation & Duty";
  }

  if (
    lower.includes("doubt") ||
    lower.includes("faith") ||
    lower.includes("believe") ||
    lower.includes("confidence") ||
    lower.includes("hesitate") ||
    lower.includes("destroy")
  ) {
    return "Self-Doubt & Fear";
  }

  if (
    lower.includes("love") ||
    lower.includes("devotion") ||
    lower.includes("bhakti") ||
    lower.includes("heart") ||
    lower.includes("surrender") ||
    lower.includes("dear to me") ||
    lower.includes("worship")
  ) {
    return "Devotion & Love";
  }

  if (
    lower.includes("joy") ||
    lower.includes("liberation") ||
    lower.includes("soul") ||
    lower.includes("atman") ||
    lower.includes("self") ||
    lower.includes("pure") ||
    lower.includes("serenity")
  ) {
    return "Inner Peace & Calm";
  }

  return "Wisdom & Truth";
}

export default function QuotesList() {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion>("All");
  const rawQuotes: QuoteItem[] = quotesData as QuoteItem[];

  // Assign emotion categories to quotes
  const categorizedQuotes = useMemo(() => {
    return rawQuotes.map((q) => ({
      ...q,
      emotion: getQuoteEmotion(q.quote),
    }));
  }, [rawQuotes]);

  // Filter based on selected emotion
  const filteredQuotes = useMemo(() => {
    if (selectedEmotion === "All") return categorizedQuotes;
    return categorizedQuotes.filter((q) => q.emotion === selectedEmotion);
  }, [categorizedQuotes, selectedEmotion]);

  return (
    <div style={{ width: "100%" }}>
      {/* Emotion Filter Selector Buttons */}
      <div style={{ marginBottom: "3.5rem" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.05rem",
            color: "#78716c",
            marginBottom: "1.5rem",
            fontFamily: "var(--font-montserrat), sans-serif",
            fontWeight: 500,
          }}
        >
          Select what you are feeling to receive timeless guidance:
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.85rem",
            justifyContent: "center",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {EMOTIONS.map(({ label, icon }) => {
            const isSelected = selectedEmotion === label;
            return (
              <motion.button
                key={label}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedEmotion(label)}
                style={{
                  padding: "0.75rem 1.4rem",
                  borderRadius: "50px",
                  fontSize: "0.95rem",
                  fontWeight: isSelected ? 700 : 500,
                  fontFamily: "var(--font-montserrat), sans-serif",
                  cursor: "pointer",
                  border: isSelected ? "1.5px solid #d97706" : "1.5px solid #e7e5e4",
                  backgroundColor: isSelected ? "#d97706" : "#fdfbf7", // Warm cream
                  color: isSelected ? "#ffffff" : "#44403c",
                  boxShadow: isSelected
                    ? "0 8px 20px rgba(217, 119, 6, 0.3)"
                    : "0 2px 8px rgba(0, 0, 0, 0.03)",
                  transition: "all 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </motion.button>
            );
          })}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            fontSize: "0.95rem",
            color: "#a8a29e",
          }}
        >
          Showing {filteredQuotes.length} {filteredQuotes.length === 1 ? "quote" : "quotes"} for{" "}
          <strong style={{ color: "#d97706" }}>{selectedEmotion}</strong>
        </div>
      </div>

      {/* Warm Cream Colored Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
          gap: "2.2rem",
          alignItems: "stretch",
        }}
      >
        {filteredQuotes.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
            whileHover={{ y: -6, boxShadow: "0 18px 36px rgba(120, 113, 108, 0.12)" }}
            style={{
              backgroundColor: "#fdfbf7", // Warm elegant cream color
              padding: "2.4rem 2.2rem 1.8rem",
              borderRadius: "22px",
              boxShadow: "0 6px 22px rgba(120, 113, 108, 0.06)",
              border: "1px solid #f5efe6", // Soft cream border
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <div>
              {/* Card Header with Emotion Badge and Verse # */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.03em",
                    color: "#b45309",
                    backgroundColor: "#fef3c7",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "14px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <span style={{ fontSize: "0.75rem" }}>🏷️</span>
                  <span>{item.emotion}</span>
                </span>

                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#a8a29e",
                    letterSpacing: "0.05em",
                  }}
                >
                  #{item.id}
                </span>
              </div>

              {/* Quote text */}
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#292524",
                  fontStyle: "normal",
                  fontWeight: 400,
                  margin: "0 0 1.5rem 0",
                  fontFamily: "var(--font-montserrat), sans-serif",
                }}
              >
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            {/* Card Footer */}
            <div
              style={{
                borderTop: "1px solid #f5efe6",
                paddingTop: "1.1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-cinzel), serif",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "#1c1917",
                  letterSpacing: "0.03em",
                }}
              >
                Sri Krishna
              </span>
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "#78716c",
                  fontFamily: "var(--font-montserrat), sans-serif",
                }}
              >
                Bhagavad Gita
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
