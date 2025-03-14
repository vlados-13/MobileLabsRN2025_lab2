import React from "react";
import styled from "styled-components/native";
import { useTheme } from "../components/hooks/themeContext";

const Buttons = ({ activeButton, handlePress, button1Text, button2Text }) => {
  const { theme } = useTheme();

  return (
    <ButtonContainer themeMode={theme}>
      <Button
        active={activeButton === "button1"}
        themeMode={theme}
        onPress={() => handlePress("button1")}
      >
        <ButtonText active={activeButton === "button1"} themeMode={theme}>
          {button1Text}
        </ButtonText>
      </Button>
      <Button
        active={activeButton === "button2"}
        themeMode={theme}
        onPress={() => handlePress("button2")}
      >
        <ButtonText active={activeButton === "button2"} themeMode={theme}>
          {button2Text}
        </ButtonText>
      </Button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.View`
  flex-direction: row;
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
  background-color: ${(props) =>
    props.themeMode === "light" ? "#a2a7b1" : "#303649"};
  padding: 2px;
`;

const Button = styled.TouchableOpacity`
  width: 50%;
  background-color: ${(props) =>
    props.active
      ? props.themeMode === "light"
        ? "#1C202C"
        : "#1C202C"
      : props.themeMode === "light"
      ? "#a2a7b1"
      : "#303649"};
  padding: 10px 20px;
  border-radius: 15px;
  border-color: ${(props) =>
    props.themeMode === "light" ? "#E0E0E0" : "#303649"};
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: ${(props) => (props.active ? "#FFFFFF" : "#FFFFFF")};
  font-size: 16px;
`;

export default Buttons;
