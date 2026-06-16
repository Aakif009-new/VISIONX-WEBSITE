export interface Workshop {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  fullDescription: string;
  banner?: string;
  capacity: number;
  registeredCount: number;
  isRegistrationOpen: boolean;
  category: string;
}

export interface Registration {
  id: string;
  workshopId: string;
  fullName: string;
  email: string;
  mobile: string;
  college: string;
  department: string;
  year: string;
  workshopName: string;
  notes?: string;
  registeredAt: string;
}

export const workshops: Workshop[] = [
  {
    id: "w1",
    title: "Full-Stack Web Development Bootcamp",
    date: "July 10-14, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "VisionX Innovation Hub",
    description: "A 5-day intensive bootcamp covering modern web development from frontend to backend.",
    fullDescription:
      "Join us for an intensive 5-day bootcamp where you'll learn modern web development from the ground up. Covering React, Next.js, Node.js, databases, and deployment. By the end, you'll have built and deployed a full-stack application. Perfect for beginners and intermediate developers looking to level up their skills.",
    capacity: 30,
    registeredCount: 18,
    isRegistrationOpen: true,
    category: "Bootcamp",
  },
  {
    id: "w2",
    title: "UI/UX Design Workshop",
    date: "July 20, 2026",
    time: "2:00 PM - 6:00 PM",
    location: "Virtual (Zoom)",
    description: "Learn the fundamentals of user interface and experience design.",
    fullDescription:
      "This hands-on workshop covers the fundamentals of UI/UX design including user research, wireframing, prototyping, and visual design principles. You'll work on real-world projects and learn industry-standard tools like Figma. No prior design experience required.",
    capacity: 25,
    registeredCount: 22,
    isRegistrationOpen: true,
    category: "Workshop",
  },
  {
    id: "w3",
    title: "AI & Machine Learning Fundamentals",
    date: "August 5-7, 2026",
    time: "10:00 AM - 5:00 PM",
    location: "College Auditorium",
    description: "A 3-day workshop introducing artificial intelligence and machine learning concepts.",
    fullDescription:
      "Dive into the world of AI and Machine Learning with this comprehensive 3-day workshop. Learn about supervised and unsupervised learning, neural networks, natural language processing, and computer vision. Hands-on sessions with Python and popular ML frameworks like TensorFlow and PyTorch.",
    capacity: 40,
    registeredCount: 35,
    isRegistrationOpen: true,
    category: "Workshop",
  },
  {
    id: "w4",
    title: "Startup Pitch Deck Workshop",
    date: "August 15, 2026",
    time: "11:00 AM - 2:00 PM",
    location: "VisionX Innovation Hub",
    description: "Master the art of creating compelling pitch decks for your startup.",
    fullDescription:
      "Learn how to craft a compelling pitch deck that investors will love. This workshop covers storytelling frameworks, financial projections, market analysis, and presentation skills. You'll get feedback on your pitch from experienced entrepreneurs and investors.",
    capacity: 20,
    registeredCount: 20,
    isRegistrationOpen: false,
    category: "Workshop",
  },
  {
    id: "w5",
    title: "Mobile App Development with React Native",
    date: "September 1-5, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Tech Lab",
    description: "Build cross-platform mobile apps using React Native in this 5-day bootcamp.",
    fullDescription:
      "A comprehensive 5-day bootcamp on building cross-platform mobile applications with React Native. Learn to build beautiful, performant mobile apps for both iOS and Android from a single codebase. Topics include navigation, state management, APIs, and app store deployment.",
    capacity: 25,
    registeredCount: 12,
    isRegistrationOpen: true,
    category: "Bootcamp",
  },
  {
    id: "w6",
    title: "Cloud Computing & DevOps Essentials",
    date: "September 12, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Virtual (Zoom)",
    description: "Understand cloud platforms and DevOps practices for modern development.",
    fullDescription:
      "Get started with cloud computing and DevOps in this intensive one-day workshop. Learn about AWS, Docker, CI/CD pipelines, infrastructure as code, and monitoring. Hands-on labs will give you practical experience deploying and managing cloud infrastructure.",
    capacity: 30,
    registeredCount: 8,
    isRegistrationOpen: true,
    category: "Workshop",
  },
];

