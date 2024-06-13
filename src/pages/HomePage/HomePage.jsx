import Hero from "components/Hero/Hero.jsx";
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
  // const { data } = useGetRecipiesQuery({
  //   page: 1,
  //   limit: 5,
  //   category: "Dessert",
  //   area: "French",
  //   ingredient: "Icing Sugar",
  // });

  // const { data } = useGetRecipeQuery("6462a8f74c3d0ddd28897fcd");
  // const { data, error, isFetching } = useGetCategoriesQuery();

  //console.log(data);

  return (
    <PageWrapper>
      <Hero />

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

          {/* <Category /> */}
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
