import { useState, useRef } from "react";
import { FaLink } from "react-icons/fa";
import Image1 from "../assets/images/durian-py.png";
import Image2 from "../assets/images/promisePH.png";
import Image3 from "../assets/images/techtix.png";
import Image4 from "../assets/images/flms.png";

const roleColors = [
  "bg-red-950/60 text-red-200 border border-red-400/20",
  "bg-emerald-950/60 text-emerald-200 border border-emerald-400/20",
  "bg-blue-950/60 text-blue-200 border border-blue-400/20",
  "bg-amber-950/60 text-amber-200 border border-amber-400/20",
  "bg-violet-950/60 text-violet-200 border border-violet-400/20",
  "bg-pink-950/60 text-pink-200 border border-pink-400/20",
];

const getRandomRoleColor = () =>
  roleColors[Math.floor(Math.random() * roleColors.length)];

const projectData = [
  {
    title: "DurianPy Website",
    description: "The official website of DurianPy...",
    image: Image1,
    role: "Frontend Engineer",
    link: "https://www.durianpy.org",
    contributions: [
      "Formulated interactive homepage elements using GSAP, producing an 80% increase in user engagement.",
      "Implemented smooth scroll animations and delayed reveals, which resulted in a 30% longer average time-on-page for visitors.",
      "Spearheaded a community-driven initiative to audit Python documentation for accessibility gaps, leading to the identification of findings to fix the three biggest causes of accessibility barriers within 5 days.",
    ],
  },
  {
    title: "PromisePH",
    description: "PromisePH: Keeping Politicians Accountable...",
    image: Image2,
    role: "Lead Frontend Dev",
    link: "https://promise-ph.web.app",
    contributions: [
      "Built a social forum platform to track and verify political pledges, enabling user-generated content with real-time updates via Firebase and facilitating 200+ daily interactions.",
      "Designed fully responsive interfaces using ChakraUI and Tailwind CSS, ensuring a consistent and optimal user experience across 100% of mobile and desktop views.",
      "Implemented secure authentication and a modular post architecture to handle high user interaction volumes with 99.9% uptime.",
    ],
  },
  {
    title: "TechTix",
    description: "The Official Event Platform of UP Mindanao SPARCS",
    image: Image3,
    role: "Frontend Dev",
    link: "https://www.techtix.app/",
    contributions: [
      "Led front-end development for UP Mindanao SPARCS' official event platform, streamlining registration for over 500+ participants and automating certificate generation with AWS Lambda with 100% accuracy.",
      "Optimized UI/UX components by applying accessibility best practices, achieving a 99% Lighthouse accessibility score and reducing average user task time by 40%",
      "Integrated a serverless backend with FastAPI, resulting in 99.9% system uptime and nearinstantaneous certificate delivery for participants.",
    ],
  },
  {
    title: "Faculty Loading Management System",
    description: "A web application for managing faculty loading...",
    image: Image4,
    role: "Fullstack Engineer",
    link: "https://www.techtix.app/",
    contributions: [
      "Built a FLMS using MERN stack.",
      "Integrated automated scheduling.",
      "Spearheaded legacy system migration.",
    ],
  },
];

export default function Cards() {
  const [cards, setCards] = useState(
    projectData.map((card) => ({
      ...card,
      roleColor: getRandomRoleColor(),
    })),
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [direction, setDirection] = useState(null);

  const cardRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newOffsetX = e.clientX - startX;
    setOffsetX(newOffsetX);
    setDirection(newOffsetX > 50 ? "right" : newOffsetX < -50 ? "left" : null);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const newOffsetX = e.touches[0].clientX - startX;
    setOffsetX(newOffsetX);
    setDirection(newOffsetX > 50 ? "right" : newOffsetX < -50 ? "left" : null);
  };

  const handleEndDrag = () => {
    if (!isDragging) return;

    if (Math.abs(offsetX) > 100) {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }

    setIsDragging(false);
    setOffsetX(0);
    setDirection(null);
  };

  const visibleCards = Array.from(
    { length: 5 },
    (_, i) => cards[(currentIndex + i) % cards.length],
  );

  return (
    <div className="relative h-[44rem] w-full md:w-[60rem] mx-auto mb-6">
      {visibleCards.map((card, i) => {
        const isTopCard = i === 0;
        const zIndex = 10 - i;
        const translateY = i * 4;
        const scale = 1 - i * 0.05;

        let cardStyle = {
          transform: `translateY(${translateY}px) scale(${scale})`,
          zIndex,
          opacity: 1 - i * 0.15,
        };

        if (isTopCard && isDragging) {
          cardStyle.transform = `translateX(${offsetX}px) rotate(${
            offsetX * 0.1
          }deg)`;
        }

        let bgColor = "bg-slate-950/90";
        if (isTopCard && direction === "right") bgColor = "bg-emerald-950/90";
        else if (isTopCard && direction === "left") bgColor = "bg-rose-950/90";

        return (
          <div
            key={`${currentIndex}-${i}`}
            ref={isTopCard ? cardRef : null}
            style={cardStyle}
            className={`absolute inset-0 ${bgColor} rounded-lg overflow-hidden border border-slate-800 shadow-[0_24px_80px_rgba(2,6,23,0.65)] transition-all duration-200 ease-out`}
            onMouseDown={isTopCard ? handleMouseDown : null}
            onMouseMove={isTopCard ? handleMouseMove : null}
            onMouseUp={isTopCard ? handleEndDrag : null}
            onMouseLeave={isTopCard ? handleEndDrag : null}
            onTouchStart={isTopCard ? handleTouchStart : null}
            onTouchMove={isTopCard ? handleTouchMove : null}
            onTouchEnd={isTopCard ? handleEndDrag : null}
          >
            <div className="flex flex-col h-full cursor-grab select-none">
              <div className="h-1/2 w-full relative group border-b border-slate-800">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover group-hover:blur-sm transition duration-300"
                />
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                >
                  <button className="flex items-center gap-2 rounded-lg border border-cyan-400/20 bg-slate-950/90 px-4 py-2 font-bold text-slate-100 shadow-lg transition duration-300 hover:bg-cyan-950/80">
                    Visit <FaLink />
                  </button>
                </a>
              </div>

              <div className="p-6 bg-gradient-to-b from-slate-950 to-slate-900 flex flex-col flex-grow">
                <div className="border-b border-slate-800 pb-2 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-xl font-bold text-slate-50">
                      {card.title}
                    </h2>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${card.roleColor}`}
                    >
                      {card.role}
                    </span>
                  </div>
                </div>

                <p className="mb-2 text-lg text-slate-300">
                  {card.description}
                </p>

                {card.contributions?.length > 0 && (
                  <ul className="list-disc list-inside mb-4 space-y-1 text-base text-slate-400">
                    {card.contributions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}

                {isTopCard && (
                  <div className="mt-auto rounded border border-slate-800 bg-slate-950/80 p-1 text-center text-sm text-slate-400">
                    Swipe left or right
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
