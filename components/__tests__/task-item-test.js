import "react-native";
import React from "react";
import { TaskItem } from "../task-item";

import renderer from "react-test-renderer";

it("TaskItem renders correctly", () => {
  const tree = renderer.create(<TaskItem />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("TaskItem name property renders correctly", () => {
  const otherTask = { name: "Other task" };
  const tree = renderer.create(<TaskItem task={otherTask} />).toJSON();
  expect(tree).toMatchSnapshot();
});
