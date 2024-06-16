// import { useFavoritesContext } from "components/App/App";
import {
  useAddRecipeToFavoritesMutation,
  useRemoveRecipeFromFavoritesMutation,
} from "../../redux/recipes/recipesApi";
import { useAuth } from "hooks/useAuth";
import { useRevalidateUser } from "hooks/useRevalidateUser";

const FavoriteWrapper = ({ recipeId, Button }) => {
  const [addToFavorite] = useAddRecipeToFavoritesMutation();
  const [removeFromFavorite] = useRemoveRecipeFromFavoritesMutation();

  // const { favorites } = useFavoritesContext();
  const { user } = useAuth();
  const { revalidateUserData } = useRevalidateUser();

  const isChecked = user?.favorites?.includes(recipeId);

  const onClick = async () => {
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

  return (
    <>
      <Button
        onClick={onClick}
        isChecked={isChecked}
      />
    </>
  );
};

export default FavoriteWrapper;
