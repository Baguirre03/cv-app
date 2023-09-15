import { useState } from "react";

export default function Dropdown({
  children,
  section,
  addExperience,
  experience,
  length,
}) {
  const [dropped, editDropped] = useState(false);
  const capped = length >= 3;

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
    <div className="shown-form">
      <div className="top">
        <h3>{section}</h3>
        <button onClick={handleDrop} className="collapse">
          Arrow-two
        </button>
      </div>
      <div className="form-display">
        {children} <Experience></Experience>
      </div>
      <ExperienceCap></ExperienceCap>
    </div>
  ) : (
    <div className="drop-down">
      <h3>{section}</h3>
      <button onClick={handleDrop}>Down Arrow</button>
    </div>
  );
}
