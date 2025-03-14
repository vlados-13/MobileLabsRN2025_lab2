import React from "react";
import { SvgXml } from "react-native-svg";
import { steamIcon, blackSteamIcon } from "./icons";
import { ThemedText } from "./texts";
import { RowCenterView } from "./container";
import { useTheme } from "../components/hooks/themeContext";

const StoreHeader = ({ title }) => {
  const { theme } = useTheme();

  const icon = theme === "dark" ? steamIcon : blackSteamIcon;
  return (
    <RowCenterView>
      <SvgXml fill={theme.text} xml={icon} />
      <ThemedText size={28} style={{ marginLeft: 10 }}>
        {title}
      </ThemedText>
    </RowCenterView>
  );
};

export default StoreHeader;
