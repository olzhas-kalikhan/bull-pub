import Landing from "components/Landing";
import { Container } from "@mui/material";
import Menu from "components/Menu";
import { Element } from "react-scroll";
import Locations from "components/Locations";
function App() {
  return (
    <Container sx={{ padding: 0 }}>
      <Element name="Landing">
        <Landing />
      </Element>

      <Element name="Menu">
        <Menu />
      </Element>

      <Element name="Locations">
        <Locations />
      </Element>
    </Container>
  );
}

export default App;
