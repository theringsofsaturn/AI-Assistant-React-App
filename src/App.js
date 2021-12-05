import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
const alanKey =
  "20e4a9f477a935a34175767f24ec24792e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("Ky eshte nje testim pr komanden!");
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
