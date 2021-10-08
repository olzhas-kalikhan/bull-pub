import Screen from "components/Screen";
import { FC } from "react";

import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import SectionTitle from "components/SectionTitle";
import aboutImg2 from "assets/img/about2.jpg";
import { MENU_CATEGORIES } from "constants/menu.constants";
const Menu: FC = () => {
  return (
    <Screen>
      <SectionTitle title="menu" bgImage={aboutImg2} />
      <MobileMenu />
      <DesktopMenu categories={MENU_CATEGORIES} />
    </Screen>
  );
};
export default Menu;
