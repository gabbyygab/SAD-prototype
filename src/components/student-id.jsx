import { useState, useRef } from "react";

export default function StudentIDCard() {
  const [showQRCode, setShowQRCode] = useState(false);
  const cardRef = useRef(null);

  const studentData = {
    name: "Juan Dela Cruz",
    studentId: "STU-2024-001",
    grade: "Grade 11",
    section: "Section A",
    schoolYear: "2024-2025",
    photo: "/diverse-student-portraits.png",
    bloodType: "O+",
    emergencyContact: "+63 912 345 6789",
    address: "123 Main Street, Manila, Philippines",
    guardianName: "Maria Dela Cruz",
    validUntil: "June 2025",
    qrData: "STU-2024-001|Juan Dela Cruz|Grade 11|2024-2025",
  };

  const downloadID = () => {
    alert("ID Card downloaded successfully!");
  };

  const printID = () => {
    window.print();
  };

  const generateQRCode = (data) => {
    return `/placeholder.svg?height=150&width=150&query=QR+code+for+${encodeURIComponent(
      data
    )}`;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[color:var(--foreground)] mb-2">
          Digital Student ID
        </h1>
        <p className="text-[color:var(--muted-foreground)]">
          Your official Notre Christi Academy student identification
        </p>
      </div>

      {/* ID Card Display */}
      <div className="flex justify-center">
        <div
          ref={cardRef}
          className="bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--primary)]/90 rounded-xl p-6 shadow-lg max-w-md w-full text-[color:var(--primary-foreground)] relative overflow-hidden"
        >
          {/* School Header */}
          <div className="text-center mb-4">
            <div className="w-12 h-12 bg-[color:var(--secondary)] rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-[color:var(--primary)] font-bold text-lg">
                NC
              </span>
            </div>
            <h2 className="text-lg font-bold">Notre Christi Academy</h2>
            <p className="text-sm text-[color:var(--primary-foreground)]/80">
              of the Philippines
            </p>
            <p className="text-xs text-[color:var(--primary-foreground)]/70">
              STUDENT IDENTIFICATION CARD
            </p>
          </div>

          {/* Student Info */}
          <div className="flex items-start space-x-4 mb-4">
            <img
              src={studentData.photo || "/placeholder.svg"}
              alt="Student Photo"
              className="w-20 h-20 rounded-lg border-2 border-white object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg font-bold">{studentData.name}</h3>
              <p className="text-sm text-[color:var(--primary-foreground)]/90">
                {studentData.studentId}
              </p>
              <p className="text-sm text-[color:var(--primary-foreground)]/80">
                {studentData.grade}
              </p>
              <p className="text-sm text-[color:var(--primary-foreground)]/80">
                {studentData.section}
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-2 gap-2 text-xs text-[color:var(--primary-foreground)]/80 mb-4">
            <div>
              <span className="font-semibold">School Year:</span>
              <br />
              {studentData.schoolYear}
            </div>
            <div>
              <span className="font-semibold">Blood Type:</span>
              <br />
              {studentData.bloodType}
            </div>
            <div>
              <span className="font-semibold">Valid Until:</span>
              <br />
              {studentData.validUntil}
            </div>
            <div>
              <span className="font-semibold">Emergency:</span>
              <br />
              {studentData.emergencyContact}
            </div>
          </div>

          {/* QR Code Section */}
          <div className="text-center">
            <div className="bg-white rounded-lg p-2 inline-block">
              <img
                src={generateQRCode(studentData.qrData) || "/placeholder.svg"}
                alt="Student QR Code"
                className="w-16 h-16"
              />
            </div>
            <p className="text-xs text-[color:var(--primary-foreground)]/70 mt-1">
              Scan for verification
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-[color:var(--secondary)]/20 rounded-full -translate-y-10 translate-x-10"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-[color:var(--secondary)]/20 rounded-full translate-y-8 -translate-x-8"></div>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQRCode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[color:var(--card)] rounded-xl p-6 max-w-sm w-full">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-[color:var(--card-foreground)] mb-4">
                Student QR Code
              </h3>
              <div className="bg-white rounded-lg p-4 inline-block mb-4">
                <img
                  src={generateQRCode(studentData.qrData) || "/placeholder.svg"}
                  alt="Student QR Code"
                  className="w-48 h-48"
                />
              </div>
              <p className="text-sm text-[color:var(--muted-foreground)] mb-4">
                Use this QR code for attendance, library access, and other
                school services
              </p>
              <button
                onClick={() => setShowQRCode(false)}
                className="bg-[color:var(--primary)] text-[color:var(--primary-foreground)] px-6 py-2 rounded-lg font-semibold hover:bg-[color:var(--primary)]/90 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Student Details */}
      <div className="bg-[color:var(--card)] rounded-xl p-6 shadow-sm border border-[color:var(--border)]">
        <h2 className="text-lg font-semibold text-[color:var(--card-foreground)] mb-4">
          Student Information
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-[color:var(--muted-foreground)] mb-1">
              Full Name
            </label>
            <p className="text-[color:var(--foreground)]">{studentData.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-[color:var(--muted-foreground)] mb-1">
              Student ID
            </label>
            <p className="text-[color:var(--foreground)] font-mono">
              {studentData.studentId}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-[color:var(--muted-foreground)] mb-1">
              Grade Level
            </label>
            <p className="text-[color:var(--foreground)]">
              {studentData.grade}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-[color:var(--muted-foreground)] mb-1">
              Section
            </label>
            <p className="text-[color:var(--foreground)]">
              {studentData.section}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-[color:var(--muted-foreground)] mb-1">
              School Year
            </label>
            <p className="text-[color:var(--foreground)]">
              {studentData.schoolYear}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-[color:var(--muted-foreground)] mb-1">
              Blood Type
            </label>
            <p className="text-[color:var(--foreground)]">
              {studentData.bloodType}
            </p>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-[color:var(--muted-foreground)] mb-1">
              Address
            </label>
            <p className="text-[color:var(--foreground)]">
              {studentData.address}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-[color:var(--muted-foreground)] mb-1">
              Guardian Name
            </label>
            <p className="text-[color:var(--foreground)]">
              {studentData.guardianName}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-[color:var(--muted-foreground)] mb-1">
              Emergency Contact
            </label>
            <p className="text-[color:var(--foreground)]">
              {studentData.emergencyContact}
            </p>
          </div>
        </div>
      </div>

      {/* ID Actions */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setShowQRCode(true)}
          className="bg-[color:var(--primary)] text-[color:var(--primary-foreground)] px-6 py-3 rounded-lg font-semibold hover:bg-[color:var(--primary)]/90 transition-colors duration-200 flex items-center space-x-2"
        >
          <span>📱</span>
          <span>Show QR Code</span>
        </button>
        <button
          onClick={downloadID}
          className="bg-[color:var(--secondary)] text-[color:var(--primary)] px-6 py-3 rounded-lg font-semibold hover:bg-[color:var(--secondary)]/90 transition-colors duration-200 flex items-center space-x-2"
        >
          <span>💾</span>
          <span>Download ID</span>
        </button>
        <button
          onClick={printID}
          className="border border-[color:var(--border)] text-[color:var(--foreground)] px-6 py-3 rounded-lg font-semibold hover:bg-[color:var(--muted)] transition-colors duration-200 flex items-center space-x-2"
        >
          <span>🖨️</span>
          <span>Print ID</span>
        </button>
        <button className="border border-[color:var(--border)] text-[color:var(--foreground)] px-6 py-3 rounded-lg font-semibold hover:bg-[color:var(--muted)] transition-colors duration-200 flex items-center space-x-2">
          <span>📧</span>
          <span>Email ID</span>
        </button>
      </div>

      {/* Usage Instructions */}
      <div className="bg-[color:var(--muted)] rounded-xl p-6">
        <h3 className="text-lg font-semibold text-[color:var(--foreground)] mb-3">
          How to Use Your Digital ID
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="font-medium text-[color:var(--foreground)] mb-2">
              📚 Library Access
            </h4>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              Show your QR code to the librarian for book borrowing and computer
              access
            </p>
          </div>
          <div>
            <h4 className="font-medium text-[color:var(--foreground)] mb-2">
              ✅ Attendance
            </h4>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              Scan your QR code at classroom entrances for automatic attendance
              recording
            </p>
          </div>
          <div>
            <h4 className="font-medium text-[color:var(--foreground)] mb-2">
              🍽️ Cafeteria
            </h4>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              Use your ID for meal purchases and cafeteria access verification
            </p>
          </div>
          <div>
            <h4 className="font-medium text-[color:var(--foreground)] mb-2">
              🚌 Transportation
            </h4>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              Present your ID for school bus boarding and transportation
              services
            </p>
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <div className="flex items-start space-x-3">
          <span className="text-yellow-600 text-xl">⚠️</span>
          <div>
            <h4 className="font-medium text-yellow-800 mb-1">
              Security Notice
            </h4>
            <p className="text-sm text-yellow-700">
              Keep your student ID secure and report any loss immediately to the
              registrar's office. Do not share your QR code with others as it
              contains your personal identification data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
