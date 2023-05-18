import styled from "styled-components";
import React from "react";

const Button = ({
  children,
  width,
  height,
  onClick,
  textColor,
  backgroundColor,
  colorOnHover,
  colorOnActive,
}) => {
  return (
    <Element
      width={width}
      height={height}
      onClick={onClick}
      color={textColor}
      backgroundColor={backgroundColor}
      colorOnHover={colorOnHover}
      colorOnActive={colorOnActive}
    >
      {children}
    </Element>
  );
};

const Element = styled.button`
    background-color: ${props=>props.backgroundColor ?? props.theme.color.highlight.main};
    width: ${props=> props.width ?? '200px'};
    height: ${props=> props.height ?? '50px'};
    border-radius: 7px ;
    outline: none;
    border: none;
    transition: all ease-in-out 0.2s;
    color: ${props=> props.theme.color.font.primary};
    :hover{
        background-color: ${props=> props.theme.color.highlight.lighter};
    }

    :active{
        background-color: ${props=> props.theme.color.highlight.darker};
    }

`;

export default Button;
