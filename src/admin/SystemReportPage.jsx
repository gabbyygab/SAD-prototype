import DashboardLayout from "../components/DashboardLayout";
import SystemReports from "../components/SystemReport";

export default function SystemReportPage() {
  return (
    <DashboardLayout userRole={"admin"}>
      <SystemReports />
    </DashboardLayout>
  );
}
