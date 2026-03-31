import Image from "next/image";
import Link from "next/link";

const sections = [
  { title: "Overview", body: "By using botti and communicating with us through our website, SMS, WhatsApp, or other messaging channels, you agree to these Terms & Conditions." },
  { title: "Consent to Receive Messages", body: "By providing your phone number and opting in, you consent to receive conversational, service-related, and support-related text messages from botti. Message frequency may vary depending on your interactions." },
  { title: "Message and Data Rates", body: "Message and data rates may apply depending on your wireless carrier plan." },
  { title: "Opt-Out Instructions", body: "You can opt out of receiving SMS messages at any time by replying STOP. For assistance, reply HELP." },
  { title: "Acceptable Use", body: "Users agree not to misuse the service, submit unlawful content, attempt unauthorized access, or interfere with the normal operation of the platform." },
  { title: "Service Availability", body: "We strive to keep our services available and accurate, but we do not guarantee uninterrupted or error-free operation at all times." },
  { title: "Changes to These Terms", body: "We may update these Terms & Conditions from time to time. Continued use of the service after updates constitutes acceptance of the revised terms." },
];

export default function TermsPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", color: "#0f172a" }}>
      <header style={{ borderBottom: "1px solid #e2e8f0", background: "rgba(255,255,255,0.95)", backdropFilter: "blur(16px)", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <Image src="/logo.png" alt="botti logo" width={40} height={40} style={{ width: "40px", height: "auto", objectFit: "contain" }} />
            <span style={{ color: "#0f172a", fontWeight: 700, fontSize: "1.05rem" }}>botti</span>
          </Link>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#64748b", fontSize: "0.875rem", fontWeight: 500 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ display: "inline-flex", padding: "0.35rem 1rem", borderRadius: "9999px", border: "1px solid rgba(67,97,238,0.25)", background: "rgba(67,97,238,0.06)", color: "#4361ee", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Terms & Conditions
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "0.75rem" }}>
            botti{" "}
            <span style={{ background: "linear-gradient(135deg, #4361ee, #0284c7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Terms & Conditions
            </span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>Effective date: March 27, 2026</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {sections.map((s, i) => (
            <div key={s.title} style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "1rem", padding: "1.75rem 2rem", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{ color: "#93c5fd", fontWeight: 800, fontSize: "1.1rem", minWidth: "28px", paddingTop: "2px" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h2 style={{ color: "#0f172a", fontWeight: 700, fontSize: "1.0625rem", marginBottom: "0.75rem" }}>{s.title}</h2>
                  <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: "0.9375rem" }}>{s.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #e2e8f0", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/privacy" style={{ color: "#4361ee", fontSize: "0.875rem", fontWeight: 600 }}>Privacy Policy →</Link>
          <Link href="/contact" style={{ color: "#4361ee", fontSize: "0.875rem", fontWeight: 600 }}>Contact Us →</Link>
        </div>
      </div>
    </main>
  );
}
