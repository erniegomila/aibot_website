import type { Metadata } from "next";
import Header from "../components/Header";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "botti's AI customer messaging works for every industry — restaurants, healthcare, home services, and more. See how businesses like yours save hours every day.",
  keywords: [
    "AI customer messaging industries",
    "industry chatbots",
    "business SMS automation",
    "AI for small business",
  ],
};

const industries = [
  {
    href: "/industries/restaurants",
    title: "Restaurants & Food Service",
    desc: "Take reservations, answer menu questions, and handle takeout 24/7. Never miss a guest, even after hours.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11h18M5 11V6a2 2 0 012-2h10a2 2 0 012 2v5M5 11v8a2 2 0 002 2h10a2 2 0 002-2v-8" />
      </svg>
    ),
  },
  {
    href: "/industries/healthcare",
    title: "Med Spas & Healthcare",
    desc: "Book appointments, send reminders, and handle patient intake. Reduce no-shows and free up your front desk.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
  },
  {
    href: "/industries/home-services",
    title: "Home Services",
    desc: "Capture quote requests, book service calls, and dispatch updates. For plumbers, HVAC, electricians, and more.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    href: "/industries/hoas",
    title: "HOAs & Community Associations",
    desc: "Answer resident questions 24/7, log maintenance requests, and send announcements. Save your board and management team hours.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

export default function IndustriesPage() {
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
            Industries
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
            Built for{" "}
            <span style={{ background: "linear-gradient(135deg, #ffffff, #c7d2fe)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              every kind of business
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.9)",
              maxWidth: "640px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Whatever you do, botti adapts to your workflow, your tone, and your customers. See how businesses like yours are using botti.
          </p>
        </section>

        {/* Industries grid */}
        <section style={{ padding: "5rem 1.5rem", background: "#ffffff" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.75rem" }}>
              {industries.map((ind) => (
                <Link
                  key={ind.href}
                  href={ind.href}
                  className="glow-card"
                  style={{
                    borderRadius: "1.25rem",
                    padding: "2rem",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "0.875rem",
                      background: "linear-gradient(135deg, rgba(67,97,238,0.1), rgba(2,132,199,0.06))",
                      border: "1px solid rgba(67,97,238,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#4361ee",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {ind.icon}
                  </div>
                  <h2 style={{ color: "#0f172a", fontWeight: 700, fontSize: "1.25rem", marginBottom: "0.75rem" }}>{ind.title}</h2>
                  <p style={{ color: "#64748b", fontSize: "0.9375rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>{ind.desc}</p>
                  <span style={{ color: "#4361ee", fontWeight: 600, fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                    See how it works →
                  </span>
                </Link>
              ))}
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
              Don&rsquo;t see your industry?
            </h2>
            <p style={{ color: "#64748b", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
              botti works for any business that talks to customers. Book a free demo and we&rsquo;ll show you how it fits your workflow.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/demo" className="btn-primary">Book a Free Demo</Link>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
