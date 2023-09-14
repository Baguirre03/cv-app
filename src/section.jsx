import Display from "./display";
import Input from "./input";
import { useState } from "react";

function General({ onChange, handleName, handleEmail, handlePhone, values }) {
  return (
    <div>
      <Input
        type="text"
        name="Name"
        value={values.name}
        onChange={handleName}
      ></Input>

      <Input
        type="text"
        name="Email"
        value={values.email}
        onChange={handleEmail}
      ></Input>

      <Input
        type="text"
        name="Phone-number"
        value={values.phone}
        onChange={handlePhone}
      ></Input>
    </div>
  );
}

function Education() {
  const [general, setGeneral] = useState({ school: "", title: "", date: "" });
  function handleSchool(e) {
    const copy = { ...general, school: e.target.value };
    setGeneral(copy);
  }

  function handleTitle(e) {
    const copy = { ...general, title: e.target.value };
    setGeneral(copy);
  }

  function handleDate(e) {
    const copy = { ...general, date: e.target.value };
    setGeneral(copy);
  }

  return (
    <div>
      <Input
        type="text"
        name="School"
        value={general.school}
        onChange={handleSchool}
      ></Input>

      <Input
        type="text"
        name="Title-of-study"
        value={general.title}
        onChange={handleTitle}
      ></Input>

      <Input
        type="date"
        name="Date-of-Study"
        value={general.date}
        onChange={handleDate}
      ></Input>
      <Display>
        <h1>{general.school}</h1>
        <h1>{general.title}</h1>
        <h1>{general.date}</h1>
      </Display>
    </div>
  );
}

export { Education, General };
