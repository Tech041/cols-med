import { IoChatbubble } from "react-icons/io5";
import { Link } from "react-router-dom";

const Chat = () => {
  return (
    <div className="fixed p-3 rounded-full bg-blue-700 bottom-4 right-2 z-40">
      <Link onClick={() => scrollTo(0, 0)} to={"/chatbot"}>
        <span className=" ">
          <IoChatbubble size={20} color="white" />
        </span>
      </Link>
    </div>
  );
};

export default Chat;
