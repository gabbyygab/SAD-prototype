export default function QuickLinks() {
  const quickLinks = [
    {
      title: "Grades",
      description: "View student grades and academic progress",
      icon: "📊",
      href: "/grades",
      color: "bg-blue-500",
    },
    {
      title: "ID System",
      description: "Digital student identification and validation",
      icon: "🆔",
      href: "/student-id",
      color: "bg-green-500",
    },
    {
      title: "Finance",
      description: "Tuition payments and financial records",
      icon: "💰",
      href: "/finance",
      color: "bg-yellow-500",
    },
    {
      title: "Certificates",
      description: "Generate and download certificates",
      icon: "📜",
      href: "/certificates",
      color: "bg-purple-500",
    },
    {
      title: "Communication",
      description: "Messages and notifications",
      icon: "💬",
      href: "/communication",
      color: "bg-red-500",
    },
    {
      title: "Reports",
      description: "Academic reports and analytics",
      icon: "📈",
      href: "/reports",
      color: "bg-indigo-500",
    },
  ];

  return (
    <section className="py-16 bg-[color:var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[color:var(--foreground)] mb-4">
            Quick Access
          </h2>
          <p className="text-muted-[color:var(--foreground)] text-lg">
            Access key school services and information
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-border hover:border-[color:var(--primary)]/20"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 ${link.color} rounded-lg flex items-center justify-center text-white text-xl mr-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  {link.icon}
                </div>
                <h3 className="text-lg font-semibold text-card-[color:var(--foreground)] group-hover:text-[color:var(--primary)] transition-colors duration-200">
                  {link.title}
                </h3>
              </div>
              <p className="text-muted-[color:var(--foreground)] text-sm leading-relaxed">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
