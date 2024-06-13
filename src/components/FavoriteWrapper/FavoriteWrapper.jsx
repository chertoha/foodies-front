import {
  useAddRecipeToFavoritesMutation,
  useRemoveRecipeFromFavoritesMutation,
} from "../../redux/recipes/recipesApi";

const FavoriteWrapper = ({ recipeId, Button, favorites }) => {
  const [addToFavorite] = useAddRecipeToFavoritesMutation();
  const [removeFromFavorite] = useRemoveRecipeFromFavoritesMutation();

  // const isChecked = favorites?.includes(recipeId);
  const isChecked = favorites?.some(({ _id }) => (recipeId = _id));

  const onClick = async () => {
    try {
      if (isChecked) {
        await removeFromFavorite(recipeId);
      } else {
        await addToFavorite(recipeId);
      }
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
