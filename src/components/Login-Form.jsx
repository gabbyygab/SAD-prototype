import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  // Default role set to student
  const [selectedRole, setSelectedRole] = useState("student");

  // Form data state for username and password
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Loading state for form submission
  const [isLoading, setIsLoading] = useState(false);

  // Available user roles with icons and labels
  const roles = [
    { id: "student", label: "Student", icon: "🎓" },
    { id: "teacher", label: "Teacher", icon: "👨‍🏫" },
    { id: "nurse", label: "Nurse/Clinic", icon: "🏥" }, // New nurse/clinic role
    { id: "admin", label: "Admin", icon: "⚙️" },
  ];

  // Handle input field changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);

      // Navigate to appropriate dashboard based on selected role
      switch (selectedRole) {
        case "student":
          navigate("/dashboard/student");
          break;
        case "teacher":
          navigate("/dashboard/teacher");
          break;
        case "nurse":
          navigate("/dashboard/medical"); // New nurse dashboard route
          break;
        case "admin":
          navigate("/dashboard/admin");
          break;
        default:
          navigate("/login");
      }
    }, 1500);
  };

  // Helper function to get appropriate ID label based on role
  const getIdLabel = () => {
    switch (selectedRole) {
      case "student":
        return "Student ID";
      case "teacher":
        return "Employee ID";
      case "nurse":
        return "Staff ID"; // Nurse/clinic staff ID
      case "admin":
        return "Admin ID";
      default:
        return "ID";
    }
  };

  // Helper function to get appropriate placeholder text
  const getPlaceholderText = () => {
    switch (selectedRole) {
      case "student":
        return "Enter your student ID";
      case "teacher":
        return "Enter your employee ID";
      case "nurse":
        return "Enter your staff ID"; // Nurse/clinic staff placeholder
      case "admin":
        return "Enter your admin ID";
      default:
        return "Enter your ID";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {/* Role Selection Section */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[color:var(--foreground)] mb-3">
          Select Your Role
        </label>
        {/* Grid layout for role buttons - now 4 columns for 4 roles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {roles.map((role) => (
            <button
              key={role.id}
              type="button"
              onClick={() => setSelectedRole(role.id)}
              className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                selectedRole === role.id
                  ? "border-[color:var(--primary)] bg-[color:var(--primary)]/5 text-[color:var(--primary)]"
                  : "border-[color:var(--border)] hover:border-[color:var(--primary)]/50 text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]"
              }`}
            >
              {/* Role icon */}
              <div className="text-lg mb-1">{role.icon}</div>
              {/* Role label */}
              <div className="text-xs font-medium">{role.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Login Form Section */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username/ID Input Field */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-[color:var(--foreground)] mb-2"
          >
            {getIdLabel()}
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-[color:var(--border)] rounded-lg focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent transition-colors duration-200"
            placeholder={getPlaceholderText()}
            required
          />
        </div>

        {/* Password Input Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-[color:var(--foreground)] mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-[color:var(--border)] rounded-lg focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent transition-colors duration-200"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Remember Me and Forgot Password Section */}
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-[color:var(--border)] text-[color:var(--primary)] focus:ring-[color:var(--primary)]"
            />
            <span className="ml-2 text-sm text-[color:var(--muted-foreground)]">
              Remember me
            </span>
          </label>
          <a
            href="#"
            className="text-sm text-[color:var(--primary)] hover:text-[color:var(--primary)]/80 transition-colors duration-200"
          >
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[color:var(--primary)] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[color:var(--primary)]/90 focus:ring-2 focus:ring-[color:var(--primary)] focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              {/* Loading spinner */}
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Signing in...
            </div>
          ) : (
            `Sign in as ${roles.find((r) => r.id === selectedRole)?.label}`
          )}
        </button>
      </form>

      {/* Help Section */}
      <div className="mt-6 text-center">
        <p className="text-sm text-[color:var(--muted-foreground)]">
          Need help? Contact the{" "}
          <a
            href="#"
            className="text-[color:var(--primary)] hover:text-[color:var(--primary)]/80 transition-colors duration-200"
          >
            IT Support Team
          </a>
        </p>
      </div>
    </div>
  );
}
