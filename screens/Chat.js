import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import StoreHeader from "../components/StoreHeader";
import Buttons from "../components/buttons";
import { dandruff, ava, avatar, messageRust } from "../components/icons";
import { messages } from "../data/data";
import { BottomView, Container, RowContainer } from "../components/container";
import { LightGreyText, ThemedText, WhiteText } from "../components/texts";
import { useTheme } from "../components/hooks/themeContext";

const iconsList = {
  ava,
  avatar,
  messageRust,
};

const getStatusByIcon = (icon) => {
  if (icon === ava) {
    return "online";
  } else if (icon === messageRust) {
    return "offline";
  } else {
    return "randomColor";
  }
};

const ChatScreen = () => {
  const [activeButton, setActiveButton] = useState("button1");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { theme } = useTheme();

  useEffect(() => {
    loadMoreMessages();
  }, []);

  useEffect(() => {
    const messagesWithAvatars = messages.map((item) => ({
      ...item,
      avatar: iconsList[item.svg],
      status: getStatusByIcon(iconsList[item.svg]),
    }));
    setData(messagesWithAvatars);
  }, []);

  const handlePress = (button) => {
    setActiveButton(button);
  };

  const loadMoreMessages = async () => {
    if (loading) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newData = [
      ...data,
      ...messages.map((item, index) => ({
        ...item,
        id: `${item.id}_${page * 10 + index}`,
        avatar: iconsList[item.svg],
        status: getStatusByIcon(iconsList[item.svg]),
      })),
    ];

    setData(newData);
    setPage(page + 1);
    setLoading(false);
  };

  const renderItem = ({ item }) => (
    <MessageContainer theme={theme}>
      <StyledSvgXml xml={item.avatar} />
      <MessageContent>
        <ThemedText size={16}>{item.interlocutor}</ThemedText>
        <LightGreyText>
          {item.lastMessage === "You" && (
            <ThemedText size={14}>You: </ThemedText>
          )}
          {item.message}
        </LightGreyText>
      </MessageContent>
      <StatusIndicator
        theme={theme}
        online={item.status === "online"}
        randomColor={item.status === "randomColor"}
      >
        {item.status === "online" && (
          <StatusIndicatorText>1</StatusIndicatorText>
        )}
      </StatusIndicator>
    </MessageContainer>
  );

  return (
    <Container>
      <StatusBar
        style="light"
        backgroundColor={theme === "dark" ? "#1C202C" : "#a2a7b1"}
      />
      <RowContainer>
        <StoreHeader title="Chat" />
        <SvgXml xml={dandruff} />
      </RowContainer>
      <BottomView>
        <Buttons
          activeButton={activeButton}
          handlePress={handlePress}
          button1Text="Open chats"
          button2Text="My friends"
        />
      </BottomView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}_${item.interlocutor}`}
        onEndReached={loadMoreMessages}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="#31BCFC" /> : null
        }
      />
    </Container>
  );
};

export default ChatScreen;

const MessageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: ${(props) =>
    props.theme === "dark" ? "#1C202C" : "#FFFFFF"};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) =>
    props.theme === "dark" ? "#1C202C" : "#E0E0E0"};
`;

const StyledSvgXml = styled(SvgXml)`
  width: 52px;
  height: 52px;
  margin-right: 10px;
`;

const MessageContent = styled.View`
  flex: 1;
`;

const StatusIndicator = styled.View`
  width: ${(props) => (props.online ? "15px" : "10px")};
  height: ${(props) => (props.online ? "15px" : "10px")};
  border-radius: 10px;
  background-color: ${(props) => {
    if (props.online) {
      return "#31BCFC";
    } else if (props.randomColor) {
      return props.theme === "dark" ? "#1C202C" : "#FFFFFF";
    } else {
      return props.theme === "dark" ? "#FFFFFF" : "#1C202C";
    }
  }};
  align-items: center;
  justify-content: center;
`;

const StatusIndicatorText = styled.Text`
  color: ${(props) => (props.theme === "dark" ? "#1C202C" : "#FFFFFF")};
  font-size: 10px;
`;
