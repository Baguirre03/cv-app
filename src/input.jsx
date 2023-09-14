export default function Input({ type, name, value, onChange, index }) {
  return (
    <>
      <label>{name}: </label>
      <input type={type} key={name} value={value} onChange={onChange}></input>
    </>
  );
}
