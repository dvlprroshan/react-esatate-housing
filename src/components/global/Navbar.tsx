import { capitalize } from "@/helpers/string";
import { UIEvent, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

// navbar available menu items
export type NavbarAvailMenu =
  | "home"
  | "about"
  | "contact"
  | "properties"
  | "search";

// navbar props type
type NavbarProps = {
  activePageMenu: NavbarAvailMenu;
};

// main navbar component
const Navbar = ({ activePageMenu }: NavbarProps): JSX.Element => {
  // list of menu items
  const MenuItem: Array<NavbarAvailMenu> = [
    "home",
    "about",
    "contact",
    "properties",
    "search",
  ];
  const [isTopAttached, setIsTopAttacted] = useState<boolean>(false);
  // returning main navbar structure

  // use browser api
  typeof window !== "undefined"
    ? (($: Window) => {
        $.addEventListener("scroll", (e: Event) => {});
      })(window)
    : 0;

  return (
    <div className={`navbar ${isTopAttached ? "topAttached" : ""}`}>
      <div className="brand_logo"></div>
      <ul className="menu_links">
        {MenuItem.map(
          (elm: string): JSX.Element => (
            <li key={elm} className={`elm===activePageMenu?:"ds":""}`}>
              <a href={`/${elm}`}> {capitalize(elm)}</a>
            </li>
          )
        )}
      </ul>
      <div className="right_btn">
        <a href="/log" className="login">
          Login
        </a>
        <a href="/add-properties" className="add_properties">
          <FaPlus />
          Properties
        </a>
      </div>
    </div>
  );
};

export default Navbar;
