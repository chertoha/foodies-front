import { StyledButton } from "./FollowerButton.styled";

const FollowerButton = ({ label, onClick }) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default FollowerButton;
