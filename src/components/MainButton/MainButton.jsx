import { Button } from "./MainButton.styled";

const MainButton = ({ children, type, onClick }) => {
  return (
    <Button
      type={type}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default MainButton;
