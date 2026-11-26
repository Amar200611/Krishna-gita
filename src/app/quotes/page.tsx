import QuotesList from "../QuotesList";

export const metadata = {
  title: "Bhagavad Gita Quotes • Hare Krishna",
  description: "Browse and search through sacred verses and quotes from the Bhagavad Gita.",
};

export default function QuotesPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        color: "#0f172a",
        padding: "5rem 2rem 8rem",
      }}
    >
      <div style={{ maxWidth: "1480px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span
            style={{
              color: "#d97706",
              fontSize: "0.95rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Sacred Wisdom
          </span>
          <h1
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              margin: "0.75rem 0 1rem",
              color: "#0f172a",
              fontWeight: 800,
            }}
          >
            Bhagavad Gita Quotes
          </h1>
          <p
            style={{
              color: "#64748b",
              fontSize: "1.2rem",
              maxWidth: "750px",
              margin: "0 auto",
              fontFamily: "var(--font-montserrat), sans-serif",
              lineHeight: 1.7,
            }}
          >
            Explore the timeless divine teachings of Lord Krishna spoken to Arjuna on the battlefield of Kurukshetra.
          </p>
        </div>

        {/* Quotes List Component */}
        <QuotesList />
      </div>
    </div>
  );
}
