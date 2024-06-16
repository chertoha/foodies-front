import { Controller, useFormContext } from "react-hook-form";
import { useGetAreasQuery } from "../../redux/areas/areasApi";
import SectionTitle from "components/SectionTitle";
import CommonSelect from "components/UIKit/CommonSelect";
import { YulpErrorMessage } from "./AddRecipeForm.styled";

const AreaSelector = () => {
  const { data: areas } = useGetAreasQuery();

  const {
    control,
    formState: { errors },
  } = useFormContext();

  if (!areas) return null;

  const options = [...areas.map(({ name }) => ({ value: name, label: name }))];

  return (
    <>
      <SectionTitle label="Area" />

      <Controller
        name="area"
        control={control}
        render={({ field: { value, onChange } }) => (
          <CommonSelect
            currentValue={value}
            options={options}
            onChange={onChange}
            placeholder="Select an area"
          />
        )}
      />
      {errors.area && <YulpErrorMessage>{errors.area.message}</YulpErrorMessage>}
    </>
  );
};
export default AreaSelector;
