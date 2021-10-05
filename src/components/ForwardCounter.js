import { useState, useEffect } from "react";
import useCounter from "../hooks/use-counter";

import Card from "./Card";

const ForwardCounter = () => {
  const counter = useCounter();

  async function saveData() {
    const result = await fetch(
      "https://react-http-7ac84-default-rtdb.firebaseio.com/tasks.json",
      // {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     // 'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   referrerPolicy: "no-referrer",
      //   body: JSON.stringify({
      //     name: "swapnil",
      //     task: "give training on react",
      //   }),
      // }
    );

    const data = await result.json();
    console.log(data);
  }

  return (
    <Card>
      {counter}
      <button type="button" onClick={saveData}>
        {" "}
        Save Data{" "}
      </button>
    </Card>
  );
};

export default ForwardCounter;
