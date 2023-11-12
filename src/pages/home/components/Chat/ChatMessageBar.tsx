import PlusSVG from "../../../../assets/svgs/PlusSVG";
import SendSVG from "../../../../assets/svgs/SendSVG";
import SmileySVG from "../../../../assets/svgs/SmileySVG";

const ChatMessageBar = () => {
  return (
    <div className="flex items-center px-5 py-3 gap-3 bg-primary">
      <span className="cursor-pointer text-iconColor">
        <SmileySVG />
      </span>
      <span className="cursor-pointer text-iconColor">
        <PlusSVG />
      </span>
      <div className="relative w-full">
        <input
          type="search"
          className="py-3 w-full text-sm bg-[#2A3942] text-textLight rounded-[8px] pl-4 focus:outline-none"
          placeholder="Type a message"
          autoComplete="off"
        />
      </div>
      <div className="flex">
        <span className="cursor-pointer text-iconColor">
          <SendSVG />
        </span>
      </div>
    </div>
  );
};

export default ChatMessageBar;
