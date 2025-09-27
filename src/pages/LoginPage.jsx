import LoginForm from "../components/Login-Form";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--primary)]/90 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Heading */}
        <Link to="/">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[color:var(--secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-[color:var(--primary)] font-bold text-2xl">
                NC
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              SchoolSync Login
            </h1>
            <p className="text-[color:var(--primary-foreground)]/80">
              Notre Christi Academy Portal
            </p>
          </div>
        </Link>

        {/* Login Form (imported separately) */}
        <LoginForm />

        {/* Back to Home */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-[color:var(--primary-foreground)]/80 hover:text-white transition-colors duration-200 text-sm"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
