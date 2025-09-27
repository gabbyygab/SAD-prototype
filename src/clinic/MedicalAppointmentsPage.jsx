import DashboardLayout from "../components/DashboardLayout";
import MedicalAppointments from "../components/MedicalAppointments";

export default function MedicalAppointmentsPage() {
  return (
    <DashboardLayout userRole={"medical"}>
      <MedicalAppointments />
    </DashboardLayout>
  );
}
