import { useState } from "react";

export default function StudentGrades() {
  const [selectedSemester, setSelectedSemester] = useState("current");
  const [selectedSubject, setSelectedSubject] = useState("all");

  const semesters = [
    { id: "current", label: "Current Semester (2nd Sem 2024-2025)" },
    { id: "previous", label: "1st Semester 2024-2025" },
    { id: "archived", label: "Archived Semesters" },
  ];

  const subjects = [
    { id: "all", label: "All Subjects" },
    { id: "math", label: "Mathematics" },
    { id: "english", label: "English" },
    { id: "science", label: "Science" },
    { id: "history", label: "History" },
    { id: "pe", label: "Physical Education" },
  ];

  const gradeData = [
    {
      subject: "Mathematics",
      teacher: "Ms. Rodriguez",
      grades: { quiz1: 85, quiz2: 92, midterm: 88, project: 95, final: null },
      currentGrade: 90,
      letterGrade: "A-",
    },
    {
      subject: "English",
      teacher: "Mr. Santos",
      grades: { quiz1: 78, quiz2: 85, midterm: 82, project: 88, final: null },
      currentGrade: 83,
      letterGrade: "B+",
    },
    {
      subject: "Science",
      teacher: "Dr. Cruz",
      grades: { quiz1: 92, quiz2: 89, midterm: 94, project: 96, final: null },
      currentGrade: 93,
      letterGrade: "A",
    },
    {
      subject: "History",
      teacher: "Ms. Garcia",
      grades: { quiz1: 87, quiz2: 84, midterm: 86, project: 90, final: null },
      currentGrade: 87,
      letterGrade: "B+",
    },
  ];

  const filteredGrades =
    selectedSubject === "all"
      ? gradeData
      : gradeData.filter((grade) =>
          grade.subject.toLowerCase().includes(selectedSubject)
        );

  const calculateGPA = () => {
    const total = gradeData.reduce((sum, grade) => sum + grade.currentGrade, 0);
    return (total / gradeData.length).toFixed(2);
  };

  const getGradeColor = (grade) => {
    if (grade >= 90) return "text-green-600";
    if (grade >= 80) return "text-blue-600";
    if (grade >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[color:var(--foreground)] mb-2">
            My Grades
          </h1>
          <p className="text-[color:var(--muted-foreground)]">
            Track your academic performance and progress
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="bg-[color:var(--card)] rounded-lg p-4 border border-[color:var(--border)]">
            <p className="text-sm text-[color:var(--muted-foreground)]">
              Current GPA
            </p>
            <p className="text-2xl font-bold text-[color:var(--primary)]">
              {calculateGPA()}
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-[color:var(--card)] rounded-xl p-6 shadow-sm border border-[color:var(--border)]">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-[color:var(--foreground)] mb-2">
              Semester
            </label>
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="w-full px-3 py-2 border border-[color:var(--border)] rounded-lg focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent"
            >
              {semesters.map((semester) => (
                <option key={semester.id} value={semester.id}>
                  {semester.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[color:var(--foreground)] mb-2">
              Subject Filter
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-3 py-2 border border-[color:var(--border)] rounded-lg focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent"
            >
              {subjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grades Table */}
      <div className="bg-[color:var(--card)] rounded-xl shadow-sm border border-[color:var(--border)] overflow-hidden">
        <div className="px-6 py-4 border-b border-[color:var(--border)]">
          <h2 className="text-lg font-semibold text-[color:var(--card-foreground)]">
            Grade Details
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[color:var(--muted)]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Teacher
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Quiz 1
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Quiz 2
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Midterm
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Project
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Final
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Current Grade
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[color:var(--border)]">
              {filteredGrades.map((grade, index) => (
                <tr key={index} className="hover:bg-[color:var(--muted)]/50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-[color:var(--foreground)]">
                      {grade.subject}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[color:var(--muted-foreground)]">
                    {grade.teacher}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`font-medium ${getGradeColor(
                        grade.grades.quiz1
                      )}`}
                    >
                      {grade.grades.quiz1}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`font-medium ${getGradeColor(
                        grade.grades.quiz2
                      )}`}
                    >
                      {grade.grades.quiz2}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`font-medium ${getGradeColor(
                        grade.grades.midterm
                      )}`}
                    >
                      {grade.grades.midterm}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`font-medium ${getGradeColor(
                        grade.grades.project
                      )}`}
                    >
                      {grade.grades.project}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {grade.grades.final ? (
                      <span
                        className={`font-medium ${getGradeColor(
                          grade.grades.final
                        )}`}
                      >
                        {grade.grades.final}
                      </span>
                    ) : (
                      <span className="text-[color:var(--muted-foreground)]">
                        Pending
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <span
                        className={`font-bold text-lg ${getGradeColor(
                          grade.currentGrade
                        )}`}
                      >
                        {grade.currentGrade}
                      </span>
                      <span className="text-sm text-[color:var(--muted-foreground)]">
                        {grade.letterGrade}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grade Report Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-[color:var(--primary)] text-[color:var(--primary-foreground)] px-6 py-3 rounded-lg font-semibold hover:bg-[color:var(--primary)]/90 transition-colors duration-200">
          Download Grade Report
        </button>
        <button className="border border-[color:var(--border)] text-[color:var(--foreground)] px-6 py-3 rounded-lg font-semibold hover:bg-[color:var(--muted)] transition-colors duration-200">
          Print Grade Report
        </button>
        <button className="border border-[color:var(--border)] text-[color:var(--foreground)] px-6 py-3 rounded-lg font-semibold hover:bg-[color:var(--muted)] transition-colors duration-200">
          Email to Parent/Guardian
        </button>
      </div>
    </div>
  );
}
