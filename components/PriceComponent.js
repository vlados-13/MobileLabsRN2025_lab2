import React from "react";
import styled from "styled-components/native";
import { WhiteText } from "./texts";

const PriceComponent = ({ oldPrice, price, discount }) => {
  return (
    <PriceContainer>
      {discount && (
        <DiscountBadge>
          <WhiteText size={18}>{discount}</WhiteText>
        </DiscountBadge>
      )}
      {oldPrice && <OldPrice>{oldPrice}</OldPrice>}
      <WhiteText size={18}>{price}</WhiteText>
    </PriceContainer>
  );
};

export default PriceComponent;

const PriceContainer = styled.View`
  left: 10px;
  margin-top: 5px;
  min-width: 40px;
  max-width: 160px;
  flex-direction: row;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const DiscountBadge = styled.View`
  background-color: #00d44b80;
  padding: 1px 3px;
  border-radius: 5px;
  margin-right: 10px;
`;

const OldPrice = styled.Text`
  color: #888;
  text-decoration-line: line-through;
  font-size: 18px;
  margin-right: 10px;
`;
