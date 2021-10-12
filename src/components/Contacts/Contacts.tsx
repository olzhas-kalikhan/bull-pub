import { FC } from "react";
import { Box, Grid } from "@mui/material";
import Screen from "components/Screen";
import SectionTitle from "components/SectionTitle";
import aboutImg3 from "assets/img/about3.jpg";
import { LOCATIONS } from "../../constants/locations.constants";
import Location from "components/Location";
const Contacts: FC = () => {
  return (
    <Screen noMinHeight>
      <SectionTitle title="contacts" bgImage={aboutImg3} />
      <Box data-aos="fade">
        <Grid container sx={{ mt: 5, mb: 2 }} rowSpacing={4}>
          {LOCATIONS.map((location, i) => (
            <Grid item xs={12} md={6} key={`locations-${location.city}`}>
              <Location details={location} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Screen>
  );
};
export default Contacts;
