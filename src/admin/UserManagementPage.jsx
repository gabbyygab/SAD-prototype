import DashboardLayout from "../components/DashboardLayout";
import UserManagement from "../components/UserManagement";
export default function UserManagementPage() {
  return (
    <DashboardLayout userRole={"admin"}>
      <UserManagement />
    </DashboardLayout>
  );
}
