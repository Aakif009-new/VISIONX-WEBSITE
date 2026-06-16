export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string;
  isHiring?: boolean;
  council?: boolean;
}

export const foundingCouncil: TeamMember[] = [
  {
    name: "V MD TAUSEEF SALEEM",
    role: "Founder & President",
    description: "Visionary leader driving innovation and entrepreneurship among students.",
    image: "/images/team/Founder.jpeg",
    council: true,
  },
  {
    name: "SHALU PRIYADHARSHINI",
    role: "Co-Founder & Vice President",
    description: "Building opportunities and empowering future leaders.",
    image: "/images/team/co-founder.jpeg",
    council: true,
  },
  {
    name: "Mohammed Mafaaz C",
    role: "Chief Operating Officer",
    description: "Leading operations, execution, and organizational growth.",
    council: true,
  },
];

export const teamLeads: TeamMember[] = [
  {
    name: "Mohammed Abuzar J",
    role: "Tech Team Lead",
    description: "Leading technology and product development initiatives.",
    image: "/images/team/tech-team-lead.jpg",
  },
  {
    name: "Vinothini P",
    role: "Media Team Lead",
    description: "Managing branding, content creation, and digital presence.",
  },
  {
    name: "Mohammed Saad V",
    role: "Startup Team Lead",
    description: "Supporting founders and startup incubation programs.",
    image: "/images/team/startup-team-lead.png",
  },
  {
    name: "Hiring In Progress",
    role: "Team Lead Position",
    description: "",
    isHiring: true,
  },
  {
    name: "Hiring In Progress",
    role: "Team Lead Position",
    description: "",
    isHiring: true,
  },
  {
    name: "Hiring In Progress",
    role: "Team Lead Position",
    description: "",
    isHiring: true,
  },
];
