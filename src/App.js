import { useState } from "react";
import "./App.css";

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const userArray = [
    { name: "Test User" },
    { name: "Test User" },
    { name: "Test User" },
    { name: "Test User" },
    { name: "Test User" },
    { name: "Test User" },
    { name: "Test User" },
    { name: "Test User" }
  ];
  return (
    <div className="chat-container">
      <header onClick={() => setChatOpen(value => !value)}>Chat </header>
      {chatOpen && (
        <div className="chatlist">
          {userArray.map(user => (
            <div className="user">{user.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
