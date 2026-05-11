import type { Metadata } from "next";
import IndustryPage, { type IndustryContent } from "../../components/IndustryPage";

export const metadata: Metadata = {
  title: "AI Customer Messaging for Restaurants",
  description:
    "botti handles reservation requests, menu questions, hours, and takeout inquiries 24/7 — so your restaurant never misses a guest. Book a free demo.",
  keywords: [
    "AI for restaurants",
    "restaurant SMS bot",
    "restaurant chatbot",
    "automated reservation booking",
    "restaurant customer service automation",
    "restaurant WhatsApp bot",
  ],
};

const content: IndustryContent = {
  badge: "For Restaurants & Food Service",
  headline: "Never miss a guest,",
  headlineHighlight: "even after hours",
  subheadline:
    "Customers ask the same questions every day — your hours, your menu, takeout, reservations. botti answers them instantly so your team can focus on the dining room.",
  painPoints: [
    {
      title: "Phones ringing during rush",
      desc: "Your team can't pick up the phone every time someone asks about wait times or hours while they're running the floor.",
    },
    {
      title: "Missed reservations after hours",
      desc: "Customers want to book at 11 PM. Without an answer, they call the restaurant down the street instead.",
    },
    {
      title: "Repetitive menu questions",
      desc: "'Do you have gluten-free options?' 'Are you dog-friendly?' Same questions, every day, eating up staff time.",
    },
  ],
  useCases: [
    {
      title: "Take reservations 24/7",
      desc: "Guests can book a table any time of day. botti checks availability, confirms the booking, and sends reminders.",
    },
    {
      title: "Answer menu & hours questions",
      desc: "Dietary restrictions, ingredient questions, opening hours, holiday closures — botti has the answer instantly.",
    },
    {
      title: "Handle takeout & delivery",
      desc: "Tell customers exactly how to order, share menu links, and route delivery questions to the right system.",
    },
    {
      title: "Send wait time updates",
      desc: "Let waitlist guests know when their table is ready — automatically, by text.",
    },
    {
      title: "Capture event leads",
      desc: "Private events, large parties, and catering inquiries get logged with all the details, ready for your team to follow up.",
    },
    {
      title: "Live handoff when needed",
      desc: "Special requests or complaints? botti instantly escalates to a real team member so nothing falls through the cracks.",
    },
  ],
  exampleChat: [
    { from: "customer", text: "Hey are you open for dinner tonight?" },
    { from: "botti", text: "Yes! We're open until 10 PM. Would you like to book a table?" },
    { from: "customer", text: "Yes, 4 people at 7pm" },
    { from: "botti", text: "Got it — table for 4 at 7 PM tonight. Can I get a name and phone number?" },
    { from: "customer", text: "Ernesto, 555-1234" },
    { from: "botti", text: "All set, Ernesto! You're confirmed for 7 PM. See you tonight 🍽️" },
  ],
  ctaHeading: "Ready to fill more tables?",
  ctaSubtext:
    "Book a free demo and see how botti can save your team hours every shift while capturing more reservations.",
};

export default function RestaurantsPage() {
  return <IndustryPage content={content} />;
}
