import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Responsive from "components/Responsive";
import { Map, Marker } from "pigeon-maps";
import { useState, ChangeEvent } from "react";
import { COORDINATES } from "./coordinates";

const MobileLocations = () => {
  const [selectedLocationIdx, setSelectedLocationIdx] = useState(0);
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedLocationIdx(parseInt(event.target.value));
  };
  return (
    <Responsive min="xs" max="md">
      <Map
        height={300}
        defaultCenter={COORDINATES[0].coords}
        center={COORDINATES[selectedLocationIdx].coords}
        defaultZoom={16}
      >
        {COORDINATES.map(({ location, coords }, i) => (
          <Marker
            key={`${location}-${i}-coordinates`}
            width={50}
            anchor={coords}
          />
        ))}
      </Map>
      <RadioGroup
        aria-label="Location"
        name="controlled-radio-buttons-group"
        value={selectedLocationIdx}
        onChange={handleRadioChange}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-around", mt: 2, mb: 2 }}
        >
          {COORDINATES.map((coord, i) => (
            <FormControlLabel
              key={`${coord.location}-${i}`}
              value={i}
              control={<Radio />}
              label={coord.location}
            />
          ))}
        </Box>
      </RadioGroup>
      <Typography variant="h6">
        {COORDINATES[selectedLocationIdx].address}
      </Typography>
    </Responsive>
  );
};
export default MobileLocations;
