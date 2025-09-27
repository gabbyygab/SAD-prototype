export default function TeacherDashboard() {
  const quickStats = [
    { label: "Total Students", value: "120", icon: "👥", color: "bg-blue-500" },
    { label: "Classes Today", value: "5", icon: "📚", color: "bg-green-500" },
    { label: "Pending Grades", value: "8", icon: "📝", color: "bg-yellow-500" },
    { label: "Messages", value: "12", icon: "💬", color: "bg-red-500" },
  ];

  const todayClasses = [
    {
      subject: "Mathematics 101",
      time: "8:00 AM",
      room: "Room 201",
      students: 30,
    },
    { subject: "Algebra II", time: "10:00 AM", room: "Room 203", students: 25 },
    { subject: "Calculus", time: "2:00 PM", room: "Room 205", students: 20 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[color:var(--foreground)] mb-2">
          Teacher Dashboard
        </h1>
        <p className="text-[color:var(--muted-foreground)]">
          Manage your classes and track student progress.
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

      {/* Today's Classes */}
      <div className="bg-[color:var(--card)] rounded-xl p-6 shadow-sm border border-[color:var(--border)]">
        <h2 className="text-lg font-semibold text-[color:var(--card-foreground)] mb-4">
          Today's Classes
        </h2>
        <div className="space-y-3">
          {todayClasses.map((classItem, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-[color:var(--muted)] rounded-lg"
            >
              <div>
                <p className="font-medium text-[color:var(--foreground)]">
                  {classItem.subject}
                </p>
                <p className="text-sm text-[color:var(--muted-foreground)]">
                  {classItem.time} • {classItem.room}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium text-[color:var(--foreground)]">
                  {classItem.students} students
                </p>
                <button className="text-sm text-[color:var(--primary)] hover:text-[color:var(--primary)]/80 transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
