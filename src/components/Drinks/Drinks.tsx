import Screen from "components/Screen";
import SectionTitle from "components/SectionTitle";
import DesktopMenu from "components/Menu/DesktopMenu";
import aboutImg4 from "assets/img/about4.jpg";
import { DRINK_CATEGORIES } from "constants/drinks.constants";
const Drinks = () => {
  return (
    <Screen>
      <SectionTitle title="drinks" bgImage={aboutImg4} />
      <DesktopMenu categories={DRINK_CATEGORIES} />
    </Screen>
  );
};

export default Drinks;
