import { useGetRecipesQuery } from "../../redux/recipes/recipesApi";
import { useLocation } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";
import { useLazyGetRecipesQuery } from "../../redux/recipes/recipesApi";
import { useState, useEffect } from "react";
import SearchRecipes from "../SearchRecipes";
import RecipeCard from "../RecipeCard/RecipeCard";
import MainTitle from "../MainTitle/MainTitle";
import SubTitle from "../SubTitle/SubTitle";

import sprite from "assets/images/icons/sprite.svg";
import {
  BackLink,
  Icon,
  RecipesWrapper,
  RecipeComponentList,
  RecipeComponentItem,
  RecipeSubDiv,
  SubTitleWrapp,
  TitleWrapp,
} from "./RecipesComponent.styled";

const RecipesComponent = ({ category }) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // const searchArea = searchParams.get("area") || "";
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
      setArea("");
    } else if (name === "area") {
      setArea(value);
      // setSearchParams(value);
      setIngredient("");
    }
  };
  console.log(recipesData);
  if (isFetchingRecipes) return <div>Loading...</div>;
  if (recipesError) return <div>Error loading recipes.</div>;
  if (!recipesData) return null;

  return (
    <>
      <SubTitleWrapp>
        <BackLink to={location.state?.from || "/"}>
          <Icon>
            <use href={sprite + "#icon-arrow-left"}></use>
          </Icon>
          <span>Back</span>
        </BackLink>
        <TitleWrapp>
          <MainTitle
            as={"h2"}
            label={category}
          />
        </TitleWrapp>
        <SubTitle
          label={
            "Go on a taste journey, where every sip is a sophisticated creative chord, and every dessert is an expression of the most refined gastronomic desires."
          }
        />
      </SubTitleWrapp>
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
                    author={{ name: recipe.owner.name }}
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