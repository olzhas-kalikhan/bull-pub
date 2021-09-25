import { Grid, Typography, ButtonBase } from "@mui/material";
import { Box } from "@mui/system";
import Responsive from "components/Responsive";
import { Map, Marker } from "pigeon-maps";

import { COORDINATES } from "./coordinates";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
const DesktopLocations = () => {
  return (
    <Responsive min="md" max="xl">
      <Grid container>
        {COORDINATES.map(({ location, coords, address }, i) => (
          <Grid xs={12} md={6}>
            <Box sx={{ padding: 2 }}>
              <Typography variant="h5" textAlign="center">
                {location}
              </Typography>
              <Map height={300} defaultCenter={coords} defaultZoom={16}>
                <Marker width={50} anchor={coords} />
              </Map>
              <ButtonBase
                sx={{ width: "100%", p: 1 }}
                onClick={() => {
                  navigator.clipboard.writeText(address);
                }}
              >
                <ContentCopyIcon sx={{ mr: 1 }} />
                <Typography variant="h6">{address}</Typography>
              </ButtonBase>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Responsive>
  );
};
export default DesktopLocations;
