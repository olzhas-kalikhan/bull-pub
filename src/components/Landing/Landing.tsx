import React from "react";
import Screen from "components/Screen";
import BullTitle from "components/BullTitle";
import Nav from "components/Nav";
import bgImage from "assets/img/backgroundImage.png";
const Landing = () => {
  return (
    <Screen backgroundImage={bgImage} centered>
      <BullTitle />
      <Nav />
    </Screen>
  );
};
export default Landing;
