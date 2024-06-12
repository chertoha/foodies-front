// import list from "pages/UserPage/list.json";
import { useGetFavoriteRecipesQuery } from "../../redux/recipes/recipesApi";

import SubTitle from "../SubTitle/SubTitle";
import UserPageListItems from "../UserPageListItems/UserPageListItems";
import { SubTitleWrapper } from "./ProfilePages.styled";
const MyFavorites = () => {
  const {
    data,
    error: errorMyFavorites,
    isFetching: isFetchingMyFavorites,
    refetch: refetchMyFavorites,
  } = useGetFavoriteRecipesQuery({
    page: 1,
    limit: 9,
  });

  if (isFetchingMyFavorites) return <div>Loading...</div>;
  if (errorMyFavorites) return <div>Error loading My Favorites.</div>;
  if (!data) return null;

  console.log("MyFavorites", data.result);

  return (
    <>
      {data.result.length > 0 ? (
        <UserPageListItems
          recipes={data.result}
          type="myFavorites"
          refetchRecipes={refetchMyFavorites}
        />
      ) : (
        <SubTitleWrapper>
          <SubTitle
            label={
              "Nothing has been added to your favorite recipes list yet. Please browse our recipes and add your favorites for easy access in the future."
            }
          />
        </SubTitleWrapper>
      )}
    </>
  );
};

export default MyFavorites;
