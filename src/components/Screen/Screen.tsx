import { Container } from "@mui/material";
import { ContainerSX } from "./styles";
type ScreenProps = {
  children?: JSX.Element | JSX.Element[];
  backgroundImage?: String;
  centered?: Boolean;
};
const Screen = ({ children, backgroundImage, centered }: ScreenProps) => {
  return (
    <Container sx={ContainerSX(backgroundImage, centered)}>
      {children}
    </Container>
  );
};
export default Screen;
