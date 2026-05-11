import type { Metadata } from "next";
import IndustryPage, { type IndustryContent } from "../../components/IndustryPage";

export const metadata: Metadata = {
  title: "AI Customer Messaging for HOAs & Community Associations",
  description:
    "botti handles resident questions, maintenance requests, and community announcements for HOAs and property managers. Save board members and staff hours every week. Book a free demo.",
  keywords: [
    "AI for HOAs",
    "HOA chatbot",
    "homeowners association messaging",
    "community association automation",
    "HOA SMS bot",
    "property management chatbot",
    "resident communication automation",
    "HOA customer service",
  ],
};

const content: IndustryContent = {
  badge: "For HOAs & Community Associations",
  headline: "Happier residents,",
  headlineHighlight: "less board burnout",
  subheadline:
    "From pool hours to gate codes to maintenance requests, residents have questions around the clock. botti handles the routine ones instantly — so your board and management team can focus on what really matters.",
  painPoints: [
    {
      title: "Board members buried in resident texts",
      desc: "Volunteer board members shouldn't be answering 'what time does the pool close?' at 9 PM. Same questions, every week, eating into personal time.",
    },
    {
      title: "Maintenance requests fall through the cracks",
      desc: "Emails get lost, voicemails go unchecked, and small issues become big ones. Residents get frustrated when nothing happens.",
    },
    {
      title: "Communication chaos at scale",
      desc: "With hundreds of residents asking the same things — amenity hours, parking rules, dues, events — manual replies don't scale.",
    },
  ],
  useCases: [
    {
      title: "Answer common resident questions 24/7",
      desc: "Pool hours, gate codes, trash schedules, parking rules, amenity bookings — botti knows it all and shares it instantly.",
    },
    {
      title: "Log maintenance requests",
      desc: "Residents report issues by text. botti collects the details, photos, and unit number, then routes it to your management team or vendor.",
    },
    {
      title: "Share community announcements",
      desc: "Send updates about meetings, closures, events, and emergencies — directly to residents' phones with high open rates.",
    },
    {
      title: "Handle amenity reservations",
      desc: "Book the clubhouse, party room, or BBQ area through a quick text conversation. botti checks availability and confirms instantly.",
    },
    {
      title: "Answer dues & violation questions",
      desc: "Pull resident-specific info from your management software so residents get accurate answers without calling the office.",
    },
    {
      title: "Live handoff to management",
      desc: "Sensitive issues, disputes, or anything botti can't answer routes straight to your property manager or board contact.",
    },
  ],
  exampleChat: [
    { from: "customer", text: "Hey, what time does the pool close tonight?" },
    { from: "botti", text: "The pool closes at 10 PM tonight! Last call for the gate at 9:45." },
    { from: "customer", text: "Also my garage door opener stopped working" },
    { from: "botti", text: "Got it — I'll log a maintenance request. Can I get your unit number?" },
    { from: "customer", text: "Unit 214" },
    { from: "botti", text: "Thanks! Ticket #3892 created. Maintenance will reach out within 1 business day 🔧" },
  ],
  ctaHeading: "Give your residents 24/7 answers",
  ctaSubtext:
    "Book a free demo and see how botti can save your board and management team hours every week while making residents happier.",
};

export default function HoasPage() {
  return <IndustryPage content={content} />;
}
