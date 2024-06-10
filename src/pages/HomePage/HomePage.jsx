import Header from "components/Header/Header";
import Hero from "components/Hero/Hero.jsx";
import Testimonials from "components/Testimonials";
import { PageWrapper, SectionWrapper } from "./HomePage.styled";
import Container from "components/Container";
import Category from "components/Category/Category";
import RecipesComponent from "components/RecipesComponent";
import TempAuthButton from "components/TempComponents/TempAuthButton";

const HomePage = () => {
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
      <Header />
      <Hero />

      <TempAuthButton />

      <SectionWrapper>
        <Container>
          <Category />
          <RecipesComponent />
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
