import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Activity,
  AlertTriangle,
  CheckCircle,
  Heart,
  Thermometer,
  Pill,
  FileText,
  Phone,
  MapPin,
  User,
  Stethoscope,
  TrendingUp,
  Bell,
} from "lucide-react";

export default function NurseDashboard() {
  const [selectedDate, setSelectedDate] = useState("2024-12-15");

  const todayStats = [
    {
      title: "Total Appointments",
      value: "12",
      change: "+3 from yesterday",
      icon: Calendar,
      color: "bg-blue-50 text-blue-600",
      trend: "up",
    },
    {
      title: "Students Seen",
      value: "8",
      change: "+2 from yesterday",
      icon: Users,
      color: "bg-green-50 text-green-600",
      trend: "up",
    },
    {
      title: "Emergency Cases",
      value: "2",
      change: "Same as yesterday",
      icon: AlertTriangle,
      color: "bg-red-50 text-red-600",
      trend: "stable",
    },
    {
      title: "Medications Given",
      value: "15",
      change: "+5 from yesterday",
      icon: Pill,
      color: "bg-purple-50 text-purple-600",
      trend: "up",
    },
  ];

  const todaySchedule = [
    {
      id: 1,
      time: "9:00 AM",
      student: "Emma Wilson",
      grade: "Grade 8",
      type: "Check-up",
      reason: "Annual health examination",
      status: "Scheduled",
      priority: "routine",
    },
    {
      id: 2,
      time: "9:30 AM",
      student: "Marcus Chen",
      grade: "Grade 10",
      type: "Follow-up",
      reason: "Asthma monitoring",
      status: "In Progress",
      priority: "medium",
    },
    {
      id: 3,
      time: "10:15 AM",
      student: "Sofia Rodriguez",
      grade: "Grade 6",
      type: "Medication",
      reason: "Daily medication administration",
      status: "Scheduled",
      priority: "high",
    },
    {
      id: 4,
      time: "11:00 AM",
      student: "James Thompson",
      grade: "Grade 12",
      type: "Injury",
      reason: "Sports injury assessment",
      status: "Scheduled",
      priority: "medium",
    },
    {
      id: 5,
      time: "1:30 PM",
      student: "Lily Park",
      grade: "Grade 9",
      type: "Check-up",
      reason: "Health screening",
      status: "Scheduled",
      priority: "routine",
    },
  ];

  const recentVisits = [
    {
      student: "Alex Johnson",
      grade: "Grade 11",
      time: "2:45 PM",
      date: "2024-12-14",
      reason: "Headache",
      treatment: "Rest and hydration",
      status: "Resolved",
    },
    {
      student: "Maya Patel",
      grade: "Grade 7",
      time: "1:20 PM",
      date: "2024-12-14",
      reason: "Minor cut",
      treatment: "Cleaned and bandaged",
      status: "Resolved",
    },
    {
      student: "David Kim",
      grade: "Grade 9",
      time: "11:30 AM",
      date: "2024-12-14",
      reason: "Stomach ache",
      treatment: "Observation",
      status: "Follow-up needed",
    },
  ];

  const alerts = [
    {
      type: "medication",
      message: "Sofia Rodriguez - Daily medication due at 10:15 AM",
      time: "5 minutes",
      priority: "high",
    },
    {
      type: "appointment",
      message: "Marcus Chen check-in for asthma follow-up",
      time: "15 minutes",
      priority: "medium",
    },
    {
      type: "supply",
      message: "Low inventory: Bandages (3 remaining)",
      time: "1 hour ago",
      priority: "medium",
    },
  ];

  const healthMetrics = [
    {
      label: "Average Wait Time",
      value: "8 min",
      icon: Clock,
      color: "text-blue-600",
    },
    {
      label: "Student Satisfaction",
      value: "4.8/5",
      icon: Heart,
      color: "text-pink-600",
    },
    {
      label: "Cases Resolved",
      value: "95%",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      label: "Follow-ups Needed",
      value: "3",
      icon: Activity,
      color: "text-orange-600",
    },
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
      case "Resolved":
        return `${baseClasses} bg-green-100 text-green-700`;
      case "Follow-up needed":
        return `${baseClasses} bg-orange-100 text-orange-700`;
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

  const getAlertIcon = (type) => {
    switch (type) {
      case "medication":
        return <Pill className="h-4 w-4 text-purple-600" />;
      case "appointment":
        return <Calendar className="h-4 w-4 text-blue-600" />;
      case "supply":
        return <AlertTriangle className="h-4 w-4 text-orange-600" />;
      default:
        return <Bell className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Medical Dashboard
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Today, December 15, 2024
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium">
                New Visit
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors font-medium">
                Emergency Protocol
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {todayStats.map((stat, index) => {
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
                    <p className="text-sm mt-1 text-gray-500">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Today's Schedule
              </h2>
            </div>
            <div className="divide-y divide-gray-200">
              {todaySchedule.map((appointment) => (
                <div
                  key={appointment.id}
                  className={`px-6 py-4 ${getPriorityIndicator(
                    appointment.priority
                  )}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="h-4 w-4 text-blue-600" />
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center space-x-2">
                            <p className="text-sm font-medium text-gray-900">
                              {appointment.student}
                            </p>
                            <span className="text-xs text-gray-500">•</span>
                            <p className="text-xs text-gray-500">
                              {appointment.grade}
                            </p>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {appointment.reason}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          {appointment.time}
                        </p>
                        <p className="text-xs text-gray-500">
                          {appointment.type}
                        </p>
                      </div>
                      <span className={getStatusBadge(appointment.status)}>
                        {appointment.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alerts & Quick Stats */}
          <div className="space-y-6">
            {/* Alerts */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Alerts</h2>
              </div>
              <div className="p-4 space-y-3">
                {alerts.map((alert, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    {getAlertIcon(alert.type)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{alert.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Health Metrics */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Quick Metrics
                </h2>
              </div>
              <div className="p-4 space-y-4">
                {healthMetrics.map((metric, index) => {
                  const IconComponent = metric.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <IconComponent className={`h-5 w-5 ${metric.color}`} />
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">{metric.label}</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {metric.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Visits */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Visits
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            {recentVisits.map((visit, index) => (
              <div
                key={index}
                className="px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Stethoscope className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium text-gray-900">
                          {visit.student}
                        </p>
                        <span className="text-xs text-gray-500">•</span>
                        <p className="text-xs text-gray-500">{visit.grade}</p>
                      </div>
                      <p className="text-sm text-gray-600">
                        {visit.reason} - {visit.treatment}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-900">{visit.time}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <p className="text-xs text-gray-500">{visit.date}</p>
                      <span className={getStatusBadge(visit.status)}>
                        {visit.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
