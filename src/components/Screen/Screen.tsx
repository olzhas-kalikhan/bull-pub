import { FC } from "react";
import { Container, ContainerProps } from "@mui/material";
import { ContainerSX } from "./styles";
type ScreenProps = ContainerProps & {
  children?: JSX.Element | JSX.Element[];
  backgroundColor?: string;
  backgroundImage?: string;
};
const Screen: FC<ScreenProps> = ({
  children,
  backgroundColor,
  backgroundImage,
  ...rest
}) => {
  return (
    <Container
      sx={{
        ...ContainerSX,
        backgroundColor: backgroundColor || "rgba(5, 25, 55,0.9)",
        backgroundImage,
      }}
      maxWidth={false}
      {...rest}
    >
      <Container sx={{ m: "auto" }}>{children}</Container>
    </Container>
  );
};
export default Screen;
