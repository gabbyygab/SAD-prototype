import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import StudentDashboardPage from "./dashboard/StudentDashboard";
import AdminDashboardPage from "./dashboard/AdminDashboard";
import TeacherDashboardPage from "./dashboard/TeacherDashboard";
import StudentGradesPage from "./grades/StudentPage";
import CommunicationCenter from "./communication/CommunicationCenter";
import StudentIDPage from "./student-id/StudentID";
import AboutPage from "./pages/AboutPage";
import AcademicPage from "./pages/Academics";
import AdmissionPage from "./pages/AdmissionPage";
import FinancePage from "./finance/FinancePage";
import CommunicationCenterTeacher from "./communication/CommunicationCenterTeacher";
import TeacherGradesPage from "./grades/TeacherPage";
import ManageStudentPage from "./manage-students/StudentPage";
import TeacherReportPage from "./reports/TeacherReportPage";
import CommunicationAdmin from "./communication/CommunicationAdmin";
import UserManagementPage from "./admin/UserManagementPage";
import FinanceManagementPage from "./admin/FinanceManagement";
import MedicalAdminPage from "./admin/MedicalAdminPage";
import SystemReportPage from "./admin/SystemReportPage";
import ClinicDashboard from "./clinic/ClinicDashboard";
import CommunicationNurse from "./communication/CommunicationNurse";
import NurseHealthRecordsPage from "./clinic/HealthRecordsPage";
import MedicalAppointmentsPage from "./clinic/MedicalAppointmentsPage";
import MedicalReportsPage from "./clinic/MedicalReportsPage";
export default function App() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] font-sans antialiased">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academics" element={<AcademicPage />} />
        <Route path="/admissions" element={<AdmissionPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/admin" element={<AdminDashboardPage />} />
        <Route path="/dashboard/teacher" element={<TeacherDashboardPage />} />
        <Route path="/dashboard/student" element={<StudentDashboardPage />} />
        <Route path="/grades/student" element={<StudentGradesPage />} />
        <Route
          path="/communication/student"
          element={<CommunicationCenter />}
        />
        <Route path="/student-id/student" element={<StudentIDPage />} />
        <Route path="/finance/student" element={<FinancePage />} />
        {/* Teacher */}
        <Route
          path="/communication/teacher"
          element={<CommunicationCenterTeacher />}
        />
        <Route path="/grades/manage/teacher" element={<TeacherGradesPage />} />
        <Route path="/students/teacher" element={<ManageStudentPage />} />
        <Route path="/reports/teacher" element={<TeacherReportPage />} />
        {/* Admin */}
        <Route path="/communication/admin" element={<CommunicationAdmin />} />
        <Route path="/users/admin" element={<UserManagementPage />} />
        <Route
          path="/finance/admin/admin"
          element={<FinanceManagementPage />}
        />
        <Route path="/medical/admin/admin" element={<MedicalAdminPage />} />
        <Route path="/reports/admin/admin" element={<SystemReportPage />} />

        {/* Medical  */}
        <Route path="/dashboard/medical" element={<ClinicDashboard />} />
        <Route path="/communication/medical" element={<CommunicationNurse />} />
        <Route
          path="/medical/records/medical"
          element={<NurseHealthRecordsPage />}
        />
        <Route
          path="/medical/records/medical"
          element={<NurseHealthRecordsPage />}
        />
        <Route
          path="/medical/appointments/medical"
          element={<MedicalAppointmentsPage />}
        />
        <Route
          path="/medical/reports/medical"
          element={<MedicalReportsPage />}
        />
      </Routes>
    </div>
  );
}
