const { StyledSelect } = require("components/CustomSelect/CustomSelect.styled");

const CommonSelect = ({ options, currentValue, name, onChange, placeholder }) => {
  const onOptionChange = option => {
    onChange(option ? option.value : "");
  };

  return (
    <StyledSelect
      classNamePrefix="Select"
      closeMenuOnSelect={true}
      isClearable={true}
      options={options}
      name={name}
      value={options.find(option => option.value === currentValue) || null}
      onChange={onOptionChange}
      placeholder={placeholder}
    />
  );
};

export default CommonSelect;
