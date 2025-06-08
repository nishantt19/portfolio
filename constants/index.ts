import {
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaSass,
} from "react-icons/fa6";
import {
  SiJavascript,
  SiTypescript,
  SiSolidity,
  SiWagmi,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiReactquery,
  SiZod,
  SiShadcnui,
} from "react-icons/si";
import { type IconType } from "react-icons";

interface Navlink {
  name: string;
  id: string;
}

interface SocialLink {
  name: string;
  icon: IconType;
  url: string;
}

interface Skills {
  name: string;
  icon: IconType;
}

interface WorkExperience {
  logo: string;
  company: string;
  position: string;
  date: string;
  description: string;
}

interface Project {
  link: string;
  name: string;
  image: string;
  description: string;
}

export const NAV_LINKS: Navlink[] = [
  {
    name: "About Me",
    id: "about",
  },
  {
    name: "Skills",
    id: "skills",
  },
  {
    name: "Work",
    id: "work",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Contact",
    id: "contact",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Github",
    url: "https://github.com/nishantt19",
    icon: FaGithub,
  },
  {
    name: "Twitter",
    url: "https://x.com/_nishantt19",
    icon: FaXTwitter,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nishant-yadav420/",
    icon: FaLinkedin,
  },
];

export const SKILLS: Skills[] = [
  {
    name: "Javascript",
    icon: SiJavascript,
  },
  {
    name: "Typescript",
    icon: SiTypescript,
  },
  {
    name: "Solidity",
    icon: SiSolidity,
  },
  {
    name: "React JS",
    icon: SiReact,
  },
  {
    name: "Next JS",
    icon: SiNextdotjs,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "React Query",
    icon: SiReactquery,
  },

  {
    name: "Wagmi",
    icon: SiWagmi,
  },

  {
    name: "Redux",
    icon: SiRedux,
  },
  {
    name: "Zod",
    icon: SiZod,
  },

  {
    name: "HTML",
    icon: SiHtml5,
  },
  {
    name: "CSS",
    icon: SiCss3,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Sass/Scss",
    icon: FaSass,
  },
  {
    name: "Shadcn UI",
    icon: SiShadcnui,
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    logo: "/hiring-dog.png",
    company: "HDIP",
    position: "SDE-1 Frontend",
    date: "Jan 2025 - Present",
    description:
      "Currently serving as SDE-1 Frontend at HDIP, leading the frontend team and building the complete platform from scratch including website, landing page, and admin dashboard for client/financial monitoring. My implementations are driving new client acquisition and ensuring seamless user experience through strategic bug fixes and feature development.",
  },
  {
    logo: "/enalo.svg",
    company: "Enalo Technologies Pvt. Ltd.",
    position: "Frontend Developer",
    date: "Dec 2023 - Nov 2024",
    description:
      "At Enalo, I progressed from intern to full-time Frontend Developer, where I developed comprehensive reporting features that allows users to monitor their purchases, building landing pages with NextJS, Typescript and Zod, implementing new subscription models, and leading UI redesigns that drove 20% increase in user conversion and engagement.",
  },
  {
    logo: "/textify.png",
    company: "Textify AI",
    position: "Frontend Developer Intern",
    date: "Feb 2023 - Dec 2023",
    description:
      "At Textify AI, I spearheaded the implementation of AI tool collection platform, enabling AI developers to curate and seamlessly integrate diverse AI tools for better efficiency by facilitating inter-tool communication. I built multi-step forms using React Hook Form and Shadcn UI, developed a Chrome extension with AI scheduling using Firebase and TypeScript. ",
  },
  {
    logo: "/rlogical.png",
    company: "Rlogical Techsoft Pvt. Ltd.",
    position: "Frontend Developer Intern",
    date: "Dec 2022 - Jan 2023",
    description:
      "During my 2-month Front-End Developer internship at rLogical Techsoft Pvt. Ltd., I developed web applications using React.js and created 3 highly reusable components. I implemented responsive designs with cross-browser compatibility and utilized debugging tools like Chrome DevTools and React Developer Tools to optimize performance and ensure quality code delivery.",
  },
];

export const PROJECTS: Project[] = [
  {
    link: "https://github.com/Aura-Networks-Team-Bytes32/demo",
    name: "Aura Networks",
    image: "/project-1.png",
    description: `A decentralized payment solution that brings familiar card payment capabilities to Web3, bridging traditional finance UX with blockchain technology. Developed the complete frontend interface and collaborated on Web3 integration to create seamless user experiences. Recognized as "Best DApp on Bless Network" at ETHGlobal Bangkok.`,
  },
  {
    link: "https://github.com/nishantt19/tsender",
    name: "Tsender | Token Airdrop",
    image: "/project-2.png",
    description:
      "A gas-optimized batch ERC20 token transfer application enabling efficient airdrops across multiple EVM networks. Developed the complete frontend interface with NextJS and Typescript, with web3 integration using Wagmi/Viem and RainbowKit, implementing wallet connectivity, multi-chain support, and smart contract interactions",
  },
];

export const ABOUT_ME = ``;
