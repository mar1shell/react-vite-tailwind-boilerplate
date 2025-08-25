/**
 * File to Store different data
 */

import { Zap, Moon, Database, Settings, Code, Folder } from "lucide-react";
import { FaReact } from "react-icons/fa";
import {
  SiVite,
  SiTypescript,
  SiTailwindcss,
  SiEslint,
  SiPrettier,
} from "react-icons/si";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "../icons";
import type { feature } from "../../types";

const features: feature[] = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Vite provides instant hot module replacement and lightning-fast builds for optimal development experience.",
  },
  {
    icon: Moon,
    title: "Dark Mode Ready",
    description:
      "Built-in dark mode support with useDarkMode hook and Tailwind's dark: classes for seamless theming.",
  },
  {
    icon: Database,
    title: "Local Storage Hook",
    description:
      "useLocalStorage hook for persistent state management across browser sessions with TypeScript support.",
  },
  {
    icon: Folder,
    title: "Structured Architecture",
    description:
      "Well-organized project structure following best practices for scalable and maintainable applications.",
  },
  {
    icon: Code,
    title: "TypeScript Ready",
    description:
      "Full TypeScript support with strict type checking for better code quality and developer productivity.",
  },
  {
    icon: Settings,
    title: "ESLint + Prettier",
    description:
      "Pre-configured code formatting and linting rules to maintain consistent code style across the project.",
  },
];

const steps = [
  {
    title: "Clone the repository",
    command:
      "git clone https://github.com/mar1shell/react-vite-tailwind-boilerplate.git",
    description: "Get the boilerplate code on your local machine",
  },
  {
    title: "Install dependencies",
    command: "npm install",
    description: "Install all required packages and dependencies",
  },
  {
    title: "Start development server",
    command: "npm run dev",
    description: "Launch the development server with hot reload",
  },
];

const technologies = [
  {
    name: "React",
    color: "bg-gradient-to-r from-cyan-400 to-blue-500",
    icon: <FaReact />,
  },
  {
    name: "Vite",
    color: "bg-gradient-to-r from-purple-500 to-indigo-600",
    icon: <SiVite />,
  },
  {
    name: "TypeScript",
    color: "bg-gradient-to-r from-blue-500 to-blue-600",
    icon: <SiTypescript />,
  },
  {
    name: "Tailwind CSS",
    color: "bg-gradient-to-r from-cyan-400 to-teal-500",
    icon: <SiTailwindcss />,
  },
  {
    name: "ESLint",
    color: "bg-gradient-to-r from-indigo-500 to-purple-600",
    icon: <SiEslint />,
  },
  {
    name: "Prettier",
    color: "bg-gradient-to-r from-pink-500 to-rose-500",
    icon: <SiPrettier />,
  },
];

const personalInfo = {
  website: "https://mar1shell.me",
  socialMedia: {
    twitter: "https://x.com/mar1hsell",
    linkedin: "https://www.linkedin.com/in/elhamdaouimarouane",
    github: "https://github.com/mar1shell",
  },
};

const socialMediaIcons2 = [
  {
    icon: GithubIcon,
    label: "GitHub",
    href: personalInfo.socialMedia.github,
    color: "hover:text-gray-900 dark:hover:text-white",
    bgColor: "hover:bg-gray-900/10 dark:hover:bg-white/10",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: personalInfo.socialMedia.linkedin,
    color: "hover:text-blue-600 dark:hover:text-blue-400",
    bgColor: "hover:bg-blue-600/10 dark:hover:bg-blue-400/10",
  },
  {
    icon: TwitterIcon,
    label: "X (Twitter)",
    href: personalInfo.socialMedia.twitter,
    color: "hover:text-blue-400 dark:hover:text-blue-300",
    bgColor: "hover:bg-blue-400/10 dark:hover:bg-blue-300/10",
  },
];

export { features, steps, technologies, personalInfo, socialMediaIcons2 };
