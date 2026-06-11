import type { Metadata } from "next";
import IndustryPage, { type IndustryContent } from "../../components/IndustryPage";

export const metadata: Metadata = {
  title: "AI Messaging for Apartment Management Companies",
  description:
    "botti helps apartment communities and property management companies schedule more tours, answer resident questions 24/7, and save leasing associates hours every day. Book a free demo.",
  keywords: [
    "AI for apartment management",
    "apartment chatbot",
    "leasing automation",
    "apartment tour scheduling",
    "property management messaging",
    "resident communication automation",
    "leasing office SMS bot",
    "apartment AI assistant",
    "multifamily chatbot",
    "apartment lead capture",
  ],
};

const content: IndustryContent = {
  badge: "For Apartment Management Companies",
  headline: "Schedule more tours,",
  headlineHighlight: "even after the leasing office closes",
  subheadline:
    "Leasing associates can't be on the phone, in a tour, and answering texts at the same time. botti books tours, answers prospect questions, and supports current residents 24/7 — so your team can focus on closing leases.",
  painPoints: [
    {
      title: "Prospects ghost after hours",
      desc: "Someone tours an apartment site at 9 PM ready to schedule. By morning, they've booked at the community down the street.",
    },
    {
      title: "Leasing associates overwhelmed",
      desc: "Tour requests, resident questions, maintenance issues, prospect calls — all hitting the same inbox. Something always slips.",
    },
    {
      title: "No-shows and missed tours",
      desc: "Without smart reminders and easy rescheduling, your tour calendar is full of empty slots that should have been leases.",
    },
  ],
  useCases: [
    {
      title: "Tour scheduling on autopilot",
      desc: "Prospects text in and book a tour right from their phone. botti checks your availability, sends confirmations, and handles reschedules.",
    },
    {
      title: "Instant prospect answers",
      desc: "Availability, pricing, floor plans, amenities, pet policy, move-in specials — botti answers every prospect question 24/7.",
    },
    {
      title: "Smart tour reminders",
      desc: "Reduce no-shows with automatic reminders sent at the right times. Prospects can reschedule or confirm in one tap.",
    },
    {
      title: "Resident question hub",
      desc: "Current residents text in about pool hours, gym access, package deliveries, maintenance, and more — botti has the answers.",
    },
    {
      title: "Maintenance request logging",
      desc: "Residents text the issue and unit number. botti collects details and routes the ticket straight to your maintenance team.",
    },
    {
      title: "Live handoff to leasing",
      desc: "Hot leads, complaints, and special requests route directly to a leasing associate or property manager. No leads lost.",
    },
  ],
  exampleChat: [
    { from: "customer", text: "Hi! I saw the 2-bedroom on your site. Any available for July?" },
    { from: "botti", text: "Yes! We have a 2BR/2BA available July 1st at $2,450/mo. Want to tour it?" },
    { from: "customer", text: "Yes, this Saturday?" },
    { from: "botti", text: "I have Saturday at 11 AM or 2 PM. Which works better?" },
    { from: "customer", text: "11 AM please" },
    { from: "botti", text: "Booked! You'll get a reminder Friday. Address and parking instructions on the way 🏢" },
  ],
  ctaHeading: "Book more tours, sign more leases",
  ctaSubtext:
    "Book a free demo and see how botti can fill your tour calendar while saving your leasing team hours every day.",
};

export default function ApartmentsPage() {
  return <IndustryPage content={content} />;
}
