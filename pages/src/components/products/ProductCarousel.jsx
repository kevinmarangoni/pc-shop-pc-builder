import React, { useState } from "react";
import styled from "styled-components";

const ProductCarousel = () => {
  const [index, setIndex] = useState(0);
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ];

  const handlePrev = () => {
    setIndex(index === 0 ? products.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === products.length - 1 ? 0 : index + 1);
  };

  return (
    <ProductWrapper>
      <button onClick={handlePrev}>Prev</button>
      <Product key={products[index].id}>
        {products[index].name}
      </Product>
      <button onClick={handleNext}>Next</button>
    </ProductWrapper>
  );
};

export default ProductCarousel;

const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

const Product = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  background-color: #ccc;
  margin-right: 20px;
`;
