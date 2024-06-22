import portfolio from "@/public/portfolio.png";
import ecommerce from "@/public/ecommerce.png";
import mtaguessthesong from "@/public/mtaguessthesong.png";
export const links = [
  {
    name: "Home",
    url: "#home",
  },
  {
    name: "About me",
    url: "#about",
  },
  {
    name: "Skills",
    url: "#skills",
  },
  {
    name: "Projects",
    url: "#projects",
  },
  {
    name: "Contact",
    url: "#contact",
  },
] as const;


export const projektjeim = [
  {
    nev: "Full-stack E-commerce web application",
    leiras:
      "Users can sell their old/new unused items. Features Authentication, Admin panel, Product management.",
    tags: ["React", "Next.js", "MySQL", "Tailwind", "Prisma", "MySQL", "ShadCN UI", "Clerk"],
    imageUrl: ecommerce,
    repo: "https://github.com/racerooni/grabkeys"
  },
  {
    nev: "Quiz game for a multi-player game",
    leiras:
      "Players have to guess the map from the game based on the song playing.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "ShadCN UI"],
    imageUrl: mtaguessthesong,
    repo: "https://github.com/racerooni/mta-guess-the-map"
  },
  {
    nev: "Portfolio",
    leiras:
      "Current portfolio website. Picked up Framer-motion while developing this website.",
    tags: ["React", "Next.js", "Tailwind", "Framer-Motion"],
    imageUrl: portfolio,
    repo: "https://github.com"
  },
] as const;

export const kepessegek = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Prisma",
  "MySQL",
  "Framer Motion",
  "C#",
  "Python",
  "PHP",
] as const;