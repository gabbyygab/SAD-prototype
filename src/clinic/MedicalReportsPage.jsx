import DashboardLayout from "../components/DashboardLayout";
import NurseMedicalReports from "../components/MedicalReports";

export default function MedicalReportsPage() {
  return (
    <DashboardLayout userRole={"medical"}>
      <NurseMedicalReports />
    </DashboardLayout>
  );
}
