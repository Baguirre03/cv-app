import Display from "./display.jsx";
import { Education, General } from "./section.jsx";
import { useState } from "react";
import Input from "./input.jsx";

function experienceGenerator(company, position, responsbility, date) {
  return {
    company: company,
    position: position,
    responsbility: responsbility,
    date: date,
  };
}

const iniitalName = {
  name: "hello",
  email: "test",
  phone: "test",
  id: 0,
};

export default function Sections() {
  const [name, setName] = useState(iniitalName);

  function handleName(e) {
    const copy = { ...name, name: e.target.value };
    setName(copy);
  }

  function handleMail(e) {
    const copy = { ...name, email: e.target.value };
    setName(copy);
  }

  function handlePhone(e) {
    const copy = { ...name, phone: e.target.value };
    setName(copy);
  }

  return (
    <>
      <Display>
        <General
          handleName={handleName}
          handleEmail={handleMail}
          handlePhone={handlePhone}
          // onChange={handleName}
          values={name}
        ></General>
      </Display>
      <Display>
        {
          <div key={name.id}>
            <h1>{name.name}</h1>
            <h1>{name.email}</h1>
            <h1>{name.phone}</h1>
          </div>
        }
      </Display>
    </>
  );
}
