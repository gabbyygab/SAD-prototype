import DashboardLayout from "../components/DashboardLayout";
import CommunicationCenter from "../components/communication-center";

export default function CommunicationPage() {
  return (
    <DashboardLayout userRole="teacher">
      <CommunicationCenter />
    </DashboardLayout>
  );
}
