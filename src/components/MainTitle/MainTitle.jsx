import { Title } from "./MainTitle.styled";

const MainTitle = ({ as, label }) => {
  return <Title as={as}>{label}</Title>;
};

export default MainTitle;
