import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandAstro } from "react-icons/tb";
import { SiTypescript, SiShadcnui, SiChakraui } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const feFrameworks = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <RiNextjsLine /> },
  { name: "Astro", icon: <TbBrandAstro /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3 /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "ShadcnUI", icon: <SiShadcnui /> },
  { name: "Chakra UI", icon: <SiChakraui /> },
];

export default feFrameworks;
