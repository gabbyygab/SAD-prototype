import DashboardLayout from "../components/DashboardLayout";
import StudentDashboard from "../components/student-dashboard";
export default function StudentDashboardPage() {
  return (
    <DashboardLayout userRole="student">
      <StudentDashboard />
    </DashboardLayout>
  );
}
