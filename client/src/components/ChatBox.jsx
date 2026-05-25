// import { useState } from "react";
// import API from "../services/api";
// import Message from "./Message";
// import Loader from "./Loader";

// function ChatBox() {

//   const [message, setMessage] = useState("");

//   const [messages, setMessages] = useState([]);

//   const [loading, setLoading] = useState(false);

//   async function sendMessage() {

//     if (!message) return;

//     const userMessage = {
//       text: message,
//       sender: "user",
//     };

//     setMessages((prev) => [
//       ...prev,
//       userMessage,
//     ]);

//     setLoading(true);

//     try {

//       const response = await API.post(
//         "/api/chat",
//         {
//           message,
//         }
//       );

//       const aiMessage = {
//         text: response.data.reply,
//         sender: "ai",
//       };

//       setMessages((prev) => [
//         ...prev,
//         aiMessage,
//       ]);

//     } catch (error) {

//       console.log(error);

//     }

//     setLoading(false);
//     setMessage("");
//   }

//   return (
//     <div className="p-4">

//       <div className="h-[70vh] overflow-y-auto">

//         {messages.map((msg, index) => (
//           <Message
//             key={index}
//             text={msg.text}
//             sender={msg.sender}
//           />
//         ))}

//         {loading && <Loader />}
//       </div>

//       <div className="flex gap-2 mt-4">

//         <input
//           type="text"
//           placeholder="Ask anything..."
//           value={message}
//           onChange={(e) =>
//             setMessage(e.target.value)
//           }
//           className="flex-1 p-3 rounded bg-slate-800 outline-none"
//         />

//         <button
//           onClick={sendMessage}
//           className="bg-blue-600 px-5 rounded"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ChatBox;


import { useState } from "react";
import API from "../services/api";
import Message from "./Message";
import Loader from "./Loader";

function ChatBox() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message) return;

    const userMessage = { text: message, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await API.post("/api/chat", { message });
      const aiMessage = { text: response.data.reply, sender: "ai" };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
    setMessage("");
  }

  return (
    <div className="flex flex-col h-screen max-h-screen bg-gray-900 text-white p-6">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto space-y-3 p-4 rounded-lg bg-gray-800 shadow-inner">
        {messages.map((msg, index) => (
          <Message
            key={index}
            text={msg.text}
            sender={msg.sender}
          />
        ))}
        {loading && <Loader />}
      </div>

      {/* Input area */}
      <div className="flex gap-3 mt-4">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-all duration-200"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
