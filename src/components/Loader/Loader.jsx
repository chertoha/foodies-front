import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { LoaderWripper } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderWripper>
      <FadeLoader
        color={"black"}
        heght={10}
        loading={true}
        cssOverride={true}
        size={250}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </LoaderWripper>
  );
};

export default Loader;
