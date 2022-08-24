import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TaskItem } from "./components/task-item";

export default function App() {
  const task = { name: "Other task" };
  return (
    <View style={styles.container}>
      <Text>
        Open up App.js to start working on your app! Add new component!
      </Text>
      <TaskItem task={task} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
