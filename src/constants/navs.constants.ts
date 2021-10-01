import About from "components/About";
import Landing from "components/Landing";
import Locations from "components/Locations";
import Menu from "components/Menu";

const NAVS = [
  { label: "Home", containerId: "Screen-Home", Component: Landing },
  { label: "About", containerId: "Screen-About", Component: About },
  { label: "Menu", containerId: "Screen-Menu", Component: Menu },
  { label: "Contacts", containerId: "Screen-Contacts", Component: Locations },
];
export { NAVS };
