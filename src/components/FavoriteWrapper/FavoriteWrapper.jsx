// import { useFavoritesContext } from "components/App/App";
import {
  useAddRecipeToFavoritesMutation,
  useRemoveRecipeFromFavoritesMutation,
} from "../../redux/recipes/recipesApi";
import { useAuth } from "hooks/useAuth";
import { useModalWindow } from "hooks/useModalWindow";
import { useRevalidateUser } from "hooks/useRevalidateUser";
import { Modal } from "../Modal/Modal";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp";
import { useState } from "react";

const FavoriteWrapper = ({ recipeId, Button }) => {
  const [addToFavorite] = useAddRecipeToFavoritesMutation();
  const [removeFromFavorite] = useRemoveRecipeFromFavoritesMutation();

  // const { favorites } = useFavoritesContext();
  const { user } = useAuth();
  const { revalidateUserData } = useRevalidateUser();
  const { close, isOpen, open } = useModalWindow();
  const [isLogin, setIsLogin] = useState(true);

  const isChecked = user?.favorites?.includes(recipeId);

  const onClick = async () => {
    if (!user) {
      open();
      return;
    }
    try {
      if (isChecked) {
        await removeFromFavorite(recipeId);
      } else {
        await addToFavorite(recipeId);
      }
      revalidateUserData();
    } catch (error) {
      console.error("Error toggling favorite status:", error);
    }
  };
  const switchToSignIn = () => setIsLogin(true);
  const switchToSignUp = () => setIsLogin(false);
  return (
    <>
      <Button
        onClick={onClick}
        isChecked={isChecked}
      />
      {isOpen && (
        <Modal onClose={close}>
          {isLogin ? (
            <SignIn
              switchForm={switchToSignUp}
              onClose={close}
            />
          ) : (
            <SignUp
              switchForm={switchToSignIn}
              onClose={close}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default FavoriteWrapper;
