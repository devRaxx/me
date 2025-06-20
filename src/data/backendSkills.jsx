import { FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiPostman,
  SiSupabase,
  SiPayloadcms,
} from "react-icons/si";
import { SiFastapi } from "react-icons/si";

const beFrameworks = [
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Payload CMS", icon: <SiPayloadcms /> },
  { name: "Postman", icon: <SiPostman /> },
];

export default beFrameworks;
