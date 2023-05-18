import styled from "styled-components";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CartShopping = () => {
  return (
    <Container>
      <Content>
        <button>
          <div>
            <ShoppingCartIcon />
          </div>
          <span>
            <strong>CARRINHO</strong>
            <br />0 produto
          </span>
          <ExpandMoreIcon />
        </button>
      </Content>
    </Container>
  );
};

export default CartShopping;

const Container = styled.div`
width: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: ${(props) => props.theme.color.primary.darker};
    padding: 10px;
    width: 180px;
    cursor: pointer;
    border-radius: 8px;
  }
`;
