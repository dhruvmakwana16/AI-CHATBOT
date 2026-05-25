function Loader() {
  return (
    <div className="flex items-center gap-2 text-gray-400">
      {/* Spinner */}
      <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
      
      {/* Typing dots */}
      <span className="flex gap-1">
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
      </span>

      <span>AI is typing...</span>
    </div>
  );
}

export default Loader;
