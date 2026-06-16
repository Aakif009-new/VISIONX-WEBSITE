export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image?: string;
  readTime: string;
}

export const blogCategories = [
  "All",
  "Startup Stories",
  "Innovation",
  "Technology",
  "Hackathon Tips",
  "Community Updates",
  "VisionX News",
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How Student Startups Are Shaping the Future of Innovation",
    excerpt:
      "Discover how student-led startups are disrupting industries and creating meaningful impact across the globe.",
    category: "Startup Stories",
    author: "VisionX Team",
    date: "June 10, 2026",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Top 10 Tech Trends Every Student Should Know in 2026",
    excerpt:
      "From AI to blockchain, explore the technology trends that will define the next decade of innovation.",
    category: "Technology",
    author: "Tech Team",
    date: "June 5, 2026",
    readTime: "7 min read",
  },
  {
    id: "3",
    title: "Winning Hackathons: A Complete Guide for Beginners",
    excerpt:
      "Learn the strategies, tools, and mindsets needed to excel in hackathon competitions.",
    category: "Hackathon Tips",
    author: "Mohammed Abuzar J",
    date: "May 28, 2026",
    readTime: "6 min read",
  },
  {
    id: "4",
    title: "VisionX Community Reaches 5000+ Milestone",
    excerpt:
      "A heartfelt thank you to our community as we celebrate reaching 5000+ student innovators.",
    category: "Community Updates",
    author: "VisionX Team",
    date: "May 20, 2026",
    readTime: "3 min read",
  },
  {
    id: "5",
    title: "From Idea to MVP: A Student Founder's Journey",
    excerpt:
      "Follow the inspiring journey of a student founder who turned a simple idea into a working product.",
    category: "Startup Stories",
    author: "Startup Team",
    date: "May 15, 2026",
    readTime: "8 min read",
  },
  {
    id: "6",
    title: "Announcing the VisionX Incubation Program 2026",
    excerpt:
      "We're thrilled to launch our latest incubation program for student startups. Applications are now open!",
    category: "VisionX News",
    author: "Founding Team",
    date: "May 10, 2026",
    readTime: "4 min read",
  },
];
