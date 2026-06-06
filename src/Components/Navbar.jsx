// Components/Navbar.jsx

import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function Navbar() {
  const title = useContext(UserContext);

  return (
    <nav className="navbar">
      <h1>{title}</h1>
    </nav>
  );
}

export default Navbar;
