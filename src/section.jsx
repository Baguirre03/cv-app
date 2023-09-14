import Display from "./display";
import Input from "./input";
import { useState } from "react";

function General({ onChange, values }) {
  return (
    <div>
      <Input
        type="text"
        name="name"
        label="Name"
        value={values.name}
        onChange={onChange}
      ></Input>

      <Input
        type="text"
        name="email"
        label="Email"
        value={values.email}
        onChange={onChange}
      ></Input>

      <Input
        type="text"
        name="phone"
        label="Phone-number"
        value={values.phone}
        onChange={onChange}
      ></Input>
    </div>
  );
}

function Education({ onChange, values }) {
  return (
    <div>
      <Input
        type="text"
        name="school"
        label="School"
        value={values.school}
        onChange={onChange}
      ></Input>

      <Input
        type="text"
        name="tos"
        label="Title of Study"
        value={values.tos}
        onChange={onChange}
      ></Input>

      <Input
        type="date"
        name="dos"
        label="Date started"
        value={values.dos}
        onChange={onChange}
      ></Input>
    </div>
  );
}

function Experience({ onChange, values }) {
  return (
    <div>
      <Input
        type="text"
        name="comapny"
        label="Company"
        value={values.company}
        onChange={onChange}
      ></Input>
      <Input
        type="text"
        name="title"
        label="Title"
        value={values.position}
        onChange={onChange}
      ></Input>
      <Input
        type="next"
        name="responsibilities"
        label="responsbilites"
        value={values.responsibilities}
        onChange={onChange}
      ></Input>
      <Input
        type="date"
        name="dateWorked"
        label="Dateworked"
        value={values.dateWorked}
        onChange={onChange}
      ></Input>
    </div>
  );
}

export { Education, General, Experience };
