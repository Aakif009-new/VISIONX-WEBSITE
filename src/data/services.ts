import { Lightbulb, Code, GraduationCap, Globe, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Startup Incubation",
    description: "Guide student founders from idea validation to startup launch.",
    details: [
      "Idea validation & market research",
      "Business model development",
      "MVP prototyping assistance",
      "Funding & pitch preparation",
    ],
    icon: Lightbulb,
  },
  {
    title: "Hackathon Support",
    description: "Help students form teams and prepare for competitions.",
    details: [
      "Team formation & matching",
      "Technical skill workshops",
      "Project mentoring & review",
      "Competition strategy guidance",
    ],
    icon: Code,
  },
  {
    title: "Workshops & Bootcamps",
    description: "Conduct practical learning programs and skill-building sessions.",
    details: [
      "Hands-on coding bootcamps",
      "Design thinking workshops",
      "Entrepreneurship masterclasses",
      "Industry expert sessions",
    ],
    icon: GraduationCap,
  },
  {
    title: "Tech Services",
    description: "Build websites, applications, and digital solutions for startups.",
    details: [
      "Web & mobile app development",
      "UI/UX design services",
      "Cloud & infrastructure setup",
      "Technical consulting & support",
    ],
    icon: Globe,
  },
  {
    title: "Mentorship",
    description: "Connect students with entrepreneurs and industry experts.",
    details: [
      "One-on-one mentorship sessions",
      "Industry networking events",
      "Career guidance & planning",
      "Entrepreneur-in-residence program",
    ],
    icon: Users,
  },
];
