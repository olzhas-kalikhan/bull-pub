import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Responsive from "components/Responsive";
import { Map, Marker, Point } from "pigeon-maps";
import { useState, ChangeEvent } from "react";

type Coordinates = {
  location: string;
  coords: Point;
  address: string;
};
const COORDINATES: Coordinates[] = [
  {
    location: "Mississauga",
    coords: [43.6624908, -79.5929195],
    address: "2800 Skymark Ave, Mississauga, ON L4W 5A6, Canada",
  },
  {
    location: "Etobicoke",
    coords: [43.6452552, -79.5202029],
    address: "3313 Bloor St W, Etobicoke, ON M8X 1E7, Canada",
  },
];
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
