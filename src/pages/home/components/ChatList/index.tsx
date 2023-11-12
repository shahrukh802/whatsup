import ChatHeader from "./ChatHeader";
import ChatIListtem from "./ChatIListtem";
import ChatSearch from "./ChatSearch";

const chats = [
  {
    id: 1,
    name: "Almas Uni",
    type: "audio",
    time: "09:01",
    seen: false,
  },
  {
    id: 2,
    name: "Salman Mandan",
    type: "text",
    time: "10:01",
    seen: true,
  },
  {
    id: 3,
    name: "Shah Rukh",
    type: "text",
    time: "01:01",
    seen: true,
  },
];

const ChatList = () => {
  return (
    <div className="bg-primaryDark border-r-borderLight border-r">
      <ChatHeader />
      <ChatSearch />
      {chats.map((item) => (
        <ChatIListtem key={item.id} chat={item} />
      ))}
    </div>
  );
};

export default ChatList;
