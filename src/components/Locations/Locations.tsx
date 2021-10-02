import { FC } from "react";
import { Button, Typography } from "@mui/material";
import Screen from "components/Screen";
import DesktopLocations from "./DesktopLocations";

import MobileLocations from "./MobileLocations";

const Locations: FC = () => {
  return (
    <Screen>
      <Typography variant="h2" align="center" mt={10} mb={3}>
        Contacts
      </Typography>
      <Button variant="contained" sx={{ my: 5 }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          <a
            href="mailto:booking@thebullpubandgrill.ca"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            booking@thebullpubandgrill.ca
          </a>
        </Typography>
      </Button>
      <MobileLocations />
      <DesktopLocations />
    </Screen>
  );
};
export default Locations;
