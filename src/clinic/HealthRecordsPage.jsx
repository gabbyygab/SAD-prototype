import DashboardLayout from "../components/DashboardLayout";
import NurseHealthRecords from "../components/HealthRecords";

export default function NurseHealthRecordsPage() {
  return (
    <DashboardLayout userRole={"medical"}>
      <NurseHealthRecords />
    </DashboardLayout>
  );
}
