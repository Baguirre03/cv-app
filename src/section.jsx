import Input from "./input";
import { useState } from "react";

export default function General() {
  const [general, setGeneral] = useState({ name: "", email: "", phone: "" });
  console.log(general);
  function handeName(e) {
    const copy = { ...general, name: e.target.value };
    setGeneral(copy);
  }

  function handleEmail(e) {
    const copy = { ...general, email: e.target.value };
    setGeneral(copy);
  }

  function handlePhone(e) {
    const copy = { ...general, phone: e.target.value };
    setGeneral(copy);
  }

  return (
    <div>
      <Input
        type="text"
        name="Name"
        value={general.name}
        onChange={handeName}
      ></Input>
      <h1>{general.name}</h1>
      <Input
        type="text"
        name="Name"
        value={general.email}
        onChange={handleEmail}
      ></Input>
      <h1>{general.email}</h1>
      <Input
        type="text"
        name="Name"
        value={general.phone}
        onChange={handlePhone}
      ></Input>
      <h1>{general.phone}</h1>
    </div>
  );
}
