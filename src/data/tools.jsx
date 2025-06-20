// tools.jsx
import { FaGit, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import { SiPostman, SiLinux, SiFigma, SiServerless } from "react-icons/si";

const tools = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Linux", icon: <SiLinux /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Serverless Framework", icon: <SiServerless /> },
];

export default tools;
