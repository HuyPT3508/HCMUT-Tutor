import MainLayout from "@/components/layout/MainLayout";
import CourseCard from "@/components/courses/CourseCard";

interface Course {
  id: string;
  category: string;
  title: string;
  tutor: string;
  students: number;
  color: "primary" | "secondary";
}

export default function StudentHome() {
  const courses: Course[] = [
    {
      id: "1",
      category: "CNPM",
      title: "Công nghệ Phần mềm",
      tutor: "4A",
      students: 45,
      color: "primary",
    },
    {
      id: "2",
      category: "CNPM",
      title: "Hệ cơ sở Dữ liệu",
      tutor: "3Z",
      students: 38,
      color: "secondary",
    },
    {
      id: "3",
      category: "CNPM",
      title: "Mạng máy tính",
      tutor: "9B",
      students: 52,
      color: "primary",
    },
    {
      id: "4",
      category: "CNPM",
      title: "Trí tuệ nhân tạo",
      tutor: "76",
      students: 29,
      color: "secondary",
    },
  ];

  return (
    <MainLayout>
      <div className="p-6">
        <div className="max-w-[896px]">
          {/* Page Title */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Khóa học có thể đăng ký
          </h1>

          {/* Course Grid */}
          <div className="grid grid-cols-2 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
