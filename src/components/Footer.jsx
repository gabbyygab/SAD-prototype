export default function Footer() {
  return (
    <footer className="bg-[color:var(--primary)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[color:var(--secondary)] rounded-full flex items-center justify-center">
                <span className="text-[color:var(--primary)] font-bold text-lg">
                  NC
                </span>
              </div>
              <div>
                <h3 className="font-bold text-lg">SchoolSync</h3>
                <p className="text-sm text-[color:var(--primary-foreground)]/80">
                  Notre Christi Academy
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[color:var(--primary-foreground)]/80">
              Excellence in Education, Character Formation, and Holistic
              Development for the Filipino Youth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-[color:var(--primary-foreground)]/80 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/academics"
                  className="text-[color:var(--primary-foreground)]/80 hover:text-white transition-colors duration-200"
                >
                  Academics
                </a>
              </li>
              <li>
                <a
                  href="/admissions"
                  className="text-[color:var(--primary-foreground)]/80 hover:text-white transition-colors duration-200"
                >
                  Admissions
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="text-[color:var(--primary-foreground)]/80 hover:text-white transition-colors duration-200"
                >
                  Student Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/grades"
                  className="text-[color:var(--primary-foreground)]/80 hover:text-white transition-colors duration-200"
                >
                  Grades
                </a>
              </li>
              <li>
                <a
                  href="/finance"
                  className="text-[color:var(--primary-foreground)]/80 hover:text-white transition-colors duration-200"
                >
                  Finance
                </a>
              </li>
              <li>
                <a
                  href="/certificates"
                  className="text-[color:var(--primary-foreground)]/80 hover:text-white transition-colors duration-200"
                >
                  Certificates
                </a>
              </li>
              <li>
                <a
                  href="/communication"
                  className="text-[color:var(--primary-foreground)]/80 hover:text-white transition-colors duration-200"
                >
                  Communication
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm text-[color:var(--primary-foreground)]/80">
              <p>📍 123 Education Street, Manila, Philippines</p>
              <p>📞 +63 2 1234 5678</p>
              <p>✉️ info@notrechristiph.edu</p>
              <div className="flex space-x-3 mt-4">
                <a
                  href="#"
                  className="text-[color:var(--primary-foreground)]/80 hover:text-white transition-colors duration-200"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-[color:var(--primary-foreground)]/80 hover:text-white transition-colors duration-200"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-[color:var(--primary-foreground)]/80 hover:text-white transition-colors duration-200"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[color:var(--primary-foreground)]/20 mt-8 pt-8 text-center">
          <p className="text-sm text-[color:var(--primary-foreground)]/80">
            © 2025 Notre Christi Academy of the Philippines. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
