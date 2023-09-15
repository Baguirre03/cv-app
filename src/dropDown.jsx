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
          <svg
            className="arrow-up"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>arrow-down-drop-circle</title>
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M7,10L12,15L17,10H7Z" />
          </svg>
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
      <button className="collapse" onClick={handleDrop}>
        <svg
          className="drop-down-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>arrow-down-drop-circle</title>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M7,10L12,15L17,10H7Z" />
        </svg>
      </button>
    </div>
  );
}
