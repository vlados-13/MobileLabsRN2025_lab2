import React, { useState } from "react";
import { StatusBar, Text, View } from "react-native";
import styled from "styled-components/native";
import StoreHeader from "../components/StoreHeader";
import Buttons from "../components/buttons";
import { BottomView, Container, RowContainer } from "../components/container";
import { LightGreyText, WhiteText } from "../components/texts";
import { returnIcon } from "../components/icons";
import ActionButton from "../components/ActionButton";

const SafetyScreen = () => {
  const [activeButton, setActiveButton] = useState("button1");

  const handlePress = (button) => {
    setActiveButton(button);
  };

  return (
    <Container>
      <StatusBar style="dark" backgroundColor="#171a21" />
      <RowContainer>
        <StoreHeader title="Safety" />
      </RowContainer>
      <BottomView>
        <Buttons
          activeButton={activeButton}
          handlePress={handlePress}
          button1Text="Guard"
          button2Text="Confirmations"
        />
      </BottomView>
      <CentredView>
        <LightGreyText style={{ textAlign: "center" }}>
          Logged in as player
        </LightGreyText>
        <WhiteText size={52}>N5KCV</WhiteText>
        <Hr>
          <LeftSide />
          <RightSide />
        </Hr>
      </CentredView>
      <CentredView>
        <WhiteText size={14} style={{ lineHeight: 22, width: "100%" }}>
          You’ll enter your code each time you enter your password to sign in to
          your Steam account.
        </WhiteText>
        <BlueText>
          Tip: If you don't share your PC, you can select "Remember my password"
          when you sign in to the PC client to enter your password and
          authenticator code less often.
        </BlueText>
      </CentredView>
      <ActionButton text="Remove Authenticator" icon={returnIcon} />
      <ActionButton text="My Recovery Code" icon={returnIcon} />
      <ActionButton text="Help" icon={returnIcon} />
    </Container>
  );
};

export default SafetyScreen;

const Hr = styled.View`
  width: 160px;
  height: 7px;
  margin-top: 10px;
  border-radius: 3.5px;
  flex-direction: row;
  border: 1px solid white;
`;

const LeftSide = styled.View`
  width: 70%;
  height: 100%;
  border-radius: 15px;
  background-color: #31bcfc;
`;

const RightSide = styled.View`
  width: 30%;
  height: 100%;
  border-radius: 15px;
  background-color: #1c202c;
`;

const CentredView = styled.View`
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const BlueText = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  line-height: 22px;
  color: #2fb4f1;
  width: 100%;
`;
