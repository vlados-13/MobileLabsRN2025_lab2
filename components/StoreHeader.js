import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import { steamIcon } from "./icons";

const StoreHeader = ({ title }) => {
  return (
    <HeaderContainer>
      <SvgXml xml={steamIcon} />
      <StoreText>{title}</StoreText>
    </HeaderContainer>
  );
};

export default StoreHeader;

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StoreText = styled.Text`
  color: #ffffff;
  font-size: 28px;
  margin-left: 10px;
`;
