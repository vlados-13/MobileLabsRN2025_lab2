import React from "react";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

const ActionButton = ({ text, icon }) => {
  return (
    <ViewBtn>
      <TitleText>{text}</TitleText>
      <SvgXml xml={icon} />
    </ViewBtn>
  );
};

export default ActionButton;

const ViewBtn = styled.View`
  width: 325px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  background-color: #202532;
  margin-bottom: 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleText = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;
