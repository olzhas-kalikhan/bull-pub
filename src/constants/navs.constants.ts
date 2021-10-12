import About from "components/About";
import Drinks from "components/Drinks";
import Landing from "components/Landing";
import Locations from "components/Contacts";
import Menu from "components/Menu";

const NAVS = [
  { label: "Home", containerId: "Screen-Home", Component: Landing },
  { label: "About", containerId: "Screen-About", Component: About },
  { label: "Menu", containerId: "Screen-Menu", Component: Menu },
  { label: "Drinks", containerId: "Screen-Drinks", Component: Drinks },
  { label: "Contacts", containerId: "Screen-Contacts", Component: Locations },
];
export { NAVS };
