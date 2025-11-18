import { Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function MessagePanel({ onClose }) {
  const contacts = [
    {
      id: "1",
      name: "Jane Cooper",
      message: "Yeah sure, tell me zafor",
      time: "just now",
      isActive: true,
      hasNewMessage: false,
      isOnline: true,
    },
    {
      id: "2",
      name: "Jenny Wilson",
      message: "Thank you so much, sir",
      time: "2 d",
      isActive: false,
      hasNewMessage: true,
      isOnline: true,
    },
    {
      id: "3",
      name: "Marvin McKinney",
      message: "You're Welcome",
      time: "1 m",
      isActive: false,
      hasNewMessage: true,
      isOnline: true,
    },
    {
      id: "4",
      name: "Eleanor Pena",
      message: "Thank you so much, sir",
      time: "1 m",
      isActive: false,
      hasNewMessage: false,
      isOnline: false,
    },
    {
      id: "5",
      name: "Ronald Richards",
      message: "Sorry, I can't help you",
      time: "2 m",
      isActive: false,
      hasNewMessage: false,
      isOnline: true,
    },
    {
      id: "6",
      name: "Kathryn Murphy",
      message: "new message",
      time: "2 m",
      isActive: false,
      hasNewMessage: false,
      isOnline: false,
    },
    {
      id: "7",
      name: "Jacob Jones",
      message: "Thank you so much, sir",
      time: "6 m",
      isActive: false,
      hasNewMessage: false,
      isOnline: true,
    },
    {
      id: "8",
      name: "Cameron Williamson",
      message: "It's okay, no problem brother...",
      time: "6 m",
      isActive: false,
      hasNewMessage: false,
      isOnline: false,
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed right-6 top-20 w-[424px] max-h-[600px] bg-white rounded-lg shadow-xl border border-gray-200 z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4">
          <h2 className="text-xl font-semibold text-gray-900">Chat</h2>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#EBEBFF] text-[#564FFD] font-semibold text-sm rounded hover:bg-[#DCDCFF] transition-colors">
            <Plus size={16} />
            Compose
          </button>
        </div>

        {/* Search */}
        <div className="px-6 pb-4">
          <div className="relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-gray-300"
            />
          </div>
        </div>

        {/* Contact List */}
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <Link
              key={contact.id}
              to="/chat"
              onClick={onClose}
              className={`flex items-center gap-4 px-6 py-3 hover:bg-gray-50 transition-colors ${
                contact.isActive ? "bg-[#2B7FFF]/70" : ""
              }`}
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 bg-gray-300 rounded-full" />
                {contact.isOnline && (
                  <span className={`absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 ${contact.isActive ? 'border-[#2B7FFF]' : 'border-white'}`} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm font-medium ${contact.isActive ? 'text-gray-900' : 'text-gray-900'}`}>
                    {contact.name}
                  </span>
                  <span className={`text-xs ${contact.isActive ? 'text-gray-700' : contact.hasNewMessage ? 'text-gray-600' : 'text-gray-400'}`}>
                    {contact.time}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm truncate ${contact.isActive ? 'text-gray-700' : contact.hasNewMessage ? 'text-gray-600' : 'text-gray-400'}`}>
                    {contact.message}
                  </span>
                  {contact.hasNewMessage && (
                    <span className="w-2 h-2 bg-[#2B7FFF] rounded-full flex-shrink-0 ml-2" />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
