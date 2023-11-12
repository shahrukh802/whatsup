import { BsCheck, BsCheckAll } from "react-icons/bs";

interface IProps {
  messageStatus: string;
}

const MessageStatus = ({ messageStatus }: IProps) => {
  return (
    <>
      {messageStatus === "sent" && <BsCheck className="text-lg" />}
      {messageStatus === "delivered" && <BsCheckAll className="text-lg" />}
      {messageStatus === "read" && (
        <BsCheckAll className="text-lg text-primaryBlue" />
      )}
    </>
  );
};

export default MessageStatus;
