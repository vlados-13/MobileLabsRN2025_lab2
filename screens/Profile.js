import React, { useState } from "react";
import { StatusBar, Text, View } from "react-native";
import styled from "styled-components/native";
import StoreHeader from "../components/StoreHeader";
import Buttons from "../components/buttons";
import { Container, RowContainer } from "../components/container";
import { MessageText } from "../components/texts";
import { SvgXml } from "react-native-svg";
import { returnIcon } from "../components/icons";
import ActionButton from "../components/ActionButton"; // Імпортуємо новий компонент

const ProfileScreen = () => {
  const [activeButton, setActiveButton] = useState("button1");

  const handlePress = (button) => {
    setActiveButton(button);
  };

  return (
    <Container>
      <StatusBar style="dark" backgroundColor="#171a21" />

      <CentredView>
        <MessageText style={{ textAlign: "center" }}>
          Logged in as player
        </MessageText>
        <BigTitle>N5KCV</BigTitle>
        <Hr>
          <LeftSide />
          <RightSide />
        </Hr>
      </CentredView>
      <CentredView>
        <Paragraph>
          You’ll enter your code each time you enter your password to sign in to
          your Steam account.
        </Paragraph>
        <BlueText>
          Tip: If you don't share your PC, you can select "Remember my password"
          when you sign in to the PC client to enter your password and
          authenticator code less often.
        </BlueText>
      </CentredView>
      <ActionButton text="Setting" icon={returnIcon} />
      <ActionButton text="My Recov" icon={returnIcon} />
    </Container>
  );
};

export default ProfileScreen;

const ButtonsContainer = styled.View`
  margin-bottom: 20px;
`;

const BigTitle = styled.Text`
  font-size: 52px;
  color: #ffffff;
  text-align: center;
`;

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

const Paragraph = styled.Text`
  font-size: 14px;
  color: #ffffff;
  line-height: 22px;
  width: 100%;
`;

const BlueText = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  line-height: 22px;
  color: #2fb4f1;
  width: 100%;
`;
