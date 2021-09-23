export default function InputText({ label, value, name, handleChange }) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        name={name}
        id={label}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}
