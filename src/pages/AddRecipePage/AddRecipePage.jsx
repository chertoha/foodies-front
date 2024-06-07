import AddRecipeForm from "components/AddRecipe/AddRecipeForm";
import Container from "components/Container";
import MainTitle from "components/MainTitle";
import SubTitle from "components/SubTitle";

const AddRecipePage = () => {
  return (
    <section>
      <Container>
        <MainTitle label={"Add Recipe"} />
        <SubTitle
          label={
            "Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."
          }
        />
        <AddRecipeForm />
      </Container>
    </section>
  );
};

export default AddRecipePage;
