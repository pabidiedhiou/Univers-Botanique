import "../CSS/categories.css";
export default function Categories({
  categories,
  activeCategories,
  setActiveCategories,
}) {
  return (
    <div className="lmj-categories">
      Rechercher par catégorie|
      <select
        value={activeCategories}
        onChange={(e) => setActiveCategories(e.target.value)}
        className="lmj-categories-select"
      >
        <option value="">---</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <br />
      <br />
      <button onClick={() => setActiveCategories("")}>Rénitialiser</button>
    </div>
  );
}
