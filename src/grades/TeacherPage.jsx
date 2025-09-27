import TeacherGradeManagement from "../components/teacher-grade-management";
import DashboardLayout from "../components/DashboardLayout";

export default function GradesPage() {
  return (
    <DashboardLayout userRole="teacher">
      <TeacherGradeManagement />
    </DashboardLayout>
  );
}
