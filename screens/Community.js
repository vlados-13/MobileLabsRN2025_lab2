import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import { comment, like, repost } from "../components/icons";
import { communityBtnData, communityData } from "../data/data";
import { ButtonGroup } from "../components/renderButton";
import StoreHeader from "../components/StoreHeader";
import {
  BottomView,
  Container,
  RowCenterView,
  RowContainer,
} from "../components/container";
import { GreyText, ThemedText } from "../components/texts";
import useLoadMore from "../components/hooks/loadMore";
import { useTheme } from "../components/hooks/themeContext";
import { StatusBar } from "expo-status-bar";

export default function ComunityScreen() {
  const { theme } = useTheme();
  const { data, loading, loadMoreData } = useLoadMore(
    communityData,
    () => communityData
  );

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <Container>
      <StatusBar
        style="light"
        backgroundColor={theme === "dark" ? "#1C202C" : "#a2a7b1"}
      />
      <RowContainer>
        <StoreHeader title="Community" />
      </RowContainer>

      <BottomView>
        <CommunityText theme={theme}>
          Community and official content for all games and software
        </CommunityText>
      </BottomView>

      <BottomView>
        <ButtonGroup buttons={communityBtnData} />
      </BottomView>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NewsCard theme={theme} key={item.id}>
            <RowCenterView>
              <Image
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/e6d6/fd52/73e74d43bbd5b22247e8d9e7e2cb6b40?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ao9tBb79CSRRJ2H1~~VvERKltS3Z9FBYQkUUlNVy6vbBlHnZ8R~ZCHyM~toY~vsJzvsJPW6owvqKtO42~6oCNba4IxCBa68uf~xiwxlgDFSu7lOQO2SLkn5qlsjzDbUuXSvZ4jhl70EXRyCN8wa~LbM4US3~M36Yr6ScHDGpw1YQ2TyYXohPvKjO5HLz0QZnPM~NQEmfC~7ECjY2CJcX3cYDuydwJ813y26cVD2-3P9Bh2-sojOe-xPfgnO7LAJtTiy9fBR62YsaFnsEruVvW4WhE23Br4Ffdx8wGp5oY7e2x0OECl3O1LX4s-okJQ7yIKULgbm3nSpPG2QoaDLM4w__",
                }}
                style={{ width: 40, height: 40, borderRadius: 20 }}
              />
              <DataContainer>
                <ThemedText style={{ marginLeft: 10 }}>Eurogamer</ThemedText>
                <GreyText size={12} theme={theme} style={{ marginLeft: 10 }}>
                  Yesterday • 2:20 PM
                </GreyText>
              </DataContainer>
              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: theme === "dark" ? "#4B5664" : "#000",
                  }}
                >
                  ...
                </Text>
              </TouchableOpacity>
            </RowCenterView>
            <NewsImage source={{ uri: item.image }} />

            <ThemedText style={{ marginTop: 10 }}>{item.title}</ThemedText>

            <GreyText size={14} theme={theme} style={{ marginTop: 5 }}>
              {item.description}
            </GreyText>
            <Hr theme={theme} />

            <RowCenterView style={{ marginTop: 10 }}>
              <RowCenterView>
                <SvgXml xml={like} style={{ width: 20, height: 20 }} />
                <GreyText theme={theme} style={{ marginLeft: 5 }}>
                  {item.likes}
                </GreyText>
              </RowCenterView>

              <RowCenterView style={{ marginLeft: 20 }}>
                <SvgXml xml={comment} style={{ width: 20, height: 20 }} />
                <GreyText theme={theme} style={{ marginLeft: 5 }}>
                  {item.comments}
                </GreyText>
              </RowCenterView>

              <RowCenterView style={{ marginLeft: "50%" }}>
                <TouchableOpacity style={{ alignSelf: "center" }}>
                  <SvgXml xml={repost} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
              </RowCenterView>
            </RowCenterView>
          </NewsCard>
        )}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="#31BCFC" /> : null
        }
      />
    </Container>
  );
}

const CommunityText = styled.Text`
  color: ${(props) => (props.theme === "dark" ? "#7b8d9d" : "#333")};
  font-size: 14px;
  line-height: 18;
  text-align: left;
`;

const NewsCard = styled.View`
  margin-bottom: 20px;
  background-color: ${(props) =>
    props.theme === "dark" ? "#1c202c" : "#ffffff"};
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 10px
    ${(props) =>
      props.theme === "dark" ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.2)"};
`;

const DataContainer = styled.View`
  flex-direction: column;
  flex-grow: 1;
`;

const NewsImage = styled.Image`
  width: 100%;
  height: 200px;
  margin-top: 10px;
  border-radius: 10px;
`;

const Hr = styled.View`
  width: 334px;
  height: 1px;
  background-color: ${(props) =>
    props.theme === "dark" ? "#303649" : "#e0e0e0"};
  margin-top: 10px;
`;
