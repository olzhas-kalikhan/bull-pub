import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Responsive from "components/Responsive";
import { Map, Marker } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import { LOCATIONS } from "./locations.constants";
import Phone from "components/Phone";
import CopyButton from "components/CopyButton";
import moment from "moment";
const DesktopLocations = () => {
  return (
    <Responsive min="md" max="xl">
      <Grid container>
        {LOCATIONS.map(({ city, coords, address, phone, schedule }, i) => (
          <Grid item xs={12} md={6} key={`locations-${city}`}>
            <Box sx={{ padding: 2 }}>
              <Typography variant="h5" textAlign="left">
                {city}
              </Typography>
              <CopyButton copyContent={address} />
              <Phone phoneNumber={phone} />
              <Map
                provider={osm}
                height={300}
                defaultCenter={coords}
                defaultZoom={14}
              >
                <Marker width={50} anchor={coords} />
              </Map>

              <Box>
                {schedule.map(({ open, close }, i) => (
                  <Box
                    sx={{
                      display: "flex",
                      width: "30%",
                    }}
                  >
                    <Typography sx={{ width: "30%" }}>
                      {moment().day(i).format("ddd")}:{" "}
                    </Typography>
                    <Typography>
                      {moment().hour(open).format("h a")} -{" "}
                      {moment().hour(close).format("h a")}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Responsive>
  );
};
export default DesktopLocations;
