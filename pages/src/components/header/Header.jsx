import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Content>
        <Menu>
          <li>Home</li>
          <li>Atuação</li>
          <li>Comentários de Clientes</li>
          <li>Blog</li>
          <li>Sobre nós</li>
          <li>Entre em Contato</li>
          <li>Área do Cliente</li>
        </Menu>
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  
`;

const Content = styled.div``;

const Menu = styled.ul`
  height: 100px;
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
