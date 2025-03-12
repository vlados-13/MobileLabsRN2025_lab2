import React, { useState } from "react";
import { StatusBar, FlatList, ActivityIndicator } from "react-native";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import StoreHeader from "../components/StoreHeader";
import Buttons from "../components/buttons";
import { dandruff, ava, avatar, messageRust } from "../components/icons";
import { messages } from "../data/data";
import { Container, RowContainer } from "../components/container";

const iconsList = [ava, avatar, messageRust];

const getRandomAvatar = () => {
  const randomIndex = Math.floor(Math.random() * iconsList.length);
  return iconsList[randomIndex];
};

const ChatScreen = () => {
  const [activeButton, setActiveButton] = useState("button1");
  const [data, setData] = useState(messages);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

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
      })),
    ];

    setData(newData);
    setPage(page + 1);
    setLoading(false);
  };

  const renderItem = ({ item }) => (
    <MessageContainer>
      {item.avatar ? (
        <StyledSvgXml xml={item.avatar} />
      ) : (
        <StyledSvgXml xml={getRandomAvatar()} />
      )}
      <MessageContent>
        <UserName>{item.interlocutor}</UserName>
        <MessageText>
          {item.lastMessage === "You" && <Sender>You: </Sender>}
          {item.message}
        </MessageText>
      </MessageContent>
      <StatusIndicator online={item.online}>
        {item.online && <StatusIndicatorText>1</StatusIndicatorText>}
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
      <ButtonsContainer>
        <Buttons
          activeButton={activeButton}
          handlePress={handlePress}
          button1Text="Open chats"
          button2Text="My friends"
        />
      </ButtonsContainer>
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

const ButtonsContainer = styled.View`
  margin-bottom: 20px;
`;

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

const UserName = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

const MessageText = styled.Text`
  color: #a2a7b1;
  font-size: 14px;
`;

const Sender = styled.Text`
  color: #ffffff;
`;

const StatusIndicator = styled.View`
  width: ${(props) => (props.online ? "15px" : "10px")};
  height: ${(props) => (props.online ? "15px" : "10px")};
  border-radius: 10px;
  background-color: ${(props) => (props.online ? "#31BCFC" : "#FFFFFF")};
  align-items: center;
  justify-content: center;
`;

const StatusIndicatorText = styled.Text`
  color: #1c202c;
  font-size: 10px;
`;
