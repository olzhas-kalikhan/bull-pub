import { useState, useEffect, FC } from "react";
import Screen from "components/Screen";
import BullTitle from "components/BullTitle";

import { Box, Grid, Typography } from "@mui/material";
import moment from "moment";
import { LOCATIONS } from "components/Locations/locations.constants";
import CircleIcon from "@mui/icons-material/Circle";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";

const Landing: FC = () => {
  const currentTime = moment();
  const dow = currentTime.day();
  const openHour = LOCATIONS[0].schedule[dow].open;
  const closeHour = LOCATIONS[0].schedule[dow].close;
  const openTime = moment().hour(openHour).minute(0);
  const closeTime = moment().hour(closeHour).minute(0);

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
    <Screen
      disableGutters
      backgroundColor="none"
      backgroundImage="linear-gradient(180deg, rgba(5,25,55,0.5) 0%, rgba(255,255,255,0) 10%, rgba(255,255,255,0) 90%, rgba(5,25,55,0.9) 100%)"
    >
      <Grid container sx={{ m: "auto", zIndex: 1 }}>
        <Grid item md={12}>
          <BullTitle />
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
        </Grid>
        <Grid item md={4} justifyContent="center"></Grid>
      </Grid>
      {/* <Nav /> */}
    </Screen>
  );
};

const isTimeBetween = function (startHour: number, endHour: number) {
  var currentTime = moment();
  var start = moment().hour(startHour).minute(0);
  var end = moment().hour(endHour).minute(0);
  if (end.hour() <= start.hour()) {
    end.add(1, "days");
  }
  var isBetween = currentTime.isBetween(start, end);
  return isBetween;
};
export default Landing;
