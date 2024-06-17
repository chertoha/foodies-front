import Paginator from "../Paginator/Paginator";
import SearchRecipes from "../SearchRecipes";
import RecipeCard from "../RecipeCard/RecipeCard";
import MainTitle from "../MainTitle/MainTitle";
import SubTitle from "../SubTitle/SubTitle";
import sprite from "assets/images/icons/sprite.svg";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetRecipesQuery } from "../../redux/recipes/recipesApi";
import { useWindowSize } from "../../hooks/useWindowSize";
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

  const searchArea = searchParams.get("area") || "";
  const searchIngredient = searchParams.get("ingredient") || "";

  const { isMobile } = useWindowSize();
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbersToShow = isMobile ? 5 : 8;
  const itemsPerPage = isMobile ? 8 : 12;

  const onPageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const { data: recipesData, error: recipesError } = useGetRecipesQuery({
    page: currentPage,
    limit: itemsPerPage,
    category: category,
    area: searchArea,
    ingredient: searchIngredient,
  });

  const handleFiltersChange = (name, value) => {
    const newParams = { category, area: searchArea, ingredient: searchIngredient };
    newParams[name] = value;
    setSearchParams(newParams);
  };

  if (recipesError) return <div>Error loading recipes.</div>;
  if (!recipesData) return null;

  const totalPages = Math.ceil(recipesData.total / itemsPerPage);

  return (
    <div>
      <div>
        <SubTitleWrapp>
          <BackLink
            as="button"
            onClick={() => setSearchParams({})}
          >
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
              "Go on a taste journey, where every sip is a sophisticated creative chord, and every dish is an expression of the most refined gastronomic desires."
            }
          />
        </SubTitleWrapp>
        <RecipesWrapper>
          <SearchRecipes
            onChange={handleFiltersChange}
            selectedArea={searchArea}
            selectedIngredient={searchIngredient}
          />
          <div>
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
                        author={{
                          id: recipe.owner._id,
                          name: recipe.owner.name,
                          avatar: recipe.owner.avatar,
                        }}
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
        </RecipesWrapper>
      </div>
    </div>
  );
};

export default RecipesComponent;
