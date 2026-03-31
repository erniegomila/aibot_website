import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const info = [
    { label: "Business Name", value: "botti" },
    { label: "Website", value: "getbotti.com" },
    { label: "Email", value: "contact@getbotti.com" },
    { label: "Support Hours", value: "Monday – Friday, 9 AM – 5 PM" },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "#060818", color: "#e8f0fe" }}>
      {/* Nav bar */}
      <header style={{ borderBottom: "1px solid #1e2d4a", background: "rgba(6,8,24,0.92)", backdropFilter: "blur(16px)", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <Image src="/logo.png" alt="botti logo" width={40} height={40} style={{ width: "40px", height: "auto", objectFit: "contain" }} />
            <span style={{ color: "#f0f6ff", fontWeight: 700, fontSize: "1.05rem" }}>botti</span>
          </Link>
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#8892b0", fontSize: "0.875rem", fontWeight: 500 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
        {/* Page header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.35rem 1rem", borderRadius: "9999px", border: "1px solid rgba(67,97,238,0.3)", background: "rgba(67,97,238,0.08)", color: "#6b8df7", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}
          >
            Contact
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f0f6ff", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "1rem" }}>
            Contact{" "}
            <span style={{ background: "linear-gradient(135deg, #6b8df7, #00d4ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              botti
            </span>
          </h1>
          <p style={{ color: "#8892b0", fontSize: "1.0625rem", lineHeight: 1.75 }}>
            For questions about our services, messaging practices, privacy, or terms, please contact us using the information below.
          </p>
        </div>

        {/* Info cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
          {info.map((item) => (
            <div
              key={item.label}
              style={{ background: "#0d1428", border: "1px solid #1e2d4a", borderRadius: "0.875rem", padding: "1.25rem 1.5rem" }}
            >
              <div style={{ color: "#4a5568", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                {item.label}
              </div>
              <div style={{ color: "#e8f0fe", fontWeight: 600, fontSize: "0.9375rem" }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Address card */}
        <div style={{ background: "#0d1428", border: "1px solid #1e2d4a", borderRadius: "0.875rem", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
          <div style={{ color: "#4a5568", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
            Address
          </div>
          <div style={{ color: "#e8f0fe", fontWeight: 600, fontSize: "0.9375rem" }}>
            Your business address goes here
          </div>
        </div>

        {/* Messaging info */}
        <div
          style={{ background: "linear-gradient(135deg, rgba(67,97,238,0.1), rgba(0,212,255,0.05))", border: "1px solid rgba(67,97,238,0.2)", borderRadius: "1rem", padding: "1.75rem 2rem" }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "0.75rem", background: "rgba(67,97,238,0.2)", border: "1px solid rgba(67,97,238,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6b8df7", flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div>
              <h2 style={{ color: "#f0f6ff", fontWeight: 700, fontSize: "1.0625rem", marginBottom: "0.625rem" }}>
                Messaging Support
              </h2>
              <p style={{ color: "#8892b0", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                Users may reply <strong style={{ color: "#c5d4f0" }}>STOP</strong> to opt out of SMS messages at any time. Reply <strong style={{ color: "#c5d4f0" }}>HELP</strong> for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
