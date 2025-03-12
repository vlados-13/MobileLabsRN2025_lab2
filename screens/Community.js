import React, { useState, useEffect } from "react";
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import { comment, dandruff, like, repost } from "../components/icons";
import { communityBtnData, communityData } from "../data/data";
import { ButtonGroup } from "../components/renderButton";
import StoreHeader from "../components/StoreHeader";
import { Container, RowContainer } from "../components/container";

export default function ComunityScreen() {
  const [data, setData] = useState(communityData);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadMoreData = async () => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      const newData = [
        ...data,
        ...communityData.map((item, index) => ({
          ...item,
          id: `${item.id}_${page * 10 + index}`,
        })),
      ];

      setData(newData);
      setPage(page + 1);
      setLoading(false);
    }, 1000);
  };

  return (
    <Container style={{ backgroundColor: "#171A24" }}>
      <StatusBar style="dark" backgroundColor="#171a21" />
      <RowContainer>
        <StoreHeader title="Community" />
      </RowContainer>

      <View style={{ marginBottom: 20 }}>
        <CommunityText>
          Community and official content for all games and software
        </CommunityText>
      </View>

      <View style={{ marginBottom: 20 }}>
        <ButtonGroup buttons={communityBtnData} />
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NewsCard key={item.id}>
            <AuthorContainer>
              <Image
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/e6d6/fd52/73e74d43bbd5b22247e8d9e7e2cb6b40?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ao9tBb79CSRRJ2H1~~VvERKltS3Z9FBYQkUUlNVy6vbBlHnZ8R~ZCHyM~toY~vsJzvsJPW6owvqKtO42~6oCNba4IxCBa68uf~xiwxlgDFSu7lOQO2SLkn5qlsjzDbUuXSvZ4jhl70EXRyCN8wa~LbM4US3~M36Yr6ScHDGpw1YQ2TyYXohPvKjO5HLz0QZnPM~NQEmfC~7ECjY2CJcX3cYDuydwJ813y26cVD2-3P9Bh2-sojOe-xPfgnO7LAJtTiy9fBR62YsaFnsEruVvW4WhE23Br4Ffdx8wGp5oY7e2x0OECl3O1LX4s-okJQ7yIKULgbm3nSpPG2QoaDLM4w__",
                }}
                style={{ width: 40, height: 40, borderRadius: 20 }}
              />
              <DataContainer>
                <Text
                  style={{ marginLeft: 10, fontSize: 16, color: "#FFFFFF" }}
                >
                  Eurogamer
                </Text>
                <Text
                  style={{ marginLeft: 10, fontSize: 12, color: "#7b8d9d" }}
                >
                  Yesterday • 2:20 PM
                </Text>
              </DataContainer>
              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Text style={{ fontSize: 18, color: "#4B5664" }}>...</Text>
              </TouchableOpacity>
            </AuthorContainer>
            <NewsImage source={{ uri: item.image }} />

            <TitleText>{item.title}</TitleText>

            <DescriptionText>{item.description}</DescriptionText>
            <Hr />

            <LikeCommentContainer>
              <LikeContainer>
                <SvgXml xml={like} style={{ width: 20, height: 20 }} />
                <Text style={{ color: "#7b8d9d", marginLeft: 5 }}>
                  {item.likes}
                </Text>
              </LikeContainer>

              <CommentContainer>
                <SvgXml xml={comment} style={{ width: 20, height: 20 }} />
                <Text style={{ color: "#7b8d9d", marginLeft: 5 }}>
                  {item.comments}
                </Text>
              </CommentContainer>

              <CommentContainer style={{ marginLeft: "50%" }}>
                <TouchableOpacity style={{ alignSelf: "center" }}>
                  <SvgXml xml={repost} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
              </CommentContainer>
            </LikeCommentContainer>
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
  color: #7b8d9d;
  font-size: 14px;
  line-height: 18;
  text-align: left;
`;

const NewsCard = styled.View`
  margin-bottom: 20px;
  background-color: #1c202c;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const AuthorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

const TitleText = styled.Text`
  font-size: 18px;
  color: #ffffff;
  margin-top: 10px;
`;

const DescriptionText = styled.Text`
  font-size: 14px;
  color: #7b8d9d;
  margin-top: 5px;
`;

const LikeCommentContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const LikeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CommentContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;

const Hr = styled.View`
  width: 334px;
  height: 1px;
  background-color: #303649;
  margin-top: 10px;
`;
