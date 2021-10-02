import { Box } from "@mui/material";
import { FC } from "react";
import PhoneIcon from "@mui/icons-material/Phone";

import { formatPhoneNumber } from "react-phone-number-input";
import CopyButton from "components/CopyButton";
type PhoneProps = {
  phoneNumber: string;
  location?: string;
};
const Phone: FC<PhoneProps> = ({ phoneNumber }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <PhoneIcon />
      <CopyButton copyContent={formatPhoneNumber(phoneNumber)} />
    </Box>
  );
};
export default Phone;
