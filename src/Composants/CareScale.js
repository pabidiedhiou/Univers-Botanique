import Sun from "../images/sun.svg";
import Water from "../images/water.svg";

const quantite = {
  1: "peu",
  2: "modérément",
  3: "beaucoup",
};
export default function CareScale({ scaleValue, careType }) {
  //
  const echelle = [1, 2, 3];
  //
  const scaleType =
    careType === "water" ? (
      <img src={Water} alt="water-icon" />
    ) : (
      <img src={Sun} alt="sun-icon" />
    );
  //
  return (
    <div
      onClick={() =>
        alert(
          `Cette plante requiert ${quantite[scaleValue]} ${
            careType === "water" ? "d'arrosage" : "de lumière"
          }`
        )
      }
    >
      {echelle.map((elemEchelle) =>
        scaleValue >= elemEchelle ? (
          <span key={elemEchelle.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}
