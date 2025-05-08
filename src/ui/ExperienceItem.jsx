import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";

const ExperienceItem = ({ date, title, company, points }) => (
  <TimelineItem>
    <TimelineOppositeContent className="text-gray-400">
      <Typography fontFamily={"monospace"}>{date}</Typography>
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Typography variant="h6" fontFamily={"monospace"}>
        {title}
      </Typography>
      <Typography variant="subtitle1" fontFamily={"cursive"}>
        {company}
      </Typography>
      <ul className="list-disc list-inside mt-2 space-y-1">
        {points.map((point, index) => (
          <Typography
            key={index}
            variant="body2"
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
