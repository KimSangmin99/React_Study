import { NavLink, Outlet } from "react-router-dom";
import Search from "./Search";

const Menu = () => {
  const styles = ({ isActive }) => {
    return {
      color: isActive ? "red" : "blue",
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/myaccount">MyAccount</NavLink>
          </li>
        </ul>
      </nav>
      뉴스 검색 : <Search />
      <hr />
      <Outlet />
    </div>
  );
};

export default Menu;
