import { FC } from "react";
import Screen from "components/Screen";
import BullTitle from "components/BullTitle";

import { Grid } from "@mui/material";

import Status from "Status";

const Landing: FC = () => {
  return (
    <Screen
      disableGutters
      backgroundColor="none"
      backgroundImage="linear-gradient(180deg, rgba(5,25,55,0.5) 0%, rgba(255,255,255,0) 10%, rgba(255,255,255,0) 90%, rgba(5,25,55,0.9) 100%)"
    >
      <Grid container sx={{ m: "auto", zIndex: 1 }}>
        <Grid item md={12}>
          <BullTitle />
          <Status />
        </Grid>
        <Grid item md={4} justifyContent="center"></Grid>
      </Grid>
      {/* <Nav /> */}
    </Screen>
  );
};

export default Landing;
