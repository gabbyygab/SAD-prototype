import { useState } from "react";
import { Link } from "react-router-dom";

export default function DashboardLayout({ children, userRole }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getNavItems = () => {
    const commonItems = [
      { href: "/dashboard", label: "Dashboard", icon: "🏠" },
      { href: "/communication", label: "Messages", icon: "💬" },
    ];

    switch (userRole) {
      case "student":
        return [
          ...commonItems,
          { href: "/grades", label: "My Grades", icon: "📊" },
          { href: "/student-id", label: "Student ID", icon: "🆔" },
          { href: "/finance", label: "Finance", icon: "💰" },
          { href: "/certificates", label: "Certificates", icon: "📜" },
        ];
      case "teacher":
        return [
          ...commonItems,
          { href: "/grades/manage", label: "Manage Grades", icon: "📝" },
          { href: "/students", label: "Students", icon: "👥" },
          { href: "/reports", label: "Reports", icon: "📈" },
        ];
      case "medical":
        return [
          ...commonItems,
          { href: "/medical/records", label: "Health Records", icon: "📋" },
          { href: "/medical/appointments", label: "Appointments", icon: "📅" },
          { href: "/medical/reports", label: "Medical Reports", icon: "📊" },
        ];
      case "admin":
        return [
          ...commonItems,
          { href: "/users", label: "User Management", icon: "👤" },
          { href: "/finance/admin", label: "Finance Admin", icon: "💼" },
          { href: "/medical/admin", label: "Medical Admin", icon: "🏥" },
          { href: "/reports/admin", label: "System Reports", icon: "📊" },
        ];
      default:
        return commonItems;
    }
  };

  const navItems = getNavItems();

  const getRoleInfo = () => {
    switch (userRole) {
      case "student":
        return { name: "Juan Dela Cruz", id: "STU-2024-001", role: "Student" };
      case "teacher":
        return { name: "Maria Santos", id: "TCH-2024-001", role: "Teacher" };
      case "medical":
        return {
          name: "Dr. Sarah Johnson",
          id: "MED-2024-001",
          role: "Medical Staff",
        };
      case "admin":
        return {
          name: "Admin User",
          id: "ADM-2024-001",
          role: "Administrator",
        };
      default:
        return { name: "User", id: "USR-001", role: "User" };
    }
  };

  const userInfo = getRoleInfo();

  return (
    <div className="min-h-screen bg-[color:var(--muted)]">
      <div className="flex">
        <aside
          className={`bg-[color:var(--card)] fixed top-0 left-0 shadow-sm border-r border-[color:var(--border)] w-64 h-screen overflow-y-auto z-40
    ${isSidebarOpen ? "block" : "hidden"} md:block`}
        >
          <div className="p-4 border-b border-[color:var(--border)]">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-[color:var(--primary)] rounded-full flex items-center justify-center">
                <span className="text-[color:var(--primary-foreground)] font-bold text-sm">
                  NC
                </span>
              </div>
              <div>
                <h1 className="font-bold text-[color:var(--primary)]">
                  SchoolSync
                </h1>
                <p className="text-xs text-[color:var(--muted-foreground)]">
                  Notre Christi Academy
                </p>
              </div>
            </div>
            <div className="text-left">
              <p className="font-medium text-[color:var(--foreground)]">
                {userInfo.name}
              </p>
              <p className="text-xs text-[color:var(--muted-foreground)]">
                {userInfo.role} • {userInfo.id}
              </p>
            </div>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href + "/" + userRole}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)] hover:bg-[color:var(--muted)] transition-colors duration-200"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="absolute bottom-4 left-4">
            <Link
              to="/login"
              className="flex items-center space-x-2 text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span className="text-sm">Logout</span>
            </Link>
          </div>
        </aside>

        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden fixed top-4 left-4 z-50 bg-[color:var(--card)] p-2 rounded-lg shadow-md text-[color:var(--foreground)] hover:text-[color:var(--primary)]"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <main className="flex-1 p-6 md:ml-64">{children}</main>
      </div>
    </div>
  );
}
