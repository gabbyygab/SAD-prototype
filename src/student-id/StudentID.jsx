import DashboardLayout from "../components/DashboardLayout";
import StudentIDCard from "../components/student-id";

export default function StudentIDPage() {
  return (
    <DashboardLayout userRole="student">
      <StudentIDCard />
    </DashboardLayout>
  );
}
