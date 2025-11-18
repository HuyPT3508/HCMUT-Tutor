export default function CourseCard({ course }) {
  const bgColor = course.color === "primary" ? "bg-[#155DFC]" : "bg-[#193CB8]";

  return (
    <div className={`${bgColor} rounded-2xl p-6 border border-black/10 flex flex-col gap-6 text-white`}>
      {/* Header with Category and Student Count */}
      <div className="flex items-center justify-between">
        <span className="px-3 py-1 bg-white/20 rounded-lg text-xs font-medium">
          {course.category}
        </span>
        <span className="px-3 py-1 border border-white/30 rounded-lg text-xs font-medium">
          {course.students} sv
        </span>
      </div>

      {/* Course Title */}
      <h3 className="text-lg font-semibold leading-7">
        {course.title}
      </h3>

      {/* Course Info */}
      <div className="space-y-1">
        <p className="text-sm text-[#DBEAFE]">Tutor: {course.tutor}</p>
        <p className="text-sm text-[#DBEAFE]">Sinh viên: {course.students}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto">
        <span className="text-sm text-[#BEDBFF]">Cập nhật mới nhất</span>
        <button className="px-3 py-1.5 bg-white text-[#155DFC] rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
          Đăng ký
        </button>
      </div>
    </div>
  );
}
