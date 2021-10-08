import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Responsive from "components/Responsive";
import { LOCATIONS } from "./locations.constants";
import Phone from "components/Phone";
import CopyButton from "components/CopyButton";
import Availability from "components/Availability";
import Socials from "components/Socials";
const DesktopLocations = () => {
  return (
    <Responsive min="md" max="xl">
      <Grid container sx={{ mt: 5, mb: 2 }} rowSpacing={4}>
        {LOCATIONS.map(({ city, coords, address, phone, schedule }, i) => (
          <Grid item xs={12} md={6} key={`locations-${city}`}>
            <Box sx={{ display: "grid", placeItems: "center", mb: 4 }}>
              <Typography variant="h5" textAlign="left">
                {city}
              </Typography>
              <CopyButton copyContent={address} />
              <Phone phoneNumber={phone} />
              <Availability schedule={schedule} />
            </Box>
            <Divider />
          </Grid>
        ))}
      </Grid>

      <Socials />
      <Divider />
    </Responsive>
  );
};
export default DesktopLocations;
