export default function Input({ label, type, name, value, onChange }) {
  return (
    <>
      <label>{label}: </label>
      <input
        name={name}
        type={type}
        key={name}
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
}
