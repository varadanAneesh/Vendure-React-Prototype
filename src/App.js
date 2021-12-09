import { useState } from "react";
import "./App.css";
import GetChannelToken from "./GetChannelToken";
import LoginForm from "./LoginForm/LoginForm";

function App() {
  const [channelToken, setChannelToken] = useState({ is: false, tokens: "" });
  console.log(channelToken.tokens);
  return (
    <>
      <GetChannelToken />
      <LoginForm setChannelToken={setChannelToken} />
    </>
  );
}

export default App;
