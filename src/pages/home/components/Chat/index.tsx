import ChatContainer from "./ChatContainer";
import ChatHeader from "./ChatHeader";
import ChatMessageBar from "./ChatMessageBar";

const Chat = () => {
  return (
    <div className="flex flex-col">
      <ChatHeader />
      <ChatContainer />
      <ChatMessageBar />
    </div>
  );
};

export default Chat;
