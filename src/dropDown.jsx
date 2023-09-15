import { useState } from "react";

export default function Dropdown({
  children,
  section,
  addExperience,
  experience,
  length,
}) {
  const [dropped, editDropped] = useState(false);
  let capped = length >= 3;

  function handleDrop() {
    return dropped ? editDropped(false) : editDropped(true);
  }

  function Experience() {
    return experience && !capped ? (
      <button onClick={addExperience}>Add Experience</button>
    ) : null;
  }

  function ExperienceCap() {
    return capped ? <h1>no more!</h1> : null;
  }

  return dropped ? (
    <div>
      <button onClick={handleDrop}>Collapse {section}</button>
      <div>
        {children} <Experience></Experience>
      </div>
      <ExperienceCap></ExperienceCap>
    </div>
  ) : (
    <div>
      <button onClick={handleDrop}>Show {section}</button>
    </div>
  );
}
