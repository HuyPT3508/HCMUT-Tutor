import { Star, MessageCircle, CreditCard } from "lucide-react";

interface NotificationPanelProps {
  onClose: () => void;
}

interface Notification {
  id: string;
  type: "rating" | "comment" | "purchase";
  title: string;
  time: string;
}

export default function NotificationPanel({ onClose }: NotificationPanelProps) {
  const notifications: Notification[] = [
    {
      id: "1",
      type: "rating",
      title: "Tiểu Mỹ đã phát hành bài kiểm tra mới - TB01 Kỹ năng sống",
      time: "5 mins ago",
    },
    {
      id: "2",
      type: "comment",
      title: "Kevin đã đánh giá bài tập của bạn - TB02 Tiếng Nga",
      time: "Just now",
    },
    {
      id: "3",
      type: "purchase",
      title: "BÀI KIỂM TRA SỐ 1 - TB02 Tiếng Nga sắp hết hạn.",
      time: "6 mins ago",
    },
    {
      id: "4",
      type: "purchase",
      title: "Bài kiểm tra giữa kỳ - TB05 Đại số tuyến tính sắp hết hạn.",
      time: "19 mins ago",
    },
    {
      id: "5",
      type: "rating",
      title: "Tiểu Mỹ đã phát hành bài kiểm tra mới - TB01 Kỹ năng sống",
      time: "5 mins ago",
    },
  ];

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "rating":
        return <Star size={16} className="text-white" fill="white" />;
      case "comment":
        return <MessageCircle size={16} className="text-white" fill="white" />;
      case "purchase":
        return <CreditCard size={16} className="text-white" />;
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed right-6 top-20 w-[432px] max-h-[504px] bg-white rounded-lg shadow-xl border border-gray-200 z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Notification</h2>
          <button className="text-sm text-gray-600 hover:text-gray-900">
            Mark as Read
          </button>
        </div>

        {/* Notification List */}
        <div className="flex-1 overflow-y-auto">
          {notifications.map((notification, index) => (
            <div
              key={notification.id}
              className={`flex items-start gap-3 p-3 px-5 ${
                index === 1 ? "bg-gray-50" : ""
              }`}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-8 h-8 bg-[#FF6636] rounded-full flex items-center justify-center mt-1">
                {getIcon(notification.type)}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700 leading-5">
                  {notification.title.includes("Tiểu Mỹ") && (
                    <>
                      <span className="font-bold text-gray-900">Tiểu Mỹ</span>
                      {" "}
                      {notification.title.split("Tiểu Mỹ")[1].split("-")[0]}
                      {notification.title.includes("TB01") && (
                        <>
                          {" - "}
                          <span className="font-bold text-gray-900">
                            TB01 Kỹ năng sống
                          </span>
                        </>
                      )}
                    </>
                  )}
                  {notification.title.includes("Kevin") && (
                    <>
                      <span className="font-semibold text-gray-900">Kevin</span>
                      {" đã đánh giá bài tập của bạn - "}
                      <span className="font-bold text-gray-700">
                        TB02 Tiếng Nga
                      </span>
                    </>
                  )}
                  {notification.title.includes("BÀI KIỂM TRA") && (
                    <>
                      <span className="font-semibold text-gray-900">
                        BÀI KIỂM TRA SỐ 1 - TB02 Tiếng Nga
                      </span>
                      {" sắp hết hạn."}
                    </>
                  )}
                  {notification.title.includes("Bài kiểm tra giữa kỳ") && (
                    <>
                      <span className="font-semibold text-gray-900">
                        Bài kiểm tra giữa kỳ - TB05 Đại số tuyến tính
                      </span>
                      {" sắp hết hạn."}
                    </>
                  )}
                </p>
                <p className="text-xs text-gray-400 mt-1.5">
                  {notification.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
