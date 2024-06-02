import { Button } from './MainButton.styled';

const MainButton = ({ children, size, colors, type, onClick }) => {
  return (
    <Button type={type} size={size} colors={colors} onClick={onClick}>
      {children}
    </Button>
  );
};

export default MainButton;
