import { useState, useEffect } from "react";
import "../CSS/cart.css";
export default function Cart({ panier, modifiePanier }) {
  //
  const [isOpen, setIsOpen] = useState(true);
  const total = panier.reduce(
    (acc, plantType) => acc + plantType.quantite * plantType.prix,
    0
  );
  //

  useEffect(() => {
    document.title = `PABISME: ${total}fr d'achats`;
  }, [total]);
  return isOpen ? (
    <div className="lmj-cart">
      <button
        onClick={() => setIsOpen(false)}
        className="lmj-cart-toggle-button"
      >
        Fermer le Panier
      </button>
      {panier.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {panier.map(({ nom, prix, quantite }, index) => (
              <div key={`${nom}-${index}`}>
                {nom}
                {prix} frcfa x {quantite}
              </div>
            ))}
          </ul>
          <h3>Total : {total}frcfa</h3>
          <button
            onClick={() => modifiePanier([])}
            className="lmj-cart-add-button"
          >
            Vider le Panier
          </button>
        </div>
      ) : (
        <div>Votre Panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        onClick={() => setIsOpen(true)}
        className="lmj-cart-toggle-button"
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}
