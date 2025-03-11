import React, { useState } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

export const ButtonGroup = ({ buttons }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePress = (index) => {
    setActiveIndex(index);
  };

  const renderButton = ({ item, index }) => (
    <StyledButton
      onPress={() => handlePress(index)}
      isActive={index === activeIndex}
    >
      {item.icon ? (
        <SvgXml xml={item.icon} width={15} height={15} />
      ) : (
        <ButtonText>{item.title}</ButtonText>
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
  background-color: ${(props) => (props.isActive ? "#31BCFC" : "#303649")};
  padding: 5px 15px;
  height: 50px;
  margin-right: 5px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
`;
