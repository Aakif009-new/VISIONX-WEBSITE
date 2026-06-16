export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  banner?: string;
  isPast: boolean;
  registrationLink?: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "VisionX Startup Bootcamp 2026",
    date: "July 15-20, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "VisionX Innovation Hub",
    description:
      "A week-long intensive bootcamp for aspiring student founders to build their startups from scratch.",
    isPast: false,
    registrationLink: "#",
  },
  {
    id: "2",
    title: "Hackathon Prep Workshop",
    date: "August 5, 2026",
    time: "2:00 PM - 6:00 PM",
    location: "Virtual Event",
    description:
      "Learn how to prepare for hackathons, form teams, and build winning projects.",
    isPast: false,
    registrationLink: "#",
  },
  {
    id: "3",
    title: "Founder Stories: Fireside Chat",
    date: "September 12, 2026",
    time: "4:00 PM - 6:00 PM",
    location: "College Auditorium",
    description:
      "An inspiring session with successful student founders sharing their journey and insights.",
    isPast: false,
    registrationLink: "#",
  },
  {
    id: "4",
    title: "VisionX Annual Summit 2025",
    date: "December 20, 2025",
    time: "10:00 AM - 6:00 PM",
    location: "City Convention Center",
    description:
      "Our flagship event celebrating innovation, entrepreneurship, and community achievements.",
    isPast: true,
  },
  {
    id: "5",
    title: "Innovation Hackathon 2025",
    date: "October 10-12, 2025",
    time: "9:00 AM - 9:00 PM",
    location: "Tech Campus",
    description:
      "A 48-hour hackathon where students built innovative solutions for real-world problems.",
    isPast: true,
  },
  {
    id: "6",
    title: "Entrepreneurship 101 Workshop",
    date: "September 5, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Seminar Hall",
    description:
      "An introductory workshop on entrepreneurship fundamentals for budding student founders.",
    isPast: true,
  },
];
