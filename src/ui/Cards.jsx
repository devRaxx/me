import { useState, useRef } from "react";
import { FaDice, FaLink } from "react-icons/fa";
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
    description:
      "The official website of DurianPy, Davao's Python Community - where Pythonistas and enthusiasts gather to discuss trends and share knowledge about Python and related tech.",
    image: Image1,
    role: "Frontend Engineer",
    link: "https://www.durianpy.org",
    contributions: [
      "Implemented the landing page and events section using Tailwind CSS.",
      "Integrated CMS for blog content management.",
      "Ensured responsive design across devices.",
    ],
  },
  {
    title: "PromisePH",
    description:
      "PromisePH: Keeping Politicians Accountable, One Promise at a Time. A web app that tracks the promises made by politicians in the Philippines.",
    image: Image2,
    role: "Lead Frontend Dev",
    link: "https://promise-ph.web.app",
    contributions: [
      "Built a social forum platform to track and verify political pledges, enabling user-generated content with real-time updates via Firebase.",
      "Designed responsive interfaces using ChakraUI and TailwindCSS, resulting in a consistent experience across 100% of mobile and desktop views.",
      "Implemented secure authentication and modular post architecture to handle 200+ daily interactions with 99.9% uptime.",
    ],
  },
  {
    title: "TechTix",
    description: "The Official Event Platform of UP Mindanao SPARCS",
    image: Image3,
    role: "Frontend Dev",
    link: "https://www.techtix.app/",
    contributions: [
      "Led front-end development for UP Mindanao SPARCS’ event platform, streamlining registration for 500+ participants and automating certificate generation with AWS Lambda (100% accuracy).",
      "Optimized UI/UX components with accessibility best practices, reaching a 99% Lighthouse accessibility score and reducing user task time by 40%.",
      "Integrated serverless backend with FastAPI, achieving 99.9% system uptime and near-instantaneous certificate delivery for participants.",
    ],
  },
  {
    title: "Faculty Loading Management System",
    description:
      "A web application for managing faculty loading and schedules for the University of the Philippines Mindanao.",
    image: Image4,
    role: "Fullstack Engineer",
    link: "https://www.techtix.app/",
    contributions: [
      "Built a Faculty Loading Management System using the MERN stack, reducing manual processing time by 70% and eliminating redundant workflows.",
      "Integrated automated scheduling, real-time data sync, and workload tracking features—benefiting 60+ faculty and admin users",
      "Spearheaded legacy system migration with 100% data accuracy, improving user experience and system scalability by 50%.",
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
  const [removedCards, setRemovedCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [direction, setDirection] = useState(null);

  const cardRef = useRef(null);

  const resetCards = () => {
    setCards(
      projectData.map((card) => ({
        ...card,
        roleColor: getRandomRoleColor(),
      }))
    );
    setRemovedCards([]);
    setCurrentIndex(0);
    setOffsetX(0);
    setDirection(null);
  };

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
    const currentX = e.clientX;
    const newOffsetX = currentX - startX;
    setOffsetX(newOffsetX);
    setDirection(newOffsetX > 50 ? "right" : newOffsetX < -50 ? "left" : null);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const newOffsetX = currentX - startX;
    setOffsetX(newOffsetX);
    setDirection(newOffsetX > 50 ? "right" : newOffsetX < -50 ? "left" : null);
  };

  const handleEndDrag = () => {
    if (!isDragging) return;

    if (Math.abs(offsetX) > 100) {
      const currentCard = cards[currentIndex];
      setRemovedCards((prev) => [...prev, currentCard]);
      setCurrentIndex((prev) => prev + 1);
    }

    setIsDragging(false);
    setOffsetX(0);
    setDirection(null);
  };

  const remainingCards = cards.length - currentIndex;
  const noCardsLeft = remainingCards <= 0;

  return (
    <>
      <div className="relative h-[44rem] w-[60rem] mx-auto mb-6">
        {!noCardsLeft ? (
          cards
            .slice(currentIndex)
            .slice(0, 5)
            .map((card, i) => {
              const isTopCard = i === 0;
              const zIndex = 10 - i;
              const translateY = i * 4;
              const scale = 1 - i * 0.05;

              let cardStyle = {
                transform: `translateY(${translateY}px) scale(${scale})`,
                zIndex: zIndex,
                opacity: 1 - i * 0.15,
              };

              if (isTopCard && isDragging) {
                cardStyle.transform = `translateX(${offsetX}px) rotate(${
                  offsetX * 0.1
                }deg)`;
              }

              let bgColor = "bg-white";
              if (isTopCard && direction === "right") {
                bgColor = "bg-green-50";
              } else if (isTopCard && direction === "left") {
                bgColor = "bg-red-50";
              }

              return (
                <div
                  key={currentIndex + i}
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
                  <div className="flex flex-col h-full cursor-grab">
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

                      <p className="text-gray-600 mb-2 text-lg">
                        {card.description}
                      </p>

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
            })
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg border border-dashed border-gray-300">
            <p className="text-gray-500">More projects to come!</p>
          </div>
        )}
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={resetCards}
          className="flex font-semibold gap-2 items-center bg-white text-black rounded-lg hover:bg-teal-300 p-2 transition duration-300"
        >
          Reshuffle <FaDice />
        </button>
      </div>
    </>
  );
}
