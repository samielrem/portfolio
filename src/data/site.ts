import type { OptionalUrl } from "@/data/types";

export const site = {
  firstName: "Samiel",
  lastName: "Remulla",
  name: "Samiel Remulla",
  headline: "I build software, AI tools, and data-driven products.",
  intro:
    "Currently exploring software engineering, AI, data science, and building products from ideas.",
  about: [
    "Hello! Sam here 👋",
    "I am a 22 year old first generation undergrad from the Philippines. I moved to the US about 6 years ago to pursue my dreams.",
    "My career and school journey has been quite a rollercoaster, I switched majors six times before finally sticking to what I graduated with, Economics and Statistics. Along the road, I realized that I liked working with numbers, analyzing and observing patterns, and most importantly, doing work that can impact other people.",
    "Why coding though? Ever since I was a kid, I have always enjoyed building things and working with ideas, from disassembling toys, making roblox games to building weebly websites, creating is something that brought joy to me. I might not come from a traditional background of computer science, but alongside with my knowledge of economics and statistics, I believe this gives me an edge to look at things from another angle. I learn through building! I enjoy working across software, data, and product management, especially when I can take an initial idea and turn it into a product that solves a real problem and makes people's lives easier. To me, the best products aren't built around making money, they're built around creating something genuinely useful.",
  ],
  closing: "Want to build something?",
  email: "sremulla5@gmail.com" as OptionalUrl,
  githubUrl: "https://github.com/samielrem" as OptionalUrl,
  linkedinUrl: "https://www.linkedin.com/in/samiel-remulla-213066279" as OptionalUrl,
  /** Production URL for sitemap, robots, and Open Graph. */
  url: "https://samielrem.com" as OptionalUrl,
  interests: [
    "Software",
    "AI",
    "Data",
    "Product",
    "Analytics",
  ],
  currently: [
    {
      role: "Software and Automation Engineer",
      org: "Pharm to Food",
    },
    {
      role: "Founder",
      org: "bench & bracket",
      href: "https://www.benchandbracket.com",
    },
  ],
} as const;
