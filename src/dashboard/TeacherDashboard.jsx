import DashboardLayout from "../components/DashboardLayout";
import TeacherDashboard from "../components/teacher-dashboard";

export default function TeacherDashboardPage() {
  return (
    <DashboardLayout userRole="teacher">
      <TeacherDashboard />
    </DashboardLayout>
  );
}
