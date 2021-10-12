import { FC } from "react";
import { Box, Typography } from "@mui/material";
import Availability from "components/Availability";
import CopyButton from "components/CopyButton";
import Phone from "components/Phone";
import { LocationDetails } from "constants/locations.constants";

type LocationProps = {
  details: LocationDetails;
};
const Location: FC<LocationProps> = ({ details }) => {
  const { city, address, phone, schedule } = details;
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" textAlign="left">
        {city}
      </Typography>
      <CopyButton copyContent={address} />
      <Phone phoneNumber={phone} />
      <Availability schedule={schedule} />
    </Box>
  );
};

export default Location;
