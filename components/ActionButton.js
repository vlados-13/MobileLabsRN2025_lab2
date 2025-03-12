import React from "react";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { WhiteText } from "./texts";

const ActionButton = ({ text, icon }) => {
  return (
    <ViewBtn>
      <WhiteText size={16}>{text}</WhiteText>
      <SvgXml xml={icon} />
    </ViewBtn>
  );
};

export default ActionButton;

const ViewBtn = styled.View`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  background-color: #202532;
  margin-bottom: 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
