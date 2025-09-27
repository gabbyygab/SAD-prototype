import DashboardLayout from "../components/DashboardLayout";
import ManageStudents from "../components/manage-students";

export default function ManageStudentPage() {
  return (
    <DashboardLayout userRole={"teacher"}>
      <ManageStudents />
    </DashboardLayout>
  );
}
