import Container from "components/Container";

import { FormProvider, useForm } from "react-hook-form";
import MainTitle from "components/MainTitle";
import SubTitle from "components/SubTitle";
import Breadcrumbs from "components/UIKit/Breadcrumbs";
import AddRecipeForm from "components/AddRecipeForm/AddRecipeForm";

const AddRecipePage = () => {
  const methods = useForm({
    defaultValues: {
      thumb: null,
    },
  });

  // const onSubmit = data => console.log(data);

  return (
    <>
      <h1>AddRecipePage</h1>

      <div style={{ paddingTop: "200px" }}>
        <Container>
          <Breadcrumbs current={"Add Recipe"} />
          <MainTitle label={"Add Recipe"} />
          <SubTitle
            label={
              "Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."
            }
          />
          <FormProvider {...methods}>
            <AddRecipeForm />
          </FormProvider>
          <>
            {/* <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <ImageDropZone name="thumb" />
              <button className="">Submit</button>
            </form>
          </FormProvider> */}
          </>
        </Container>
      </div>
    </>
  );
};

export default AddRecipePage;
