import { Fragment } from "react";
import styled from "styled-components";
import { IoMenuOutline } from "react-icons/io5";
import logo from "../../assets/images/header/logo.svg";
import cart from "../../assets/images/header/cart.svg";

const Header = () => {
  return (
    <Fragment>
      <Topline>
        <p>
          Ventouse massante offerte <span>à partir de 100€ d'achat</span>
        </p>
      </Topline>
      <Menu>
        <div className="menu">
          <IoMenuOutline />
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="cart">
          <img src={cart} alt="icone du panier" />
        </div>
      </Menu>
    </Fragment>
  );
};

const Topline = styled.div`
  height: 25px;
  background-color: #e95314;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #fff;
    font-size: 0.8rem;

    span {
      font-weight: bold;
    }
  }
`;

const Menu = styled.header`
  background-color: #fff;

  padding: 0.3rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  .menu {
    color: #e95314;
    font-size: 1.8rem;
  }

  .logo {
    img {
      width: 6rem;
    }
  }

  .cart {
    img {
      width: 1.2rem;
    }
  }
`;

export default Header;
