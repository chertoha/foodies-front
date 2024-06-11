import Container from "components/Container";
import ImageDropZone from "components/ImageDropZone";
import { FormProvider, useForm } from "react-hook-form";

const AddRecipePage = () => {
  const methods = useForm({
    defaultValues: {
      thumb: null,
    },
  });

  const onSubmit = data => console.log(data);

  return (
    <>
      <h1>AddRecipePage</h1>

      <div style={{ paddingTop: "200px" }}>
        <Container>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <ImageDropZone name="thumb" />
              <button className="">Submit</button>
            </form>
          </FormProvider>
        </Container>
      </div>
    </>
  );
};

export default AddRecipePage;
