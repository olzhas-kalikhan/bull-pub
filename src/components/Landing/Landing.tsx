import { FC } from "react";
import Screen from "components/Screen";
import BullTitle from "components/BullTitle";

import { Grid } from "@mui/material";

const Landing: FC = () => {
  return (
    <Screen centered={true}>
      <Grid container>
        <Grid item xs={12}>
          <BullTitle />
        </Grid>
      </Grid>
    </Screen>
  );
};

export default Landing;
