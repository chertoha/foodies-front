import AddRecipeForm from "components/AddRecipeForm/AddRecipeForm";
import Container from "components/Container";
import MainTitle from "components/MainTitle";
import SubTitle from "components/SubTitle";
import Breadcrumbs from "components/UIKit/Breadcrumbs";

const AddRecipePage = () => {
  return (
    <section>
      <Container>
        <Breadcrumbs current={"Add Recipe"} />
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
