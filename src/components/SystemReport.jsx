import React, { useState } from "react";
import {
  BarChart3,
  Users,
  Calendar,
  FileText,
  TrendingUp,
  Activity,
  Download,
  Filter,
  Eye,
} from "lucide-react";

export default function SystemReports() {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");
  const [selectedReport, setSelectedReport] = useState("all");

  const reportCards = [
    {
      title: "User Activity",
      value: "2,847",
      change: "+12.3%",
      icon: Users,
      color: "bg-blue-50 text-blue-600",
      trend: "up",
    },
    {
      title: "Appointments",
      value: "156",
      change: "+8.1%",
      icon: Calendar,
      color: "bg-green-50 text-green-600",
      trend: "up",
    },
    {
      title: "Medical Records",
      value: "1,023",
      change: "+5.7%",
      icon: FileText,
      color: "bg-purple-50 text-purple-600",
      trend: "up",
    },
    {
      title: "System Health",
      value: "99.8%",
      change: "+0.2%",
      icon: Activity,
      color: "bg-emerald-50 text-emerald-600",
      trend: "up",
    },
  ];

  const reports = [
    {
      id: 1,
      name: "Monthly User Engagement Report",
      type: "User Analytics",
      date: "2024-12-15",
      status: "Ready",
      size: "2.4 MB",
      format: "PDF",
    },
    {
      id: 2,
      name: "Appointment Trends Analysis",
      type: "Appointments",
      date: "2024-12-14",
      status: "Ready",
      size: "1.8 MB",
      format: "Excel",
    },
    {
      id: 3,
      name: "Medical Inventory Summary",
      type: "Inventory",
      date: "2024-12-13",
      status: "Processing",
      size: "3.1 MB",
      format: "PDF",
    },
    {
      id: 4,
      name: "System Performance Metrics",
      type: "System",
      date: "2024-12-12",
      status: "Ready",
      size: "956 KB",
      format: "CSV",
    },
    {
      id: 5,
      name: "Financial Overview Q4",
      type: "Finance",
      date: "2024-12-11",
      status: "Ready",
      size: "4.2 MB",
      format: "PDF",
    },
    {
      id: 6,
      name: "Patient Visit Analytics",
      type: "Medical",
      date: "2024-12-10",
      status: "Ready",
      size: "2.7 MB",
      format: "Excel",
    },
  ];

  const quickStats = [
    {
      label: "Active Users Today",
      value: "342",
      icon: Users,
      color: "text-blue-600",
    },
    {
      label: "Scheduled Appointments",
      value: "28",
      icon: Calendar,
      color: "text-green-600",
    },
    {
      label: "Records Updated",
      value: "89",
      icon: FileText,
      color: "text-purple-600",
    },
    {
      label: "System Uptime",
      value: "99.9%",
      icon: TrendingUp,
      color: "text-emerald-600",
    },
  ];

  const getStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case "Ready":
        return `${baseClasses} bg-green-100 text-green-700`;
      case "Processing":
        return `${baseClasses} bg-yellow-100 text-yellow-700`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-700`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            System Reports
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Monitor system performance and generate detailed reports
          </p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reportCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {card.title}
                    </p>
                    <p className="text-2xl font-semibold text-gray-900 mt-2">
                      {card.value}
                    </p>
                    <p
                      className={`text-sm mt-1 ${
                        card.trend === "up" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {card.change} from last month
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${card.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Today's Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                >
                  <IconComponent className={`h-5 w-5 ${stat.color}`} />
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reports Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Reports Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Generated Reports
              </h2>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-gray-400" />
                  <select
                    value={selectedReport}
                    onChange={(e) => setSelectedReport(e.target.value)}
                    className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Reports</option>
                    <option value="user">User Analytics</option>
                    <option value="appointments">Appointments</option>
                    <option value="medical">Medical</option>
                    <option value="system">System</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4 text-gray-400" />
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Reports List */}
          <div className="divide-y divide-gray-200">
            {reports.map((report) => (
              <div
                key={report.id}
                className="px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-gray-400" />
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          {report.name}
                        </h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-xs text-gray-500">
                            {report.type}
                          </span>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-500">
                            {report.date}
                          </span>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-500">
                            {report.size}
                          </span>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-500">
                            {report.format}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={getStatusBadge(report.status)}>
                      {report.status}
                    </span>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      {report.status === "Ready" && (
                        <button className="p-2 text-gray-400 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                          <Download className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Generate New Report */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Generate New Report
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Report Type
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>User Analytics</option>
                <option>Appointment Trends</option>
                <option>Medical Records</option>
                <option>System Performance</option>
                <option>Financial Summary</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Period
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
                <option>Last 6 months</option>
                <option>Last year</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Format
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>PDF</option>
                <option>Excel</option>
                <option>CSV</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
