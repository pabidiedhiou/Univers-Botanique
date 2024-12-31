import { useState } from "react";

export default function TechnoAdd(props) {
  const [techno, setTechno] = useState({
    nomTechno: "",
    categorieTechno: "",
    descriptionTechno: "",
  });
  const { soumettre } = props;
  function handleSubmit(e) {
    e.preventDefault();
    soumettre(techno);
    setTechno({
      nomTechno: "",
      categorieTechno: "",
      descriptionTechno: "",
    });
  }
  function Changement(e) {
    const { name, value } = e.target;
    setTechno({ ...techno, [name]: value });
  }
  return (
    <div className="technoAdd">
      <h1>Ajouter une technologie</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="nomTechno">Nom:</label>
        <br />
        <input
          type="text"
          id="nomTechno"
          name="nomTechno"
          value={techno.nomTechno}
          onChange={(e) => Changement(e)}
        />
        <br />
        <label htmlFor="categorieTechno"> Catégorie</label>
        <br />
        <select
          id="categorieTechno"
          name="categorieTechno"
          value={techno.categorieTechno}
          onChange={(e) => Changement(e)}
        >
          <option value="">Sélectionner une catégorie</option>

          <option value="front" name="">
            Front
          </option>
          <option value="back">Back</option>
          <option value="full">Full Stack</option>
          <option value="">Autres</option>
        </select>
        <br />
        <label htmlFor="descriptionTechno">Description: </label>
        <br />
        <textarea
          type="textarea"
          id="descriptionTechno"
          rows="10"
          cols="30"
          name="descriptionTechno"
          value={techno.descriptionTechno}
          onChange={(e) => Changement(e)}
        />
        <br />
        <button className="ajoute-techno">Ajouter</button>
      </form>
    </div>
  );
}
