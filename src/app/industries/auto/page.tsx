import type { Metadata } from "next";
import IndustryPage, { type IndustryContent } from "../../components/IndustryPage";

export const metadata: Metadata = {
  title: "AI Customer Messaging for Auto Repair Shops & Dealerships",
  description:
    "botti books service appointments, sends repair updates, answers parts questions, and captures sales leads 24/7 for auto shops and dealerships. Free demo.",
  keywords: [
    "AI for auto repair",
    "auto shop chatbot",
    "car dealership SMS bot",
    "service appointment booking",
    "automotive lead capture",
    "dealership messaging automation",
    "auto repair customer service",
    "car service text updates",
  ],
};

const content: IndustryContent = {
  badge: "For Auto Repair & Dealerships",
  headline: "More cars booked,",
  headlineHighlight: "fewer phones ringing",
  subheadline:
    "Whether it's a service appointment, a parts question, or a test drive request, botti handles it instantly — so your service writers and sales team can focus on the customers in the bay.",
  painPoints: [
    {
      title: "Service writers swamped with calls",
      desc: "Phone rings non-stop with status updates, appointment requests, and parts questions. Your team can't focus on the work in front of them.",
    },
    {
      title: "Customers want updates, you don't have time",
      desc: "'Is my car ready yet?' 'How much longer?' — answering every check-in by phone is brutal during a busy week.",
    },
    {
      title: "Sales leads vanish overnight",
      desc: "Someone browses inventory at 10 PM and DMs you. By morning, they've already test-driven at the dealer down the street.",
    },
  ],
  useCases: [
    {
      title: "Book service appointments 24/7",
      desc: "Customers schedule oil changes, brake jobs, tire rotations, and more — anytime. botti checks your bay availability and confirms.",
    },
    {
      title: "Send repair status updates",
      desc: "Automated SMS updates when the diagnosis is done, parts arrive, or the car is ready for pickup. Customers love the transparency.",
    },
    {
      title: "Answer parts & service questions",
      desc: "Hours, pricing ranges, warranty info, what services you offer — botti pulls answers from your knowledge base instantly.",
    },
    {
      title: "Capture test drive & inventory leads",
      desc: "Prospects asking about specific cars get instant responses with availability, pricing, and a booking link for a test drive.",
    },
    {
      title: "Handle financing inquiries",
      desc: "Pre-qualify leads with basic questions, share financing options, and route serious buyers to your finance team.",
    },
    {
      title: "Live handoff to your team",
      desc: "Complex repairs, escalations, or final pricing route directly to a service advisor or salesperson — no leads lost in the shuffle.",
    },
  ],
  exampleChat: [
    { from: "customer", text: "Hey, my brakes are squealing. Can you check them this week?" },
    { from: "botti", text: "Definitely — that usually means pads. We can take a look tomorrow at 8 AM or Thursday at 1 PM. Which works?" },
    { from: "customer", text: "Tomorrow 8 AM" },
    { from: "botti", text: "Booked! Inspection is free, and we'll text you a quote before doing any work. Can I get the year, make, and model?" },
    { from: "customer", text: "2019 Honda Civic" },
    { from: "botti", text: "Got it — 2019 Civic, tomorrow at 8 AM. See you then 🔧" },
  ],
  ctaHeading: "Book more service, sell more cars",
  ctaSubtext:
    "Book a free demo and see how botti can fill your service bays, capture more sales leads, and keep customers happier.",
};

export default function AutoPage() {
  return <IndustryPage content={content} />;
}
