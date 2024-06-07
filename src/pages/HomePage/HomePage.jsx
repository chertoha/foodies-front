import Hero from "components/Hero/Hero.jsx";
const HomePage = () => {
  // const { data } = useGetRecipiesQuery({
  //   page: 1,
  //   limit: 5,
  //   category: "Dessert",
  //   area: "French",
  //   ingredient: "Icing Sugar",
  // });

  // const { data } = useGetRecipeQuery("6462a8f74c3d0ddd28897fcd");

  //console.log(data);
  return (
    <div>
      <Hero />
    </div>
  );
};

export default HomePage;
