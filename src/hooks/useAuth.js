import { useSelector } from "react-redux";
import { getToken, getUser, getError, getLoading } from "../redux/auth/selectors";

export const useAuth = () => {
  const token = useSelector(getToken);
  const user = useSelector(getUser);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  return { token, user, isLoading, error };
};
