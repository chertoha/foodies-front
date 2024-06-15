import { CircleLoader } from "react-spinners";
// import { RingLoader } from "react-spinners";
import { LoaderWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderWrapper>
      {/* <RingLoader
        color="#2eb7e9"
        size={50}
      /> */}
      <CircleLoader
        color="#2eb7e9"
        size={50}
      />
    </LoaderWrapper>
  );
};

export default Loader;
