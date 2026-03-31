import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Overview",
    body: "By using botti and communicating with us through our website, SMS, WhatsApp, or other messaging channels, you agree to these Terms & Conditions.",
  },
  {
    title: "Consent to Receive Messages",
    body: "By providing your phone number and opting in, you consent to receive conversational, service-related, and support-related text messages from botti. Message frequency may vary depending on your interactions.",
  },
  {
    title: "Message and Data Rates",
    body: "Message and data rates may apply depending on your wireless carrier plan.",
  },
  {
    title: "Opt-Out Instructions",
    body: "You can opt out of receiving SMS messages at any time by replying STOP. For assistance, reply HELP.",
  },
  {
    title: "Acceptable Use",
    body: "Users agree not to misuse the service, submit unlawful content, attempt unauthorized access, or interfere with the normal operation of the platform.",
  },
  {
    title: "Service Availability",
    body: "We strive to keep our services available and accurate, but we do not guarantee uninterrupted or error-free operation at all times.",
  },
  {
    title: "Changes to These Terms",
    body: "We may update these Terms & Conditions from time to time. Continued use of the service after updates constitutes acceptance of the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#060818", color: "#e8f0fe" }}>
      {/* Nav bar */}
      <header style={{ borderBottom: "1px solid #1e2d4a", background: "rgba(6,8,24,0.92)", backdropFilter: "blur(16px)", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <Image src="/logo.png" alt="botti logo" width={40} height={40} style={{ width: "40px", height: "auto", objectFit: "contain" }} />
            <span style={{ color: "#f0f6ff", fontWeight: 700, fontSize: "1.05rem" }}>botti</span>
          </Link>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#8892b0", fontSize: "0.875rem", fontWeight: 500 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
        {/* Page header */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.35rem 1rem", borderRadius: "9999px", border: "1px solid rgba(67,97,238,0.3)", background: "rgba(67,97,238,0.08)", color: "#6b8df7", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Terms & Conditions
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f0f6ff", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "0.75rem" }}>
            botti{" "}
            <span style={{ background: "linear-gradient(135deg, #6b8df7, #00d4ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Terms & Conditions
            </span>
          </h1>
          <p style={{ color: "#4a5568", fontSize: "0.875rem" }}>
            Effective date: March 27, 2026
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {sections.map((s, i) => (
            <div
              key={s.title}
              style={{ background: "#0d1428", border: "1px solid #1e2d4a", borderRadius: "1rem", padding: "1.75rem 2rem" }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{ color: "rgba(67,97,238,0.5)", fontWeight: 800, fontSize: "1.1rem", minWidth: "28px", paddingTop: "2px", fontVariantNumeric: "tabular-nums" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h2 style={{ color: "#f0f6ff", fontWeight: 700, fontSize: "1.0625rem", marginBottom: "0.75rem" }}>
                    {s.title}
                  </h2>
                  <p style={{ color: "#8892b0", lineHeight: 1.8, fontSize: "0.9375rem" }}>
                    {s.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer nav */}
        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #1e2d4a", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/privacy" style={{ color: "#6b8df7", fontSize: "0.875rem", fontWeight: 600 }}>
            Privacy Policy →
          </Link>
          <Link href="/contact" style={{ color: "#6b8df7", fontSize: "0.875rem", fontWeight: 600 }}>
            Contact Us →
          </Link>
        </div>
      </div>
    </main>
  );
}
