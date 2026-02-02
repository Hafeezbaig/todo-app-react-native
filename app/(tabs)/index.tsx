import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const {toggleDarkMode} = useTheme();

  const todos = useQuery(api.todos.getTodos);
  console.log(todos);

  const addTodo = useMutation(api.todos.addTodo);
  const clearAllTodos = useMutation(api.todos.clearAllTodos);

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity
      onPress={toggleDarkMode}>
        <Text>Toggle the mode</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => addTodo({ text: "New Todo" })}>
        <Text>Add a new Todo</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => clearAllTodos()}>
        <Text>Clear All Todos</Text>
      </TouchableOpacity>
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
  content: {
    fontSize: 18,
  }
});