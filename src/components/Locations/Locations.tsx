import { Typography } from "@mui/material";
import Screen from "components/Screen";

import MobileLocations from "./MobileLocations";

const Locations = () => {
  return (
    <Screen>
      <Typography variant="h2" align="center" mt={3} mb={3}>
        Locations
      </Typography>
      <MobileLocations />
    </Screen>
  );
};
export default Locations;
