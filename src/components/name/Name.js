import { useState } from "react";

function Name() {
  const [name, setName] = useState("Malika❤️");

  function onNameChange(event) {
    setName(event.target.value)
  }

  return (
    <div className="Name">
      <h2>Your name "{name}" is {name.length} characters long</h2>
      <input type="text" value={name} onChange={onNameChange}/>
    </div>
  );
}

export default Name;
