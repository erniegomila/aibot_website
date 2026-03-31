import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Overview",
    body: "These Terms & Conditions govern your use of botti's messaging services, including SMS, WhatsApp, web chat, and any other communication channels operated by botti (getbotti.com). By providing your contact information and opting in to receive messages, you agree to these terms. These terms are intended to comply with applicable messaging regulations including TCPA, CTIA guidelines, and carrier requirements.",
  },
  {
    title: "Program Description",
    body: "botti provides AI-assisted customer messaging services for businesses. Messages sent through botti may include: responses to customer inquiries and support requests, service-related updates and follow-ups, appointment or order confirmations you have requested, and informational messages directly related to services you have engaged with. Messages are transactional and conversational in nature — not promotional mass marketing.",
  },
  {
    title: "How to Opt In",
    body: "You opt in to receive SMS messages from botti by: (1) submitting a web form that includes a clear consent disclosure, (2) sending a message to our number first, or (3) verbally or otherwise providing explicit consent. Consent is never a condition of purchase or use of any service. By opting in, you confirm you are the authorized user of the phone number provided.",
  },
  {
    title: "Message Frequency",
    body: "Message frequency varies based on your interactions and requests. You may receive messages in direct response to your inquiries, for follow-ups related to services you have requested, or for informational updates you have opted in to receive. We will not send unsolicited bulk messages.",
  },
  {
    title: "Message and Data Rates",
    body: "Message and data rates may apply. Rates are determined by your mobile carrier and your individual plan. botti is not responsible for any charges incurred by your carrier related to sending or receiving messages. Contact your wireless provider for details on your plan.",
  },
  {
    title: "How to Opt Out",
    body: "You may opt out of receiving SMS messages at any time by replying STOP to any message from us. After sending STOP, you will receive one final confirmation message and no further messages will be sent to your number. To re-subscribe, you may opt in again at any time through our website or by messaging us directly.",
  },
  {
    title: "How to Get Help",
    body: "For assistance with our messaging service, reply HELP to any message from us, or contact our support team directly at contact@getbotti.com. Support is available Monday through Friday, 9 AM to 5 PM.",
  },
  {
    title: "Privacy and Data Use",
    body: "Your privacy is important to us. Mobile opt-in data and consent will not be shared, sold, or transferred to third parties or affiliates for marketing or promotional purposes. Your information is used solely to deliver the services described in these Terms. Please review our full Privacy Policy at getbotti.com/privacy for complete details on how we handle your data.",
  },
  {
    title: "Supported Carriers",
    body: "Our SMS messaging service is available on all major US carriers including AT&T, T-Mobile, Verizon, and others. Carrier support may vary. We are not liable for delayed or undelivered messages due to carrier outages or restrictions.",
  },
  {
    title: "Acceptable Use",
    body: "By using our services, you agree not to misuse the messaging platform, submit false or unlawful content, impersonate another person, attempt unauthorized access to our systems, or otherwise interfere with the normal operation of the platform. We reserve the right to terminate service to any user who violates these terms.",
  },
  {
    title: "Service Availability",
    body: "We strive to keep our messaging services available, accurate, and reliable. However, we do not guarantee uninterrupted or error-free operation at all times. Service may be affected by carrier delays, system maintenance, or factors outside our control.",
  },
  {
    title: "Changes to These Terms",
    body: "We may update these Terms & Conditions from time to time to reflect changes in our services or applicable regulations. Any updates will be posted at this URL with a revised effective date. Continued use of our services after changes are posted constitutes acceptance of the updated terms.",
  },
];

export default function TermsPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", color: "#0f172a" }}>
      <header style={{ borderBottom: "1px solid #e2e8f0", background: "rgba(255,255,255,0.95)", backdropFilter: "blur(16px)", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image src="/logo.png" alt="botti logo" width={40} height={40} style={{ width: "auto", height: "44px", objectFit: "contain" }} />
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
          <p style={{ color: "#64748b", fontSize: "0.875rem" }}>Effective date: March 27, 2026 &nbsp;·&nbsp; Business: botti &nbsp;·&nbsp; Website: getbotti.com &nbsp;·&nbsp; Contact: contact@getbotti.com</p>
        </div>

        {/* Quick-reference SMS disclosure */}
        <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "1rem", padding: "1.5rem 2rem", marginBottom: "2rem", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <h2 style={{ color: "#0f172a", fontWeight: 700, fontSize: "0.9375rem", marginBottom: "0.875rem" }}>SMS Quick Reference</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.75rem" }}>
            {[
              { label: "To stop messages", value: "Reply STOP" },
              { label: "For help", value: "Reply HELP" },
              { label: "Rates", value: "Msg & data rates may apply" },
              { label: "Frequency", value: "Varies by interaction" },
            ].map((item) => (
              <div key={item.label} style={{ background: "#f8fafc", borderRadius: "0.625rem", padding: "0.75rem 1rem", border: "1px solid #e2e8f0" }}>
                <div style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.25rem" }}>{item.label}</div>
                <div style={{ color: "#0f172a", fontWeight: 600, fontSize: "0.875rem" }}>{item.value}</div>
              </div>
            ))}
          </div>
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
