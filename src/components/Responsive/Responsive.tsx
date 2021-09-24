import { FC } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { Breakpoint } from "@mui/material";
type ResponsiveProps = {
  min: Breakpoint | number;
  max: Breakpoint | number;
};

const Responsive: FC<ResponsiveProps> = ({ min, max, children }) => {
  const theme = useTheme();
  const deviceMatch = useMediaQuery(theme.breakpoints.between(min, max));
  return <>{deviceMatch && children}</>;
};
export default Responsive;
