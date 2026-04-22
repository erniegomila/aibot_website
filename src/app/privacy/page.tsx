import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Overview",
    body: "botti (getbotti.com) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard information when you communicate with us through our website, SMS, WhatsApp, web chat, or other messaging channels. By using our services or providing your contact information, you agree to the practices described in this policy.",
  },
  {
    title: "Information We Collect",
    body: "We may collect the following information when you contact us, submit a form, or use our messaging services: your name, phone number, email address, the content of messages you send or receive, device and browser information, and any other information you voluntarily provide. We collect this information only when you initiate contact or explicitly opt in to receive communications from us.",
  },
  {
    title: "How We Use Your Information",
    body: "We use the information we collect solely to: respond to your inquiries and support requests, deliver service-related updates and follow-ups you have requested, improve the quality and reliability of our platform, and maintain the security and integrity of our systems. We do not use your information for any purpose beyond providing the services you have consented to receive.",
  },
  {
    title: "SMS Communication & Consent",
    body: "By providing your mobile phone number through our website forms, contact forms, application forms, or any other communication channel, you expressly consent to receive text messages (SMS/MMS) from botti related to: fraud protection alerts, service updates, appointment reminders, account notifications, customer service communications, and marketing or promotional offers (if applicable). Message frequency may vary depending on your interaction with our services. Message and data rates may apply.",
  },
  {
    title: "SMS and Messaging Data — No Third-Party Sharing",
    body: "We take your messaging privacy seriously. Mobile opt-in data and consent, including your phone number and message history, will not be shared, sold, rented, or transferred to any third parties or affiliates for marketing, promotional, or any other purposes. This data is used exclusively to deliver the messaging services you have requested and to provide customer support. All categories of data we collect are used only for the stated purposes above.",
  },
  {
    title: "Opt-In Process",
    body: "Customers opt in to receive SMS messages by: (1) submitting their phone number through our website contact forms, (2) completing signup or waitlist forms, (3) requesting information via online forms, or (4) verbally consenting during phone conversations. By submitting your phone number, you confirm that you are the authorized user of the mobile number provided and consent to receive communications as described above. Consent is never a condition of purchase or service.",
  },
  {
    title: "Data Retention",
    body: "We retain your personal information only for as long as necessary to provide our services or as required by applicable law. When information is no longer needed, we securely delete or anonymize it. You may request deletion of your data at any time by contacting us at botti@getbotti.com.",
  },
  {
    title: "Data Security",
    body: "We implement reasonable and appropriate administrative, technical, and organizational security measures to protect your personal information from unauthorized access, loss, misuse, alteration, or disclosure. While no method of transmission or storage is 100% secure, we are committed to using industry-standard practices to protect your data.",
  },
  {
    title: "Opt-Out Instructions",
    body: "You may opt out of receiving SMS messages at any time by: (1) replying STOP to any message, (2) contacting us directly at botti@getbotti.com, or (3) calling us at (877) 565-4888. After you send STOP, you will receive a confirmation message and will no longer receive SMS communications unless you re-subscribe. For assistance, reply HELP to any message.",
  },
  {
    title: "Your Rights and Choices",
    body: "You have the right to opt out of SMS communications at any time as described above. You may also request access to, correction of, or deletion of your personal data by contacting us at botti@getbotti.com or calling (877) 565-4888.",
  },
  {
    title: "Cookies and Website Data",
    body: "Our website may use cookies and similar technologies to improve your browsing experience and understand how visitors use our site. You can control cookie settings through your browser. We do not use cookies to track you across third-party websites for advertising purposes.",
  },
  {
    title: "Children's Privacy",
    body: "Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately at botti@getbotti.com.",
  },
  {
    title: "Policy Updates",
    body: "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. Any updates will be posted on this page with a revised effective date. We encourage you to review this policy periodically. Continued use of our services after changes are posted constitutes acceptance of the updated policy.",
  },
];

export default function PrivacyPage() {
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

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "clamp(2rem, 5vw, 4rem) 1.25rem clamp(3rem, 8vw, 6rem)" }}>
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ display: "inline-flex", padding: "0.35rem 1rem", borderRadius: "9999px", border: "1px solid rgba(67,97,238,0.25)", background: "rgba(67,97,238,0.06)", color: "#4361ee", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Privacy Policy
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "0.75rem" }}>
            botti{" "}
            <span style={{ background: "linear-gradient(135deg, #4361ee, #0284c7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Privacy Policy
            </span>
          </h1>
          <p style={{ color: "#64748b", fontSize: "0.875rem" }}>Effective date: March 27, 2026 &nbsp;·&nbsp; Business: botti &nbsp;·&nbsp; Website: getbotti.com &nbsp;·&nbsp; Contact: botti@getbotti.com</p>
        </div>

        {/* A2P compliance highlight */}
        <div style={{ background: "linear-gradient(135deg, rgba(67,97,238,0.05), rgba(2,132,199,0.03))", border: "1px solid rgba(67,97,238,0.15)", borderRadius: "1rem", padding: "1.25rem 1.5rem", marginBottom: "2rem", display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4361ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <p style={{ color: "#334155", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
            <strong>Important:</strong> Mobile opt-in data and consent will <strong>not</strong> be shared, sold, or transferred to any third parties or affiliates for marketing or promotional purposes. All SMS data is used solely to deliver the services you requested.
          </p>
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
          <Link href="/terms" style={{ color: "#4361ee", fontSize: "0.875rem", fontWeight: 600 }}>Terms & Conditions →</Link>
          <Link href="/contact" style={{ color: "#4361ee", fontSize: "0.875rem", fontWeight: 600 }}>Contact Us →</Link>
        </div>
      </div>
    </main>
  );
}
