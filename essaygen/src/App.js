import React, { useState, useRef, useEffect } from "react";
import logo from './logo.svg';
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I’m your AI writing assistant. Ask me to write an essay or a poem.",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Placeholder for API integration
  // const API_KEY = "paste your API key here";

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Placeholder: Replace with actual API call
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "This is a placeholder response. Connect your API to generate essays or poems.",
        },
      ]);
    }, 800);
  };

  return (
    <div className="ai-root">
      <header className="hero">
        <h1>Start Writing with AI</h1>
        <p className="hero-sub">Effortless essays and poems, powered by AI.</p>
      </header>
      <main className="chat-container">
        <div className="chat-box">
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-message ${msg.role === "user" ? "user" : "assistant"}`}
              >
                <div className="chat-bubble">{msg.content}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form className="chat-input-row" onSubmit={handleSend} autoComplete="off">
            <input
              className="chat-input"
              type="text"
              placeholder="Type your prompt…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Prompt input"
            />
            <button className="send-btn" type="submit" aria-label="Send">
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                <path
                  d="M3 11L19 3L11 19L10 13L3 11Z"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  fill="#222"
                />
              </svg>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
