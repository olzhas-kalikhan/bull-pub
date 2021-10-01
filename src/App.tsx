import { Container } from "@mui/material";
import { Element } from "react-scroll";
import NavBar from "components/NavBar";
import "./App.css";
import { NAVS } from "constants/navs.constants";
import BackgroundCarousel from "components/BackgroundTransition";

function App() {
  return (
    <Container disableGutters maxWidth={false}>
      <BackgroundCarousel />
      <NavBar />
      {NAVS.map(({ Component, containerId }, i) => (
        <Element key={containerId} name={containerId}>
          <Component />
        </Element>
      ))}
    </Container>
  );
}

export default App;
//041015
//#051937
