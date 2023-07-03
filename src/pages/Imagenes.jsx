import logo from "../assets/logoB.png";
import logo1 from "../assets/logoChicoloapan.png";


import "../css/inicioseccion.css";

export function Logo() {
  return (
    <div className="logoChicoloapan">
      <img src={logo} alt="logo Chocolopan"></img>
    </div>
  );
}

export function Logo1() {
  return (
    <div className="logoChicoloapan1">
      <img src={logo1} alt="logo "></img>
    </div>
  );
}
