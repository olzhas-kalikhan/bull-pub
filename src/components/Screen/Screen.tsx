import { FC } from "react";
import { Container } from "@mui/material";
import { ContainerSX } from "./styles";

type ScreenProps = {
  centered?: boolean;
  noMinHeight?: boolean;
};
const Screen: FC<ScreenProps> = ({
  centered,
  children,
  noMinHeight,
  ...rest
}) => {
  return (
    <Container
      sx={{
        ...ContainerSX,
        justifyContent: centered ? "center" : "flex-start",
        minHeight: noMinHeight ? "auto" : "100vh",
      }}
      {...rest}
    >
      {children}
    </Container>
  );
};
export default Screen;
