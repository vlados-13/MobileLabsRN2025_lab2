import React, { useState, useCallback } from "react";
import {
  View,
  StatusBar,
  FlatList,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import { dandruff, windows, apple } from "../components/icons";
import { newsData, buttonData } from "../data/data";
import { ButtonGroup } from "../components/renderButton";
import StoreHeader from "../components/StoreHeader";
import PriceComponent from "../components/PriceComponent";
import { Container, RowContainer } from "../components/container";

export default function HomeScreen() {
  const [data, setData] = useState(newsData);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadMoreData = useCallback(async () => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      const newData = newsData.map((item) => ({
        ...item,
        id: `${item.id}-${page}`,
      }));
      setData([...data, ...newData]);
      setPage(page + 1);
      setLoading(false);
    }, 500);
  }, [loading, data, page]);

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
              <CardTitle>{item.headline}</CardTitle>
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
                xml={platform === "Windows" ? windows : apple}
                width={platform === "Windows" ? 12.5 : 12}
                height={platform === "Windows" ? 12.5 : 12}
              />
            ))}
          </IconsContainer>

          <NamesContainer>
            {item.platform.split(", ").map((platform, index) => (
              <PlatformText key={index}>{platform}</PlatformText>
            ))}
          </NamesContainer>
        </PlatformsContainer>
      ) : null;

    return (
      <ListElement>
        <ImageBlock source={{ uri: item.image }} />

        <TextWrapper>
          <Title>{item.headline}</Title>
          <PlatformIconsWrapper>{platforms}</PlatformIconsWrapper>
        </TextWrapper>

        <PriceContainer>
          {item.discount && item.discount !== "0" ? (
            <PriceWrapper>
              <OldPrice>{item.oldPrice}</OldPrice>
              <NewPrice>{item.price}</NewPrice>
            </PriceWrapper>
          ) : (
            <Price>{item.price}</Price>
          )}
          {item.discount && item.discount !== "0" && (
            <DiscountBadge>
              <DiscountText>{item.discount}</DiscountText>
            </DiscountBadge>
          )}
        </PriceContainer>
      </ListElement>
    );
  };

  return (
    <Container>
      <StatusBar style="dark" backgroundColor="#171a21" />
      <RowContainer>
        <StoreHeader title="Store" />
        <SvgXml xml={dandruff} />
      </RowContainer>

      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => `horizontal-${item.id}-${index}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 20 }}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loading ? <ActivityIndicator size="large" color="#31BCFC" /> : null
          }
        />
      </View>

      <View style={{ marginBottom: 20 }}>
        <ButtonGroup buttons={buttonData} />
      </View>

      <View>
        <FlatList
          data={data}
          renderItem={renderList}
          keyExtractor={(item, index) => `vertical-${item.id}-${index}`}
          vertical
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

const CardTitle = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
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

const Title = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

const PlatformIconsWrapper = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

const PriceContainer = styled.View`
  align-items: flex-end;
`;

const PriceWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Price = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;

const OldPrice = styled.Text`
  color: gray;
  font-size: 12px;
  text-decoration-line: line-through;
  margin-right: 5px;
`;

const NewPrice = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;

const DiscountBadge = styled.View`
  background-color: #00d44b80;
  border-radius: 5px;
  margin-top: 5px;
  padding: 2px;
  justify-content: center;
  align-items: center;
`;

const DiscountText = styled.Text`
  color: #ffffff;
  font-size: 12px;
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

const NamesContainer = styled.View`
  flex-direction: row;
`;

const PlatformText = styled.Text`
  font-size: 14px;
  color: #7b8d9d;
  margin-right: 5px;
`;
