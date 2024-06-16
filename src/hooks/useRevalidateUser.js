import { useEffect } from "react";
import { authCurrentUserThunk } from "../redux/auth/thunks";
import { triggerUserDataRefresh } from "../redux/auth/slice";
import { selectShouldRefreshUserData } from "../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";

export const useRevalidateUser = () => {
  const dispatch = useDispatch();
  const shouldRefreshUserData = useSelector(selectShouldRefreshUserData);

  useEffect(() => {
    if (shouldRefreshUserData) {
      dispatch(authCurrentUserThunk());
    }
  }, [dispatch, shouldRefreshUserData]);

  const revalidateUserData = () => {
    dispatch(triggerUserDataRefresh());
  };

  return { revalidateUserData };
};
