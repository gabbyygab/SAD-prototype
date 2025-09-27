import { useState } from "react";

export default function CommunicationCenter() {
  const [activeTab, setActiveTab] = useState("messages");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showCompose, setShowCompose] = useState(false);

  const tabs = [
    { id: "messages", label: "Messages", icon: "💬" },
    { id: "notifications", label: "Notifications", icon: "🔔" },
    { id: "announcements", label: "Announcements", icon: "📢" },
  ];

  const messages = [
    {
      id: 1,
      from: "Ms. Rodriguez",
      fromRole: "Mathematics Teacher",
      subject: "Quiz 2 Results Available",
      preview:
        "Your quiz results have been posted. Please check your grades section...",
      content:
        "Dear Juan,\n\nI hope this message finds you well. I wanted to inform you that the results for Quiz 2 in Mathematics have been posted to your grades section.\n\nYou scored 92/100, which is an excellent improvement from your previous quiz. Keep up the good work!\n\nIf you have any questions about the quiz or need clarification on any topics, please don't hesitate to reach out during office hours.\n\nBest regards,\nMs. Rodriguez\nMathematics Department",
      timestamp: "2024-12-15 10:30 AM",
      read: false,
      priority: "normal",
    },
    {
      id: 2,
      from: "Registrar's Office",
      fromRole: "Administration",
      subject: "Document Request Approved",
      preview:
        "Your request for transcript of records has been approved and is ready for pickup...",
      content:
        "Dear Student,\n\nWe are pleased to inform you that your request for transcript of records has been approved and processed.\n\nDocument Details:\n- Document Type: Transcript of Records\n- Request Date: December 10, 2024\n- Processing Fee: ₱150.00 (Paid)\n- Status: Ready for Pickup\n\nYou may collect your documents at the Registrar's Office during office hours (8:00 AM - 5:00 PM, Monday to Friday).\n\nPlease bring a valid ID for verification.\n\nThank you.\n\nRegistrar's Office\nNotre Christi Academy",
      timestamp: "2024-12-14 2:15 PM",
      read: true,
      priority: "high",
    },
    {
      id: 3,
      from: "Dr. Cruz",
      fromRole: "Science Department Head",
      subject: "Laboratory Schedule Change",
      preview:
        "There has been a change in the laboratory schedule for next week...",
      content:
        "Dear Students,\n\nI hope you are all doing well. I am writing to inform you of an important change in our laboratory schedule for next week.\n\nSchedule Changes:\n- Original: Wednesday, December 18, 2:00 PM - 4:00 PM\n- New Schedule: Thursday, December 19, 2:00 PM - 4:00 PM\n- Location: Science Laboratory 2 (unchanged)\n\nReason for change: Laboratory equipment maintenance\n\nPlease make note of this change and adjust your schedules accordingly. If you have any conflicts with the new schedule, please let me know as soon as possible.\n\nThank you for your understanding.\n\nDr. Cruz\nScience Department Head",
      timestamp: "2024-12-13 4:45 PM",
      read: true,
      priority: "normal",
    },
  ];

  const notifications = [
    {
      id: 1,
      type: "grade",
      title: "New Grade Posted",
      message: "Your Mathematics Quiz 2 grade has been posted: 92/100",
      timestamp: "2024-12-15 10:30 AM",
      read: false,
      icon: "📊",
    },
    {
      id: 2,
      type: "payment",
      title: "Payment Reminder",
      message:
        "Tuition payment due on January 15, 2025. Outstanding balance: ₱10,000",
      timestamp: "2024-12-14 9:00 AM",
      read: false,
      icon: "💰",
    },
    {
      id: 3,
      type: "attendance",
      title: "Attendance Alert",
      message: "You were marked absent for English class on December 13, 2024",
      timestamp: "2024-12-13 3:30 PM",
      read: true,
      icon: "⚠️",
    },
    {
      id: 4,
      type: "system",
      title: "System Maintenance",
      message:
        "SchoolSync will undergo maintenance on December 20, 2024 from 12:00 AM to 6:00 AM",
      timestamp: "2024-12-12 5:00 PM",
      read: true,
      icon: "🔧",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "Class Suspension Notice",
      content:
        "Due to inclement weather, all classes are suspended today, December 15, 2024. Stay safe and monitor official channels for updates.",
      author: "Principal's Office",
      timestamp: "2024-12-15 6:00 AM",
      priority: "urgent",
      category: "Emergency",
    },
    {
      id: 2,
      title: "Grade 12 Graduation Ceremony",
      content:
        "The graduation ceremony for Grade 12 students will be held on March 25, 2025 at the school gymnasium. More details will follow.",
      author: "Academic Affairs",
      timestamp: "2024-12-10 2:00 PM",
      priority: "high",
      category: "Event",
    },
    {
      id: 3,
      title: "Parent-Teacher Conference Schedule",
      content:
        "Quarterly parent-teacher conferences are scheduled for January 15-17, 2025. Please check your individual schedules for specific appointment times.",
      author: "Guidance Office",
      timestamp: "2024-12-08 11:00 AM",
      priority: "normal",
      category: "Meeting",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "urgent":
        return "border-l-red-500 bg-red-50";
      case "high":
        return "border-l-yellow-500 bg-yellow-50";
      default:
        return "border-l-blue-500 bg-blue-50";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[color:var(--foreground)] mb-2">
          Communication Center
        </h1>
        <p className="text-[color:var(--muted-foreground)]">
          Stay connected with teachers, staff, and school announcements
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-[color:var(--card)] rounded-xl shadow-sm border border-[color:var(--border)]">
        <div className="flex border-b border-[color:var(--border)]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-6 py-4 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? "text-[color:var(--primary)] border-b-2 border-[color:var(--primary)] bg-[color:var(--primary)]/5"
                  : "text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6">
          {/* Messages Tab */}
          {activeTab === "messages" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-[color:var(--card-foreground)]">
                  Messages
                </h2>
                <button className="bg-[color:var(--primary)] text-[color:var(--primary-foreground)] px-4 py-2 rounded-lg font-semibold hover:bg-[color:var(--primary)]/90 transition-colors duration-200">
                  Compose Message
                </button>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                {/* Message List */}
                <div className="space-y-2">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      onClick={() => setSelectedMessage(message)}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors duration-200 ${
                        selectedMessage?.id === message.id
                          ? "border-[color:var(--primary)] bg-[color:var(--primary)]/5"
                          : "border-[color:var(--border)] hover:bg-[color:var(--muted)]/50"
                      } ${!message.read ? "bg-blue-50 border-blue-200" : ""}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium text-[color:var(--foreground)]">
                            {message.from}
                          </h3>
                          <p className="text-xs text-[color:var(--muted-foreground)]">
                            {message.fromRole}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-[color:var(--muted-foreground)]">
                            {message.timestamp}
                          </p>
                          {!message.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 ml-auto"></div>
                          )}
                        </div>
                      </div>
                      <h4 className="font-medium text-sm text-[color:var(--foreground)] mb-1">
                        {message.subject}
                      </h4>
                      <p className="text-sm text-[color:var(--muted-foreground)] line-clamp-2">
                        {message.preview}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Message Content */}
                <div className="bg-[color:var(--muted)] rounded-lg p-4">
                  {selectedMessage ? (
                    <div>
                      <div className="border-b border-[color:var(--border)] pb-4 mb-4">
                        <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
                          {selectedMessage.subject}
                        </h3>
                        <div className="flex justify-between items-center mt-2">
                          <div>
                            <p className="text-sm font-medium text-[color:var(--foreground)]">
                              {selectedMessage.from}
                            </p>
                            <p className="text-xs text-[color:var(--muted-foreground)]">
                              {selectedMessage.fromRole}
                            </p>
                          </div>
                          <p className="text-xs text-[color:var(--muted-foreground)]">
                            {selectedMessage.timestamp}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-[color:var(--foreground)] whitespace-pre-line">
                        {selectedMessage.content}
                      </p>
                      <div className="flex gap-2 mt-4">
                        <button className="bg-[color:var(--primary)] text-[color:var(--primary-foreground)] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[color:var(--primary)]/90 transition-colors duration-200">
                          Reply
                        </button>
                        <button className="border border-[color:var(--border)] text-[color:var(--foreground)] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[color:var(--background)] transition-colors duration-200">
                          Forward
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-[color:var(--muted-foreground)] py-8">
                      <p>Select a message to view its content</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-[color:var(--card-foreground)]">
                  Notifications
                </h2>
                <button className="text-[color:var(--primary)] hover:text-[color:var(--primary)]/80 text-sm font-medium">
                  Mark All as Read
                </button>
              </div>

              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg border transition-colors duration-200 ${
                      !notification.read
                        ? "bg-blue-50 border-blue-200"
                        : "border-[color:var(--border)]"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{notification.icon}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-[color:var(--foreground)]">
                            {notification.title}
                          </h3>
                          <p className="text-xs text-[color:var(--muted-foreground)]">
                            {notification.timestamp}
                          </p>
                        </div>
                        <p className="text-sm text-[color:var(--muted-foreground)] mt-1">
                          {notification.message}
                        </p>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Announcements Tab */}
          {activeTab === "announcements" && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-[color:var(--card-foreground)]">
                School Announcements
              </h2>

              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className={`p-6 rounded-lg border-l-4 ${getPriorityColor(
                      announcement.priority
                    )}`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
                          {announcement.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-sm text-[color:var(--muted-foreground)]">
                            {announcement.author}
                          </span>
                          <span className="text-xs bg-[color:var(--muted)] text-[color:var(--muted-foreground)] px-2 py-1 rounded">
                            {announcement.category}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-[color:var(--muted-foreground)]">
                        {announcement.timestamp}
                      </p>
                    </div>
                    <p className="text-[color:var(--foreground)] leading-relaxed">
                      {announcement.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Compose Message Modal */}
      {showCompose && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[color:var(--card)] rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-[color:var(--card-foreground)] mb-4">
              Compose Message
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[color:var(--foreground)] mb-2">
                  To
                </label>
                <select className="w-full px-3 py-2 border border-[color:var(--border)] rounded-lg focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent">
                  <option>Select recipient...</option>
                  <option>Ms. Rodriguez (Mathematics Teacher)</option>
                  <option>Dr. Cruz (Science Department Head)</option>
                  <option>Registrar's Office</option>
                  <option>Principal's Office</option>
                  <option>Guidance Office</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[color:var(--foreground)] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-[color:var(--border)] rounded-lg focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent"
                  placeholder="Enter subject"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[color:var(--foreground)] mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-3 py-2 border border-[color:var(--border)] rounded-lg focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <div className="flex gap-3 pt-4">
                <button className="flex-1 bg-[color:var(--primary)] text-[color:var(--primary-foreground)] py-2 px-4 rounded-lg font-semibold hover:bg-[color:var(--primary)]/90 transition-colors duration-200">
                  Send Message
                </button>
                <button
                  onClick={() => setShowCompose(false)}
                  className="flex-1 border border-[color:var(--border)] text-[color:var(--foreground)] py-2 px-4 rounded-lg font-semibold hover:bg-[color:var(--muted)] transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4">
        <button className="bg-[color:var(--secondary)] text-[color:var(--primary)] px-6 py-3 rounded-lg font-semibold hover:bg-[color:var(--secondary)]/90 transition-colors duration-200">
          SMS Notifications Settings
        </button>
        <button className="border border-[color:var(--border)] text-[color:var(--foreground)] px-6 py-3 rounded-lg font-semibold hover:bg-[color:var(--muted)] transition-colors duration-200">
          Email Preferences
        </button>
        <button className="border border-[color:var(--border)] text-[color:var(--foreground)] px-6 py-3 rounded-lg font-semibold hover:bg-[color:var(--muted)] transition-colors duration-200">
          Download Messages
        </button>
      </div>
    </div>
  );
}
