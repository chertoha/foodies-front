import Testimonials from "components/Testimonials";
import Container from "components/Container";
import FoodSection from "components/FoodSection";
import { PageWrapper, SectionWrapper } from "./HomePage.styled";

const HomePage = () => {
  return (
    <PageWrapper>
      <SectionWrapper>
        <Container>
          <FoodSection />
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container>
          <Testimonials />
        </Container>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default HomePage;
