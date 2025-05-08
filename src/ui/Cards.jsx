import { useState, useRef } from "react";
import { FaLink } from "react-icons/fa";
import Image1 from "../assets/images/durian-py.png";
import Image2 from "../assets/images/promisePH.png";
import Image3 from "../assets/images/techtix.png";
import Image4 from "../assets/images/flms.png";

const roleColors = [
  "bg-red-100 text-red-800",
  "bg-green-100 text-green-800",
  "bg-blue-100 text-blue-800",
  "bg-yellow-100 text-yellow-800",
  "bg-purple-100 text-purple-800",
  "bg-pink-100 text-pink-800",
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
      "Implemented the landing page...",
      "Integrated CMS...",
      "Ensured responsive design...",
    ],
  },
  {
    title: "PromisePH",
    description: "PromisePH: Keeping Politicians Accountable...",
    image: Image2,
    role: "Lead Frontend Dev",
    link: "https://promise-ph.web.app",
    contributions: [
      "Built a social forum...",
      "Designed responsive interfaces...",
      "Implemented secure authentication...",
    ],
  },
  {
    title: "TechTix",
    description: "The Official Event Platform of UP Mindanao SPARCS",
    image: Image3,
    role: "Frontend Dev",
    link: "https://www.techtix.app/",
    contributions: [
      "Led front-end development...",
      "Optimized UI/UX components...",
      "Integrated serverless backend...",
    ],
  },
  {
    title: "Faculty Loading Management System",
    description: "A web application for managing faculty loading...",
    image: Image4,
    role: "Fullstack Engineer",
    link: "https://www.techtix.app/",
    contributions: [
      "Built a FLMS using MERN stack...",
      "Integrated automated scheduling...",
      "Spearheaded legacy system migration...",
    ],
  },
];

export default function Cards() {
  const [cards, setCards] = useState(
    projectData.map((card) => ({
      ...card,
      roleColor: getRandomRoleColor(),
    }))
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
    (_, i) => cards[(currentIndex + i) % cards.length]
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

        let bgColor = "bg-white";
        if (isTopCard && direction === "right") bgColor = "bg-green-50";
        else if (isTopCard && direction === "left") bgColor = "bg-red-50";

        return (
          <div
            key={`${currentIndex}-${i}`}
            ref={isTopCard ? cardRef : null}
            style={cardStyle}
            className={`absolute inset-0 ${bgColor} rounded-lg shadow-lg overflow-hidden transition-all duration-200 ease-out border border-gray-400`}
            onMouseDown={isTopCard ? handleMouseDown : null}
            onMouseMove={isTopCard ? handleMouseMove : null}
            onMouseUp={isTopCard ? handleEndDrag : null}
            onMouseLeave={isTopCard ? handleEndDrag : null}
            onTouchStart={isTopCard ? handleTouchStart : null}
            onTouchMove={isTopCard ? handleTouchMove : null}
            onTouchEnd={isTopCard ? handleEndDrag : null}
          >
            <div className="flex flex-col h-full cursor-grab select-none">
              <div className="h-1/2 w-full relative group border-b border-gray-200">
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
                  <button className="bg-white text-gray-800 font-bold px-4 py-2 rounded-lg shadow hover:bg-amber-300 transition duration-300 flex items-center gap-2">
                    Visit <FaLink />
                  </button>
                </a>
              </div>

              <div className="p-6 bg-gradient-to-b from-white to-gray-50 flex flex-col flex-grow">
                <div className="border-b border-gray-200 pb-2 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-xl font-bold text-gray-800">
                      {card.title}
                    </h2>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${card.roleColor}`}
                    >
                      {card.role}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-2 text-lg">{card.description}</p>

                {card.contributions?.length > 0 && (
                  <ul className="list-disc list-inside text-base text-gray-700 mb-4 space-y-1">
                    {card.contributions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}

                {isTopCard && (
                  <div className="mt-auto text-sm text-gray-400 text-center p-1 bg-gray-50 rounded border border-gray-200">
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
