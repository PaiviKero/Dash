import React, { useState } from "react";

import { Input } from "./styles";
import { strings } from "resources/strings";

export const TaskItem = ({ task = {} }) => {
  const [name, setName] = useState(task.name);

  // TODO: saving task somewhere ????
  return (
    <>
      <Input
        label={strings.task.name}
        value={name}
        // TODO: test changing text
        onChangeText={(text) => setName(text)}
      />
    </>
  );
};
