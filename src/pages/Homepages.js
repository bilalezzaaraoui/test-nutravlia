import styled from "styled-components";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import HeroImg from "../assets/images/homepage/hero.jpeg";
import { Fragment } from "react";

const Homepage = () => {
  return (
    <Fragment>
      <Header />

      <Container>
        <Hero>
          <img src={HeroImg} alt="image principal" />
        </Hero>
      </Container>
      <Footer />
    </Fragment>
  );
};

const Container = styled.div`
  flex: 1;
  width: 70%;
  padding: 0 2rem;
  margin: 0 auto;
  margin-top: 10px;
`;

const Hero = styled.div``;

export default Homepage;
