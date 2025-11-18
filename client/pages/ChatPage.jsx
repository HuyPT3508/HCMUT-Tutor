import MainLayout from "@/components/layout/MainLayout";
import { Send, Paperclip, MoreHorizontal } from "lucide-react";

export default function ChatPage() {
  const messages = [
    {
      id: "1",
      sender: "other",
      content:
        "Hello and thanks for signing up to the course. If you have any questions about the course or Adobe XD, feel free to get in touch and I'll be happy to help 😀",
      time: "Time",
    },
    {
      id: "2",
      sender: "user",
      content: "Hello, Good Evening.",
      time: "Time",
    },
    {
      id: "3",
      sender: "user",
      content: "I'm Zafor",
      time: "",
    },
    {
      id: "4",
      sender: "user",
      content:
        "I only have a small doubt about your lecture. can you give me some time for this?",
      time: "",
    },
    {
      id: "5",
      sender: "other",
      content: "Yeah sure, tell me zafor",
      time: "Time",
    },
  ];

  return (
    <MainLayout>
      <div className="flex flex-col h-full bg-white">
        {/* Chat Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="relative">
              <div className="w-16 h-16 bg-gray-300 rounded-full" />
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            </div>
            {/* Info */}
            <div>
              <h2 className="text-lg font-medium text-gray-900">Jane Cooper</h2>
              <p className="text-sm text-gray-600">Active Now</p>
            </div>
          </div>
          <button className="p-3 hover:bg-gray-50 rounded-lg">
            <MoreHorizontal size={24} className="text-gray-900" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-12 space-y-6 bg-white">
          {/* Date Divider */}
          <div className="flex justify-center">
            <span className="px-3 py-2 bg-[#FFEEE8] text-gray-700 text-sm font-medium rounded">
              Today
            </span>
          </div>

          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`flex flex-col gap-2 ${
                message.sender === "user" ? "items-end" : "items-start"
              }`}
            >
              {/* Show time for first message in a group */}
              {message.time && (
                <div className="flex items-center gap-1.5">
                  {message.sender === "other" && (
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0" />
                  )}
                  <span className="text-xs text-gray-500">{message.time}</span>
                </div>
              )}
              {/* Message Bubble */}
              <div
                className={`max-w-lg px-3 py-2 rounded-lg ${
                  message.sender === "user"
                    ? "bg-[#2B7FFF] text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <p className="text-sm leading-5">{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="px-6 py-6 border-t border-gray-200 bg-white">
          <div className="flex items-center gap-5">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Type your message"
                className="w-full px-12 py-3 border border-gray-200 rounded focus:outline-none focus:border-gray-300"
              />
              <Paperclip
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2B7FFF]"
              />
            </div>
            <button className="flex items-center gap-3 px-6 py-3 bg-[#2B7FFF] text-white font-semibold rounded hover:bg-[#1E6FE6] transition-colors">
              Send
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
