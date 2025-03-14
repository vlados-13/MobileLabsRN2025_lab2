import React from "react";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { WhiteText } from "./texts";
import { useTheme } from "../components/hooks/themeContext";

const ActionButton = ({ text, icon }) => {
  const { theme } = useTheme();

  return (
    <ViewBtn theme={theme}>
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
  background-color: ${({ theme }) =>
    theme === "dark" ? "#202532" : "#a2a7b1"};
  margin-bottom: 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
