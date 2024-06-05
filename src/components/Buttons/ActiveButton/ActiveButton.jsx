import { StyledButton } from "./ActiveButton.styled";

const ActiveButton = ({ label }) => {
  return (
    <StyledButton
      type="submit"
      // onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default ActiveButton;
