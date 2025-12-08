import { CircleSmall, Ellipsis } from "lucide-react";

const ChatInterface = () => {
  return (
    <div className="chat-interface w-[77vw] h-screen bg-[#333657] text-white">
      <div className="chat-interface-header w-full h-[10vh]  flex items-center justify-between border-b border-[#484D73]">
        <div className="chat-interface-header-user-detals w-1/4 h-full  flex items-center gap-3">
          <div className="chat-interface-headeruser-details-avtar relative w-[24%] h-full p-2  rounded-full flex items-center justify-between">
            {/* <UserRound strokeWidth={0.75} className="w-full h-full" /> */}
            <img
              src="https://avatars.githubusercontent.com/u/64682052?v=4"
              alt="User profile"
              className="w-full h-full rounded-full"
            />
            <span className="absolute top-1 right-1">
              <CircleSmall
                strokeWidth={5}
                className="border-none text-green-400"
              />
            </span>
          </div>
          <div className="chat-interface-header-user-name-status">
            <div className="chat-interface-header-user-name">
              <h1 className="text-xl">Amit Bhagat</h1>
            </div>
            <div className="chat-interface-header-user-status">
              <h2 className="text-sm text-slate-400">Active Now</h2>
            </div>
          </div>
        </div>
        <div className="chat-interface-header-user-options w-1/4 h-full  flex justify-end items-center pr-3 ">
          <Ellipsis strokeWidth={2} className="hover:cursor-pointer"/>
        </div>
      </div>
      <div className="chat-interface-chats w-full h-[78vh] bg-red-400"></div>
      <div className="chat-interface-input w-full h-[12vh] bg-red-200"></div>
    </div>
  );
}

export default ChatInterface
