export default function Input({
  label,
  type,
  name,
  value,
  onChange,
  handleRemove,
  index,
  parentId,
}) {
  function Label() {
    return label != null ? <label>{label}: </label> : null;
  }
  function Button() {
    return name === "responsibilities" ? (
      <button
        onClick={(e) => {
          e.preventDefault();
          handleRemove(e, index, parentId);
        }}
      >
        Remove responsibility
      </button>
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
