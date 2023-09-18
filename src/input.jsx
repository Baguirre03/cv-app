export default function Input({ label, type, name, value, onChange }) {
  function Label() {
    return <label>{label}: </label>;
  }
  function Button() {
    return name === "responsibilities" ? (
      <button>Remove responsibility</button>
    ) : null;
  }

  return (
    <div className="form-input">
      <Label></Label>
      <input
        placeholder={label}
        name={name}
        type={type}
        key={name}
        value={value}
        onChange={onChange}
      ></input>
      <Button></Button>
    </div>
  );
}
