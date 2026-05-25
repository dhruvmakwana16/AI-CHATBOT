function Message({ text, sender }) {
  return (
    <div
      className={`max-w-[75%] p-3 my-2 rounded-xl shadow-md text-sm leading-relaxed
        ${
          sender === "user"
            ? "bg-blue-600 text-white ml-auto rounded-br-none"
            : "bg-gray-700 text-gray-100 mr-auto rounded-bl-none"
        }`}
    >
      {text}
    </div>
  );
}

export default Message;
