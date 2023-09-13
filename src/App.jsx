import Input from "./input";
import { useState } from "react";

export default function App() {
  const [display, setDisplay] = useState("");
  function handleChange(e) {
    setDisplay(e.target.value);
  }
  return (
    <div>
      <Input
        type="text"
        name="name"
        value={display}
        onChange={handleChange}
      ></Input>
      <h1>{display}</h1>
    </div>
  );
}
