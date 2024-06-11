import Container from "components/Container";
import ImageDropZone from "components/ImageDropZone";
import { useForm } from "react-hook-form";

const AddRecipePage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <>
      <h1>AddRecipePage</h1>

      <div style={{ paddingTop: "200px" }}>
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ImageDropZone />
            <button className="">Submit</button>
          </form>
        </Container>
      </div>
    </>
  );
};

export default AddRecipePage;
