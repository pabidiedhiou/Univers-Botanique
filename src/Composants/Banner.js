import logo from "../images/logo.png";

import "../CSS/banner.css";
function Banner() {
  const title = "La maison Jungle";

  return (
    <div className="lmj-banner">
      <img src={logo} alt="La maison jungle" className="lmj-logo" />
      <h1 className="lmj-title">{title} </h1>
    </div>
  );
}
export default Banner;
