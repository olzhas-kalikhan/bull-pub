import Screen from "components/Screen";
import { FC } from "react";
import SectionTitle from "components/SectionTitle";
import aboutImg2 from "assets/img/about2.jpg";
import { MENU_CATEGORIES } from "constants/menu.constants";
import MenuDisplay from "components/MenuDisplay";
const Menu: FC = () => {
  return (
    <Screen>
      <SectionTitle title="menu" bgImage={aboutImg2} />
      <MenuDisplay categories={MENU_CATEGORIES} />
    </Screen>
  );
};
export default Menu;
