import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Book, Calendar, LogOut, Bell, MessageCircle, Menu } from "lucide-react";
import NotificationPanel from "./NotificationPanel";
import MessagePanel from "./MessagePanel";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const navItems = [
    { path: "/", icon: Home, label: "Trang Chủ" },
    { path: "/profile", icon: User, label: "Thông Tin Sinh Viên" },
    { path: "/courses", icon: Book, label: "Khóa Học Của Tôi" },
    { path: "/schedule", icon: Calendar, label: "Lịch học" },
    { path: "/settings", icon: LogOut, label: "Cài Đặt" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1447E6] text-white flex flex-col p-4 gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-[#1447E6] font-bold">
            BK
          </div>
          <span className="text-lg font-semibold">BK Tutor</span>
        </div>

        {/* User Profile */}
        <div className="bg-[#193CB8] rounded-lg p-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#4A5565] rounded-full flex items-center justify-center text-white mb-3">
              NQ
            </div>
            <div className="text-sm font-semibold mb-1">TTT</div>
            <div className="text-xs text-[#BEDBFF]">36</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-white text-[#1447E6]"
                    : "text-white hover:bg-[#193CB8]"
                }`}
              >
                <Icon size={16} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="mt-auto space-y-1 text-center">
          <div className="text-xs text-[#BEDBFF]">Sinh viên</div>
          <div className="text-xs text-[#BEDBFF]">Thứ Sáu, Ngày 24/8/2023</div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200 px-6 py-5">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Menu size={16} className="text-gray-600" />
            </button>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm khóa học, tutor..."
                  className="w-full px-10 py-2 bg-gray-100 border-2 border-gray-200 rounded-full text-sm focus:outline-none focus:border-gray-300"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.67}
                    d="M17.5 17.5l-3.617-3.617m0 0A6.667 6.667 0 104.167 4.167a6.667 6.667 0 009.716 9.716z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-0">
              {/* Notification Button */}
              <button
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowMessages(false);
                }}
                className="relative p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Bell size={24} className="text-gray-800" />
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#FF6636] rounded-full border-2 border-white" />
              </button>

              {/* Message Button */}
              <button
                onClick={() => {
                  setShowMessages(!showMessages);
                  setShowNotifications(false);
                }}
                className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <MessageCircle size={24} className="text-gray-800" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gray-50">
          {children}
        </main>
      </div>

      {/* Notification Panel */}
      {showNotifications && (
        <NotificationPanel onClose={() => setShowNotifications(false)} />
      )}

      {/* Message Panel */}
      {showMessages && (
        <MessagePanel onClose={() => setShowMessages(false)} />
      )}
    </div>
  );
}
