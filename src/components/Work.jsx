// Work.js
import React from "react";
import Timeline from "@mui/lab/Timeline";
import ExperienceItem from "../ui/ExperienceItem";
import experiences from "../data/experiences";

const Work = () => (
  <section className="h-full flex flex-col items-center justify-center mt-14">
    <div className="flex items-center">
      <h1 className="font-merriweather text-xl gradient-text animate-bounce animate-infinite animate-ease-out">
        RECIPES FOR GROWTH
      </h1>

      <p className="animate-bounce animate-infinite animate-ease-out text-4xl">
        🍲
      </p>
    </div>
    <h1 className="text-4xl my-4 font-extrabold">Work Experiences</h1>
    <h2 className="text-center text-lg font-semibold text-gray-500 mb-5 mx-96">
      A collection of roles and experiences that sharpened my skills, built my
      resilience, and seasoned me into the developer I am today.
    </h2>
    <div className="w-full max-w-5xl">
      <Timeline position="alternate">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            date={exp.date}
            title={exp.title}
            company={exp.company}
            points={exp.points}
            image={exp.image}
            aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
          />
        ))}
      </Timeline>
    </div>
  </section>
);

export default Work;
