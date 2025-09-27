import DashboardLayout from "../components/DashboardLayout";
import MedicalAdminManagement from "../components/MedicalAdmin";

export default function MedicalAdminPage() {
  return (
    <DashboardLayout userRole={"admin"}>
      <MedicalAdminManagement />
    </DashboardLayout>
  );
}
