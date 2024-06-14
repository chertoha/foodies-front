import CustomSelect from "components/CustomSelect";
import React, { useState } from "react";
import { useGetAreasQuery } from "../../redux/areas/areasApi";
import SectionTitle from "components/SectionTitle";

const AreaSelector = ({ register, errors }) => {
  const { data } = useGetAreasQuery();

  const [selectedArea, setSelectedArea] = useState("");

  const handleAreaChange = (_, value) => {
    setSelectedArea(value);
  };
  console.log(errors);
  return (
    // <div>areas</div>
    <>
      <SectionTitle label="Areas" />
      {/* <CustomSelect
        options={data?.map(({ name }) => ({ value: name, label: name }))}
        value={selectedArea}
        onChange={handleAreaChange}
        placeholder="Select an area"
        {...register("area")}
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
      </select>
      {errors.category && <p>{errors.category.message}</p>} */}
    </>
  );
};
export default AreaSelector;
