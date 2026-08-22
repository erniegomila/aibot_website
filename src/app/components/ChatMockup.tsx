"use client";

import { useEffect, useState } from "react";

type Message = { from: "customer" | "botti"; text: string };

const conversation: Message[] = [
  { from: "customer", text: "Hi! Do you have anything available this weekend?" },
  { from: "botti", text: "We do! You can book here: book.getbotti.com" },
  { from: "customer", text: "Just booked, thanks!" },
  { from: "botti", text: "Great — you're all set! See you soon 🙌" },
];

const CUSTOMER_DELAY = 1200;
const TYPING_DELAY = 800;
const TYPING_DURATION = 1600;
const RESTART_DELAY = 3500;

export default function ChatMockup() {
  const [step, setStep] = useState(0);
  const [typingFor, setTypingFor] = useState<"botti" | null>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    function schedule() {
      let cumulative = 0;

      conversation.forEach((msg, i) => {
        if (msg.from === "customer") {
          cumulative += CUSTOMER_DELAY;
          timers.push(
            setTimeout(() => {
              setStep(i + 1);
              setTypingFor(null);
            }, cumulative)
          );
        } else {
          cumulative += TYPING_DELAY;
          timers.push(
            setTimeout(() => {
              setTypingFor("botti");
            }, cumulative)
          );
          cumulative += TYPING_DURATION;
          timers.push(
            setTimeout(() => {
              setTypingFor(null);
              setStep(i + 1);
            }, cumulative)
          );
        }
      });

      cumulative += RESTART_DELAY;
      timers.push(
        setTimeout(() => {
          setStep(0);
          setTypingFor(null);
          schedule();
        }, cumulative)
      );
    }

    schedule();

    return () => timers.forEach(clearTimeout);
  }, []);

  const visible = conversation.slice(0, step);

  return (
    <>
      <style jsx>{`
        @keyframes msgIn {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.94);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes typingBounce {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-3px);
            opacity: 1;
          }
        }
        .msg-anim {
          animation: msgIn 0.32s cubic-bezier(0.2, 0.9, 0.3, 1) both;
        }
        .typing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #8e8e93;
          display: inline-block;
        }
        .typing-dot:nth-child(1) {
          animation: typingBounce 1.2s infinite;
        }
        .typing-dot:nth-child(2) {
          animation: typingBounce 1.2s 0.15s infinite;
        }
        .typing-dot:nth-child(3) {
          animation: typingBounce 1.2s 0.3s infinite;
        }
      `}</style>
      <div
        className="animate-float"
        style={{
          background: "#000000",
          borderRadius: "2.5rem",
          padding: "0.75rem",
          maxWidth: "340px",
          width: "100%",
          boxShadow: "0 24px 80px rgba(0,0,0,0.25), 0 0 40px rgba(0,0,0,0.1)",
          position: "relative",
        }}
      >
        {/* iPhone inner screen */}
        <div style={{ background: "#ffffff", borderRadius: "2rem", overflow: "hidden" }}>
          {/* Notch / status bar */}
          <div style={{ background: "#f2f2f7", padding: "0.5rem 1.25rem 0.4rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#1c1c1e" }}>9:41</span>
            <div style={{ width: "80px", height: "24px", background: "#1c1c1e", borderRadius: "12px" }} />
            <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#1c1c1e"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z" /></svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#1c1c1e"><rect x="17" y="4" width="4" height="16" rx="1" /><rect x="11" y="8" width="4" height="12" rx="1" /><rect x="5" y="12" width="4" height="8" rx="1" /></svg>
            </div>
          </div>

          {/* iMessage header */}
          <div style={{ background: "#f2f2f7", padding: "0.25rem 1rem 0.6rem", textAlign: "center", borderBottom: "1px solid #d1d1d6" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg, #4361ee, #0284c7)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.25rem" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>B</span>
            </div>
            <div style={{ color: "#1c1c1e", fontWeight: 600, fontSize: "0.8rem" }}>botti</div>
          </div>

          {/* Messages area */}
          <div
            style={{
              padding: "1rem 0.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              height: "320px",
              background: "#ffffff",
              overflow: "hidden",
            }}
          >
            {/* Timestamp */}
            <div style={{ textAlign: "center", color: "#8e8e93", fontSize: "0.65rem", marginBottom: "0.25rem" }}>Today 2:34 PM</div>

            {visible.map((msg, i) =>
              msg.from === "customer" ? (
                <div key={i} className="msg-anim" style={{ display: "flex", justifyContent: "flex-end", transformOrigin: "right bottom" }}>
                  <div style={{ background: "#007AFF", borderRadius: "1.1rem 1.1rem 0.3rem 1.1rem", padding: "0.55rem 0.85rem", fontSize: "0.85rem", color: "#ffffff", maxWidth: "75%", lineHeight: 1.4 }}>
                    {msg.text}
                  </div>
                </div>
              ) : (
                <div key={i} className="msg-anim" style={{ display: "flex", justifyContent: "flex-start", transformOrigin: "left bottom" }}>
                  <div style={{ background: "#e9e9eb", borderRadius: "1.1rem 1.1rem 1.1rem 0.3rem", padding: "0.55rem 0.85rem", fontSize: "0.85rem", color: "#1c1c1e", maxWidth: "75%", lineHeight: 1.4 }}>
                    {msg.text}
                  </div>
                </div>
              )
            )}

            {/* Typing indicator */}
            {typingFor === "botti" && (
              <div className="msg-anim" style={{ display: "flex", justifyContent: "flex-start", transformOrigin: "left bottom" }}>
                <div style={{ background: "#e9e9eb", borderRadius: "1.1rem 1.1rem 1.1rem 0.3rem", padding: "0.7rem 0.95rem", display: "flex", gap: "4px", alignItems: "center" }}>
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}

          </div>

          {/* iMessage input bar */}
          <div style={{ padding: "0.4rem 0.6rem 0.6rem", borderTop: "1px solid #e5e5ea", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8e8e93" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
            <div style={{ flex: 1, background: "#f2f2f7", borderRadius: "1.25rem", padding: "0.45rem 0.85rem", fontSize: "0.8rem", color: "#8e8e93", border: "1px solid #d1d1d6" }}>iMessage</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#007AFF"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
          </div>
        </div>
      </div>
    </>
  );
}
