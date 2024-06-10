import { useField, useFormikContext } from "formik";
import { StyledSelect } from "./CustomSelect.styled";

const CustomSelect = ({ label, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);

  const handleChange = option => {
    console.log(`Setting ${field.name} to`, option ? option.value : ""); // Log the change
    setFieldValue(field.name, option ? option.value : "");
  };

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <StyledSelect
        classNamePrefix="Select"
        closeMenuOnSelect={true}
        isClearable={true}
        options={props.options}
        name={field.name}
        value={props.options ? props.options.find(option => option.value === field.value) : ""}
        onChange={handleChange}
        placeholder={props.placeholder}
      />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

export default CustomSelect;
