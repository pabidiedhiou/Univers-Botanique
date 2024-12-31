import CareScale from "./CareScale";
//
import "../CSS/plantItem.css";

export default function PlantItem({ cover, name, water, light, price }) {
  //
  function handleClick(e) {
    console.log("Ceci est mon event ", e);
  }
  //
  return (
    <li className="lmj-plant-item" onClick={() => handleClick(name)}>
      <span className="lmj-plant-item-price">{price}frcfa</span>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="light" scaleValue={light} />
        <CareScale careType="water" scaleValue={water} />
      </div>
    </li>
  );
}
