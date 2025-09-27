// Academic Performance Table
const reportData = {
  overview: {
    totalStudents: 120,
    averageGPA: 3.72,
    attendanceRate: 94.2,
    completionRate: 89.5,
  },
  academic: [
    {
      subject: "Mathematics",
      average: 85.6,
      highest: 98,
      lowest: 72,
      students: 30,
    },
    {
      subject: "English",
      average: 88.2,
      highest: 96,
      lowest: 76,
      students: 30,
    },
    {
      subject: "Science",
      average: 82.4,
      highest: 95,
      lowest: 68,
      students: 30,
    },
    {
      subject: "History",
      average: 87.1,
      highest: 94,
      lowest: 74,
      students: 30,
    },
    {
      subject: "Filipino",
      average: 89.3,
      highest: 97,
      lowest: 80,
      students: 30,
    },
  ],
  attendance: [
    { month: "January", rate: 95.2, present: 114, absent: 6 },
    { month: "February", rate: 93.8, present: 113, absent: 7 },
    { month: "March", rate: 96.1, present: 115, absent: 5 },
    { month: "April", rate: 92.5, present: 111, absent: 9 },
    { month: "May", rate: 94.7, present: 114, absent: 6 },
  ],
  performance: [
    { grade: "A (90-100)", students: 32, percentage: 26.7 },
    { grade: "B (80-89)", students: 45, percentage: 37.5 },
    { grade: "C (70-79)", students: 28, percentage: 23.3 },
    { grade: "D (60-69)", students: 12, percentage: 10.0 },
    { grade: "F (Below 60)", students: 3, percentage: 2.5 },
  ],
};
const AcademicTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-200">
          <th className="text-left py-3 px-4 font-semibold text-gray-700">
            Subject
          </th>
          <th className="text-left py-3 px-4 font-semibold text-gray-700">
            Average
          </th>
          <th className="text-left py-3 px-4 font-semibold text-gray-700">
            Highest
          </th>
          <th className="text-left py-3 px-4 font-semibold text-gray-700">
            Lowest
          </th>
          <th className="text-left py-3 px-4 font-semibold text-gray-700">
            Students
          </th>
        </tr>
      </thead>
      <tbody>
        {reportData.academic.map((subject, index) => (
          <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
            <td className="py-3 px-4 font-medium text-black">
              {subject.subject}
            </td>
            <td className="py-3 px-4 text-gray-700">{subject.average}%</td>
            <td className="py-3 px-4 text-gray-700">{subject.highest}%</td>
            <td className="py-3 px-4 text-gray-700">{subject.lowest}%</td>
            <td className="py-3 px-4 text-gray-700">{subject.students}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default AcademicTable;
