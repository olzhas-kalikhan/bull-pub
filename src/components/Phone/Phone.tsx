import { Box, Typography } from "@mui/material";
import { FC } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import { formatPhoneNumber } from "react-phone-number-input";
type PhoneProps = {
  phoneNumber: string;
};
const Phone: FC<PhoneProps> = ({ phoneNumber }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <PhoneIcon />
      <Typography variant="h5">{formatPhoneNumber(phoneNumber)}</Typography>
    </Box>
  );
};
export default Phone;
