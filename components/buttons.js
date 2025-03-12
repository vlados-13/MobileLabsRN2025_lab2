import React from "react";
import styled from "styled-components/native";

const Buttons = ({ activeButton, handlePress, button1Text, button2Text }) => {
  return (
    <ButtonContainer>
      <Button
        active={activeButton === "button1"}
        onPress={() => handlePress("button1")}
      >
        <ButtonText active={activeButton === "button1"}>
          {button1Text}
        </ButtonText>
      </Button>
      <Button
        active={activeButton === "button2"}
        onPress={() => handlePress("button2")}
      >
        <ButtonText active={activeButton === "button2"}>
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
  background-color: #303649;
  padding: 2px;
`;

const Button = styled.TouchableOpacity`
  width: 50%;
  background-color: ${(props) => (props.active ? "#1C202C" : "#303649")};
  padding: 10px 20px;
  border-radius: 15px;
  border-color: #303649;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: ${(props) => (props.active ? "#FFFFFF" : "#A2A7B1")};
  font-size: 16px;
`;

export default Buttons;
