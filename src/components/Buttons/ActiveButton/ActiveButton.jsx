import { StyledButton } from "./ActiveButton.styled";

const ActiveButton = ({ label, onClick, type = "button" }) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default ActiveButton;
