import DashboardLayout from "../components/DashboardLayout";
import AdminDashboard from "../components/admin-dashboard";
export default function AdminDashboardPage() {
  return (
    <DashboardLayout userRole="admin">
      <AdminDashboard />
    </DashboardLayout>
  );
}
