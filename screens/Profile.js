import React from "react";
import { StatusBar, View } from "react-native";
import styled from "styled-components/native";
import { Container } from "../components/container";
import { SvgXml } from "react-native-svg";
import { bigRUST, returnIcon } from "../components/icons";
import ActionButton from "../components/ActionButton";
import { TitleText } from "../components/texts";

const ProfileScreen = () => {
  return (
    <Container>
      <StatusBar style="dark" backgroundColor="#171a21" />
      <CentredView>
        <SvgContainer>
          <SvgXml xml={bigRUST} />
          <OnlineIndicator />
        </SvgContainer>
        <TitleText>Владислав Барсук</TitleText>
        <TitleText>ІПЗ-23-1</TitleText>
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
  border-radius: 50%;
  overflow: hidden;
`;

const OnlineIndicator = styled.View`
  position: absolute;
  bottom: 8;
  right: 10;
  width: 25px;
  height: 25px;
  background-color: #00d44b;
  border-radius: 50%;
  border-width: 2px;
  border-color: #fff;
`;
