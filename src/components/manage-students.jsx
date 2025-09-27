import StatsCard from "./StatsCard";
import StudentCard from "./StudentCard";
import StudentModal from "./StudentModal";
import React, { useState } from "react";
export default function ManageStudents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Sample student data
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Maria Santos",
      studentId: "2024-0001",
      grade: "Grade 11",
      section: "STEM-A",
      email: "maria.santos@student.nca.edu.ph",
      phone: "(0917) 123-4567",
      status: "Active",
      gpa: "3.85",
      attendance: "95%",
    },
    {
      id: 2,
      name: "Juan Dela Cruz",
      studentId: "2024-0002",
      grade: "Grade 10",
      section: "Einstein",
      email: "juan.delacruz@student.nca.edu.ph",
      phone: "(0918) 234-5678",
      status: "Active",
      gpa: "3.72",
      attendance: "92%",
    },
    {
      id: 3,
      name: "Anna Reyes",
      studentId: "2024-0003",
      grade: "Grade 12",
      section: "ABM-B",
      email: "anna.reyes@student.nca.edu.ph",
      phone: "(0919) 345-6789",
      status: "Active",
      gpa: "3.91",
      attendance: "98%",
    },
    {
      id: 4,
      name: "Carlos Garcia",
      studentId: "2024-0004",
      grade: "Grade 9",
      section: "Curie",
      email: "carlos.garcia@student.nca.edu.ph",
      phone: "(0920) 456-7890",
      status: "Inactive",
      gpa: "3.45",
      attendance: "87%",
    },
    {
      id: 5,
      name: "Sofia Martinez",
      studentId: "2024-0005",
      grade: "Grade 11",
      section: "HUMSS-A",
      email: "sofia.martinez@student.nca.edu.ph",
      phone: "(0921) 567-8901",
      status: "Active",
      gpa: "3.78",
      attendance: "94%",
    },
  ]);
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.includes(searchTerm) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade =
      selectedGrade === "all" || student.grade === selectedGrade;
    return matchesSearch && matchesGrade;
  });
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">
            Manage Students
          </h1>
          <p className="text-gray-600">
            View and manage student information and academic records.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Students"
            value="120"
            icon="👥"
            bgColor="bg-gray-800"
          />
          <StatsCard
            title="Active Students"
            value="115"
            icon="✅"
            bgColor="bg-gray-700"
          />
          <StatsCard
            title="New This Month"
            value="8"
            icon="📈"
            bgColor="bg-gray-600"
          />
          <StatsCard
            title="Pending Reviews"
            value="3"
            icon="⏰"
            bgColor="bg-gray-500"
          />
        </div>

        {/* Filters and Search */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search students by name, ID, or email..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                >
                  <option value="all">All Grades</option>
                  <option value="Grade 9">Grade 9</option>
                  <option value="Grade 10">Grade 10</option>
                  <option value="Grade 11">Grade 11</option>
                  <option value="Grade 12">Grade 12</option>
                </select>
              </div>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Add Student
            </button>
          </div>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onViewDetails={() => setSelectedStudent(student)}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">👥</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No Students Found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or add new students.
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredStudents.length > 0 && (
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 bg-black text-white rounded-lg">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Student Details Modal */}
      {selectedStudent && (
        <StudentModal
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </div>
  );
}
