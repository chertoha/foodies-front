import { StyledButton } from "./ActiveButton.styled";

const ActiveButton = ({ label, onClick, type = "button", disabled = false }) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
};

export default ActiveButton;
