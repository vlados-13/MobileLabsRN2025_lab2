import React from "react";
import { SvgXml } from "react-native-svg";
import { steamIcon } from "./icons";
import { WhiteText } from "./texts";
import { RowCenterView } from "./container";

const StoreHeader = ({ title }) => {
  return (
    <RowCenterView>
      <SvgXml xml={steamIcon} />
      <WhiteText size={28} style={{ marginLeft: 10 }}>
        {title}
      </WhiteText>
    </RowCenterView>
  );
};

export default StoreHeader;
