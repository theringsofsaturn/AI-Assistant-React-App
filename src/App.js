import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
const alanKey =
  "20e4a9f477a935a34175767f24ec24792e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadLines") {
          // alert("Ky eshte nje testim pr komanden!");
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>TEST PER AI</h1>
    </div>
  );
};

export default App;
