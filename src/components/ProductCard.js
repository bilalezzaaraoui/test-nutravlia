import { IoTerminal } from "react-icons/io5";
import styled from "styled-components";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const ProductCard = (props) => {
  return (
    <div>
      <Img>
        <img src={props.image} alt="Photo du produit" />
      </Img>
      <Content>
        <p className="title">
          {props.titleOne}
          <span>{props.supTitleOne}</span> {props.titleTwo}
          <span>{props.supTitleTwo}</span>
        </p>
        <div className="reviews-container">
          <StarsContainer>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
          </StarsContainer>
          <span className="reviews">{`${props.note}/5 (${props.nbOfReviews})`}</span>
        </div>
        <button id="btn-cart">Ajouter au panier</button>
      </Content>
    </div>
  );
};

const Img = styled.div`
  img {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0;
  .title {
    margin: 0.3rem;
    font-size: 1rem;
    font-weight: 500;

    span {
      font-size: 10px;
      position: relative;
      top: -5px;
    }
  }

  .reviews-container {
    display: flex;
    column-gap: 5px;
    margin: 3px 0;

    .reviews {
      color: #e95314;
      font-size: 0.8rem;
    }
  }

  #btn-cart {
    color: white;
    background-color: #e95314;
    padding: 0.5rem 0.5rem;
    border-radius: 1px;
    border: none;
    margin-top: 0.5rem;
  }
`;

const StarsContainer = styled.div`
  display: flex;
  column-gap: 2px;

  svg {
    color: #e95314;
  }
`;

export default ProductCard;
