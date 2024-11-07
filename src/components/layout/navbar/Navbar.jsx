import { CardWidget } from "../../common/cardwidget/cardwidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="container-Navbar">
      <img src="/public/logo.jpeg " alt="logo " style={{ height: 60 }} />

      <ul className="ul-navbar">
        <li>todo</li>
        <li>remeras de basquet</li>
        <li>pelotas</li>
        <li>nike jordan</li>
      </ul>
      <CardWidget />
    </div>
  );
};
