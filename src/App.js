import Banner from "./Composants/Banner";
import Cart from "./Composants/Cart";
import ShoppingList from "./Composants/ShoppingList";
import Fouter from "./Composants/Fouter";
import { useState } from "react";
import "./CSS/layout.css";
export default function App() {
  //
  const [panier, modifiePanier] = useState([]);
  //
  return (
    <div>
      <Banner />
      <div className="lmj-layout-inner">
        <Cart panier={panier} modifiePanier={modifiePanier} />
        <ShoppingList panier={panier} modifiePanier={modifiePanier} />
      </div>
      <Fouter />
    </div>
  );
}
