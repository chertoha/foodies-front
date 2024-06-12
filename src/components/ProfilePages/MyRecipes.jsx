import list from "pages/UserPage/list.json";
import { useGetOwnRecipesQuery, useDeleteRecipeMutation } from "../../redux/recipes/recipesApi";

import SubTitle from "../SubTitle/SubTitle";
import UserPageListItems from "../UserPageListItems/UserPageListItems";
import { SubTitleWrapper } from "./ProfilePages.styled";

const MyRecipes = () => {
  const {
    data,
    error: errorMyRecipes,
    isFetching: isFetchingMyRecipes,
    refetch: refetchMyRecipes,
  } = useGetOwnRecipesQuery({
    page: 1,
    limit: 9,
  });

  if (isFetchingMyRecipes) return <div>Loading...</div>;
  if (errorMyRecipes) return <div>Error loading recipes.</div>;
  if (!data) return null;

  console.log("MyRecipes", data);
  return (
    <>
      {data.result.length > 0 ? (
        <UserPageListItems
          recipes={data.result}
          type="myRecipes"
          refetchRecipes={refetchMyRecipes}
        />
      ) : (
        <SubTitleWrapper>
          <SubTitle
            label={
              "Nothing has been added to your recipes list yet. Please browse our recipes and add your favorites for easy access in the future."
            }
          />
        </SubTitleWrapper>
      )}
    </>
  );
};

export default MyRecipes;
