import DashboardLayout from "../components/DashboardLayout";
import FinanceManagement from "../components/FinanceManagement";

export default function FinanceManagementPage() {
  return (
    <DashboardLayout userRole={"admin"}>
      <FinanceManagement />
    </DashboardLayout>
  );
}
