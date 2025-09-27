import React, { useState } from "react";
import {
  FileText,
  Download,
  Eye,
  Plus,
  Search,
  Filter,
  Calendar,
  Clock,
  User,
  Users,
  Activity,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Heart,
  Pill,
  Stethoscope,
  Thermometer,
  BarChart3,
  PieChart,
  LineChart,
  Share,
  Printer,
  RefreshCw,
  Star,
  BookOpen,
} from "lucide-react";

export default function NurseMedicalReports() {
  const [selectedReport, setSelectedReport] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterPeriod, setFilterPeriod] = useState("all");
  const [showNewReport, setShowNewReport] = useState(false);

  const reportCategories = [
    { id: "health", name: "Health Assessments", icon: Heart, count: 24 },
    {
      id: "incidents",
      name: "Incident Reports",
      icon: AlertTriangle,
      count: 8,
    },
    { id: "medication", name: "Medication Logs", icon: Pill, count: 45 },
    {
      id: "vaccination",
      name: "Vaccination Records",
      icon: Stethoscope,
      count: 18,
    },
    { id: "screening", name: "Health Screenings", icon: Activity, count: 32 },
    { id: "summary", name: "Summary Reports", icon: BarChart3, count: 12 },
  ];

  const reports = [
    {
      id: 1,
      title: "Monthly Health Summary - December 2024",
      type: "summary",
      category: "Health Summary",
      date: "2024-12-15",
      author: "Dr. Sarah Johnson",
      status: "Completed",
      priority: "routine",
      description: "Comprehensive health overview for all students",
      students: 247,
      pages: 15,
      format: "PDF",
      size: "2.4 MB",
      tags: ["monthly", "comprehensive", "all-students"],
      lastModified: "2024-12-15 14:30",
      visits: 89,
      conditions: ["Asthma", "Allergies", "Diabetes", "ADHD"],
    },
    {
      id: 2,
      title: "Incident Report - Sports Injury Analysis",
      type: "incidents",
      category: "Incident Report",
      date: "2024-12-14",
      author: "Dr. Sarah Johnson",
      status: "Under Review",
      priority: "high",
      description: "Analysis of sports-related injuries in Q4",
      students: 12,
      pages: 8,
      format: "PDF",
      size: "1.8 MB",
      tags: ["sports", "injuries", "analysis", "Q4"],
      lastModified: "2024-12-14 16:45",
      visits: 23,
      conditions: ["Fractures", "Sprains", "Contusions"],
    },
    {
      id: 3,
      title: "Medication Administration Log - Week 50",
      type: "medication",
      category: "Medication Log",
      date: "2024-12-13",
      author: "Dr. Sarah Johnson",
      status: "Completed",
      priority: "high",
      description: "Weekly medication administration tracking",
      students: 15,
      pages: 6,
      format: "Excel",
      size: "945 KB",
      tags: ["medication", "weekly", "administration"],
      lastModified: "2024-12-13 17:20",
      visits: 67,
      conditions: ["ADHD", "Diabetes", "Asthma"],
    },
    {
      id: 4,
      title: "Vaccination Compliance Report - Fall 2024",
      type: "vaccination",
      category: "Vaccination Record",
      date: "2024-12-12",
      author: "Dr. Sarah Johnson",
      status: "Completed",
      priority: "medium",
      description: "Fall semester vaccination compliance tracking",
      students: 234,
      pages: 12,
      format: "PDF",
      size: "3.2 MB",
      tags: ["vaccination", "compliance", "fall-2024"],
      lastModified: "2024-12-12 13:15",
      visits: 156,
      conditions: [],
    },
    {
      id: 5,
      title: "Health Screening Results - Grade 6-8",
      type: "screening",
      category: "Health Screening",
      date: "2024-12-11",
      author: "Dr. Sarah Johnson",
      status: "Completed",
      priority: "routine",
      description: "Annual health screening results for middle school",
      students: 95,
      pages: 18,
      format: "PDF",
      size: "4.1 MB",
      tags: ["screening", "annual", "middle-school"],
      lastModified: "2024-12-11 11:30",
      visits: 95,
      conditions: ["Vision", "Hearing", "BMI", "Blood Pressure"],
    },
    {
      id: 6,
      title: "Chronic Conditions Management Report",
      type: "health",
      category: "Health Assessment",
      date: "2024-12-10",
      author: "Dr. Sarah Johnson",
      status: "Draft",
      priority: "medium",
      description: "Overview of students with chronic health conditions",
      students: 28,
      pages: 10,
      format: "Word",
      size: "1.6 MB",
      tags: ["chronic", "conditions", "management"],
      lastModified: "2024-12-10 15:45",
      visits: 84,
      conditions: ["Diabetes", "Asthma", "Epilepsy", "Food Allergies"],
    },
  ];

  const quickStats = [
    {
      title: "Total Reports",
      value: "47",
      change: "+5 this month",
      icon: FileText,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Students Covered",
      value: "247",
      change: "All active students",
      icon: Users,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Pending Reviews",
      value: "3",
      change: "2 high priority",
      icon: Clock,
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      title: "This Month",
      value: "12",
      change: "+3 from last month",
      icon: TrendingUp,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "created",
      title: "Monthly Health Summary completed",
      time: "2 hours ago",
      user: "Dr. Sarah Johnson",
    },
    {
      id: 2,
      type: "updated",
      title: "Sports Injury Analysis updated",
      time: "5 hours ago",
      user: "Dr. Sarah Johnson",
    },
    {
      id: 3,
      type: "shared",
      title: "Medication Log shared with admin",
      time: "1 day ago",
      user: "Dr. Sarah Johnson",
    },
    {
      id: 4,
      type: "generated",
      title: "Vaccination Report generated",
      time: "2 days ago",
      user: "System",
    },
  ];

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesType = filterType === "all" || report.type === filterType;

    let matchesPeriod = true;
    if (filterPeriod !== "all") {
      const reportDate = new Date(report.date);
      const now = new Date();
      const daysDiff = Math.floor((now - reportDate) / (1000 * 60 * 60 * 24));

      switch (filterPeriod) {
        case "today":
          matchesPeriod = daysDiff === 0;
          break;
        case "week":
          matchesPeriod = daysDiff <= 7;
          break;
        case "month":
          matchesPeriod = daysDiff <= 30;
          break;
      }
    }

    return matchesSearch && matchesType && matchesPeriod;
  });

  const getStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case "Completed":
        return `${baseClasses} bg-green-100 text-green-700`;
      case "Under Review":
        return `${baseClasses} bg-yellow-100 text-yellow-700`;
      case "Draft":
        return `${baseClasses} bg-blue-100 text-blue-700`;
      case "Archived":
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

  const getCategoryIcon = (type) => {
    const category = reportCategories.find((cat) => cat.id === type);
    if (category) {
      const IconComponent = category.icon;
      return <IconComponent className="h-4 w-4" />;
    }
    return <FileText className="h-4 w-4" />;
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case "created":
        return <Plus className="h-4 w-4 text-green-600" />;
      case "updated":
        return <RefreshCw className="h-4 w-4 text-blue-600" />;
      case "shared":
        return <Share className="h-4 w-4 text-purple-600" />;
      case "generated":
        return <FileText className="h-4 w-4 text-orange-600" />;
      default:
        return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Medical Reports
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Generate and manage health documentation
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowNewReport(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>New Report</span>
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors font-medium flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Export All</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => {
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

        {/* Report Categories */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Report Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {reportCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setFilterType(category.id)}
                  className={`p-4 rounded-lg border transition-colors text-left ${
                    filterType === category.id
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <IconComponent className="h-5 w-5" />
                    <span className="font-medium text-sm">{category.name}</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    {category.count} reports
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search reports by title, description, or tags..."
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
                  value={filterPeriod}
                  onChange={(e) => setFilterPeriod(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                </select>
              </div>
              <button
                onClick={() => {
                  setFilterType("all");
                  setSearchTerm("");
                  setFilterPeriod("all");
                }}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Reports List */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Reports ({filteredReports.length})
              </h2>
            </div>
            <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
              {filteredReports.map((report) => (
                <div
                  key={report.id}
                  className={`px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer ${getPriorityIndicator(
                    report.priority
                  )} ${selectedReport?.id === report.id ? "bg-blue-50" : ""}`}
                  onClick={() => setSelectedReport(report)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="flex-shrink-0 mt-1">
                        {getCategoryIcon(report.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 mb-1">
                          {report.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {report.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {report.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>{report.students} students</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FileText className="h-3 w-3" />
                            <span>{report.pages} pages</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{formatDate(report.date)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className={getStatusBadge(report.status)}>
                        {report.status}
                      </span>
                      <div className="flex space-x-1">
                        <button className="p-1 text-gray-400 hover:text-blue-600 rounded">
                          <Eye className="h-3 w-3" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-green-600 rounded">
                          <Download className="h-3 w-3" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-purple-600 rounded">
                          <Share className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Report Details or Recent Activity */}
          <div className="space-y-6">
            {selectedReport ? (
              /* Selected Report Details */
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Report Details
                    </h2>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-600 rounded-md hover:bg-green-50 transition-colors">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-purple-600 rounded-md hover:bg-purple-50 transition-colors">
                        <Share className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {/* Basic Info */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      {selectedReport.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {selectedReport.description}
                    </p>
                    <span className={getStatusBadge(selectedReport.status)}>
                      {selectedReport.status}
                    </span>
                  </div>

                  {/* Report Stats */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-3">
                      Statistics
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-lg font-semibold text-gray-900">
                          {selectedReport.students}
                        </p>
                        <p className="text-xs text-gray-500">Students</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-lg font-semibold text-gray-900">
                          {selectedReport.visits}
                        </p>
                        <p className="text-xs text-gray-500">Visits</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-lg font-semibold text-gray-900">
                          {selectedReport.pages}
                        </p>
                        <p className="text-xs text-gray-500">Pages</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-lg font-semibold text-gray-900">
                          {selectedReport.size}
                        </p>
                        <p className="text-xs text-gray-500">File Size</p>
                      </div>
                    </div>
                  </div>

                  {/* File Info */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      File Information
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Format:</span>
                        <span className="text-gray-900">
                          {selectedReport.format}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Created:</span>
                        <span className="text-gray-900">
                          {formatDate(selectedReport.date)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Modified:</span>
                        <span className="text-gray-900">
                          {selectedReport.lastModified}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Author:</span>
                        <span className="text-gray-900">
                          {selectedReport.author}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Conditions Covered */}
                  {selectedReport.conditions.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        Conditions Covered
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedReport.conditions.map((condition, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                          >
                            {condition}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      Tags
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedReport.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                        View Report
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Recent Activity */
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Recent Activity
                  </h2>
                </div>
                <div className="p-4 space-y-4">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      {getActivityIcon(activity.type)}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">
                          {activity.title}
                        </p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-gray-500">
                            {activity.time}
                          </p>
                          <p className="text-xs text-gray-500">
                            {activity.user}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
