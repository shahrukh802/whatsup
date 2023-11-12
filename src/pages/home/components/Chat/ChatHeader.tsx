import DefaultUserSVG from "../../../../assets/svgs/DefaultUserSVG";
import MenuSVG from "../../../../assets/svgs/MenuSVG";
import SearchBigSVG from "../../../../assets/svgs/SearchBigSVG";
import { MdCall } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";

const ChatHeader = () => {
  return (
    <div className="flex items-center justify-between px-4 bg-primary py-[10px]">
      <div className="flex items-center gap-4">
        <span className="h-10 w-10 cursor-pointer">
          <DefaultUserSVG />
        </span>
        <span className="text-textLight text-lg font-semibold">Shah Rukh</span>
      </div>
      <div className="flex gap-7 items-center">
        <span className="cursor-pointer text-iconColor text-xl">
          <MdCall />
        </span>
        <span className="cursor-pointer text-iconColor text-xl">
          <IoVideocam />
        </span>
        <span className="cursor-pointer text-iconColor">
          <SearchBigSVG />
        </span>
        <span className="cursor-pointer text-iconColor">
          <MenuSVG />
        </span>
      </div>
    </div>
  );
};

export default ChatHeader;
