import React from "react";
import { Text } from "react-native";

export const TaskItem = ({ task = {} }) => {
  const { name = "Some task" } = task;

  return <Text>{name}</Text>;
};
