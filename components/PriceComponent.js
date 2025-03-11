import React from "react";
import styled from "styled-components/native";

const PriceComponent = ({ oldPrice, price, discount }) => {
  return (
    <PriceContainer>
      {discount && (
        <DiscountBadge>
          <DiscountText>{discount}</DiscountText>
        </DiscountBadge>
      )}
      {oldPrice && <OldPrice>{oldPrice}</OldPrice>}
      <NewPrice>{price}</NewPrice>
    </PriceContainer>
  );
};

export default PriceComponent;

const PriceContainer = styled.View`
  left: 10px;
  margin-top: 5px;
  min-width: 40px;
  max-width: 180px;
  flex-direction: row;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const DiscountBadge = styled.View`
  background-color: #00d44b80;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 10px;
`;

const DiscountText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

const OldPrice = styled.Text`
  color: #888;
  text-decoration-line: line-through;
  font-size: 18px;
  margin-right: 10px;
`;

const NewPrice = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;
