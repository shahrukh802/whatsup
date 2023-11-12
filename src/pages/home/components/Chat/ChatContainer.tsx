import BgImg from "../../../../assets/pngs/chat-bg.png";
import MessageStatus from "../../../../components/MessageStatus";

const messages = [
  {
    id: 1,
    senderId: 1,
    type: "text",
    message: "Hello dear how are you!",
    createdAt: "03:57 Pm",
    messageStatus: "sent",
  },
  {
    id: 2,
    senderId: 1,
    type: "text",
    message: "Hello dear how are you!",
    createdAt: "03:57 Pm",
    messageStatus: "delivered",
  },
  {
    id: 3,
    senderId: 2,
    type: "text",
    message: "Hello dear how are you!",
    createdAt: "03:57 Pm",
    messageStatus: "read",
  },
];

const ChatContainer = () => {
  return (
    <div className="h-full w-full relative">
      <div
        className="h-full w-full opacity-5 absolute left-0 top-0 z-0"
        style={{ backgroundImage: `url(${BgImg})` }}
      />
      <div className="mx-10 my-6">
        <div className="flex w-full">
          <div className="flex flex-col justify-end w-full gap-1 overflow-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.senderId === 1 ? "justify-start" : "justify-end"
                }`}
              >
                {message.type === "text" && (
                  <div
                    className={`text-white px-2 py-[5px] rounded-md text-sm flex gap-2 items-end max-w-[45%] z-10 ${
                      message.senderId === 1
                        ? "bg-primary"
                        : " bg-bg-outgoing-background"
                    }`}
                  >
                    <span className="break-all z-10">{message.message}</span>
                    <div className="flex gap-1 items-end">
                      <span className="text-primaryLight text-[11px] pt-1 min-w-fit">
                        {message.createdAt}
                      </span>

                      <span>
                        {message.senderId === 2 && (
                          <MessageStatus
                            messageStatus={message.messageStatus}
                          />
                        )}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
