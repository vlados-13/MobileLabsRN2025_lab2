import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../components/hooks/themeContext";

const Button = styled(TouchableOpacity)`
  width: 30px;
  height: 30px;
  margin-top: 5px;
  margin-left: 10px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.tabBarActiveTintColor};
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(Text)`
  color: ${({ theme }) => theme.tabBarBackground};
  font-size: 18px;
`;

const ThemeToggleButton = ({ onPress }) => {
  const { toggleTheme } = useTheme();

  return (
    <Button onPress={toggleTheme}>
      <ButtonText>☀️</ButtonText>
    </Button>
  );
};

export default ThemeToggleButton;
