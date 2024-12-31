import { useState } from "react";
export default function QuestionForm() {
  //
  const [inputValue, setInputValue] = useState("Posez votre question ici svp");
  //
  return (
    <div>
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <button onClick={() => alert(inputValue)}>Alerter</button>
    </div>
  );
}
