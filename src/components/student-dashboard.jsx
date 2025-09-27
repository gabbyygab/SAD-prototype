export default function StudentDashboard() {
  const quickStats = [
    { label: "Current GPA", value: "3.85", icon: "📊", color: "bg-green-500" },
    { label: "Attendance", value: "95%", icon: "✅", color: "bg-blue-500" },
    { label: "Pending Tasks", value: "3", icon: "📝", color: "bg-yellow-500" },
    { label: "Messages", value: "2", icon: "💬", color: "bg-red-500" },
  ];

  const recentGrades = [
    { subject: "Mathematics", grade: "A", date: "2024-12-10" },
    { subject: "English", grade: "B+", date: "2024-12-08" },
    { subject: "Science", grade: "A-", date: "2024-12-05" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[color:var(--foreground)] mb-2">
          Student Dashboard
        </h1>
        <p className="text-[color:var(--muted-foreground)]">
          Welcome back! Here's your academic overview.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {quickStats.map((stat, index) => (
          <div
            key={index}
            className="bg-[color:var(--card)] rounded-xl p-6 shadow-sm border border-[color:var(--border)]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[color:var(--muted-foreground)]">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-[color:var(--card-foreground)]">
                  {stat.value}
                </p>
              </div>
              <div
                className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-white text-xl`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Grades */}
      <div className="bg-[color:var(--card)] rounded-xl p-6 shadow-sm border border-[color:var(--border)]">
        <h2 className="text-lg font-semibold text-[color:var(--card-foreground)] mb-4">
          Recent Grades
        </h2>
        <div className="space-y-3">
          {recentGrades.map((grade, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-[color:var(--muted)] rounded-lg"
            >
              <div>
                <p className="font-medium text-[color:var(--foreground)]">
                  {grade.subject}
                </p>
                <p className="text-sm text-[color:var(--muted-foreground)]">
                  {grade.date}
                </p>
              </div>
              <div className="text-lg font-bold text-[color:var(--primary)]">
                {grade.grade}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
