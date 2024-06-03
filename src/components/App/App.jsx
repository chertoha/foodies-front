import axios from "axios";
import Container from "components/Container";
import { ReactComponent as ArrowIcon } from "assets/images/icons/arrow.svg";
import { useEffect, useState } from "react";
import { useGetCategoriesQuery } from "../../redux/categories/categoriesApi";

const App = () => {
  const [message, setMessage] = useState("");

  const { data } = useGetCategoriesQuery();

  console.log(data);

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_BASE_API_URL}/users/test`).then(response => {
  //     setMessage(response?.data?.message);
  //   });
  // }, []);

  return (
    <div>
      <Container>
        <h2>App is working...</h2>
        <p>message: {message}</p>
        <ArrowIcon />
        TEST text
      </Container>
    </div>
  );
};

export default App;
