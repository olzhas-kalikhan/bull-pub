import { FC } from "react";
import { Container } from "@mui/material";
import { ContainerSX } from "./styles";

type ScreenProps = {
  centered?: boolean;
};
const Screen: FC<ScreenProps> = ({ centered, children, ...rest }) => {
  return (
    <Container
      sx={{
        ...ContainerSX,
        justifyContent: centered ? "center" : "flex-start",
      }}
      {...rest}
    >
      {children}
    </Container>
  );
};
export default Screen;
