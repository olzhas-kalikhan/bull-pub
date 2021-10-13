import Screen from "components/Screen";
import SectionTitle from "components/SectionTitle";
import aboutImg4 from "assets/img/about4.jpg";
import { DRINK_CATEGORIES } from "constants/drinks.constants";
import MenuDisplay from "components/MenuDisplay";
const Drinks = () => {
  return (
    <Screen>
      <SectionTitle title="drinks" bgImage={aboutImg4} />
      <MenuDisplay categories={DRINK_CATEGORIES} />
    </Screen>
  );
};

export default Drinks;
