import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";

/* ─── SVG Icons ──────────────────────────────────────────── */
function IconChat() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function IconZap() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function IconUsers() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ─── Chat Mockup ─────────────────────────────────────────── */
function ChatMockup() {
  return (
    <div
      className="animate-float"
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "1.25rem",
        padding: "1.5rem",
        maxWidth: "360px",
        width: "100%",
        boxShadow: "0 24px 80px rgba(0,0,0,0.1), 0 0 40px rgba(67,97,238,0.06)",
      }}
    >
      {/* Header bar */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem", paddingBottom: "1rem", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, #4361ee, #0284c7)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="10" opacity="0.3" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="white" /></svg>
        </div>
        <div>
          <div style={{ color: "#0f172a", fontWeight: 600, fontSize: "0.875rem" }}>botti Assistant</div>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e" }} />
            <span style={{ color: "#64748b", fontSize: "0.75rem" }}>Online</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <div className="chat-bubble-in">Hi! How can I help you today? 👋</div>
        <div className="chat-bubble-out">I need help with my account settings.</div>
        <div className="chat-bubble-in">Of course! I can help you update your account settings. What would you like to change?</div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", paddingTop: "0.25rem" }}>
          <div style={{ display: "flex", gap: "3px" }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4361ee", animation: `bounce ${0.8 + i * 0.15}s ease-in-out infinite alternate` }} />
            ))}
          </div>
          <span style={{ color: "#94a3b8", fontSize: "0.75rem" }}>botti is typing…</span>
        </div>
      </div>

      {/* Input bar */}
      <div style={{ marginTop: "1.25rem", display: "flex", gap: "0.5rem", background: "#f8fafc", borderRadius: "0.75rem", padding: "0.5rem 0.75rem", border: "1px solid #e2e8f0" }}>
        <span style={{ color: "#94a3b8", fontSize: "0.85rem", flex: 1 }}>Type a message…</span>
        <div style={{ width: "28px", height: "28px", borderRadius: "0.5rem", background: "linear-gradient(135deg, #4361ee, #5a75f5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function HomePage() {
  const features = [
    { icon: <IconChat />, title: "Multi-Channel Messaging", desc: "Reach customers on web chat, SMS, and WhatsApp — all from one unified platform that keeps every conversation in sync." },
    { icon: <IconZap />, title: "AI-Powered Responses", desc: "botti handles routine inquiries instantly, giving your team time back while customers get fast, accurate answers 24/7." },
    { icon: <IconUsers />, title: "Seamless Human Handoff", desc: "When a conversation needs a personal touch, botti routes it to the right person without any friction or repeated context." },
    { icon: <IconShield />, title: "Privacy & Compliance", desc: "Built with TCPA compliance in mind — clear opt-in consent, instant opt-out via STOP, and full transparency for your customers." },
  ];

  const steps = [
    { n: "01", title: "Customer Opts In", text: "Users provide consent by submitting a form, starting a conversation, or requesting communication about services." },
    { n: "02", title: "Helpful Messages Sent", text: "Messages include support responses, appointment or service information, and requested follow-ups — sent at the right moment." },
    { n: "03", title: "Opt Out Anytime", text: "Recipients can stop receiving SMS messages at any time by replying STOP. We handle it immediately, no questions asked." },
  ];

  const stats = [
    { value: "24/7", label: "Always-on availability" },
    { value: "3x", label: "Faster response times" },
    { value: "100%", label: "Consent-based messaging" },
    { value: "0", label: "Data sold to third parties" },
  ];

  return (
    <>
      <Header />

      <main style={{ overflowX: "hidden" }}>
        {/* ── Hero ──────────────────────────────────── */}
        <section
          className="grid-bg hero-section mobile-section"
          style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center", background: "#ffffff" }}
        >
          <div className="orb orb-blue" style={{ width: "600px", height: "600px", top: "-200px", left: "-200px" }} />
          <div className="orb orb-cyan" style={{ width: "400px", height: "400px", bottom: "-100px", right: "-100px" }} />

          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "5rem 1.5rem", width: "100%", position: "relative", zIndex: 1 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="hero-grid">
              {/* Left */}
              <div className="animate-fade-in-up" style={{ maxWidth: "560px" }}>
                <div className="section-label" style={{ marginBottom: "1.5rem" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4361ee", display: "inline-block" }} />
                  AI Messaging Platform
                </div>

                <h1 className="hero-h1" style={{ fontSize: "clamp(2.4rem, 5vw, 3.75rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#0f172a", marginBottom: "1.5rem" }}>
                  Smarter customer{" "}
                  <span className="gradient-text">conversations</span>
                  {", "}without the busywork.
                </h1>

                <p className="hero-p" style={{ fontSize: "1.125rem", lineHeight: 1.75, color: "#64748b", marginBottom: "2.5rem", maxWidth: "480px" }}>
                  botti helps businesses respond faster through web chat, SMS, and WhatsApp with AI-powered messaging and seamless human handoff when needed.
                </p>

                <div className="hero-btns" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                  <a href="#try-it" className="btn-primary">Try It Out</a>
                  <a href="#how-it-works" className="btn-outline">How It Works</a>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                  {["SMS", "WhatsApp", "Web Chat"].map((ch) => (
                    <div key={ch} style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#4361ee", fontSize: "0.85rem", fontWeight: 600 }}>
                      <IconCheck /> {ch}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Chat Mockup */}
              <div style={{ display: "flex", justifyContent: "center" }} className="hero-visual">
                <ChatMockup />
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ─────────────────────────────────── */}
        <section style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
            <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem" }}>
              {stats.map((s) => (
                <div key={s.value} className="stat-card">
                  <div className="stat-number">{s.value}</div>
                  <div style={{ color: "#64748b", fontSize: "0.875rem", marginTop: "0.5rem", fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ──────────────────────────────── */}
        <section id="features" className="mobile-section" style={{ padding: "6rem 1.5rem", background: "#ffffff" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <div className="section-label" style={{ margin: "0 auto 1.25rem" }}>What We Do</div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                Everything your business needs to{" "}
                <span className="gradient-text">communicate better</span>
              </h2>
              <p style={{ color: "#64748b", fontSize: "1.0625rem", maxWidth: "520px", margin: "1rem auto 0" }}>
                One platform. Every channel. Instant answers with the human touch when it counts.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {features.map((f) => (
                <div key={f.title} className="glow-card" style={{ borderRadius: "1rem", padding: "2rem" }}>
                  <div className="feature-icon">{f.icon}</div>
                  <h3 style={{ color: "#0f172a", fontWeight: 700, fontSize: "1.0625rem", marginBottom: "0.75rem" }}>{f.title}</h3>
                  <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.75 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About ─────────────────────────────────── */}
        <section id="about" className="mobile-section" style={{ background: "#f8fafc", padding: "6rem 1.5rem", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="about-grid">
              {/* Left — Visual */}
              <div style={{ position: "relative" }} className="about-visual">
                <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "1.25rem", padding: "2rem", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                    <Image src="/logo.png" alt="botti" width={40} height={40} style={{ width: "40px", height: "40px", objectFit: "contain" }} />
                    <span style={{ color: "#0f172a", fontWeight: 700, fontSize: "1.1rem" }}>botti</span>
                  </div>
                  <p style={{ color: "#64748b", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                    botti is a customer messaging platform designed to help businesses communicate more efficiently. Our system uses AI to answer common questions, provide service information, improve response times, and route conversations to a human when needed.
                  </p>
                  <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {["AI answers common questions instantly", "Routes to human agents when needed", "Works across SMS, WhatsApp & web"].map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                        <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(67,97,238,0.1)", border: "1px solid rgba(67,97,238,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#4361ee", flexShrink: 0 }}>
                          <IconCheck />
                        </div>
                        <span style={{ color: "#334155", fontSize: "0.875rem" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Floating badge */}
                <div style={{ position: "absolute", bottom: "-1.25rem", right: "-1.25rem", background: "linear-gradient(135deg, #4361ee, #5a75f5)", borderRadius: "0.875rem", padding: "1rem 1.25rem", boxShadow: "0 8px 30px rgba(67,97,238,0.35)" }}>
                  <div style={{ color: "white", fontSize: "1.5rem", fontWeight: 800 }}>AI</div>
                  <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.75rem", fontWeight: 600 }}>Powered</div>
                </div>
              </div>

              {/* Right — Text */}
              <div>
                <div className="section-label" style={{ marginBottom: "1.25rem" }}>About botti</div>
                <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "1.25rem" }}>
                  Built for businesses that value <span className="gradient-text">real conversations</span>
                </h2>
                <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: "1rem", marginBottom: "2rem" }}>
                  We believe the best customer experiences happen when technology handles the routine so your team can focus on what matters — real relationships and real solutions.
                </p>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    Get in Touch <IconArrow />
                  </Link>
                  <a href="#try-it" className="btn-outline">Try It Out</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── How It Works ──────────────────────────── */}
        <section id="how-it-works" className="mobile-section" style={{ padding: "6rem 1.5rem", background: "#ffffff" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <div className="section-label" style={{ margin: "0 auto 1.25rem" }}>How It Works</div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                Simple, transparent, <span className="gradient-text">consent-first</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
              {steps.map((s, i) => (
                <div key={s.n} className="glow-card" style={{ borderRadius: "1.25rem", padding: "2.25rem" }}>
                  <div style={{ color: "#bfdbfe", fontSize: "3rem", fontWeight: 800, lineHeight: 1, marginBottom: "1.25rem" }}>
                    {s.n}
                  </div>
                  <h3 style={{ color: "#0f172a", fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.875rem" }}>{s.title}</h3>
                  <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.75 }}>{s.text}</p>
                  {i === 2 && (
                    <div style={{ marginTop: "1.25rem" }}>
                      <span style={{ padding: "0.25rem 0.75rem", borderRadius: "9999px", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", color: "#16a34a", fontSize: "0.8rem", fontWeight: 600 }}>
                        Reply STOP to opt out
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Privacy & Contact ─────────────────────── */}
        <section className="mobile-section" style={{ background: "#f8fafc", padding: "6rem 1.5rem", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              <div className="glow-card" style={{ borderRadius: "1.25rem", padding: "2.25rem" }}>
                <div className="section-label" style={{ marginBottom: "1.25rem" }}>Privacy & Trust</div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", lineHeight: 1.3, marginBottom: "1rem" }}>
                  Clear policies for customers and carriers
                </h2>
                <p style={{ color: "#64748b", lineHeight: 1.75, fontSize: "0.9375rem", marginBottom: "1.75rem" }}>
                  Our platform includes clear Terms & Conditions, Privacy Policy, contact details, and messaging disclosures to support transparent communication and compliance.
                </p>
                <Link href="/privacy" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#4361ee", fontWeight: 600, fontSize: "0.9rem" }}>
                  Read Privacy Policy <IconArrow />
                </Link>
              </div>

              <div className="glow-card" style={{ borderRadius: "1.25rem", padding: "2.25rem" }}>
                <div className="section-label" style={{ marginBottom: "1.25rem" }}>Contact & Support</div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", lineHeight: 1.3, marginBottom: "1rem" }}>
                  Reach us directly
                </h2>
                <p style={{ color: "#64748b", lineHeight: 1.75, fontSize: "0.9375rem", marginBottom: "1.25rem" }}>
                  Questions about messaging, consent, privacy, or support can be directed to our team. We respond during business hours.
                </p>
                <div style={{ marginBottom: "1.75rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[{ label: "Email", val: "contact@getbotti.com" }, { label: "Hours", val: "Mon–Fri, 9 AM–5 PM" }].map((row) => (
                    <div key={row.label} style={{ display: "flex", gap: "0.5rem" }}>
                      <span style={{ color: "#64748b", fontSize: "0.875rem", minWidth: "48px" }}>{row.label}:</span>
                      <span style={{ color: "#334155", fontSize: "0.875rem" }}>{row.val}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#4361ee", fontWeight: 600, fontSize: "0.9rem" }}>
                  Go to Contact Page <IconArrow />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Try It Out — SMS CTA ─────────────────── */}
        <section id="try-it" className="mobile-section" style={{ padding: "6rem 1.5rem", background: "#ffffff" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="try-it-grid">
              {/* Left — Text */}
              <div>
                <div className="section-label" style={{ marginBottom: "1.25rem" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                  Live Demo
                </div>
                <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "1.25rem" }}>
                  Try us out by{" "}
                  <span className="gradient-text">texting us</span>
                </h2>
                <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: "1.0625rem", marginBottom: "2rem", maxWidth: "440px" }}>
                  Send a text to the number on the right and experience botti firsthand. Ask a question, say hello, or just say "Hi" — our AI will respond in seconds.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    "Reply STOP at any time to opt out",
                    "Message & data rates may apply",
                    "Powered by botti AI",
                  ].map((note) => (
                    <div key={note} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#64748b", fontSize: "0.875rem" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4361ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {note}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Phone number card */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "1.5rem", padding: "2.5rem", boxShadow: "0 8px 40px rgba(67,97,238,0.08)", textAlign: "center", maxWidth: "320px", width: "100%" }}>
                  {/* Phone icon */}
                  <div style={{ width: "64px", height: "64px", borderRadius: "1rem", background: "linear-gradient(135deg, rgba(67,97,238,0.1), rgba(2,132,199,0.06))", border: "1px solid rgba(67,97,238,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", color: "#4361ee" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.4 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>

                  <div style={{ color: "#94a3b8", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.625rem" }}>
                    Text us at
                  </div>

                  <div className="phone-number" style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", letterSpacing: "0.02em", marginBottom: "0.5rem" }}>
                    (555) 867-5309
                  </div>

                  <div style={{ color: "#94a3b8", fontSize: "0.8rem", marginBottom: "1.75rem" }}>
                    SMS · Available Mon–Fri, 9 AM–5 PM
                  </div>

                  <a
                    href="sms:+15558675309"
                    className="btn-primary"
                    style={{ display: "block", textAlign: "center", fontSize: "0.9375rem" }}
                  >
                    Open in Messages
                  </a>

                  <p style={{ color: "#94a3b8", fontSize: "0.75rem", marginTop: "1rem", lineHeight: 1.6 }}>
                    By texting us you agree to our{" "}
                    <Link href="/terms" style={{ color: "#4361ee", textDecoration: "underline" }}>Terms</Link>
                    {" & "}
                    <Link href="/privacy" style={{ color: "#4361ee", textDecoration: "underline" }}>Privacy Policy</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ────────────────────────────── */}
        <section className="mobile-section" style={{ padding: "6rem 1.5rem", background: "#ffffff" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
            <div className="cta-inner" style={{ background: "linear-gradient(135deg, rgba(67,97,238,0.06) 0%, rgba(2,132,199,0.04) 100%)", border: "1px solid rgba(67,97,238,0.15)", borderRadius: "1.5rem", padding: "4rem 2rem", position: "relative", overflow: "hidden" }}>
              <div className="orb orb-blue" style={{ width: "300px", height: "300px", top: "-150px", right: "-100px", filter: "blur(60px)" }} />
              <div className="section-label" style={{ margin: "0 auto 1.5rem" }}>Get Started Today</div>
              <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "1.25rem", position: "relative" }}>
                Ready to transform your{" "}
                <span className="gradient-text">customer conversations?</span>
              </h2>
              <p style={{ color: "#64748b", fontSize: "1.0625rem", lineHeight: 1.75, maxWidth: "480px", margin: "0 auto 2.5rem" }}>
                See how botti works or reach out directly to learn how botti can work for your business.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary">Contact Us</Link>
                <a href="#how-it-works" className="btn-outline">How It Works</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────── */}
        <footer style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", padding: "3rem 1.5rem 2rem" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }} className="footer-grid">
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
                  <Image src="/logo.png" alt="botti" width={36} height={36} style={{ width: "36px", height: "auto", objectFit: "contain" }} />
                  <span style={{ color: "#0f172a", fontWeight: 700, fontSize: "1.1rem" }}>botti</span>
                </div>
                <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.75, maxWidth: "280px" }}>
                  AI-powered customer messaging for businesses — web chat, SMS, and WhatsApp with seamless human handoff.
                </p>
              </div>

              <div>
                <div style={{ color: "#0f172a", fontWeight: 600, fontSize: "0.875rem", marginBottom: "1rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>Legal</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  <Link href="/privacy" className="footer-link">Privacy Policy</Link>
                  <Link href="/terms" className="footer-link">Terms & Conditions</Link>
                </div>
              </div>

              <div>
                <div style={{ color: "#0f172a", fontWeight: 600, fontSize: "0.875rem", marginBottom: "1rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>Company</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  <a href="#about" className="footer-link">About</a>
                  <a href="#features" className="footer-link">Features</a>
                  <Link href="/contact" className="footer-link">Contact</Link>
                </div>
              </div>
            </div>

            <div className="footer-bottom" style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
              <div style={{ color: "#64748b", fontSize: "0.8rem" }}>© 2026 botti. All rights reserved.</div>
              <div style={{ color: "#64748b", fontSize: "0.8rem" }}>contact@getbotti.com · getbotti.com</div>
            </div>
          </div>
        </footer>
      </main>

      <style>{`
        /* ── Bounce animation for chat dots ── */
        @keyframes bounce {
          from { transform: translateY(0); }
          to   { transform: translateY(-5px); }
        }

        /* ── Tablet & below (≤ 900px) ── */
        @media (max-width: 900px) {
          .hero-grid  { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem   !important; }
          .footer-grid{ grid-template-columns: 1fr !important; gap: 2rem   !important; }
        }

        /* ── Mobile (≤ 640px) ── */
        @media (max-width: 640px) {
          /* Hide decorative side visuals to reduce clutter */
          .hero-visual  { display: none !important; }
          .about-visual { display: none !important; }

          /* Hero: reduce height so it doesn't eat the whole screen */
          .hero-section { min-height: unset !important; padding-top: 3rem !important; padding-bottom: 3rem !important; }

          /* Section vertical padding: 6rem → 3rem */
          .mobile-section { padding-top: 3rem !important; padding-bottom: 3rem !important; }

          /* Hero h1: tighten up */
          .hero-h1 { font-size: clamp(1.9rem, 8vw, 2.5rem) !important; margin-bottom: 1rem !important; }

          /* Hero subtitle */
          .hero-p  { font-size: 1rem !important; margin-bottom: 1.75rem !important; }

          /* Buttons: full-width stacked on tiny screens */
          .hero-btns { flex-direction: column !important; }
          .hero-btns a { width: 100% !important; text-align: center !important; }

          /* Stats: 2-column grid on small screens */
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .stat-card  { padding: 1.25rem 0.75rem !important; }
          .stat-number{ font-size: 2.25rem !important; }

          /* Feature / step cards: 1 column, less padding */
          .glow-card  { padding: 1.5rem !important; }

          /* Section headings */
          .section-h2 { font-size: clamp(1.5rem, 6vw, 2rem) !important; }

          /* Try-it section: stack vertically */
          .try-it-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }

          /* Phone number card: shrink font */
          .phone-number { font-size: 1.5rem !important; }

          /* CTA banner: reduce inner padding */
          .cta-inner { padding: 2.5rem 1.25rem !important; }

          /* Footer: tighter */
          .footer-bottom { flex-direction: column !important; gap: 0.5rem !important; text-align: center !important; }
        }
      `}</style>
    </>
  );
}
