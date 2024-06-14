import { StyledButton } from "./ActiveButton.styled";

const ActiveButton = ({ label, onClick }) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default ActiveButton;
