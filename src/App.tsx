import { useEffect } from "react";
import { Container, Divider } from "@mui/material";
import { Element } from "react-scroll";
import NavBar from "components/NavBar";
import "./App.css";
import { NAVS } from "constants/navs.constants";
import BackgroundCarousel from "components/BackgroundTransition";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "components/Footer";
function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container maxWidth={false}>
      <BackgroundCarousel />
      <NavBar />
      {NAVS.map(({ Component, containerId }, i) => (
        <Element key={containerId} name={containerId}>
          <Component />
        </Element>
      ))}
      <Divider />
      <Footer />
    </Container>
  );
}

export default App;
//041015
//#051937
