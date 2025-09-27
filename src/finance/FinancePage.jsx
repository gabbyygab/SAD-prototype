import DashboardLayout from "../components/DashboardLayout";
import StudentFinance from "../components/student-finance";

export default function FinancePage() {
  return (
    <DashboardLayout userRole="student">
      <StudentFinance />
    </DashboardLayout>
  );
}
