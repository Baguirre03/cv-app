import { useState } from "react";
import {
  Education,
  EducationDisplay,
  Experience,
  General,
  PersonalDisplay,
  ExperienceDisplay,
} from "./section.jsx";
import Display from "./display.jsx";
import Dropdown from "./dropDown.jsx";

function experienceGenerator(company, position, responsbility, date, id) {
  return {
    company: company,
    position: position,
    responsbility: responsbility,
    date: date,
    id: id,
  };
}

const iniitalName = {
  name: "John",
  email: "test",
  phone: "test",
  id: 0,
};

const initalSchool = {
  school: "Loyola",
  tos: "Business administration",
  dos: "2003-05-03",
  id: 1,
};

const initialExperience = [
  {
    company: "Skillsoft",
    position: "Intern",
    responsibilities: "this this",
    dateWorked: "2003-05-29",
    id: crypto.randomUUID(),
  },
];

export default function AllInformation() {
  const [personal, setPersonal] = useState(iniitalName);
  const [education, setEducation] = useState(initalSchool);
  const [experience, setExperience] = useState(initialExperience);

  function handleName(e) {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  }
  function handleEducation(e) {
    setEducation({ ...education, [e.target.name]: e.target.value });
  }

  function handleExperience(e, index) {
    const copy = [...experience];
    let objectCopy = { ...experience[index] };
    const newObject = { ...objectCopy, [e.target.name]: e.target.value };
    copy[index] = newObject;
    setExperience(copy);
  }

  function removeObj(index) {
    const copy = [...experience];
    copy.splice(index, 1);
    setExperience(copy);
  }

  function addExperience() {
    const copy = [...experience];
    copy.push(experienceGenerator("", "", "", "", crypto.randomUUID()));
    setExperience(copy);
  }

  return (
    <>
      <h1 className="title">CV-App</h1>
      <div className="display-container">
        <Display className="inputs">
          <Dropdown section="personal">
            <General onChange={handleName} values={personal}></General>
          </Dropdown>
          <Dropdown section="education">
            <Education
              onChange={handleEducation}
              values={education}
            ></Education>
          </Dropdown>
          <Dropdown
            section="experience"
            addExperience={addExperience}
            experience={true}
            length={experience.length}
          >
            <Experience
              onChange={handleExperience}
              remove={removeObj}
              values={experience}
            ></Experience>
          </Dropdown>
        </Display>

        <Display className="resume">
          <PersonalDisplay values={personal}></PersonalDisplay>
          <EducationDisplay values={education}></EducationDisplay>
          <ExperienceDisplay values={experience}></ExperienceDisplay>
        </Display>
      </div>
    </>
  );
}
