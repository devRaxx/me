import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const ExperienceItem = ({ date, title, company, points, image, aos }) => (
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []),
  (
    <TimelineItem data-aos={aos} className="">
      <TimelineOppositeContent className="text-gray-400">
        <Typography fontFamily={"monospace"} fontSize={"1.3rem"}>
          {date}
        </Typography>
        {image && (
          <div className="relative group w-fit">
            <img
              src={image}
              alt={`${company} logo`}
              className="group-hover:animate-pulse h-64"
              loading="lazy"
            />
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center opacity-0 transition-[opacity] duration-0 group-hover:opacity-100 group-hover:duration-500"
            >
              <button className="bg-white text-gray-800 font-bold px-4 py-2 rounded-lg shadow hover:bg-amber-300 hover:scale-125 transition duration-300 flex items-center gap-2">
                View
              </button>
            </a>
          </div>
        )}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="info" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography
          variant="h4"
          fontFamily={"monospace"}
          fontSize={"2.5rem"}
          fontWeight={700}
          className="text-yellow-500"
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          fontFamily={"cursive"}
          fontSize={"1.7rem"}
          fontWeight={500}
        >
          {company}
        </Typography>
        <ul className="list-disc list-inside mt-2 space-y-1">
          {points.map((point, index) => (
            <Typography
              key={index}
              variant="body1"
              fontFamily={"monospace"}
              fontSize={"1.1rem"}
              fontWeight={500}
              align="inherit"
              component="li"
              className="text-gray-300"
            >
              {point}
            </Typography>
          ))}
        </ul>
      </TimelineContent>
    </TimelineItem>
  )
);

export default ExperienceItem;
