export default function StudentCard({ student, onViewDetails }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center font-semibold text-gray-700">
            {student.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-black text-lg">{student.name}</h3>
            <p className="text-gray-500 text-sm">ID: {student.studentId}</p>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            student.status === "Active"
              ? "bg-gray-100 text-gray-800"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {student.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-gray-500 text-sm">Grade & Section</p>
          <p className="font-medium text-black">
            {student.grade} - {student.section}
          </p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">GPA</p>
          <p className="font-medium text-black">{student.gpa}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Email</p>
          <p className="font-medium text-black text-sm break-words">
            {student.email}
          </p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Attendance</p>
          <p className="font-medium text-black">{student.attendance}</p>
        </div>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={onViewDetails}
          className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
        >
          View Details
        </button>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
          Edit
        </button>
      </div>
    </div>
  );
}
