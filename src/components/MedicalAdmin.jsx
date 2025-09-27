import { useState } from "react";
import {
  Heart,
  Calendar,
  Users,
  FileText,
  Pill,
  Thermometer,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  Search,
  Filter,
  Plus,
  Edit,
  Eye,
  Download,
  Upload,
  Phone,
  Mail,
  MapPin,
  Stethoscope,
  Clipboard,
  TrendingUp,
  Package,
  Bell,
  UserCheck,
  Calendar as CalendarIcon,
} from "lucide-react";

export default function MedicalAdminManagement() {
  // State management
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showAddPatientModal, setShowAddPatientModal] = useState(false);
  const [showAddAppointmentModal, setShowAddAppointmentModal] = useState(false);
  const [showMedicalRecordModal, setShowMedicalRecordModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Sample medical data
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "John Smith",
      studentId: "STU-2024-001",
      age: 20,
      gender: "Male",
      bloodType: "O+",
      contactNumber: "+63 912 345 6789",
      email: "john.smith@notreschrist.edu",
      emergencyContact: "Jane Smith - +63 912 345 6790",
      allergies: ["Peanuts", "Dust"],
      medications: ["Antihistamine"],
      lastVisit: "2024-12-10",
      status: "active",
      medicalHistory: "No major medical issues",
      department: "Computer Science",
    },
    {
      id: 2,
      name: "Emily Chen",
      studentId: "STU-2024-002",
      age: 19,
      gender: "Female",
      bloodType: "A+",
      contactNumber: "+63 912 345 6788",
      email: "emily.chen@notreschrist.edu",
      emergencyContact: "Michael Chen - +63 912 345 6787",
      allergies: ["Shellfish"],
      medications: [],
      lastVisit: "2024-12-12",
      status: "active",
      medicalHistory: "Asthma (mild)",
      department: "Biology",
    },
    {
      id: 3,
      name: "Ms. Rodriguez",
      studentId: "EMP-2024-001",
      age: 35,
      gender: "Female",
      bloodType: "B+",
      contactNumber: "+63 912 345 6786",
      email: "maria.rodriguez@notreschrist.edu",
      emergencyContact: "Carlos Rodriguez - +63 912 345 6785",
      allergies: [],
      medications: ["Vitamin D"],
      lastVisit: "2024-12-08",
      status: "active",
      medicalHistory: "Regular health checkups",
      department: "Mathematics",
      role: "teacher",
    },
  ]);

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "John Smith",
      studentId: "STU-2024-001",
      date: "2024-12-16",
      time: "10:00 AM",
      type: "Check-up",
      status: "scheduled",
      reason: "Annual health examination",
      notes: "Routine physical exam",
    },
    {
      id: 2,
      patientName: "Emily Chen",
      studentId: "STU-2024-002",
      date: "2024-12-16",
      time: "2:30 PM",
      type: "Follow-up",
      status: "scheduled",
      reason: "Asthma monitoring",
      notes: "Check inhaler usage and symptoms",
    },
    {
      id: 3,
      patientName: "Ms. Rodriguez",
      studentId: "EMP-2024-001",
      date: "2024-12-15",
      time: "9:00 AM",
      type: "Consultation",
      status: "completed",
      reason: "Headache consultation",
      notes: "Prescribed pain relief medication",
    },
  ]);

  const [medicalInventory, setMedicalInventory] = useState([
    {
      id: 1,
      name: "Paracetamol",
      category: "Pain Relief",
      currentStock: 120,
      minimumStock: 50,
      expiryDate: "2025-06-15",
      supplier: "MedCorp Philippines",
      lastRestocked: "2024-11-15",
      cost: 250,
    },
    {
      id: 2,
      name: "Ibuprofen",
      category: "Anti-inflammatory",
      currentStock: 25,
      minimumStock: 30,
      expiryDate: "2025-03-20",
      supplier: "HealthMed Inc.",
      lastRestocked: "2024-10-20",
      cost: 180,
    },
    {
      id: 3,
      name: "Bandages",
      category: "First Aid",
      currentStock: 200,
      minimumStock: 100,
      expiryDate: "2026-01-10",
      supplier: "Medical Supplies Co.",
      lastRestocked: "2024-12-01",
      cost: 15,
    },
    {
      id: 4,
      name: "Digital Thermometer",
      category: "Equipment",
      currentStock: 8,
      minimumStock: 5,
      expiryDate: "N/A",
      supplier: "MedTech Solutions",
      lastRestocked: "2024-09-15",
      cost: 1200,
    },
  ]);

  // Health statistics
  const healthStats = {
    totalPatients: patients.length,
    todaysAppointments: appointments.filter((apt) => apt.date === "2024-12-16")
      .length,
    pendingAppointments: appointments.filter(
      (apt) => apt.status === "scheduled"
    ).length,
    lowStockItems: medicalInventory.filter(
      (item) => item.currentStock <= item.minimumStock
    ).length,
    completedAppointments: appointments.filter(
      (apt) => apt.status === "completed"
    ).length,
    emergencyVisits: 3,
  };

  // New patient form state
  const [newPatient, setNewPatient] = useState({
    name: "",
    studentId: "",
    age: "",
    gender: "male",
    bloodType: "",
    contactNumber: "",
    email: "",
    emergencyContact: "",
    allergies: "",
    medicalHistory: "",
    department: "",
    role: "student",
  });

  // New appointment form state
  const [newAppointment, setNewAppointment] = useState({
    patientId: "",
    date: "",
    time: "",
    type: "check-up",
    reason: "",
    notes: "",
  });

  // Filter patients
  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" ||
      (selectedFilter === "students" && !patient.role) ||
      (selectedFilter === "staff" && patient.role);
    return matchesSearch && matchesFilter;
  });

  // Handle add new patient
  const handleAddPatient = (e) => {
    e.preventDefault();
    const patientData = {
      id: patients.length + 1,
      name: newPatient.name,
      studentId: newPatient.studentId,
      age: parseInt(newPatient.age),
      gender: newPatient.gender,
      bloodType: newPatient.bloodType,
      contactNumber: newPatient.contactNumber,
      email: newPatient.email,
      emergencyContact: newPatient.emergencyContact,
      allergies: newPatient.allergies
        .split(",")
        .map((a) => a.trim())
        .filter((a) => a),
      medications: [],
      lastVisit: new Date().toISOString().split("T")[0],
      status: "active",
      medicalHistory: newPatient.medicalHistory,
      department: newPatient.department,
      role: newPatient.role === "student" ? undefined : newPatient.role,
    };

    setPatients([...patients, patientData]);
    setNewPatient({
      name: "",
      studentId: "",
      age: "",
      gender: "male",
      bloodType: "",
      contactNumber: "",
      email: "",
      emergencyContact: "",
      allergies: "",
      medicalHistory: "",
      department: "",
      role: "student",
    });
    setShowAddPatientModal(false);
  };

  // Handle add new appointment
  const handleAddAppointment = (e) => {
    e.preventDefault();
    const patient = patients.find(
      (p) => p.id === parseInt(newAppointment.patientId)
    );
    const appointmentData = {
      id: appointments.length + 1,
      patientName: patient?.name || "Unknown",
      studentId: patient?.studentId || "Unknown",
      date: newAppointment.date,
      time: newAppointment.time,
      type: newAppointment.type,
      status: "scheduled",
      reason: newAppointment.reason,
      notes: newAppointment.notes,
    };

    setAppointments([...appointments, appointmentData]);
    setNewAppointment({
      patientId: "",
      date: "",
      time: "",
      type: "check-up",
      reason: "",
      notes: "",
    });
    setShowAddAppointmentModal(false);
  };

  // Get status badge
  const getStatusBadge = (status) => {
    const statusConfig = {
      scheduled: {
        color: "bg-blue-100 text-blue-800",
        icon: Clock,
        label: "Scheduled",
      },
      completed: {
        color: "bg-green-100 text-green-800",
        icon: CheckCircle,
        label: "Completed",
      },
      cancelled: {
        color: "bg-red-100 text-red-800",
        icon: AlertTriangle,
        label: "Cancelled",
      },
      active: {
        color: "bg-green-100 text-green-800",
        icon: CheckCircle,
        label: "Active",
      },
    };

    const config = statusConfig[status];
    const IconComponent = config.icon;

    return (
      <span
        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${config.color}`}
      >
        <IconComponent className="w-3 h-3 mr-1" />
        {config.label}
      </span>
    );
  };

  // Get stock status
  const getStockStatus = (current, minimum) => {
    if (current <= minimum) {
      return {
        color: "text-red-600",
        status: "Low Stock",
        icon: AlertTriangle,
      };
    } else if (current <= minimum * 1.5) {
      return { color: "text-yellow-600", status: "Running Low", icon: Clock };
    }
    return { color: "text-green-600", status: "In Stock", icon: CheckCircle };
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Medical Administration
            </h1>
            <p className="text-gray-600 mt-2">
              Manage patient records, appointments, and medical inventory
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Download className="w-4 h-4 mr-2" />
              Export Reports
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Bell className="w-4 h-4 mr-2" />
              Emergency Alert
            </button>
          </div>
        </div>
      </div>

      {/* Health Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-blue-600" />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Total Patients
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {healthStats.totalPatients}
              </p>
              <p className="text-xs text-blue-600 mt-1">Active records</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Calendar className="w-4 h-4 text-green-600" />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Today's Appointments
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {healthStats.todaysAppointments}
              </p>
              <p className="text-xs text-green-600 mt-1">
                {healthStats.pendingAppointments} pending
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <Package className="w-4 h-4 text-yellow-600" />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Low Stock Items
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {healthStats.lowStockItems}
              </p>
              <p className="text-xs text-red-600 mt-1">Need restocking</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-red-600" />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Emergency Visits
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {healthStats.emergencyVisits}
              </p>
              <p className="text-xs text-red-600 mt-1">This week</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="mb-6">
        <nav className="flex space-x-8" aria-label="Tabs">
          {[
            { id: "overview", name: "Overview", icon: Activity },
            { id: "patients", name: "Patient Records", icon: Users },
            { id: "appointments", name: "Appointments", icon: Calendar },
            { id: "inventory", name: "Medical Inventory", icon: Package },
          ].map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {tab.name}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Today's Schedule */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Today's Schedule
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {appointments
                  .filter((apt) => apt.date === "2024-12-16")
                  .map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Stethoscope className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {appointment.patientName}
                          </p>
                          <p className="text-xs text-gray-500">
                            {appointment.type} - {appointment.reason}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          {appointment.time}
                        </p>
                        {getStatusBadge(appointment.status)}
                      </div>
                    </div>
                  ))}
                {appointments.filter((apt) => apt.date === "2024-12-16")
                  .length === 0 && (
                  <p className="text-gray-500 text-center py-8">
                    No appointments scheduled for today
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Recent Patient Visits */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Recent Patient Visits
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {patients.slice(0, 5).map((patient) => (
                  <div
                    key={patient.id}
                    className="flex items-center justify-between py-2"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-700">
                          {patient.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {patient.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {patient.studentId} - {patient.department}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">
                        Last visit: {patient.lastVisit}
                      </p>
                      {getStatusBadge(patient.status)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Patient Records Tab */}
      {activeTab === "patients" && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <h3 className="text-lg font-medium text-gray-900">
                  Patient Records
                </h3>
                <button
                  onClick={() => setShowAddPatientModal(true)}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Patient
                </button>
              </div>

              {/* Search and Filters */}
              <div className="mt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search patients by name, ID, or department..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Patients</option>
                  <option value="students">Students Only</option>
                  <option value="staff">Staff Only</option>
                </select>
              </div>
            </div>

            {/* Patients Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patient
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Blood Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Allergies
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Visit
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredPatients.map((patient) => (
                    <tr key={patient.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                              <span className="text-sm font-medium text-gray-700">
                                {patient.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </span>
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {patient.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {patient.studentId}
                            </div>
                            <div className="text-xs text-gray-400">
                              {patient.age} yrs, {patient.gender} -{" "}
                              {patient.department}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          <Heart className="w-3 h-3 mr-1" />
                          {patient.bloodType}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {patient.contactNumber}
                        </div>
                        <div className="text-xs text-gray-500">
                          {patient.email}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {patient.allergies.length > 0 ? (
                            <div className="flex flex-wrap gap-1">
                              {patient.allergies.map((allergy, index) => (
                                <span
                                  key={index}
                                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"
                                >
                                  {allergy}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <span className="text-gray-400">None</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {patient.lastVisit}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => {
                              setSelectedPatient(patient);
                              setShowMedicalRecordModal(true);
                            }}
                            className="text-blue-600 hover:text-blue-900"
                            title="View Medical Record"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            className="text-green-600 hover:text-green-900"
                            title="Edit Patient"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            className="text-purple-600 hover:text-purple-900"
                            title="Schedule Appointment"
                          >
                            <CalendarIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredPatients.length === 0 && (
                <div className="text-center py-12">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">
                    No patients found matching your criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Appointments Tab */}
      {activeTab === "appointments" && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <h3 className="text-lg font-medium text-gray-900">
                  Appointments
                </h3>
                <button
                  onClick={() => setShowAddAppointmentModal(true)}
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Schedule Appointment
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patient
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Reason
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {appointments.map((appointment) => (
                    <tr key={appointment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {appointment.patientName}
                          </div>
                          <div className="text-sm text-gray-500">
                            {appointment.studentId}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {appointment.date}
                        </div>
                        <div className="text-sm text-gray-500">
                          {appointment.time}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {appointment.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {appointment.reason}
                        </div>
                        {appointment.notes && (
                          <div className="text-xs text-gray-500 mt-1">
                            {appointment.notes}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(appointment.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button
                            className="text-blue-600 hover:text-blue-900"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            className="text-green-600 hover:text-green-900"
                            title="Edit Appointment"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            className="text-purple-600 hover:text-purple-900"
                            title="Complete"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Medical Inventory Tab */}
      {activeTab === "inventory" && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <h3 className="text-lg font-medium text-gray-900">
                  Medical Inventory
                </h3>
                <div className="flex space-x-3">
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <Download className="w-4 h-4 mr-2" />
                    Export Inventory
                  </button>
                  <button className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Item
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Item
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stock Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Expiry Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Supplier
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cost (PHP)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {medicalInventory.map((item) => {
                    const stockStatus = getStockStatus(
                      item.currentStock,
                      item.minimumStock
                    );
                    const IconComponent = stockStatus.icon;
                    return (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {item.category}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <IconComponent
                              className={`w-4 h-4 mr-2 ${stockStatus.color}`}
                            />
                            <div>
                              <div
                                className={`text-sm font-medium ${stockStatus.color}`}
                              >
                                {item.currentStock} units
                              </div>
                              <div className="text-xs text-gray-500">
                                Min: {item.minimumStock} units
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {item.expiryDate}
                          </div>
                          <div className="text-xs text-gray-500">
                            Last restocked: {item.lastRestocked}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {item.supplier}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            ₱{item.cost.toLocaleString()}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button
                              className="text-blue-600 hover:text-blue-900"
                              title="View Details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              className="text-green-600 hover:text-green-900"
                              title="Restock"
                            >
                              <Package className="w-4 h-4" />
                            </button>
                            <button
                              className="text-purple-600 hover:text-purple-900"
                              title="Edit Item"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Add Patient Modal */}
      {showAddPatientModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full m-4 max-h-96 overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Add New Patient
              </h3>
            </div>
            <form onSubmit={handleAddPatient} className="px-6 py-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={newPatient.name}
                    onChange={(e) =>
                      setNewPatient({ ...newPatient, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Student/Employee ID
                  </label>
                  <input
                    type="text"
                    required
                    value={newPatient.studentId}
                    onChange={(e) =>
                      setNewPatient({
                        ...newPatient,
                        studentId: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., STU-2024-001"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="120"
                    value={newPatient.age}
                    onChange={(e) =>
                      setNewPatient({ ...newPatient, age: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <select
                    value={newPatient.gender}
                    onChange={(e) =>
                      setNewPatient({ ...newPatient, gender: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Blood Type
                  </label>
                  <select
                    required
                    value={newPatient.bloodType}
                    onChange={(e) =>
                      setNewPatient({
                        ...newPatient,
                        bloodType: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Blood Type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={newPatient.contactNumber}
                    onChange={(e) =>
                      setNewPatient({
                        ...newPatient,
                        contactNumber: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="+63 912 345 6789"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={newPatient.email}
                    onChange={(e) =>
                      setNewPatient({ ...newPatient, email: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role
                  </label>
                  <select
                    value={newPatient.role}
                    onChange={(e) =>
                      setNewPatient({ ...newPatient, role: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Department
                  </label>
                  <input
                    type="text"
                    required
                    value={newPatient.department}
                    onChange={(e) =>
                      setNewPatient({
                        ...newPatient,
                        department: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Computer Science"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Emergency Contact
                  </label>
                  <input
                    type="text"
                    required
                    value={newPatient.emergencyContact}
                    onChange={(e) =>
                      setNewPatient({
                        ...newPatient,
                        emergencyContact: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Name - Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Known Allergies
                  </label>
                  <input
                    type="text"
                    value={newPatient.allergies}
                    onChange={(e) =>
                      setNewPatient({
                        ...newPatient,
                        allergies: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Separate multiple allergies with commas"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Medical History
                  </label>
                  <textarea
                    value={newPatient.medicalHistory}
                    onChange={(e) =>
                      setNewPatient({
                        ...newPatient,
                        medicalHistory: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    placeholder="Previous medical conditions, surgeries, etc."
                  />
                </div>
              </div>
            </form>
            <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowAddPatientModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddPatient}
                className="px-4 py-2 bg-blue-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-blue-700"
              >
                Add Patient
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Appointment Modal */}
      {showAddAppointmentModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full m-4">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Schedule Appointment
              </h3>
            </div>
            <form
              onSubmit={handleAddAppointment}
              className="px-6 py-4 space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Patient
                </label>
                <select
                  required
                  value={newAppointment.patientId}
                  onChange={(e) =>
                    setNewAppointment({
                      ...newAppointment,
                      patientId: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Patient</option>
                  {patients.map((patient) => (
                    <option key={patient.id} value={patient.id}>
                      {patient.name} - {patient.studentId}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  required
                  value={newAppointment.date}
                  onChange={(e) =>
                    setNewAppointment({
                      ...newAppointment,
                      date: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <input
                  type="time"
                  required
                  value={newAppointment.time}
                  onChange={(e) =>
                    setNewAppointment({
                      ...newAppointment,
                      time: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Appointment Type
                </label>
                <select
                  value={newAppointment.type}
                  onChange={(e) =>
                    setNewAppointment({
                      ...newAppointment,
                      type: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="check-up">Check-up</option>
                  <option value="follow-up">Follow-up</option>
                  <option value="consultation">Consultation</option>
                  <option value="emergency">Emergency</option>
                  <option value="vaccination">Vaccination</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reason
                </label>
                <input
                  type="text"
                  required
                  value={newAppointment.reason}
                  onChange={(e) =>
                    setNewAppointment({
                      ...newAppointment,
                      reason: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Brief reason for visit"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notes (Optional)
                </label>
                <textarea
                  value={newAppointment.notes}
                  onChange={(e) =>
                    setNewAppointment({
                      ...newAppointment,
                      notes: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  placeholder="Additional notes or special instructions"
                />
              </div>
            </form>
            <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowAddAppointmentModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddAppointment}
                className="px-4 py-2 bg-green-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-green-700"
              >
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Medical Record Modal */}
      {showMedicalRecordModal && selectedPatient && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full m-4 max-h-96 overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  Medical Record - {selectedPatient.name}
                </h3>
                <button
                  onClick={() => setShowMedicalRecordModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">
                    Personal Information
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">ID:</span>{" "}
                      {selectedPatient.studentId}
                    </p>
                    <p>
                      <span className="font-medium">Age:</span>{" "}
                      {selectedPatient.age} years
                    </p>
                    <p>
                      <span className="font-medium">Gender:</span>{" "}
                      {selectedPatient.gender}
                    </p>
                    <p>
                      <span className="font-medium">Blood Type:</span>{" "}
                      {selectedPatient.bloodType}
                    </p>
                    <p>
                      <span className="font-medium">Department:</span>{" "}
                      {selectedPatient.department}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">
                    Contact Information
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Phone:</span>{" "}
                      {selectedPatient.contactNumber}
                    </p>
                    <p>
                      <span className="font-medium">Email:</span>{" "}
                      {selectedPatient.email}
                    </p>
                    <p>
                      <span className="font-medium">Emergency Contact:</span>{" "}
                      {selectedPatient.emergencyContact}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">
                    Medical Information
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Allergies:</span>{" "}
                      {selectedPatient.allergies.length > 0
                        ? selectedPatient.allergies.join(", ")
                        : "None"}
                    </p>
                    <p>
                      <span className="font-medium">Current Medications:</span>{" "}
                      {selectedPatient.medications.length > 0
                        ? selectedPatient.medications.join(", ")
                        : "None"}
                    </p>
                    <p>
                      <span className="font-medium">Last Visit:</span>{" "}
                      {selectedPatient.lastVisit}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Medical History</h4>
                  <p className="text-sm text-gray-700">
                    {selectedPatient.medicalHistory}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 flex justify-end">
              <button
                onClick={() => setShowMedicalRecordModal(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
