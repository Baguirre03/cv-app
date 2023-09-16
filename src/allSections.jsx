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

function experienceGenerator(
  company,
  position,
  responsbility,
  location,
  dateStarted,
  dateEnded,
  id,
) {
  return {
    company: company,
    position: position,
    responsbility: responsbility,
    location: location,
    dateStarted: dateStarted,
    dateEnded: dateEnded,
    id: id,
  };
}

const iniitalName = {
  name: "",
  email: "",
  phone: "",
  id: 0,
};

const initalSchool = {
  school: "",
  location: "",
  tos: "",
  dos: "",
  id: 1,
};

const initialExperience = [
  {
    company: "",
    position: "",
    responsibilities: "",
    location: "",
    dateStarted: "",
    dateEnded: "",
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
    copy.push(experienceGenerator("", "", "", "", "", "", crypto.randomUUID()));
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
          <div className="experience">
            <h3>Experience</h3>
            <hr></hr>
            <ExperienceDisplay values={experience}></ExperienceDisplay>
          </div>
        </Display>
      </div>
    </>
  );
}
