import type { Metadata } from "next";
import IndustryPage, { type IndustryContent } from "../../components/IndustryPage";

export const metadata: Metadata = {
  title: "AI Customer Messaging for Med Spas & Healthcare",
  description:
    "botti handles appointment booking, intake questions, and patient inquiries for med spas, clinics, and healthcare practices. Save hours every week. Book a free demo.",
  keywords: [
    "AI for med spas",
    "healthcare chatbot",
    "med spa SMS bot",
    "clinic appointment booking",
    "patient messaging automation",
    "med spa customer service",
    "appointment reminder bot",
  ],
};

const content: IndustryContent = {
  badge: "For Med Spas & Healthcare",
  headline: "More patients booked,",
  headlineHighlight: "less phone tag",
  subheadline:
    "Your front desk is overwhelmed with the same questions every day. botti handles booking, FAQs, and intake — so your staff can focus on the patients in front of them.",
  painPoints: [
    {
      title: "No-shows and missed appointments",
      desc: "Patients forget. Without automatic reminders, your schedule has costly holes every week.",
    },
    {
      title: "Front desk constantly on the phone",
      desc: "Booking, rescheduling, and the same FAQs over and over. Your team has no time for the patients in the lobby.",
    },
    {
      title: "Leads lost after hours",
      desc: "Someone visits your site at 9 PM ready to book. By morning, they've booked at the competitor down the road.",
    },
  ],
  useCases: [
    {
      title: "Book appointments 24/7",
      desc: "Patients can schedule consults, treatments, and follow-ups any time. botti syncs with your calendar so nothing double-books.",
    },
    {
      title: "Automatic appointment reminders",
      desc: "Reduce no-shows with smart reminders sent at the right times. Patients can reschedule or confirm in one tap.",
    },
    {
      title: "Answer treatment & pricing questions",
      desc: "From botox to laser to facials — botti shares details, pricing ranges, and what to expect, drawn from your knowledge base.",
    },
    {
      title: "Pre-appointment intake",
      desc: "Collect intake info before the visit so patients walk in ready and your team isn't doing paperwork at check-in.",
    },
    {
      title: "Capture new patient leads",
      desc: "Convert website and social media visitors into booked consults — automatically, even at 2 AM.",
    },
    {
      title: "Live handoff to staff",
      desc: "Sensitive questions or specific medical concerns route directly to a human team member. botti knows when to step aside.",
    },
  ],
  exampleChat: [
    { from: "customer", text: "Hi! Do you do lip filler? How much is it?" },
    { from: "botti", text: "Yes! Lip filler starts at $650 for a half syringe. We offer free consultations to find what's right for you." },
    { from: "customer", text: "Can I book a consult this week?" },
    { from: "botti", text: "Of course! I have Thursday at 2 PM or Friday at 11 AM. Which works better?" },
    { from: "customer", text: "Friday 11" },
    { from: "botti", text: "Booked! I'll send you a confirmation and intake form. See you Friday ✨" },
  ],
  ctaHeading: "Book more patients, stress less",
  ctaSubtext:
    "Book a free demo and see how botti can fill your schedule while saving your front desk hours every day.",
};

export default function HealthcarePage() {
  return <IndustryPage content={content} />;
}
