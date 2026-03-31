import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Overview",
    body: "botti respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you communicate with us through our website, SMS, WhatsApp, or other messaging channels.",
  },
  {
    title: "Information We Collect",
    body: "We may collect your name, phone number, email address, message content, and any other information you voluntarily provide when contacting us, requesting support, or using our services.",
  },
  {
    title: "How We Use Information",
    body: "We use the information we collect to respond to inquiries, provide support, deliver requested updates, improve our services, and maintain the security and reliability of our platform.",
  },
  {
    title: "Messaging Privacy",
    body: "Mobile information will not be shared, sold, or transferred to third parties or affiliates for marketing or promotional purposes. Messaging data is used only to provide the services requested by the user and to support operational communications.",
  },
  {
    title: "Data Security",
    body: "We take reasonable administrative, technical, and organizational measures to protect information from unauthorized access, loss, misuse, alteration, or disclosure.",
  },
  {
    title: "Your Choices",
    body: "You may opt out of SMS communications at any time by replying STOP. For assistance, reply HELP or contact us directly through our contact page.",
  },
  {
    title: "Policy Updates",
    body: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.",
  },
];

export default function PrivacyPage() {
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
            Privacy Policy
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f0f6ff", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "0.75rem" }}>
            botti{" "}
            <span style={{ background: "linear-gradient(135deg, #6b8df7, #00d4ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Privacy Policy
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
          <Link href="/terms" style={{ color: "#6b8df7", fontSize: "0.875rem", fontWeight: 600 }}>
            Terms & Conditions →
          </Link>
          <Link href="/contact" style={{ color: "#6b8df7", fontSize: "0.875rem", fontWeight: 600 }}>
            Contact Us →
          </Link>
        </div>
      </div>
    </main>
  );
}
