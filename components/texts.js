import styled from "styled-components";

export const LightGreyText = styled.Text`
  color: #a2a7b1;
  font-size: ${({ size }) => (size ? `${size}px` : "14px")};
`;

export const WhiteText = styled.Text`
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  color: #ffffff;
`;

export const GreyText = styled.Text`
  color: #7b8d9d;
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
`;

export const ThemedText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
`;
