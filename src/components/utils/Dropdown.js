export default function Dropdown({
  label,
  selected,
  name,
  options,
  handleChange,
}) {
  const defaultOption = (
    <option
      value={"Please select an option"}
      key={"Please select an option"}
      disabled
      hidden
    >
      Select an option
    </option>
  );

  const opts = [
    defaultOption,
    options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    )),
  ];

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <select
        id={label}
        value={
          options.includes(selected) ? selected : "Please select an option"
        }
        name={name}
        onChange={handleChange}
      >
        {opts}
      </select>
    </>
  );
}
