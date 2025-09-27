import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Plus,
  Search,
  Filter,
  User,
  Phone,
  MapPin,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Edit,
  Trash2,
  Eye,
  Users,
  Activity,
  Stethoscope,
  Pill,
  Heart,
  Thermometer,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
} from "lucide-react";

export default function NurseAppointments() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewType, setViewType] = useState("day"); // day, week, month
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showNewAppointment, setShowNewAppointment] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const appointments = [
    {
      id: 1,
      studentId: "STU-2024-001",
      studentName: "Emma Wilson",
      grade: "Grade 8",
      date: "2024-12-15",
      time: "09:00",
      duration: 30,
      type: "Check-up",
      reason: "Annual health examination",
      status: "Scheduled",
      priority: "routine",
      location: "Medical Office A",
      notes: "Regular annual check-up, no specific concerns",
      emergencyContact: "Sarah Wilson - (555) 123-4567",
      conditions: ["Asthma", "Allergies"],
      lastVisit: "2024-06-15",
    },
    {
      id: 2,
      studentId: "STU-2024-002",
      studentName: "Marcus Chen",
      grade: "Grade 10",
      date: "2024-12-15",
      time: "09:30",
      duration: 20,
      type: "Follow-up",
      reason: "Diabetes monitoring",
      status: "In Progress",
      priority: "high",
      location: "Medical Office A",
      notes: "Check blood glucose levels, review insulin management",
      emergencyContact: "Linda Chen - (555) 234-5678",
      conditions: ["Diabetes Type 1"],
      lastVisit: "2024-12-01",
    },
    {
      id: 3,
      studentId: "STU-2024-003",
      studentName: "Sofia Rodriguez",
      grade: "Grade 6",
      date: "2024-12-15",
      time: "10:15",
      duration: 15,
      type: "Medication",
      reason: "Daily medication administration",
      status: "Scheduled",
      priority: "high",
      location: "Medical Office A",
      notes: "ADHD medication - Methylphenidate 10mg",
      emergencyContact: "Maria Rodriguez - (555) 345-6789",
      conditions: ["ADHD"],
      lastVisit: "2024-12-13",
    },
    {
      id: 4,
      studentId: "STU-2024-004",
      studentName: "James Thompson",
      grade: "Grade 12",
      date: "2024-12-15",
      time: "11:00",
      duration: 25,
      type: "Injury Assessment",
      reason: "Sports injury evaluation",
      status: "Scheduled",
      priority: "medium",
      location: "Medical Office B",
      notes:
        "Knee injury from basketball practice, assess for further treatment",
      emergencyContact: "Robert Thompson - (555) 456-7890",
      conditions: [],
      lastVisit: "2024-10-20",
    },
    {
      id: 5,
      studentId: "STU-2024-005",
      studentName: "Lily Park",
      grade: "Grade 9",
      date: "2024-12-15",
      time: "13:30",
      duration: 20,
      type: "Consultation",
      reason: "Migraine discussion",
      status: "Scheduled",
      priority: "medium",
      location: "Medical Office A",
      notes: "Discuss frequency of migraines, potential triggers",
      emergencyContact: "Jessica Park - (555) 567-8901",
      conditions: ["Migraines"],
      lastVisit: "2024-12-11",
    },
    {
      id: 6,
      studentId: "STU-2024-006",
      studentName: "Alex Johnson",
      grade: "Grade 11",
      date: "2024-12-14",
      time: "14:45",
      duration: 30,
      type: "Check-up",
      reason: "Post-illness follow-up",
      status: "Completed",
      priority: "routine",
      location: "Medical Office A",
      notes: "Follow-up after flu recovery, cleared for activities",
      emergencyContact: "Michelle Johnson - (555) 678-9012",
      conditions: [],
      lastVisit: "2024-12-14",
    },
  ];

  const appointmentStats = [
    {
      title: "Today's Appointments",
      value: "5",
      icon: Calendar,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "In Progress",
      value: "1",
      icon: Clock,
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      title: "Completed Today",
      value: "3",
      icon: CheckCircle,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "High Priority",
      value: "2",
      icon: AlertTriangle,
      color: "bg-red-50 text-red-600",
    },
  ];

  const timeSlots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ];

  const getStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case "Scheduled":
        return `${baseClasses} bg-blue-100 text-blue-700`;
      case "In Progress":
        return `${baseClasses} bg-yellow-100 text-yellow-700`;
      case "Completed":
        return `${baseClasses} bg-green-100 text-green-700`;
      case "Cancelled":
        return `${baseClasses} bg-red-100 text-red-700`;
      case "No Show":
        return `${baseClasses} bg-gray-100 text-gray-700`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-700`;
    }
  };

  const getPriorityIndicator = (priority) => {
    switch (priority) {
      case "high":
        return "border-l-4 border-red-500";
      case "medium":
        return "border-l-4 border-yellow-500";
      case "routine":
        return "border-l-4 border-green-500";
      default:
        return "border-l-4 border-gray-300";
    }
  };

  const getAppointmentTypeIcon = (type) => {
    switch (type) {
      case "Check-up":
        return <Stethoscope className="h-4 w-4 text-blue-600" />;
      case "Follow-up":
        return <Activity className="h-4 w-4 text-green-600" />;
      case "Medication":
        return <Pill className="h-4 w-4 text-purple-600" />;
      case "Injury Assessment":
        return <Heart className="h-4 w-4 text-red-600" />;
      case "Consultation":
        return <User className="h-4 w-4 text-orange-600" />;
      default:
        return <Calendar className="h-4 w-4 text-gray-600" />;
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (time) => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const todayAppointments = appointments.filter(
    (apt) => apt.date === "2024-12-15"
  );
  const filteredAppointments = todayAppointments.filter((apt) => {
    const matchesSearch =
      apt.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || apt.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Appointments
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                {formatDate("2024-12-15")}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowNewAppointment(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>New Appointment</span>
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors font-medium flex items-center space-x-2">
                <RefreshCw className="h-4 w-4" />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {appointmentStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-semibold text-gray-900 mt-2">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by student name or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-400" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
              <div className="flex items-center space-x-1 bg-gray-100 rounded-md p-1">
                <button
                  onClick={() => setViewType("day")}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    viewType === "day"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Day
                </button>
                <button
                  onClick={() => setViewType("week")}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    viewType === "week"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Week
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Appointments List */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  Today's Schedule ({filteredAppointments.length})
                </h2>
                <div className="flex items-center space-x-2">
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="text-sm text-gray-600">Dec 15, 2024</span>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
              {filteredAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className={`px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer ${getPriorityIndicator(
                    appointment.priority
                  )} ${
                    selectedAppointment?.id === appointment.id
                      ? "bg-blue-50"
                      : ""
                  }`}
                  onClick={() => setSelectedAppointment(appointment)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {getAppointmentTypeIcon(appointment.type)}
                      <div>
                        <div className="flex items-center space-x-2">
                          <p className="text-sm font-medium text-gray-900">
                            {appointment.studentName}
                          </p>
                          <span className="text-xs text-gray-500">•</span>
                          <p className="text-xs text-gray-500">
                            {appointment.grade}
                          </p>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {appointment.reason}
                        </p>
                        <div className="flex items-center space-x-4 mt-1">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-500">
                              {formatTime(appointment.time)}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-500">
                              {appointment.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={getStatusBadge(appointment.status)}>
                        {appointment.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-2">
                        {appointment.duration} min
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Appointment Details or Time Slots */}
          <div className="space-y-6">
            {selectedAppointment ? (
              /* Selected Appointment Details */
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Appointment Details
                    </h2>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-600 rounded-md hover:bg-green-50 transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 rounded-md hover:bg-red-50 transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {/* Student Info */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Student Information
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-900">
                          {selectedAppointment.studentName}
                        </span>
                        <span className="text-xs text-gray-500">
                          ({selectedAppointment.grade})
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-900">
                          {selectedAppointment.emergencyContact}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Appointment Details
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-900">
                          {formatTime(selectedAppointment.time)}
                        </span>
                        <span className="text-xs text-gray-500">
                          ({selectedAppointment.duration} minutes)
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-900">
                          {selectedAppointment.location}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getAppointmentTypeIcon(selectedAppointment.type)}
                        <span className="text-sm text-gray-900">
                          {selectedAppointment.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Medical Info */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Medical Information
                    </h3>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs text-gray-500">
                          Reason for visit:
                        </p>
                        <p className="text-sm text-gray-900">
                          {selectedAppointment.reason}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">
                          Known conditions:
                        </p>
                        <p className="text-sm text-gray-900">
                          {selectedAppointment.conditions.length > 0
                            ? selectedAppointment.conditions.join(", ")
                            : "None reported"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Last visit:</p>
                        <p className="text-sm text-gray-900">
                          {selectedAppointment.lastVisit}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Notes
                    </h3>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
                      {selectedAppointment.notes}
                    </p>
                  </div>

                  {/* Quick Actions */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition-colors text-sm font-medium">
                        Start Visit
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium">
                        Reschedule
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Available Time Slots */
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Available Time Slots
                  </h2>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => {
                      const isBooked = todayAppointments.some(
                        (apt) => apt.time === time
                      );
                      return (
                        <button
                          key={time}
                          className={`p-2 text-sm rounded-md border transition-colors ${
                            isBooked
                              ? "bg-red-50 border-red-200 text-red-600 cursor-not-allowed"
                              : "bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                          }`}
                          disabled={isBooked}
                        >
                          {formatTime(time)}
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-green-100 border border-green-200 rounded"></div>
                        <span>Available</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-red-100 border border-red-200 rounded"></div>
                        <span>Booked</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
