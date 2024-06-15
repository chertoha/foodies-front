// import CustomSelect from "components/CustomSelect";
// import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useGetAreasQuery } from "../../redux/areas/areasApi";
import SectionTitle from "components/SectionTitle";
import CommonSelect from "components/UIKit/CommonSelect";

// const AreaSelector = ({ register, errors }) => {
const AreaSelector = () => {
  const { data: areas } = useGetAreasQuery();

  const {
    control,
    formState: { errors },
  } = useFormContext();

  if (!areas) return null;

  const options = [...areas.map(({ name }) => ({ value: name, label: name }))];

  //   const [selectedArea, setSelectedArea] = useState("");

  //   const handleAreaChange = (_, value) => {
  //     setSelectedArea(value);
  //   };
  //   console.log(errors);
  return (
    // <div>areas</div>
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
      {/* <CustomSelect
        options={area.map(name => ({ value: name, label: name }))}
        value={selectedArea}
        onChange={handleAreaChange}
        placeholder="Select an area"
      /> */}
      {/* <select
        defaultValue="default"
        {...register("area")}
      >
        <option
          value="default"
          disabled
        >
          Select an area
        </option>
        {data?.map(category => (
          <option
            key={category._id}
            value={category.name}
          >
            {category.name}
          </option>
        ))}
      </select> */}
      {errors.area && <p>{errors.area.message}</p>}
    </>
  );
};
export default AreaSelector;
