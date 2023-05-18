import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Content>
        <h1>Chaupi</h1>
        <Menu>
          <li>
            <svg>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
            </svg>
            MINHA CONTA
          </li>
          <li>
            <svg>
              <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"></path>
            </svg>
            ATENDIMENTO
          </li>
          <li>
            <svg>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
            MEUS FAVORITOS
          </li>
          <li>
            <svg>
              <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path>
            </svg>
            MODO CLARO
          </li>
        </Menu>
        <Cart>
          <button>
            <svg class="CartIcon">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
            <span>
              <strong>Carrinho</strong>
              <br />0 produto
            </span>
            <svg class="DropBoxIcon">
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
            </svg>
          </button>
        </Cart>
      </Content>
      <InputContent>
        <HoverMenu>
          <button>
            <svg>
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
            <span>
              ACESSE TODOS OS <br /> <strong>DEPARTAMENTOS</strong>
            </span>
          </button>
        </HoverMenu>
        <SearchBox>
          <div>
            <input type="text" placeholder="Digite o que você procura..." />
            <svg>
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </div>
        </SearchBox>
      </InputContent>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  h1 {
    font-size: 60px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
  margin: 0 auto;
`;

const Menu = styled.ul`
  height: 68px;
  width: 970px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  list-style-type: none;
  gap: 1em;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65px;
    gap: 0.2rem;
  }
  svg {
    height: 40px;
    width: 40px;
    fill: green;
    cursor: pointer;
    padding: 7px;
    :hover {
      background-color: #424242;
      border-radius: 50%;
      padding: 7px;
    }
  }
`;

const Cart = styled.div`
  display: flex;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 30px;
    width: 200px;
    height: 50px;
    background-color: green;
    border: 1px solid green;
    border-radius: 5px;
    cursor: pointer;
    :hover {
      background-color: #5f5f5f;
    }
    span {
      font-size: 13px;
      text-align: right;
      strong {
        font-size: 18px;
      }
    }
    svg {
      display: flex;
      position: relative;
      width: 25px;
      height: 25px;
      fill: white;
    }
  }
`;

const InputContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    padding: 0px 16px 0px;
  }
`;

const HoverMenu = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
    border: 1px solid green;
    width: 340px;
    padding: 5px 12px;
    border-radius: 5px;
    gap: 20px;
    cursor: pointer;
    span {
      text-align: right;
      width: 150px;
      font-size: 13px;
    }
    strong {
      font-size: 22px;
    }
    svg {
      width: 25px;
      height: 25px;
      fill: white;
    }
    :hover {
      background-color: #5f5f5f;
    }
  }
`;

const SearchBox = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #424242;
    border-radius: 5px;
  }
  svg {
    width: 25px;
    height: 25px;
    fill: white;
    cursor: pointer;
  }
  input {
    margin: 0 auto;
    width: 1020px;
    padding: 10px;
    background-color: #424242;
    color: white;
    outline: none;
    border: none;
    font-size: 18px;
    font-weight: bold;
  }
`;
