import { FC } from "react";
import { Box, Typography } from "@mui/material";
type AvailabilityProps = {
  schedule: string;
};

const Availability: FC<AvailabilityProps> = ({ schedule }) => {
  const displaySchedule = schedule.split(",");
  return (
    <Box>
      {displaySchedule.map((sch, i) => (
        <Typography key={`availability-${i}`}>{sch}</Typography>
      ))}
    </Box>
  );
};

export default Availability;
