import React, { useEffect } from "react";
import {
  View,
  FlatList,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import { dandruff, windows, apple } from "../components/icons";
import { newsData, buttonData } from "../data/data";
import { ButtonGroup } from "../components/renderButton";
import StoreHeader from "../components/StoreHeader";
import PriceComponent from "../components/PriceComponent";
import {
  BottomView,
  Container,
  RowCenterView,
  RowContainer,
  RowView,
} from "../components/container";
import { GreyText, ThemedText, WhiteText } from "../components/texts";
import useLoadMore from "../components/hooks/loadMore";
import { useTheme } from "../components/hooks/themeContext";

export default function HomeScreen() {
  const { theme } = useTheme();
  const { data, loading, loadMoreData } = useLoadMore(newsData, () => newsData);

  useEffect(() => {
    loadMoreData();
  }, []);

  const renderItem = ({ item }) => {
    if (!item.discount || item.discount === "0") return null;

    return (
      <Card key={item.id}>
        <ImageWrapper>
          <ImageBackground
            source={{ uri: item.image }}
            style={cardStyles.image}
          >
            <CardContent>
              <WhiteText size={20} style={{ fontWeight: "700" }}>
                {item.headline}
              </WhiteText>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>

            <PriceComponent
              oldPrice={item.oldPrice}
              price={item.price}
              discount={item.discount}
            />
          </ImageBackground>
          <IconWrapper>
            <SvgXml xml={windows} />
          </IconWrapper>
        </ImageWrapper>
      </Card>
    );
  };

  const renderList = ({ item }) => {
    const platforms =
      item.platform && item.platform.length > 0 ? (
        <PlatformsContainer>
          <IconsContainer>
            {item.platform.split(", ").map((platform, index) => (
              <SvgXml
                key={index}
                xml={platform === "Windows" ? windows : apple}
                width={platform === "Windows" ? 12.5 : 12}
                height={platform === "Windows" ? 12.5 : 12}
              />
            ))}
          </IconsContainer>

          <RowView>
            {item.platform.split(", ").map((platform, index) => (
              <GreyText key={index} size={14} style={{ marginRight: 5 }}>
                {platform}
              </GreyText>
            ))}
          </RowView>
        </PlatformsContainer>
      ) : null;

    return (
      <ListElement>
        <ImageBlock source={{ uri: item.image }} />

        <TextWrapper>
          <ThemedText size={16}>{item.headline}</ThemedText>
          <RowView style={{ marginTop: 5 }}>{platforms}</RowView>
        </TextWrapper>

        <PriceContainer>
          {item.discount && item.discount !== "0" ? (
            <RowCenterView>
              <OldPrice>{item.oldPrice}</OldPrice>
              <ThemedText size={18}>{item.price}</ThemedText>
            </RowCenterView>
          ) : (
            <ThemedText size={18}>{item.price}</ThemedText>
          )}
          {item.discount && item.discount !== "0" && (
            <DiscountBadge>
              <WhiteText size={12}>{item.discount}</WhiteText>
            </DiscountBadge>
          )}
        </PriceContainer>
      </ListElement>
    );
  };

  return (
    <Container>
      <StatusBar
        style="light"
        backgroundColor={theme === "dark" ? "#1C202C" : "#a2a7b1"}
      />
      <RowContainer>
        <StoreHeader title="Store" />
        <SvgXml xml={dandruff} />
      </RowContainer>

      <BottomView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => `horizontal-${item.id}-${index}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loading ? <ActivityIndicator size="large" color="#31BCFC" /> : null
          }
          scrollEventThrottle={16}
        />
      </BottomView>

      <BottomView>
        <ButtonGroup buttons={buttonData} />
      </BottomView>

      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={renderList}
          keyExtractor={(item, index) => `vertical-${item.id}-${index}`}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 10 }}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loading ? <ActivityIndicator size="large" color="#31BCFC" /> : null
          }
        />
      </View>
    </Container>
  );
}

const Card = styled.View`
  width: 340px;
  height: 300px;
  margin-right: 15px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #1c202c;
  position: relative;
`;

const ImageWrapper = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
`;

const cardStyles = {
  image: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 15,
    resizeMode: "contain",
  },
};

const CardContent = styled.View`
  padding-left: 10px;
  padding-right: 10px;
`;

const CardDescription = styled.Text`
  color: gray;
  font-size: 13px;
  line-height: 18;
  margin-top: 5px;
`;

const IconWrapper = styled.View`
  position: absolute;
  bottom: 15px;
  right: 15px;
  border-radius: 25px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

const ListElement = styled.View`
  height: 70px;
  padding-left: 18px;
  padding-right: 18px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ImageBlock = styled.Image`
  height: 50px;
  width: 72px;
  margin-right: 10px;
  border-radius: 5px;
`;

const TextWrapper = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
`;

const PriceContainer = styled.View`
  align-items: flex-end;
`;

const OldPrice = styled.Text`
  color: gray;
  font-size: 12px;
  text-decoration-line: line-through;
  margin-right: 5px;
`;

const DiscountBadge = styled.View`
  background-color: #00d44b80;
  border-radius: 5px;
  margin-top: 5px;
  padding: 2px;
  justify-content: center;
  align-items: center;
`;

const PlatformsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const IconsContainer = styled.View`
  flex-direction: row;
  gap: 8px;
`;
