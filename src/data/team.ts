export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string;
  isHiring?: boolean;
  council?: boolean;
  objectPosition?: string;
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
];

export const ceo: TeamMember = {
  name: "Mohammed Mafaaz C",
  role: "Chief Executive Officer",
  description: "Leading operations, execution, and organizational growth.",
  image: "/images/team/CEO.jpeg",
  council: true,
};

export const teamLeads: TeamMember[] = [
  {
    name: "Mohammed Abuzar J",
    role: "Tech Team Lead",
    description: "Leading technology and product development initiatives.",
    image: "/images/team/tech-team-lead.jpg",
  },
  {
    name: "VK Mohammed Hussain",
    role: "Media Team Lead",
    description: "Managing branding, content creation, and digital presence.",
  },
  {
    name: "Mohammed Saad V",
    role: "Startup Team Lead",
    description: "Supporting founders and startup incubation programs.",
    image: "/images/team/startup-team-lead.png",
    objectPosition: "object-top",
  },
  {
    name: "RS Sajid Ahmed",
    role: "Hackathons & Competitions Team Lead",
    description: "Leading hackathon and competition initiatives for student engagement.",
    image: "/images/team/hackathonscompetitions.jpeg",
  },
  {
    name: "Mohammed Ehsaan",
    role: "Assistant Team Lead - Hackathons & Competitions",
    description: "Supporting hackathon operations and competition coordination.",
    image: "/images/team/Assistantteamlead.jpeg",
    objectPosition: "object-top",
  },
];
