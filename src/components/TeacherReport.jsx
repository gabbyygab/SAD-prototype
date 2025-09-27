import { useState } from "react";
import StatsCardReport from "./report-stat-card";
import ReportCard from "./ReportCard";
import SimpleBarChart from "./SimpleBarChart";
import AcademicTable from "./AcademicTable";
import AttendanceTable from "./AttendanceTable";
export default function TeacherReport() {
  const [selectedReport, setSelectedReport] = useState("overview");
  const [dateRange, setDateRange] = useState("current-term");
  const [selectedClass, setSelectedClass] = useState("all");
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
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Academic Reports</h1>
        <p className="text-gray-600">
          Comprehensive analytics and insights on student performance and
          attendance.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Report Type
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              value={selectedReport}
              onChange={(e) => setSelectedReport(e.target.value)}
            >
              <option value="overview">Overview</option>
              <option value="academic">Academic Performance</option>
              <option value="attendance">Attendance</option>
              <option value="performance">Grade Distribution</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date Range
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="current-term">Current Term</option>
              <option value="last-term">Last Term</option>
              <option value="current-year">Current Year</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Class Filter
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="all">All Classes</option>
              <option value="grade-9">Grade 9</option>
              <option value="grade-10">Grade 10</option>
              <option value="grade-11">Grade 11</option>
              <option value="grade-12">Grade 12</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Overview Report */}
      {selectedReport === "overview" && (
        <>
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <StatsCardReport
              title="Total Students"
              value="120"
              subtitle="Across all grades"
              icon="👥"
              bgColor="bg-gray-800"
            />
            <StatsCardReport
              title="Average GPA"
              value="3.72"
              subtitle="Out of 4.0"
              icon="📊"
              bgColor="bg-gray-700"
            />
            <StatsCardReport
              title="Attendance Rate"
              value="94.2%"
              subtitle="This term"
              icon="📅"
              bgColor="bg-gray-600"
            />
            <StatsCardReport
              title="Completion Rate"
              value="89.5%"
              subtitle="Assignments completed"
              icon="✅"
              bgColor="bg-gray-500"
            />
          </div>

          {/* Quick Insights */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ReportCard title="Top Performing Subjects">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Filipino</span>
                  <span className="font-semibold text-black">89.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">English</span>
                  <span className="font-semibold text-black">88.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">History</span>
                  <span className="font-semibold text-black">87.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Mathematics</span>
                  <span className="font-semibold text-black">85.6%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Science</span>
                  <span className="font-semibold text-black">82.4%</span>
                </div>
              </div>
            </ReportCard>

            <ReportCard title="Monthly Attendance Trends">
              <SimpleBarChart
                data={reportData.attendance}
                dataKey="rate"
                nameKey="month"
                title="Attendance by Month (%)"
              />
            </ReportCard>
          </div>
        </>
      )}

      {/* Academic Performance Report */}
      {selectedReport === "academic" && (
        <div className="space-y-6">
          <ReportCard title="Subject Performance Analysis">
            <AcademicTable />
          </ReportCard>

          <div className="grid md:grid-cols-2 gap-6">
            <ReportCard title="Subject Averages">
              <SimpleBarChart
                data={reportData.academic}
                dataKey="average"
                nameKey="subject"
                title="Average Scores by Subject"
              />
            </ReportCard>

            <ReportCard title="Performance Summary">
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">
                    Highest Performing Subject
                  </h4>
                  <p className="text-gray-700">Filipino with 89.3% average</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">
                    Needs Attention
                  </h4>
                  <p className="text-gray-700">Science with 82.4% average</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">
                    Overall Trend
                  </h4>
                  <p className="text-gray-700">
                    Consistent performance across subjects
                  </p>
                </div>
              </div>
            </ReportCard>
          </div>
        </div>
      )}

      {/* Attendance Report */}
      {selectedReport === "attendance" && (
        <div className="space-y-6">
          <ReportCard title="Monthly Attendance Report">
            <AttendanceTable />
          </ReportCard>

          <div className="grid md:grid-cols-2 gap-6">
            <ReportCard title="Attendance Trends">
              <SimpleBarChart
                data={reportData.attendance}
                dataKey="rate"
                nameKey="month"
                title="Monthly Attendance Rates (%)"
              />
            </ReportCard>

            <ReportCard title="Attendance Insights">
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Best Month</h4>
                  <p className="text-gray-700">March with 96.1% attendance</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">
                    Lowest Month
                  </h4>
                  <p className="text-gray-700">April with 92.5% attendance</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">
                    Average Rate
                  </h4>
                  <p className="text-gray-700">94.3% overall attendance</p>
                </div>
              </div>
            </ReportCard>
          </div>
        </div>
      )}

      {/* Grade Distribution Report */}
      {selectedReport === "performance" && (
        <div className="space-y-6">
          <ReportCard title="Grade Distribution Analysis">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <SimpleBarChart
                  data={reportData.performance}
                  dataKey="students"
                  nameKey="grade"
                  title="Number of Students by Grade"
                />
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-gray-700 text-sm">
                  Grade Distribution
                </h4>
                {reportData.performance.map((grade, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <span className="font-medium text-black">
                        {grade.grade}
                      </span>
                      <div className="text-sm text-gray-600">
                        {grade.students} students
                      </div>
                    </div>
                    <span className="font-semibold text-gray-700">
                      {grade.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ReportCard>

          <ReportCard title="Performance Analysis">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <h4 className="font-semibold text-black mb-2">
                  Honor Students
                </h4>
                <p className="text-2xl font-bold text-gray-700 mb-1">32</p>
                <p className="text-sm text-gray-600">A Grade (90-100)</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <h4 className="font-semibold text-black mb-2">Above Average</h4>
                <p className="text-2xl font-bold text-gray-700 mb-1">45</p>
                <p className="text-sm text-gray-600">B Grade (80-89)</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <h4 className="font-semibold text-black mb-2">Need Support</h4>
                <p className="text-2xl font-bold text-gray-700 mb-1">15</p>
                <p className="text-sm text-gray-600">Below 70</p>
              </div>
            </div>
          </ReportCard>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-8 flex justify-end space-x-4">
        <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
          Share Report
        </button>
        <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
          Download PDF
        </button>
      </div>
    </div>
  );
}
