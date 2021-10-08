import { FC } from "react";
import { Box } from "@mui/material";
import Screen from "components/Screen";
import DesktopLocations from "./DesktopLocations";

import MobileLocations from "./MobileLocations";
import SectionTitle from "components/SectionTitle";
import aboutImg3 from "assets/img/about3.jpg";
const Locations: FC = () => {
  return (
    <Screen>
      <SectionTitle title="contacts" bgImage={aboutImg3} />
      <Box data-aos="fade">
        <MobileLocations />
        <DesktopLocations />
      </Box>
    </Screen>
  );
};
export default Locations;
