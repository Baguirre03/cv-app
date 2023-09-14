import { useState } from "react";
export default function Dropdown({ children, section }) {
  const [dropped, editDropped] = useState(false);

  function handleDrop() {
    return dropped ? editDropped(false) : editDropped(true);
  }

  return dropped ? (
    <div>
      <button onClick={handleDrop}>Collapse {section}</button>
      <div>{children}</div>
    </div>
  ) : (
    <div>
      <button onClick={handleDrop}>Show {section}</button>
    </div>
  );
}
