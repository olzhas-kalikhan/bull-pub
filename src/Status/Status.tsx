import { FC, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";
import moment from "moment";
import { LOCATIONS } from "components/Locations/locations.constants";
const Status: FC = () => {
  const workDay = getWorkDay();
  const dow = workDay.day();
  const openHour = LOCATIONS[0].schedule[dow].open;
  const closeHour = LOCATIONS[0].schedule[dow].close;
  const openTime = workDay.clone().hour(openHour).minute(0);
  const closeTime = workDay.clone().hour(closeHour).minute(0);
  const [available, setAvailable] = useState(
    isTimeBetween(openHour, closeHour)
  );

  useEffect(() => {
    let timeInterval = setInterval(() => {
      setAvailable(isTimeBetween(openHour, closeHour));
    }, 1000 * 60 * 5);
    return () => {
      clearInterval(timeInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textShadow: "0em 0.2em 0.9em #000",
      }}
    >
      {available ? (
        <>
          <CircleIcon color="success" sx={{ mr: 1 }} />
          <Typography variant="h5">
            Open until {closeTime.format("h a")}
          </Typography>
        </>
      ) : (
        <>
          <CircleTwoToneIcon color="error" sx={{ mr: 1 }} />
          <Typography variant="h5">
            Closed. Opens at {openTime.format("h a")}
          </Typography>
        </>
      )}
    </Box>
  );
};
const getWorkDay = () => {
  const date = moment();
  let hour = date.hour();
  if (hour <= 4) date.subtract(1, "days");
  return date;
};
const isTimeBetween = function (startHour: number, endHour: number) {
  var start = getWorkDay().hour(startHour).minute(0);
  var end = getWorkDay().hour(endHour).minute(0);
  if (end.hour() <= start.hour()) {
    end.add(1, "days");
  }
  var isBetween = moment().isBetween(start, end);
  return isBetween;
};
export default Status;
