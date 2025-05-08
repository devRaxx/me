import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";

const ExperienceItem = ({ date, title, company, points, image }) => (
  <TimelineItem>
    <TimelineOppositeContent className="text-gray-400">
      <Typography fontFamily={"monospace"}>{date}</Typography>
      {image && (
        <div className="relative group w-fit">
          <img src={image} alt={`${company} logo`} />
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center opacity-0 transition-[opacity] duration-0 group-hover:opacity-100 group-hover:duration-500"
          >
            <button className="bg-white text-gray-800 font-bold px-4 py-2 rounded-lg shadow hover:bg-amber-300 transition duration-300 flex items-center gap-2">
              View
            </button>
          </a>
        </div>
      )}
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Typography variant="h4" fontFamily={"monospace"}>
        {title}
      </Typography>
      <Typography variant="h6" fontFamily={"cursive"}>
        {company}
      </Typography>
      <ul className="list-disc list-inside mt-2 space-y-1">
        {points.map((point, index) => (
          <Typography
            key={index}
            variant="body1"
            fontFamily={"monospace"}
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
);

export default ExperienceItem;
