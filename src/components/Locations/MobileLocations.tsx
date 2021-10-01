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
import { LOCATIONS } from "./locations.constants";

const MobileLocations = () => {
  const [selectedLocationIdx, setSelectedLocationIdx] = useState(0);
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedLocationIdx(parseInt(event.target.value));
  };
  return (
    <Responsive min="xs" max="md">
      <Map
        height={300}
        defaultCenter={LOCATIONS[0].coords}
        center={LOCATIONS[selectedLocationIdx].coords}
        defaultZoom={16}
      >
        {LOCATIONS.map(({ city, coords }, i) => (
          <Marker key={`${city}-${i}-coordinates`} width={50} anchor={coords} />
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
          {LOCATIONS.map(({ city }, i) => (
            <FormControlLabel
              key={`${city}-${i}`}
              value={i}
              control={<Radio />}
              label={city}
            />
          ))}
        </Box>
      </RadioGroup>
      <Typography variant="h6">
        {LOCATIONS[selectedLocationIdx].address}
      </Typography>
    </Responsive>
  );
};
export default MobileLocations;
