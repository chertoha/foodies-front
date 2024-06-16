import Container from "components/Container";

// import { FormProvider, useForm } from "react-hook-form";
import MainTitle from "components/MainTitle";
import Breadcrumbs from "components/UIKit/Breadcrumbs";
import AddRecipeForm from "components/AddRecipeForm/AddRecipeForm";
import {
  AddRecipePageContainer,
  AddRecipePageSubtitleContainer,
  AddRecipePageTitleContainer,
} from "./AddRecipePage.styled";

const AddRecipePage = () => {
  // const methods = useForm({
  //   defaultValues: {
  //     thumb: null,
  //   },
  // });

  // const onSubmit = data => console.log(data);

  return (
    <Container>
      <AddRecipePageContainer>
        <Breadcrumbs current={"Add Recipe"} />
        <AddRecipePageTitleContainer>
          <MainTitle label={"Add Recipe"} />
          <AddRecipePageSubtitleContainer>
            Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces
            with us.
          </AddRecipePageSubtitleContainer>
        </AddRecipePageTitleContainer>
        <AddRecipeForm />
      </AddRecipePageContainer>
    </Container>
  );
};

export default AddRecipePage;
