import DefaultUserSVG from "../../../../assets/svgs/DefaultUserSVG";
import MicroPhoneSVG from "../../../../assets/svgs/MicroPhoneSVG";
import SeenSVG from "../../../../assets/svgs/SeenSVG";

const ChatIListtem = ({ chat }: any) => {
  return (
    <div className="flex items-center gap-4 px-4 hover:bg-primary cursor-pointer py-4 border-b border-borderLight">
      <div>
        <span className="h-10 w-10 cursor-pointer">
          <DefaultUserSVG />
        </span>
      </div>
      <div className="flex flex-col w-full">
        <h3 className="text-textLight font-semibold">{chat.name}</h3>
        <div className="flex items-center gap-1">
          <span className="text-primaryBlue">
            <SeenSVG />
          </span>
          {chat.type === "audio" ? (
            <span className="text-primaryBlue">
              <MicroPhoneSVG height="15" width="15" />
            </span>
          ) : (
            <p className="text-primaryLight text-sm">Okay do khan g</p>
          )}

          <p className="text-primaryLight text-sm">{chat.time}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p
          className={`text-sm whitespace-nowrap  ${
            chat.seen ? "text-primaryLight" : "text-primaryGreen"
          }`}
        >
          {chat.time} Pm
        </p>
        {!chat.seen && (
          <div className="rounded-full bg-primaryGreen h-5 w-5 flex items-center justify-center text-sm">
            1
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatIListtem;
