import { StyledSelect } from "./CustomSelect.styled";

const CustomSelect = ({ name, options, value, onChange, placeholder }) => {
  const handleChange = selectedOption => {
    // console.log(`Setting ${name} to ${selectedOption ? selectedOption.value : ""}`);
    onChange(name, selectedOption ? selectedOption.value : "");
  };

  return (
    <StyledSelect
      classNamePrefix="Select"
      closeMenuOnSelect={true}
      isClearable={true}
      options={options}
      name={name}
      value={options.find(option => option.value === value) || null}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default CustomSelect;
