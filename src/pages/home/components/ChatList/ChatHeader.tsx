import ChannelsSVG from "../../../../assets/svgs/ChannelsSVG";
import CommunitiesSVG from "../../../../assets/svgs/CommunitiesSVG";
import DefaultUserSVG from "../../../../assets/svgs/DefaultUserSVG";
import MenuSVG from "../../../../assets/svgs/MenuSVG";
import NewChatSVG from "../../../../assets/svgs/NewChatSVG";
import StatusSVG from "../../../../assets/svgs/StatusSVG";

const ChatHeader = () => {
  return (
    <div className="flex items-center justify-between px-4 bg-primary py-[10px]">
      <div>
        <span className="h-10 w-10 cursor-pointer">
          <DefaultUserSVG />
        </span>
      </div>
      <div className="flex gap-7">
        <span className="cursor-pointer text-iconColor">
          <CommunitiesSVG />
        </span>
        <span className="cursor-pointer text-iconColor">
          <StatusSVG />
        </span>
        <span className="cursor-pointer text-iconColor">
          <ChannelsSVG />
        </span>
        <span className="cursor-pointer text-iconColor">
          <NewChatSVG />
        </span>
        <span className="cursor-pointer text-iconColor">
          <MenuSVG />
        </span>
      </div>
    </div>
  );
};

export default ChatHeader;
