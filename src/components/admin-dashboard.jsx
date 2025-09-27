export default function AdminDashboard() {
  const systemStats = [
    {
      label: "Total Students",
      value: "1,245",
      icon: "🎓",
      color: "bg-blue-500",
    },
    { label: "Total Teachers", value: "85", icon: "👨‍🏫", color: "bg-green-500" },
    {
      label: "Active Classes",
      value: "156",
      icon: "📚",
      color: "bg-purple-500",
    },
    {
      label: "System Health",
      value: "98%",
      icon: "⚡",
      color: "bg-yellow-500",
    },
  ];

  const recentActivities = [
    {
      action: "New student enrollment",
      user: "Maria Santos",
      time: "2 hours ago",
    },
    {
      action: "Grade report generated",
      user: "John Teacher",
      time: "4 hours ago",
    },
    {
      action: "Finance record updated",
      user: "Admin User",
      time: "6 hours ago",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[color:var(--foreground)] mb-2">
          Admin Dashboard
        </h1>
        <p className="text-[color:var(--muted-foreground)]">
          System overview and management tools.
        </p>
      </div>

      {/* System Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {systemStats.map((stat, index) => (
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

      {/* Recent Activities */}
      <div className="bg-[color:var(--card)] rounded-xl p-6 shadow-sm border border-[color:var(--border)]">
        <h2 className="text-lg font-semibold text-[color:var(--card-foreground)] mb-4">
          Recent System Activities
        </h2>
        <div className="space-y-3">
          {recentActivities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-[color:var(--muted)] rounded-lg"
            >
              <div>
                <p className="font-medium text-[color:var(--foreground)]">
                  {activity.action}
                </p>
                <p className="text-sm text-[color:var(--muted-foreground)]">
                  by {activity.user}
                </p>
              </div>
              <div className="text-sm text-[color:var(--muted-foreground)]">
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <button className="bg-[color:var(--primary)] text-white p-4 rounded-xl hover:bg-[color:var(--primary)]/90 transition-colors duration-200">
          <div className="text-2xl mb-2">👤</div>
          <div className="font-semibold">Manage Users</div>
        </button>
        <button className="bg-gray-500 text-white p-4 rounded-xl hover:bg-gray-400 transition-colors duration-200">
          <div className="text-2xl mb-2">📊</div>
          <div className="font-semibold">Generate Reports</div>
        </button>
        <button className="bg-gray-700 text-white p-4 rounded-xl hover:bg-gray-600 transition-colors duration-200">
          <div className="text-2xl mb-2">⚙️</div>
          <div className="font-semibold">System Settings</div>
        </button>
      </div>
    </div>
  );
}
