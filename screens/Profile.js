import React from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Container } from "../components/container";
import { SvgXml } from "react-native-svg";
import { bigRUST, returnIcon } from "../components/icons";
import ActionButton from "../components/ActionButton";
import { ThemedText } from "../components/texts";
import { useTheme } from "../components/hooks/themeContext";

const ProfileScreen = () => {
  const { theme } = useTheme();
  return (
    <Container>
      <StatusBar
        style="light"
        backgroundColor={theme === "dark" ? "#1C202C" : "#a2a7b1"}
      />
      <CentredView>
        <SvgContainer>
          <SvgXml xml={bigRUST} width="100%" height="100%" />
          <OnlineIndicator />
        </SvgContainer>
        <ThemedText>Владислав Барсук</ThemedText>
        <ThemedText>ІПЗ-23-1</ThemedText>
      </CentredView>
      <BottomView>
        <ActionButton text="Setting" icon={returnIcon} />
        <ActionButton text="Logout" icon={returnIcon} />
      </BottomView>
    </Container>
  );
};

export default ProfileScreen;

const CentredView = styled.View`
  align-items: center;
  margin-top: 60px;
`;

const BottomView = styled.View`
  margin-top: 40px;
`;

const SvgContainer = styled.View`
  position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
`;

const OnlineIndicator = styled.View`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  background-color: #00d44b;
  border-radius: 50%;
  border-width: 2px;
  z-index: 1;
`;
