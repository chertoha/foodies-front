import SignIn from "components/SignIn";
import SignUp from "components/SignUp";

const TempAuthSwitcher = ({ isLogin, setIsLogin }) => {
  return isLogin ? <SignIn /> : <SignUp />;
};

export default TempAuthSwitcher;
