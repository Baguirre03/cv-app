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

function experienceGenerator(company, position, responsbility, date) {
  return {
    company: company,
    position: position,
    responsbility: responsbility,
    date: date,
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
    id: 1,
  },
  {
    company: "Microsoft",
    position: "Intern",
    responsibilities: "that that",
    dateWorked: "2003-05-29",
    id: 2,
  },
  {
    company: "thirddd",
    position: "Intern",
    responsibilities: "that that",
    dateWorked: "2003-05-29",
    id: 3,
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
    const copy = experience;
    const objectFound = copy[index];
    copy[index] = { ...objectFound, [e.target.name]: e.target.value };
    console.log(copy);
    setExperience(copy);
  }

  function removeObj(obj) {
    const findIndex = experience.findIndex((object) => object.id == obj.id);
    const copy = experience;
    copy.splice(findIndex, 1);
    setExperience(copy);
  }

  return (
    <>
      <Display className="inputs">
        <Dropdown section="personal">
          <General onChange={handleName} values={personal}></General>
        </Dropdown>
        <Dropdown section="education">
          <Education onChange={handleEducation} values={education}></Education>
        </Dropdown>
        <Dropdown section="experience">
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
    </>
  );
}
