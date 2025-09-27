import DashboardLayout from "../components/DashboardLayout";
import StudentGrades from "../components/student-grade";

export default function GradesPage() {
  return (
    <DashboardLayout userRole="student">
      <StudentGrades />
    </DashboardLayout>
  );
}
