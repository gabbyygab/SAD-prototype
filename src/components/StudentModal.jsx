export default function StudentModal({ student, onClose }) {
  if (!student) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-100 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-black">Student Details</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-700 text-xl">
              {student.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-semibold text-black">
                {student.name}
              </h3>
              <p className="text-gray-500">Student ID: {student.studentId}</p>
              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                  student.status === "Active"
                    ? "bg-gray-100 text-gray-800"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {student.status}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-semibold text-black mb-3">
                Academic Information
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-500 text-sm">Grade Level</p>
                  <p className="font-medium text-black">{student.grade}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Section</p>
                  <p className="font-medium text-black">{student.section}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Current GPA</p>
                  <p className="font-medium text-black">{student.gpa}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Attendance Rate</p>
                  <p className="font-medium text-black">{student.attendance}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-black mb-3">
                Contact Information
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-500 text-sm">Email Address</p>
                  <p className="font-medium text-black">{student.email}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Phone Number</p>
                  <p className="font-medium text-black">{student.phone}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Emergency Contact</p>
                  <p className="font-medium text-black">(0917) 987-6543</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Parent/Guardian</p>
                  <p className="font-medium text-black">Mrs. Rosa Santos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="font-semibold text-black mb-3">Recent Activity</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Last Login</span>
                <span className="text-black">September 24, 2025</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Last Assignment Submitted</span>
                <span className="text-black">September 23, 2025</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Days Absent This Month</span>
                <span className="text-black">2 days</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 flex space-x-3">
          <button className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
            Send Message
          </button>
          <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            View Grades
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 text-gray-500 hover:text-gray-700 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
