export default function Announcements() {
  const announcements = [
    {
      id: 1,
      title: "Class Suspension Notice",
      content:
        "Due to inclement weather, all classes are suspended today, December 15, 2024. Stay safe and monitor official channels for updates.",
      date: "December 15, 2024",
      type: "urgent",
      icon: "⚠️",
    },
    {
      id: 2,
      title: "Grade 12 Graduation Ceremony",
      content:
        "The graduation ceremony for Grade 12 students will be held on March 25, 2025 at the school gymnasium.",
      date: "December 10, 2024",
      type: "event",
      icon: "🎓",
    },
    {
      id: 3,
      title: "Parent-Teacher Conference",
      content:
        "Quarterly parent-teacher conferences are scheduled for January 15-17, 2025. Please check your schedule.",
      date: "December 8, 2024",
      type: "meeting",
      icon: "👥",
    },
  ];

  const getTypeStyles = (type) => {
    switch (type) {
      case "urgent":
        return "border-l-red-500 bg-red-50";
      case "event":
        return "border-l-[color:var(--secondary)] bg-yellow-50";
      case "meeting":
        return "border-l-[color:var(--primary)] bg-green-50";
      default:
        return "border-l-gray-300 bg-gray-50";
    }
  };

  return (
    <section className="py-16 bg-[color:var(--muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[color:var(--foreground)] mb-4">
            Latest Announcements
          </h2>
          <p className="text-lg text-[color:var(--muted-foreground)]">
            Stay updated with important school notices and events
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className={`bg-[color:var(--card)] rounded-xl p-6 shadow-sm border-l-4 ${getTypeStyles(
                announcement.type
              )} hover:shadow-md transition-shadow duration-200`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{announcement.icon}</span>
                <span className="text-sm text-[color:var(--muted-foreground)]">
                  {announcement.date}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-[color:var(--card-foreground)] mb-3">
                {announcement.title}
              </h3>

              <p className="text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                {announcement.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
