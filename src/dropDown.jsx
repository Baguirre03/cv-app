import { useState } from "react";

export default function Dropdown({
  children,
  section,
  addExperience,
  experience,
}) {
  const [dropped, editDropped] = useState(false);

  function handleDrop() {
    return dropped ? editDropped(false) : editDropped(true);
  }

  function Experience() {
    return experience ? (
      <button onClick={addExperience}>Add Experience</button>
    ) : null;
  }

  return dropped ? (
    <div>
      <button onClick={handleDrop}>Collapse {section}</button>
      <div>
        {children} <Experience></Experience>
      </div>
    </div>
  ) : (
    <div>
      <button onClick={handleDrop}>Show {section}</button>
    </div>
  );
}
