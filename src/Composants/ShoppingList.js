import { plantList } from "../datas/plantList";
import "./PlantItem";
import "../CSS/shoppingList.css";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import { useState } from "react";

export default function ShoppingList({ panier, modifiePanier }) {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  const [activeCategories, setActiveCategories] = useState("");

  function ajouterAuPanier(nom, prix) {
    const planteConcernee = panier.find((plant) => plant.nom === nom);
    if (planteConcernee) {
      const planteConcerneeFiltreDuPanier = panier.filter(
        (plant) => plant.nom !== nom
      );
      modifiePanier([
        ...planteConcerneeFiltreDuPanier,
        { nom, prix, quantite: planteConcernee.quantite + 1 },
      ]);
    } else {
      modifiePanier([...panier, { nom, prix, quantite: 1 }]);
    }
  }
  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        activeCategories={activeCategories}
        setActiveCategories={setActiveCategories}
      />
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !activeCategories || activeCategories === category ? (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={name}
                water={water}
                light={light}
                price={price}
              />
              <button onClick={() => ajouterAuPanier(name, price)}>
                Ajouter dans le panier{" "}
              </button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}
