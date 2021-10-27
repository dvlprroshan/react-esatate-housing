import { capitalize } from "@/helpers/string";
import { FaPlus } from "react-icons/fa";
import useWindowScrollPosition from "@/hooks/useWindowScrollPosition";

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

  // returning main navbar structure
  const winSrollPos = useWindowScrollPosition();

  return (
    <div className={`navbar ${winSrollPos > 60 ? "topAttached" : ""}`}>
      <div className="brand_logo"></div>
      <ul className="menu_links">
        {MenuItem.map(
          (elm: NavbarAvailMenu): JSX.Element => (
            <li
              key={elm}
              className={`${elm === activePageMenu ? "activeMenuItem" : ""}`}
            >
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
