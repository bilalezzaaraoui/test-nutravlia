import styled from "styled-components";

const Element = (props) => {
  return (
    <li>
      <LinkOfPage href="#">{props.name}</LinkOfPage>
    </li>
  );
};

const LinkOfPage = styled.a`
  display: inline-block;
  color: #adadad;
  font-size: 0.9rem;
  padding: 0.3rem 0.5rem;
  border: 1px solid #adadad;
  border-radius: 2px;
  transition: 0.3s;

  &:hover {
    color: #e95314;
    border-color: #e95314;
  }
`;

export default Element;
