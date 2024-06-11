// import { useGetRecipesQuery } from "../../redux/recipes/recipesApi";
import { useLazyGetRecipesQuery } from "../../redux/recipes/recipesApi";
import { useState, useEffect } from "react";
import SearchRecipes from "../SearchRecipes";
import RecipeCard from "../RecipeCard/RecipeCard";
import MainTitle from "../MainTitle/MainTitle";
import SubTitle from "../SubTitle/SubTitle";
import {
  RecipesWrapper,
  RecipeComponentList,
  RecipeComponentItem,
  RecipeSubDiv,
} from "./RecipesComponent.styled";

const RecipesComponent = ({ category }) => {
  const [ingredient, setIngredient] = useState("");
  const [area, setArea] = useState("");

  const [trigger, { data: recipesData, error: recipesError, isFetching: isFetchingRecipes }] =
    useLazyGetRecipesQuery();

  useEffect(() => {
    trigger({
      page: 1,
      limit: 12,
      category: category,
      area: area,
      ingredient: ingredient,
    });
  }, [trigger, category, area, ingredient]);

  const handleFiltersChange = (name, value) => {
    if (name === "ingredient") {
      setIngredient(value);
    } else if (name === "area") {
      setArea(value);
    }
  };
  console.log(recipesData);
  if (isFetchingRecipes) return <div>Loading...</div>;
  if (recipesError) return <div>Error loading recipes.</div>;
  if (!recipesData) return null;

  return (
    <>
      <MainTitle label={category} />
      <RecipesWrapper>
        <SearchRecipes onChange={handleFiltersChange} />
        <div>
          {recipesData.total > 0 ? (
            <RecipeComponentList>
              {recipesData.result.map(recipe => (
                <RecipeComponentItem key={recipe._id}>
                  <RecipeCard
                    recipe={{
                      id: recipe._id,
                      title: recipe.title,
                      description: recipe.description,
                      thumb: recipe.thumb,
                      instructions: recipe.instructions,
                      time: recipe.time,
                      ingredients: recipe.ingredients,
                      isFavorite: recipe.isFavorite || false,
                    }}
                    author={"dhsjJs"}
                    onSignIn={() => console.log("Sign in clicked")}
                    onProfile={authorId => console.log(`Profile of author ${authorId} clicked`)}
                    onToggleFavorite={recipeId =>
                      console.log(`Favorite toggled for recipe ${recipeId}`)
                    }
                  />
                </RecipeComponentItem>
              ))}
            </RecipeComponentList>
          ) : (
            <RecipeSubDiv>
              <SubTitle label={"Sorry. There are no Recipes ... 😭Please try again."} />
            </RecipeSubDiv>
          )}
        </div>
      </RecipesWrapper>
    </>
  );
};

export default RecipesComponent;
