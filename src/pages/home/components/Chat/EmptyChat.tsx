import NativeDesktopImg from "../../../assets/pngs/native-desktop-hero.png";

const EmptyChat = () => {
  return (
    <div className="w-full h-full bg-emptyScreen flex flex-col items-center justify-center mx-auto">
      <img
        src={NativeDesktopImg}
        alt="NativeDesktopImg"
        className="w-[320px]"
      />
      <h1 className="mt-10 text-3xl text-textLight">
        Download WhatsApp for Windows
      </h1>
      <p className="mt-5 text-textLight">
        Make calls, share your screen and get a faster experience when you
        download the Windows app.
      </p>
    </div>
  );
};

export default EmptyChat;