export const mockRegistrations: Registration[] = [
  {
    id: "r1",
    workshopId: "w1",
    fullName: "Arun Kumar",
    email: "arun.kumar@college.edu",
    mobile: "+91 98765 43210",
    college: "SRM Institute of Technology",
    department: "Computer Science",
    year: "3rd Year",
    workshopName: "Full-Stack Web Development Bootcamp",
    notes: "I have basic knowledge of HTML and CSS.",
    registeredAt: "2026-06-15T10:30:00Z",
  },
  {
    id: "r2",
    workshopId: "w1",
    fullName: "Priya Sharma",
    email: "priya.sharma@college.edu",
    mobile: "+91 98765 43211",
    college: "Anna University",
    department: "Information Technology",
    year: "4th Year",
    workshopName: "Full-Stack Web Development Bootcamp",
    registeredAt: "2026-06-16T14:20:00Z",
  },
  {
    id: "r3",
    workshopId: "w2",
    fullName: "Rahul Verma",
    email: "rahul.verma@college.edu",
    mobile: "+91 98765 43212",
    college: "VIT University",
    department: "Design",
    year: "2nd Year",
    workshopName: "UI/UX Design Workshop",
    notes: "Interested in product design.",
    registeredAt: "2026-06-17T09:15:00Z",
  },
  {
    id: "r4",
    workshopId: "w2",
    fullName: "Sneha Patel",
    email: "sneha.patel@college.edu",
    mobile: "+91 98765 43213",
    college: "NIT Trichy",
    department: "Computer Science",
    year: "3rd Year",
    workshopName: "UI/UX Design Workshop",
    registeredAt: "2026-06-18T11:00:00Z",
  },
  {
    id: "r5",
    workshopId: "w3",
    fullName: "Vikram Singh",
    email: "vikram.singh@college.edu",
    mobile: "+91 98765 43214",
    college: "IIT Madras",
    department: "Electronics",
    year: "4th Year",
    workshopName: "AI & Machine Learning Fundamentals",
    notes: "Completed Python basics course.",
    registeredAt: "2026-06-19T16:45:00Z",
  },
  {
    id: "r6",
    workshopId: "w3",
    fullName: "Ananya Gupta",
    email: "ananya.gupta@college.edu",
    mobile: "+91 98765 43215",
    college: "BITS Pilani",
    department: "Computer Science",
    year: "3rd Year",
    workshopName: "AI & Machine Learning Fundamentals",
    registeredAt: "2026-06-20T08:30:00Z",
  },
  {
    id: "r7",
    workshopId: "w4",
    fullName: "Karthik Rajan",
    email: "karthik@college.edu",
    mobile: "+91 98765 43216",
    college: "SRM Institute of Technology",
    department: "Business Administration",
    year: "3rd Year",
    workshopName: "Startup Pitch Deck Workshop",
    notes: "Have a startup idea in ed-tech space.",
    registeredAt: "2026-06-21T13:00:00Z",
  },
  {
    id: "r8",
    workshopId: "w5",
    fullName: "Divya Nair",
    email: "divya.nair@college.edu",
    mobile: "+91 98765 43217",
    college: "Cochin University",
    department: "Computer Science",
    year: "2nd Year",
    workshopName: "Mobile App Development with React Native",
    registeredAt: "2026-06-22T10:10:00Z",
  },
  {
    id: "r9",
    workshopId: "w5",
    fullName: "Mohammed Irfan",
    email: "irfan@college.edu",
    mobile: "+91 98765 43218",
    college: "Anna University",
    department: "Information Technology",
    year: "3rd Year",
    workshopName: "Mobile App Development with React Native",
    notes: "Have built a few web apps before.",
    registeredAt: "2026-06-23T15:30:00Z",
  },
  {
    id: "r10",
    workshopId: "w6",
    fullName: "Meera Krishnan",
    email: "meera.k@college.edu",
    mobile: "+91 98765 43219",
    college: "PSG Tech",
    department: "Computer Science",
    year: "4th Year",
    workshopName: "Cloud Computing & DevOps Essentials",
    registeredAt: "2026-06-24T12:00:00Z",
  },
];
