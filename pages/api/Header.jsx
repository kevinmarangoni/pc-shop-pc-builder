import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Content>
      <h1>Chaupi</h1>
        <Menu>
          <li>MINHA CONTA</li>
          <li>ATENDIMENTO</li>
          <li>MEUS FAVORITOS</li>
        </Menu>
        <Cart>
          <button>
            <span>Carrinho</span>
            <span>produto</span>
          </button>
        </Cart>
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.div`

`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin: 0 auto;
`;

const Menu = styled.ul`
  height: 65px;
  width: 960px;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  gap: 0.5em;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
  }
`;

const Cart = styled.div`
display: flex;
button{
  
}

`