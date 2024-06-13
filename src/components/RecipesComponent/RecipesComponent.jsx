import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useLazyGetRecipesQuery } from "../../redux/recipes/recipesApi";

import { useWindowSize } from "../../hooks/useWindowSize";
import { useState } from "react";
import Paginator from "../Paginator/Paginator";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const searchArea = searchParams.get("area") || "";
  const searchIngredient = searchParams.get("ingredient") || "";

  // const [ingredient, setIngredient] = useState("");
  // const [area, setArea] = useState("");

  const { isMobile } = useWindowSize();
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbersToShow = isMobile ? 5 : 8;
  const itemsPerPage = isMobile ? 8 : 12;

  const onPageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const [trigger, { data: recipesData, error: recipesError, isFetching: isFetchingRecipes }] =
    useLazyGetRecipesQuery();

  useEffect(() => {
    trigger({
      page: currentPage,
      limit: itemsPerPage,
      category: category,
      area: searchArea,
      ingredient: searchIngredient,
    });
  }, [trigger, currentPage, category, searchArea, searchIngredient]);

  const handleFiltersChange = (name, value) => {
    if (name === "ingredient") {
      // setIngredient(value);
      setSearchParams({ category, area: searchArea, ingredient: value });
      // setArea("");
    } else if (name === "area") {
      // setArea(value);
      setSearchParams({ category, area: value, ingredient: searchIngredient });
    }
  };

  if (isFetchingRecipes) return <div>Loading...</div>;
  if (recipesError) return <div>Error loading recipes.</div>;
  if (!recipesData) return null;
  console.log(recipesData);
  console.log(recipesData.total);

  const totalPages = Math.ceil(recipesData.total / itemsPerPage);
  return (
    <div>
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
      {totalPages > 1 && !recipesError && (
        <Paginator
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={recipesData.total}
          onPageChange={onPageChange}
          pageNumbersToShow={pageNumbersToShow}
        />
      )}
    </div>
  );
};

export default RecipesComponent;
