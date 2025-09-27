import React, { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  FileText,
  User,
  Calendar,
  Activity,
  Heart,
  AlertTriangle,
  CheckCircle,
  Eye,
  Edit,
  Download,
  Pill,
  Stethoscope,
  Thermometer,
  Scale,
  Ruler,
  Clock,
  Phone,
  MapPin,
  Users,
} from "lucide-react";

export default function NurseHealthRecords() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [selectedRecord, setSelectedRecord] = useState(null);

  const healthRecords = [
    {
      id: 1,
      studentId: "STU-2024-001",
      name: "Emma Wilson",
      grade: "Grade 8",
      age: 13,
      lastVisit: "2024-12-14",
      conditions: ["Asthma", "Allergies"],
      medications: ["Inhaler - Albuterol"],
      vaccinations: "Up to date",
      emergencyContact: "Sarah Wilson - (555) 123-4567",
      bloodType: "O+",
      status: "Active",
      alerts: ["Peanut allergy", "Requires inhaler"],
      vitals: {
        height: "5'2\"",
        weight: "105 lbs",
        bmi: "19.2",
        lastUpdated: "2024-12-14",
      },
    },
    {
      id: 2,
      studentId: "STU-2024-002",
      name: "Marcus Chen",
      grade: "Grade 10",
      age: 15,
      lastVisit: "2024-12-15",
      conditions: ["Diabetes Type 1"],
      medications: ["Insulin", "Glucose tablets"],
      vaccinations: "Up to date",
      emergencyContact: "Linda Chen - (555) 234-5678",
      bloodType: "A-",
      status: "Monitoring",
      alerts: ["Diabetic", "Check glucose levels"],
      vitals: {
        height: "5'8\"",
        weight: "140 lbs",
        bmi: "21.3",
        lastUpdated: "2024-12-15",
      },
    },
    {
      id: 3,
      studentId: "STU-2024-003",
      name: "Sofia Rodriguez",
      grade: "Grade 6",
      age: 11,
      lastVisit: "2024-12-13",
      conditions: ["ADHD"],
      medications: ["Methylphenidate 10mg"],
      vaccinations: "Up to date",
      emergencyContact: "Maria Rodriguez - (555) 345-6789",
      bloodType: "B+",
      status: "Active",
      alerts: ["Daily medication required"],
      vitals: {
        height: "4'10\"",
        weight: "85 lbs",
        bmi: "18.1",
        lastUpdated: "2024-12-13",
      },
    },
    {
      id: 4,
      studentId: "STU-2024-004",
      name: "James Thompson",
      grade: "Grade 12",
      age: 17,
      lastVisit: "2024-12-12",
      conditions: [],
      medications: [],
      vaccinations: "Up to date",
      emergencyContact: "Robert Thompson - (555) 456-7890",
      bloodType: "AB+",
      status: "Active",
      alerts: [],
      vitals: {
        height: "6'1\"",
        weight: "165 lbs",
        bmi: "21.8",
        lastUpdated: "2024-12-12",
      },
    },
    {
      id: 5,
      studentId: "STU-2024-005",
      name: "Lily Park",
      grade: "Grade 9",
      age: 14,
      lastVisit: "2024-12-11",
      conditions: ["Migraines"],
      medications: ["Ibuprofen as needed"],
      vaccinations: "Missing HPV vaccine",
      emergencyContact: "Jessica Park - (555) 567-8901",
      bloodType: "O-",
      status: "Follow-up needed",
      alerts: ["Vaccination needed"],
      vitals: {
        height: "5'4\"",
        weight: "115 lbs",
        bmi: "19.7",
        lastUpdated: "2024-12-11",
      },
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "visit",
      student: "Marcus Chen",
      action: "Blood glucose check",
      timestamp: "2024-12-15 10:30 AM",
      result: "Normal range",
    },
    {
      id: 2,
      type: "medication",
      student: "Sofia Rodriguez",
      action: "Daily medication administered",
      timestamp: "2024-12-15 9:15 AM",
      result: "Completed",
    },
    {
      id: 3,
      type: "update",
      student: "Emma Wilson",
      action: "Health record updated",
      timestamp: "2024-12-14 2:45 PM",
      result: "Allergies section modified",
    },
  ];

  const filteredRecords = healthRecords.filter((record) => {
    const matchesSearch =
      record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" ||
      (selectedFilter === "active" && record.status === "Active") ||
      (selectedFilter === "monitoring" && record.status === "Monitoring") ||
      (selectedFilter === "followup" && record.status === "Follow-up needed");
    const matchesGrade =
      selectedGrade === "all" || record.grade === selectedGrade;

    return matchesSearch && matchesFilter && matchesGrade;
  });

  const getStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case "Active":
        return `${baseClasses} bg-green-100 text-green-700`;
      case "Monitoring":
        return `${baseClasses} bg-yellow-100 text-yellow-700`;
      case "Follow-up needed":
        return `${baseClasses} bg-red-100 text-red-700`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-700`;
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case "visit":
        return <Stethoscope className="h-4 w-4 text-blue-600" />;
      case "medication":
        return <Pill className="h-4 w-4 text-purple-600" />;
      case "update":
        return <Edit className="h-4 w-4 text-green-600" />;
      default:
        return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

  const getBMICategory = (bmi) => {
    const bmiValue = parseFloat(bmi);
    if (bmiValue < 18.5)
      return { category: "Underweight", color: "text-blue-600" };
    if (bmiValue < 25) return { category: "Normal", color: "text-green-600" };
    if (bmiValue < 30)
      return { category: "Overweight", color: "text-yellow-600" };
    return { category: "Obese", color: "text-red-600" };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Health Records
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Manage and view student health information
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>New Record</span>
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors font-medium flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
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
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="monitoring">Monitoring</option>
                  <option value="followup">Follow-up Needed</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-gray-400" />
                <select
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Grades</option>
                  <option value="Grade 6">Grade 6</option>
                  <option value="Grade 7">Grade 7</option>
                  <option value="Grade 8">Grade 8</option>
                  <option value="Grade 9">Grade 9</option>
                  <option value="Grade 10">Grade 10</option>
                  <option value="Grade 11">Grade 11</option>
                  <option value="Grade 12">Grade 12</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Health Records List */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Student Records ({filteredRecords.length})
              </h2>
            </div>
            <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
              {filteredRecords.map((record) => (
                <div
                  key={record.id}
                  className={`px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                    selectedRecord?.id === record.id
                      ? "bg-blue-50 border-r-4 border-blue-500"
                      : ""
                  }`}
                  onClick={() => setSelectedRecord(record)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <p className="text-sm font-medium text-gray-900">
                            {record.name}
                          </p>
                          <span className="text-xs text-gray-500">•</span>
                          <p className="text-xs text-gray-500">
                            {record.grade}
                          </p>
                          <span className="text-xs text-gray-500">•</span>
                          <p className="text-xs text-gray-500">
                            Age {record.age}
                          </p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {record.studentId}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          {record.alerts.length > 0 && (
                            <div className="flex items-center space-x-1">
                              <AlertTriangle className="h-3 w-3 text-red-500" />
                              <span className="text-xs text-red-600">
                                {record.alerts.length} alert(s)
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={getStatusBadge(record.status)}>
                        {record.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-2">
                        Last visit: {record.lastVisit}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Record Details / Recent Activity */}
          <div className="space-y-6">
            {selectedRecord ? (
              /* Selected Record Details */
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Record Details
                    </h2>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-600 rounded-md hover:bg-green-50 transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  {/* Basic Info */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">
                      Basic Information
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-900">
                          {selectedRecord.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span className="text-sm text-gray-900">
                          Blood Type: {selectedRecord.bloodType}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-900">
                          {selectedRecord.emergencyContact}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Vitals */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">
                      Current Vitals
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <Ruler className="h-4 w-4 text-blue-500" />
                        <div>
                          <p className="text-xs text-gray-500">Height</p>
                          <p className="text-sm font-medium text-gray-900">
                            {selectedRecord.vitals.height}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Scale className="h-4 w-4 text-purple-500" />
                        <div>
                          <p className="text-xs text-gray-500">Weight</p>
                          <p className="text-sm font-medium text-gray-900">
                            {selectedRecord.vitals.weight}
                          </p>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="flex items-center space-x-2">
                          <Activity className="h-4 w-4 text-green-500" />
                          <div>
                            <p className="text-xs text-gray-500">BMI</p>
                            <div className="flex items-center space-x-2">
                              <p className="text-sm font-medium text-gray-900">
                                {selectedRecord.vitals.bmi}
                              </p>
                              <span
                                className={`text-xs ${
                                  getBMICategory(selectedRecord.vitals.bmi)
                                    .color
                                }`}
                              >
                                (
                                {
                                  getBMICategory(selectedRecord.vitals.bmi)
                                    .category
                                }
                                )
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Last updated: {selectedRecord.vitals.lastUpdated}
                    </p>
                  </div>

                  {/* Medical Info */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">
                      Medical Information
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-gray-500">Conditions</p>
                        <p className="text-sm text-gray-900">
                          {selectedRecord.conditions.length > 0
                            ? selectedRecord.conditions.join(", ")
                            : "None"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">
                          Current Medications
                        </p>
                        <p className="text-sm text-gray-900">
                          {selectedRecord.medications.length > 0
                            ? selectedRecord.medications.join(", ")
                            : "None"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">
                          Vaccination Status
                        </p>
                        <div className="flex items-center space-x-2">
                          {selectedRecord.vaccinations === "Up to date" ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <AlertTriangle className="h-4 w-4 text-yellow-500" />
                          )}
                          <span className="text-sm text-gray-900">
                            {selectedRecord.vaccinations}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Alerts */}
                  {selectedRecord.alerts.length > 0 && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-3">
                        Active Alerts
                      </h3>
                      <div className="space-y-2">
                        {selectedRecord.alerts.map((alert, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2 p-2 bg-red-50 rounded-md"
                          >
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                            <span className="text-sm text-red-700">
                              {alert}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
                        <p className="text-sm font-medium text-gray-900">
                          {activity.student}
                        </p>
                        <p className="text-sm text-gray-600">
                          {activity.action}
                        </p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-gray-500">
                            {activity.timestamp}
                          </p>
                          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                            {activity.result}
                          </span>
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
