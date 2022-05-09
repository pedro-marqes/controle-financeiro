import React, { useEffect, useState } from "react";
import * as C from "./styles";

const ResumeItem = ({ title, Icon, value }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (title === "Entradas") {
      setColor("green");
    }

    if (title === "Saídas") {
      setColor("red");
    }


    
  }, [title, value]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon color={color} />
      </C.Header>
      <C.Total>{value}</C.Total>
    </C.Container>
  );
};

export default ResumeItem;
