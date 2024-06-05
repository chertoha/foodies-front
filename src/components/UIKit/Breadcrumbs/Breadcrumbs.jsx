import { ROUTES } from "config/router";
import { BreadcrumbsWrapper, HomeLink } from "./Breadcrumbs.styled";
import { useLocation } from "react-router-dom";

const Breadcrumbs = ({ current }) => {
  const location = useLocation();
  console.log(location);
  return (
    <BreadcrumbsWrapper>
      <HomeLink to={ROUTES.HOME}>Home</HomeLink> / <p>{current}</p>
    </BreadcrumbsWrapper>
  );
};

export default Breadcrumbs;
