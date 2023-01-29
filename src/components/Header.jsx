import React from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav>
        <Link to="">
          <button className={css.nav_btn}>Home</button>
        </Link>
        <Link to="/newRecipe">
          <button className={css.nav_btn}>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
