import React from "react";
// import { useAuth } from "hooks/useAuth";

import FadeLoader from "react-spinners/FadeLoader";
import { LoaderWripper } from "./Loader.styled";

const Loader = () => {
  // const { isLoading } = useAuth();

  // document.body.classList.add("no-scroll");
  // if (!isLoading) {
  //   document.body.classList.remove("no-scroll");
  // }

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
