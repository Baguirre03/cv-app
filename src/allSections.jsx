import { useState } from "react";
import { Education, Experience, General } from "./section.jsx";
import Display from "./display.jsx";

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

const initialExperience = {
  company: "Skillsoft",
  position: "Intern",
  responsibilities: "this this",
  dateWorked: "2003-05-29",
  id: 2,
};

export default function Sections() {
  const [personal, setPersonal] = useState(iniitalName);
  const [education, setEducation] = useState(initalSchool);
  const [experience, setExperience] = useState(initialExperience);

  function handleName(e) {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  }
  function handleEducation(e) {
    setEducation({ ...education, [e.target.name]: e.target.value });
  }

  function handleExperience(e) {
    console.log(experience);
    setExperience({ ...experience, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Display>
        <General onChange={handleName} values={personal}></General>
        <Education onChange={handleEducation} values={education}></Education>
        <Experience
          onChange={handleExperience}
          values={experience}
        ></Experience>
      </Display>
      <Display>
        {
          <div key={personal.id}>
            <h1>{personal.name}</h1>
            <h1>{personal.email}</h1>
            <h1>{personal.phone}</h1>
          </div>
        }
        {
          <div key={education.id}>
            <h1>{education.school}</h1>
            <h1>{education.tos}</h1>
            <h1>{education.dos}</h1>
          </div>
        }
        {
          <div key={experience.id}>
            <h1>{experience.company}</h1>
            <h1>{experience.position}</h1>
            <h1>{experience.responsibilities}</h1>
            <h1>{experience.dateWorked}</h1>
          </div>
        }
      </Display>
    </>
  );
}
