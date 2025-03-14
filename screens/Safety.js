import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import StoreHeader from "../components/StoreHeader";
import Buttons from "../components/buttons";
import { BottomView, Container, RowContainer } from "../components/container";
import { LightGreyText, ThemedText } from "../components/texts";
import { returnIcon } from "../components/icons";
import ActionButton from "../components/ActionButton";
import { useTheme } from "../components/hooks/themeContext";

const SafetyScreen = () => {
  const [activeButton, setActiveButton] = useState("button1");
  const { theme } = useTheme();

  const handlePress = (button) => {
    setActiveButton(button);
  };

  return (
    <Container>
      <StatusBar
        style="light"
        backgroundColor={theme === "dark" ? "#1C202C" : "#a2a7b1"}
      />
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
        <ThemedText size={52}>N5KCV</ThemedText>
        <Hr theme={theme}>
          <LeftSide />
          <RightSide theme={theme} />
        </Hr>
      </CentredView>

      <CentredView>
        <ThemedText
          size={14}
          style={{ lineHeight: 22, width: "100%", letterSpacing: -0.28 }}
        >
          You’ll enter your code each time you enter your password to sign in to
          your Steam account.
        </ThemedText>
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
  border: 1px solid ${({ theme }) => (theme === "dark" ? "#ffffff" : "#1C202C")};
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
  background-color: ${({ theme }) => (theme === "dark" ? "#1C202C" : "ffffff")};
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
