export default function Input({ type, name, value, onChange }) {
  return (
    <>
      <label>{name}: </label>
      <input type={type} key={name} value={value} onChange={onChange}></input>
    </>
  );
}
