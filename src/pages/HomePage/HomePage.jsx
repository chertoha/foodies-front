import Testimonials from "components/Testimonials";
import { PageWrapper, SectionWrapper } from "./HomePage.styled";
import Container from "components/Container";
import Category from "components/Category/Category";
import RecipesComponent from "components/RecipesComponent";

import TempAuthButton from "components/TempComponents/TempAuthButton";
// import { useGetRecipesQuery } from "../../redux/recipes/recipesApi";
// import { useState } from "react";

import { useSearchParams } from "react-router-dom";

import { CategoryTest } from "components/Category/Category";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const area = searchParams.get("area") || "";
  const ingredient = searchParams.get("ingredient") || "";

  const handleSelectCategory = category => {
    setSearchParams({ category, area: "", ingredient: "" });
  };

  const handleFiltersChange = (name, value) => {
    const newParams = { category, area, ingredient, [name]: value };
    setSearchParams(newParams);
  };

  return (
    <PageWrapper>
      <TempAuthButton />

      <SectionWrapper>
        <Container>
          {/* {category === "" ? (
            <Category onSelectCategory={handleSelectCategory} />
          ) : (
            <RecipesComponent
              category={category}
              area={area}
              ingredient={ingredient}
              onFiltersChange={handleFiltersChange}
            />
          )} */}
          <Category />
          <CategoryTest onSelectCategory={handleSelectCategory} />
          {category && (
            <>
              <RecipesComponent
                category={category}
                area={area}
                ingredient={ingredient}
                onFiltersChange={handleFiltersChange}
              />
            </>
          )}
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container>
          <Testimonials />
        </Container>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default HomePage;
