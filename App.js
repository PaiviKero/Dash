import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { TaskItem } from "./components/task-item";

export default function App() {
  const task = { name: "Other task" };
  return (
    <View style={styles.container}>
      <TaskItem task={task} />
      <StatusBar style="auto" />
    </View>
  );
}

// TODO:  ->>  styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
