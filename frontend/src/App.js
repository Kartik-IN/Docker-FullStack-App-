import { useEffect, useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const API = "http://localhost:5000";

  const loadMessages = () => {
    fetch(`${API}/api/messages`)
      .then(res => res.json())
      .then(data => setMessages(data));
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text) return;

    await fetch(`${API}/api/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });

    setText("");
    loadMessages();   // Refresh list
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Docker Full Stack App 🚀</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add</button>
      </form>

      <h2>Messages:</h2>
      {messages.map((msg, index) => (
        <p key={index}>👉 {msg.text}</p>
      ))}
    </div>
  );
}

export default App;
