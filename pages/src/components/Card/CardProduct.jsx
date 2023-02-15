import { useEffect, useState } from "react";
import styled from "styled-components";
import APIRequest from "../../utils/API";

function CardProduct() {
  const [dataList, setDataList] = useState([]);
  const [hasData, setHasData] = useState();

  async function fetchData() {
    const getAllItems = await APIRequest.getAllList();
    setDataList(getAllItems);
    setHasData(true);
  }

  useEffect(() => {
    if (!hasData) {
      fetchData();
    }
  }, [hasData]);

  return (
    <Container>
      {dataList.length > 0 &&
        dataList.map((item) => {
          return (
            <Content key={item.id}>
              <Card>
                <div class="frete">FRETE GRÁTIS</div>
                <img src={item.img} />
                <ProductName>
                  <h2>{item.title}</h2>
                </ProductName>
                <ProductPrice>
                  <span>R${item.price.toFixed(2).toString().replace(".",",")}</span> à vista
                </ProductPrice>
              </Card>
              <AddToCart>
                <button>ADICIONAR AO CARRINHO</button>
              </AddToCart>
            </Content>
          );
        })}
    </Container>
  );
}

export default CardProduct;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  width: min(100% - 30px, 1500px);
  margin-inline: auto;
  padding: 12px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  background: ${(props) => props.theme.color.cardProduct.background};
  border-radius: 2px 2px 0px 0px;
  box-shadow: 0 4px 30px ${(props) => props.theme.color.cardProduct.boxShadow};
  backdrop-filter: blur(9.1px);
  -webkit-backdrop-filter: blur(9.1px);
  border: 1px solid ${(props) => props.theme.color.cardProduct.border};

  &:hover {
    button {
      display: block;
      background-color: ${(props) => props.theme.color.cardProduct.contrast};
      border-radius: 0px 0px 2px 2px;
    }
  }
`;

const Card = styled.div`
  width: 260px;
  height: 100%;
  background: ${(props) => props.theme.color.cardProduct.background};
  border-radius: 2px 2px 0px 0px;
  box-shadow: 0 4px 30px ${(props) => props.theme.color.cardProduct.boxShadow};
  backdrop-filter: blur(9.1px);
  -webkit-backdrop-filter: blur(9.1px);
  border: 1px solid ${(props) => props.theme.color.cardProduct.border};

  .frete {
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.color.cardProduct.contrast};
    font-weight: bold;
    width: 100%;
    border-bottom: 1px solid black;
    padding: 2px;
  }
  img {
    width: 100%;
    height: 200px;
    padding: 10px 10px 10px;
    cursor: pointer;
  }
`;
const ProductName = styled.div`
  width: 100%;
  padding: 10px;
  border-top: 1px solid ${(props) => props.theme.color.cardProduct.font};

  h2 {
    box-sizing: border-box;
    font-size: large;
    color: ${(props) => props.theme.color.cardProduct.font};
    cursor: pointer;
    line-height: 1.2em;
    max-height: 2.4em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
const ProductPrice = styled.div`
  width: 100%;
  padding: 10px 10px 10px;
  color: ${(props) => props.theme.color.cardProduct.font};
  span {
    font-size: 22px;
    color: ${(props) => props.theme.color.cardProduct.contrast};
  }
`;
const AddToCart = styled.div`

  button {
    width: 100%;
    padding: 12px;
    border: none;
    background-color: ${(props) => props.theme.color.primary.darker};
    color:  ${(props) => props.theme.color.cardProduct.background};
    display: none;
    cursor: pointer;
    :hover {
      color: ${(props) => props.theme.color.cardProduct.font};
    }
  }
`;
