import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${({ theme }) => theme.background};
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const BottomView = styled.View`
  margin-bottom: 20px;
`;

export const RowCenterView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RowView = styled.View`
  flex-direction: row;
`;
