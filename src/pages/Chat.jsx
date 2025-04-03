import React from "react";
import "../styles/Chat.css";

export default function Chat() {
  return (
    <div className="chat-container">
      
      {/* Sidebar */}
      <aside className="chat-sidebar">
        <img src="/logo.png" alt="Nirvana Logo" className="logo" />
        <nav>
          <ul>
            <li>
              <span role="img" aria-label="trash">🗑️</span> Clear conversations
            </li>
            <li>
              <span role="img" aria-label="resources">📂</span> My Resources
            </li>
            <li>
              <span role="img" aria-label="faq">📄</span> Updates & FAQ
            </li>
            <li>
              <span role="img" aria-label="logout">🔓</span> Log out
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Chat Section */}
      <main className="chat-main">
        
        {/* Chat Header */}
        <div className="chat-header">
          <img src="/penguin.png" alt="Nova" className="assistant-avatar" />
          <p>
            <em>Hey there! I'm Nova, your mental wellness companion. How are you feeling today?</em>
          </p>
        </div>

        {/* Features Section */}
        <div className="chat-messages">
          <div className="feature">
            <span className="icon">💬</span>
            <h3>Examples</h3>
            <button>“I feel tired and unmotivated.”</button>
            <button>“I feel like I need someone to talk to.”</button>
            <button>“I feel lonely and need some support.”</button>
          </div>

          <div className="feature">
            <span className="icon">✨</span>
            <h3>Capabilities</h3>
            <button>Remembers what user said earlier in the conversation.</button>
            <button>Allows user to provide follow-up corrections.</button>
            <button>Trained to decline inappropriate requests.</button>
          </div>

          <div className="feature">
            <span className="icon">⚠️</span>
            <h3>Limitations</h3>
            <button>May occasionally generate incorrect information.</button>
            <button>May occasionally produce harmful instructions or biased content.</button>
            <button>Limited knowledge of world events after 2021.</button>
          </div>
        </div>

        {/* Chat Input */}
        <div className="chat-input">
          <input type="text" placeholder="Type message" />
          <button className="send-btn">➤</button>
        </div>
      </main>

    </div>
  );
}
