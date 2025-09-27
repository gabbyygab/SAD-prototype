import DashboardLayout from "../components/DashboardLayout";
import TeacherReport from "../components/TeacherReport";
export default function TeacherReportPage() {
  return (
    <DashboardLayout userRole={"teacher"}>
      <TeacherReport />
    </DashboardLayout>
  );
}
