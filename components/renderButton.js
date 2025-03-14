import React, { useState } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { WhiteText } from "./texts";
import { useTheme } from "../components/hooks/themeContext";

export const ButtonGroup = ({ buttons }) => {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePress = (index) => {
    setActiveIndex(index);
  };

  const renderButton = ({ item, index }) => (
    <StyledButton
      onPress={() => handlePress(index)}
      isActive={index === activeIndex}
      themeMode={theme}
    >
      {item.icon ? (
        <SvgXml xml={item.icon} width={15} height={15} />
      ) : (
        <WhiteText size={12} style={{ fontWeight: "bold" }}>
          {item.title}
        </WhiteText>
      )}
    </StyledButton>
  );

  return (
    <FlatList
      data={buttons}
      renderItem={renderButton}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const StyledButton = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.isActive
      ? "#31BCFC"
      : props.themeMode === "light"
      ? "#a2a7b1"
      : "#303649"};
  padding: 5px 15px;
  height: 50px;
  margin-right: 5px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
