import React from "react";
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from "react-native";
import Style from "./index.style";

interface IButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function SecondaryButton(props: IButtonProps) {
  return (
    <TouchableOpacity {...props} style={Style.button}>
      <Text style={Style.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}
