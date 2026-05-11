import Header from "./Header";
import Link from "next/link";

export type IndustryContent = {
  badge: string;
  headline: string;
  headlineHighlight: string;
  subheadline: string;
  painPoints: { title: string; desc: string }[];
  useCases: { title: string; desc: string }[];
  exampleChat: { from: "customer" | "botti"; text: string }[];
  ctaHeading: string;
  ctaSubtext: string;
};

export default function IndustryPage({ content }: { content: IndustryContent }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh", background: "#f8fafc" }}>
        {/* Hero */}
        <section
          style={{
            background: "linear-gradient(135deg, #4361ee 0%, #2d3fcf 100%)",
            padding: "5rem 1.5rem 4rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "0.35rem 1rem",
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#ffffff",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            {content.badge}
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              color: "#ffffff",
              maxWidth: "780px",
              margin: "0 auto 1rem",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            {content.headline}{" "}
            <span style={{ background: "linear-gradient(135deg, #ffffff, #c7d2fe)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {content.headlineHighlight}
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.9)",
              maxWidth: "640px",
              margin: "0 auto 2rem",
              lineHeight: 1.7,
            }}
          >
            {content.subheadline}
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/demo"
              className="btn-primary"
              style={{
                background: "#ffffff",
                color: "#4361ee",
                padding: "0.85rem 2rem",
                fontSize: "0.95rem",
              }}
            >
              Book a Free Demo
            </Link>
            <Link
              href="/contact"
              style={{
                padding: "0.85rem 2rem",
                fontSize: "0.95rem",
                color: "#ffffff",
                border: "1.5px solid rgba(255,255,255,0.5)",
                borderRadius: "0.5rem",
                fontWeight: 600,
              }}
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Pain Points */}
        <section style={{ padding: "5rem 1.5rem", background: "#ffffff" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0f172a", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
                Sound familiar?
              </h2>
              <p style={{ color: "#64748b", fontSize: "1.05rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
                These are the everyday problems botti was built to fix.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {content.painPoints.map((p) => (
                <div
                  key={p.title}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "1rem",
                    padding: "1.75rem",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "0.625rem",
                      background: "rgba(239,68,68,0.1)",
                      border: "1px solid rgba(239,68,68,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ef4444",
                      marginBottom: "1rem",
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <h3 style={{ color: "#0f172a", fontWeight: 700, fontSize: "1.0625rem", marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ color: "#64748b", fontSize: "0.9375rem", lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How botti helps */}
        <section style={{ padding: "5rem 1.5rem", background: "#f8fafc" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="section-label" style={{ margin: "0 auto 1rem" }}>How botti helps</div>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0f172a", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
                Everything botti can handle for you
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {content.useCases.map((u) => (
                <div
                  key={u.title}
                  className="glow-card"
                  style={{ borderRadius: "1rem", padding: "1.75rem" }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "0.625rem",
                      background: "linear-gradient(135deg, rgba(67,97,238,0.1), rgba(2,132,199,0.06))",
                      border: "1px solid rgba(67,97,238,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#4361ee",
                      marginBottom: "1rem",
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 style={{ color: "#0f172a", fontWeight: 700, fontSize: "1.0625rem", marginBottom: "0.5rem" }}>{u.title}</h3>
                  <p style={{ color: "#64748b", fontSize: "0.9375rem", lineHeight: 1.65 }}>{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example conversation */}
        <section style={{ padding: "5rem 1.5rem", background: "#ffffff" }}>
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <div className="section-label" style={{ margin: "0 auto 1rem" }}>See it in action</div>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em" }}>
                A real customer conversation
              </h2>
            </div>
            <div
              style={{
                background: "#000000",
                borderRadius: "2.5rem",
                padding: "0.75rem",
                maxWidth: "360px",
                margin: "0 auto",
                boxShadow: "0 24px 80px rgba(0,0,0,0.15)",
              }}
            >
              <div style={{ background: "#ffffff", borderRadius: "2rem", overflow: "hidden" }}>
                <div style={{ background: "#f2f2f7", padding: "0.5rem 1.25rem 0.4rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#1c1c1e" }}>9:41</span>
                  <div style={{ width: "80px", height: "24px", background: "#1c1c1e", borderRadius: "12px" }} />
                  <div style={{ width: "30px" }} />
                </div>
                <div style={{ background: "#f2f2f7", padding: "0.25rem 1rem 0.6rem", textAlign: "center", borderBottom: "1px solid #d1d1d6" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg, #4361ee, #0284c7)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.25rem" }}>
                    <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>B</span>
                  </div>
                  <div style={{ color: "#1c1c1e", fontWeight: 600, fontSize: "0.8rem" }}>botti</div>
                </div>
                <div style={{ padding: "1rem 0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem", background: "#ffffff" }}>
                  {content.exampleChat.map((msg, i) =>
                    msg.from === "customer" ? (
                      <div key={i} style={{ display: "flex", justifyContent: "flex-end" }}>
                        <div style={{ background: "#007AFF", borderRadius: "1.1rem 1.1rem 0.3rem 1.1rem", padding: "0.55rem 0.85rem", fontSize: "0.85rem", color: "#ffffff", maxWidth: "75%", lineHeight: 1.4 }}>
                          {msg.text}
                        </div>
                      </div>
                    ) : (
                      <div key={i} style={{ display: "flex", justifyContent: "flex-start" }}>
                        <div style={{ background: "#e9e9eb", borderRadius: "1.1rem 1.1rem 1.1rem 0.3rem", padding: "0.55rem 0.85rem", fontSize: "0.85rem", color: "#1c1c1e", maxWidth: "75%", lineHeight: 1.4 }}>
                          {msg.text}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "5rem 1.5rem", background: "#f8fafc" }}>
          <div
            style={{
              maxWidth: "780px",
              margin: "0 auto",
              textAlign: "center",
              background: "linear-gradient(135deg, rgba(67,97,238,0.06) 0%, rgba(2,132,199,0.04) 100%)",
              border: "1px solid rgba(67,97,238,0.15)",
              borderRadius: "1.5rem",
              padding: "4rem 2rem",
            }}
          >
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0f172a", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
              {content.ctaHeading}
            </h2>
            <p style={{ color: "#64748b", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
              {content.ctaSubtext}
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/demo" className="btn-primary">Book a Free Demo</Link>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </div>
        </section>

        {/* Other industries */}
        <section style={{ padding: "3rem 1.5rem 5rem", background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
            <h3 style={{ color: "#64748b", fontSize: "0.875rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
              botti works for every industry
            </h3>
            <div style={{ display: "flex", gap: "1.25rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/industries/restaurants" style={{ color: "#4361ee", fontWeight: 600, fontSize: "0.9375rem" }}>Restaurants →</Link>
              <Link href="/industries/healthcare" style={{ color: "#4361ee", fontWeight: 600, fontSize: "0.9375rem" }}>Healthcare & Med Spas →</Link>
              <Link href="/industries/home-services" style={{ color: "#4361ee", fontWeight: 600, fontSize: "0.9375rem" }}>Home Services →</Link>
              <Link href="/industries/hoas" style={{ color: "#4361ee", fontWeight: 600, fontSize: "0.9375rem" }}>HOAs →</Link>
              <Link href="/industries/photography" style={{ color: "#4361ee", fontWeight: 600, fontSize: "0.9375rem" }}>Photography →</Link>
              <Link href="/industries/auto" style={{ color: "#4361ee", fontWeight: 600, fontSize: "0.9375rem" }}>Auto →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
