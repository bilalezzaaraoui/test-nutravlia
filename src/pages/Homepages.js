import styled from "styled-components";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import HeroImg from "../assets/images/homepage/hero.jpeg";
import { Fragment } from "react";
import Element from "../components/Element";
import ProductJson from "../assets/data/data.json";
import ProductCard from "../components/ProductCard";
import Satisfait from "../assets/images/homepage/Satisfait";
import Secure from "../assets/images/homepage/Secure";
import Livraison from "../assets/images/homepage/Livraison";

const Homepage = () => {
  const typeOfProduct = [
    "Gélules minceur*",
    "Shots & draineur minceur*",
    "Gels & crèmes minceur",
    "Shortys minceur",
    "Infusions minceur*",
    "Sticks minceur*",
    "Barre repas minceur*",
    "Nos services",
    "Accessoires",
  ];
  const { data } = ProductJson;

  const values = [
    {
      image: Livraison,
      title: "Livraison offerte",
      text: "Hors DROM COM et livraison express",
    },
    {
      image: Secure,
      title: "Paiement sécurisé",
      text: "Nous sommes associés à un prestataire de qualité",
    },
    {
      image: Satisfait,
      title: "Garantie",
      text: "Satisfait à 100% ou remboursé",
    },
  ];

  const hideUndefined = (value) => {
    if (typeof value === undefined) {
      return "";
    } else {
      return value;
    }
  };

  return (
    <Fragment>
      <Header />

      <Container>
        <Hero>
          <img src={HeroImg} alt="image principal" />
        </Hero>

        <ProductType>
          <ul>
            {typeOfProduct.map((item, index) => {
              return <Element key={index} name={item} />;
            })}
          </ul>
        </ProductType>
        <AllProducts>
          {data.map((item, key) => {
            return (
              <ProductCard
                key={key}
                image={item.image}
                titleOne={`${hideUndefined(item.titleOne)}`}
                supTitleOne={`${hideUndefined(item.supTitleOne)}`}
                titleTwo={`${hideUndefined(item.titleTwo)}`}
                supTitleTwo={`${hideUndefined(item.supTitleTwo)}`}
                note={item.note}
                nbOfReviews={item.numberOfVotes}
              />
            );
          })}
        </AllProducts>
        <Value>
          {values.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.image} alt="logo" />
                <p className="title">{item.title}</p>
                <p className="text">{item.title}</p>
              </div>
            );
          })}
        </Value>
      </Container>
      <Footer />
    </Fragment>
  );
};

const Container = styled.div`
  flex: 1;
  width: 70%;
  margin: 0 auto;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Hero = styled.div`
  height: fit-content;

  img {
    width: 100%;
    object-fit: fit-content;
  }
`;

const ProductType = styled.div`
  padding: 0 2rem;
  margin: 1.5rem 0;

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 1rem;
    row-gap: 1rem;
  }
`;

const AllProducts = styled.div`
  padding: 0 2rem;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
`;

const Value = styled.div``;

export default Homepage;
