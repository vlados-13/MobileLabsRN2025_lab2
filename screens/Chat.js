import React, { useState, useEffect } from "react";
import { StatusBar, FlatList, ActivityIndicator } from "react-native";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import StoreHeader from "../components/StoreHeader";
import Buttons from "../components/buttons";
import { dandruff, ava, avatar, messageRust } from "../components/icons";
import { messages } from "../data/data";
import { BottomView, Container, RowContainer } from "../components/container";
import { LightGreyText, WhiteText } from "../components/texts";

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
    <MessageContainer>
      <StyledSvgXml xml={item.avatar} />
      <MessageContent>
        <WhiteText size={16}>{item.interlocutor}</WhiteText>
        <LightGreyText>
          {item.lastMessage === "You" && <WhiteText size={14}>You: </WhiteText>}
          {item.message}
        </LightGreyText>
      </MessageContent>
      <StatusIndicator
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
      <StatusBar style="dark" backgroundColor="#171a21" />
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
  background-color: #1c202c;
  border-bottom-width: 1px;
  border-bottom-color: #1c202c;
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
      return "#1c202c";
    } else {
      return "#FFFFFF";
    }
  }};
  align-items: center;
  justify-content: center;
`;

const StatusIndicatorText = styled.Text`
  color: #1c202c;
  font-size: 10px;
`;
