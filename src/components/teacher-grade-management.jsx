"use client";

import { useState } from "react";

export default function TeacherGradeManagement() {
  const [selectedClass, setSelectedClass] = useState("math101");
  const [selectedAssignment, setSelectedAssignment] = useState("quiz1");
  const [showAddGrade, setShowAddGrade] = useState(false);

  const classes = [
    { id: "math101", label: "Mathematics 101 - Section A", students: 30 },
    { id: "math102", label: "Mathematics 102 - Section B", students: 25 },
    { id: "algebra", label: "Algebra II - Section A", students: 28 },
  ];

  const assignments = [
    { id: "quiz1", label: "Quiz 1", type: "Quiz", maxPoints: 100 },
    { id: "quiz2", label: "Quiz 2", type: "Quiz", maxPoints: 100 },
    { id: "midterm", label: "Midterm Exam", type: "Exam", maxPoints: 100 },
    { id: "project", label: "Final Project", type: "Project", maxPoints: 100 },
  ];

  const students = [
    {
      id: 1,
      name: "Juan Dela Cruz",
      studentId: "STU-2024-001",
      grades: { quiz1: 85, quiz2: 92, midterm: 88, project: 95 },
    },
    {
      id: 2,
      name: "Maria Santos",
      studentId: "STU-2024-002",
      grades: { quiz1: 78, quiz2: 85, midterm: 82, project: 88 },
    },
    {
      id: 3,
      name: "Jose Garcia",
      studentId: "STU-2024-003",
      grades: { quiz1: 92, quiz2: 89, midterm: 94, project: 96 },
    },
    {
      id: 4,
      name: "Ana Rodriguez",
      studentId: "STU-2024-004",
      grades: { quiz1: 87, quiz2: 84, midterm: 86, project: 90 },
    },
    {
      id: 5,
      name: "Carlos Mendoza",
      studentId: "STU-2024-005",
      grades: { quiz1: 91, quiz2: 88, midterm: 90, project: 93 },
    },
  ];

  const [gradeInputs, setGradeInputs] = useState({});

  const handleGradeChange = (studentId, value) => {
    setGradeInputs({
      ...gradeInputs,
      [studentId]: value,
    });
  };

  const saveGrades = () => {
    console.log("Saving grades:", gradeInputs);
    setGradeInputs({});
    alert("Grades saved successfully!");
  };

  const getGradeColor = (grade) => {
    if (!grade) return "text-[color:var(--muted-foreground)]";
    if (grade >= 90) return "text-[color:var(--success)]";
    if (grade >= 80) return "text-[color:var(--info)]";
    if (grade >= 70) return "text-[color:var(--warning)]";
    return "text-[color:var(--destructive)]";
  };

  const calculateAverage = (grades) => {
    const validGrades = Object.values(grades).filter(
      (grade) => grade !== null && grade !== undefined
    );
    if (validGrades.length === 0) return 0;
    return (
      validGrades.reduce((sum, grade) => sum + grade, 0) / validGrades.length
    ).toFixed(1);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[color:var(--foreground)] mb-2">
          Grade Management
        </h1>
        <p className="text-[color:var(--muted-foreground)]">
          Manage student grades and generate reports
        </p>
      </div>

      {/* Class and Assignment Selection */}
      <div className="bg-[color:var(--card)] rounded-xl p-6 shadow-sm border border-[color:var(--border)]">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-[color:var(--foreground)] mb-2">
              Select Class
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-3 py-2 border border-[color:var(--border)] rounded-lg focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent"
            >
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.label} ({cls.students} students)
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[color:var(--foreground)] mb-2">
              Select Assignment
            </label>
            <select
              value={selectedAssignment}
              onChange={(e) => setSelectedAssignment(e.target.value)}
              className="w-full px-3 py-2 border border-[color:var(--border)] rounded-lg focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent"
            >
              {assignments.map((assignment) => (
                <option key={assignment.id} value={assignment.id}>
                  {assignment.label} ({assignment.type})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grade Entry Table */}
      <div className="bg-[color:var(--card)] rounded-xl shadow-sm border border-[color:var(--border)] overflow-hidden">
        <div className="px-6 py-4 border-b border-[color:var(--border)] flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-[color:var(--card-foreground)]">
              {assignments.find((a) => a.id === selectedAssignment)?.label} -
              Grade Entry
            </h2>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              Max Points:{" "}
              {assignments.find((a) => a.id === selectedAssignment)?.maxPoints}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={saveGrades}
              className="bg-[color:var(--primary)] text-[color:var(--primary-foreground)] px-4 py-2 rounded-lg font-semibold hover:bg-[color:var(--primary)]/90 transition-colors duration-200"
            >
              Save Grades
            </button>
            <button className="border border-[color:var(--border)] text-[color:var(--foreground)] px-4 py-2 rounded-lg font-semibold hover:bg-[color:var(--muted)] transition-colors duration-200">
              Import CSV
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[color:var(--muted)]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Student ID
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Current Grade
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  New Grade
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Average
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[color:var(--border)]">
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-[color:var(--muted)]/50"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-[color:var(--foreground)]">
                      {student.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[color:var(--muted-foreground)]">
                    {student.studentId}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`font-medium ${getGradeColor(
                        student.grades[selectedAssignment]
                      )}`}
                    >
                      {student.grades[selectedAssignment] || "Not graded"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={gradeInputs[student.id] || ""}
                      onChange={(e) =>
                        handleGradeChange(student.id, e.target.value)
                      }
                      className="w-20 px-2 py-1 border border-[color:var(--border)] rounded focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent text-center"
                      placeholder="Grade"
                    />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`font-medium ${getGradeColor(
                        calculateAverage(student.grades)
                      )}`}
                    >
                      {calculateAverage(student.grades)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-[color:var(--primary)] hover:text-[color:var(--primary)]/80 text-sm font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grade Statistics */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-[color:var(--card)] rounded-xl p-6 shadow-sm border border-[color:var(--border)]">
          <h3 className="text-lg font-semibold text-[color:var(--card-foreground)] mb-2">
            Class Average
          </h3>
          <p className="text-3xl font-bold text-[color:var(--primary)]">87.2</p>
          <p className="text-sm text-[color:var(--muted-foreground)]">
            Current assignment
          </p>
        </div>
        <div className="bg-[color:var(--card)] rounded-xl p-6 shadow-sm border border-[color:var(--border)]">
          <h3 className="text-lg font-semibold text-[color:var(--card-foreground)] mb-2">
            Highest Score
          </h3>
          <p className="text-3xl font-bold text-[color:var(--success)]">96</p>
          <p className="text-sm text-[color:var(--muted-foreground)]">
            Jose Garcia
          </p>
        </div>
        <div className="bg-[color:var(--card)] rounded-xl p-6 shadow-sm border border-[color:var(--border)]">
          <h3 className="text-lg font-semibold text-[color:var(--card-foreground)] mb-2">
            Lowest Score
          </h3>
          <p className="text-3xl font-bold text-[color:var(--destructive)]">
            78
          </p>
          <p className="text-sm text-[color:var(--muted-foreground)]">
            Maria Santos
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4">
        <button className="bg-[color:var(--secondary)] text-[color:var(--primary)] px-6 py-3 rounded-lg font-semibold hover:bg-[color:var(--secondary)]/90 transition-colors duration-200">
          Generate Grade Report
        </button>
        <button className="border border-[color:var(--border)] text-[color:var(--foreground)] px-6 py-3 rounded-lg font-semibold hover:bg-[color:var(--muted)] transition-colors duration-200">
          Export to Excel
        </button>
        <button className="border border-[color:var(--border)] text-[color:var(--foreground)] px-6 py-3 rounded-lg font-semibold hover:bg-[color:var(--muted)] transition-colors duration-200">
          Send Grade Notifications
        </button>
        <button className="border border-[color:var(--border)] text-[color:var(--foreground)] px-6 py-3 rounded-lg font-semibold hover:bg-[color:var(--muted)] transition-colors duration-200">
          Grade Analytics
        </button>
      </div>
    </div>
  );
}
