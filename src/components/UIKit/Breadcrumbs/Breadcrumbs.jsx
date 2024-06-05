import { ROUTES } from "config/router";
import { BreadcrumbsWrapper, HomeLink } from "./Breadcrumbs.styled";

const Breadcrumbs = ({ current }) => {
  return (
    <BreadcrumbsWrapper>
      <HomeLink to={ROUTES.HOME}>Home</HomeLink> / <p>{current}</p>
    </BreadcrumbsWrapper>
  );
};

export default Breadcrumbs;
