import { FC } from "react";
import { Typography } from "@mui/material";
import Screen from "components/Screen";
import DesktopLocations from "./DesktopLocations";

import MobileLocations from "./MobileLocations";

const Locations: FC = () => {
  return (
    <Screen>
      <Typography variant="h2" align="center" mt={3} mb={3}>
        Locations
      </Typography>
      <MobileLocations />
      <DesktopLocations />
    </Screen>
  );
};
export default Locations;
