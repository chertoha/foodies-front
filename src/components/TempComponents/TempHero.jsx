import styled from "styled-components";
import theme from "styles/theme";

const Wrapper = styled("div")``;

const Heading = styled("p")`
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  font-size: 28px;
  color: white;
  letter-spacing: -0.02em;

  ${theme.mq.mobile} {
    font-size: 40px;
  }

  ${theme.mq.tablet} {
    font-size: 70px;
  }

  ${theme.mq.desktop} {
    font-size: 90px;
  }
`;

const TempHero = () => {
  return (
    <Wrapper>
      <Heading>Improve Your Culinary Talents</Heading>
    </Wrapper>
  );
};

export default TempHero;
