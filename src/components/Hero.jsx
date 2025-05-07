import { FaReact, FaLinkedin } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import raxIcon from "../assets/images/rax-icon.png";

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center h-screen text-center mx-auto">
        <div className="relative bg-white border-2 border-black rounded-xl px-6 py-3 mb-4 shadow-md">
          <h1 className="font-bold text-lg text-black">
            Hi, I&apos;m Rax!{" "}
            <span className="inline-block animate-wiggle-more animate-infinite">
              👋
            </span>
          </h1>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-black rotate-45"></div>
        </div>
        <div className="relative w-60 h-60 my-4">
          <img
            src={raxIcon}
            alt="Rax's Icon"
            className="w-full h-full object-cover rounded-full border-4 border-white"
          />
          <span className="absolute bottom-3 right-7 border-6 border-[#0d1321] w-8 h-8 bg-green-500 rounded-full animate-ping animate-infinite animate-alternate"></span>
          <span className="absolute bottom-3 right-7 border-6 border-[#0d1321] w-8 h-8 bg-green-500 rounded-full"></span>
        </div>

        <p className="w-[50%] text-xl my-3">
          A front-end engineer passionate about building fast, accessible, and
          user-centered web experiences. With hands-on experience in{" "}
          <span className="inline-flex items-center gap-1 font-bold">
            React <FaReact className="text-[#61DAFB]" />
          </span>
          ,{" "}
          <span className="inline-flex items-center gap-1 font-bold">
            Next.js <RiNextjsFill />
          </span>
          , and{" "}
          <span className="inline-flex items-center gap-1 font-bold">
            Tailwind <RiTailwindCssFill className="text-[#38B2AC]" />
          </span>
          , I’ve shipped scalable solutions for startups, student organizations,
          and tech communities. Whether it's automating event platforms,
          redesigning high-traffic pages, or creating interactive UI for civic
          tech, I bring clean code and thoughtful design to every project.
        </p>
        <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-[#3e5c76] transition duration-300">
          <a
            href="https://www.linkedin.com/in/rockyapcastaneros/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-extrabold"
          >
            Network with me <FaLinkedin className="text-[#0077B5]" />
          </a>
        </button>
      </div>
    </section>
  );
}
