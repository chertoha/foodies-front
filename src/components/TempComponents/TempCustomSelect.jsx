import React from "react";
import { StyledSelect } from "./CustomSelect.styled";

const TempCustomSelect = React.forwardRef(
  ({ name, options, value, onChange, placeholder }, ref) => {
    const handleChange = selectedOption => {
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
        ref={ref}
      />
    );
  }
);

export default TempCustomSelect;
