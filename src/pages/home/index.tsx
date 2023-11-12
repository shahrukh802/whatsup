import Chat from "./components/Chat";
import ChatList from "./components/ChatList";
// import EmptyChat from "./components/Chat/EmptyChat";

const HomePage = () => {
  return (
    <div className="bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden py-5">
          <ChatList />
          {/* <EmptyChat /> */}
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
