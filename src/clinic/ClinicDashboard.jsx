import DashboardLayout from "../components/DashboardLayout";
import MedicalDashboard from "../components/MedicalDashboard";
export default function ClinicDashboard() {
  return (
    <DashboardLayout userRole={"medical"}>
      <MedicalDashboard />
    </DashboardLayout>
  );
}
