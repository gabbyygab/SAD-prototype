import { useState } from "react";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  CreditCard,
  FileText,
  Calendar,
  Search,
  Filter,
  Download,
  Plus,
  Edit,
  Eye,
  AlertCircle,
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  Building,
  PieChart,
} from "lucide-react";

export default function FinanceManagement() {
  // Financial data state
  const [selectedPeriod, setSelectedPeriod] = useState("current_month");
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showAddBillModal, setShowAddBillModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Sample financial data
  const financialSummary = {
    totalRevenue: 2450000,
    totalExpenses: 1890000,
    netIncome: 560000,
    pendingPayments: 125000,
    overduePayments: 35000,
    monthlyGrowth: 8.5,
  };

  // Sample billing data
  const [billings, setBillings] = useState([
    {
      id: 1,
      studentName: "John Smith",
      studentId: "STU-2024-001",
      billType: "Tuition Fee",
      amount: 45000,
      dueDate: "2024-12-30",
      status: "pending",
      createdDate: "2024-12-01",
      semester: "Fall 2024",
    },
    {
      id: 2,
      studentName: "Emily Chen",
      studentId: "STU-2024-002",
      billType: "Laboratory Fee",
      amount: 5000,
      dueDate: "2024-12-25",
      status: "paid",
      paidDate: "2024-12-10",
      createdDate: "2024-11-15",
      semester: "Fall 2024",
    },
    {
      id: 3,
      studentName: "Maria Rodriguez",
      studentId: "STU-2024-003",
      billType: "Library Fee",
      amount: 2500,
      dueDate: "2024-12-15",
      status: "overdue",
      createdDate: "2024-11-01",
      semester: "Fall 2024",
    },
    {
      id: 4,
      studentName: "David Johnson",
      studentId: "STU-2024-004",
      billType: "Medical Fee",
      amount: 3000,
      dueDate: "2024-12-28",
      status: "pending",
      createdDate: "2024-12-05",
      semester: "Fall 2024",
    },
  ]);

  // Sample expense data
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      category: "Staff Salaries",
      description: "Monthly salary payments",
      amount: 850000,
      date: "2024-12-01",
      status: "paid",
      paymentMethod: "Bank Transfer",
    },
    {
      id: 2,
      category: "Utilities",
      description: "Electricity and water bills",
      amount: 45000,
      date: "2024-12-10",
      status: "paid",
      paymentMethod: "Online Banking",
    },
    {
      id: 3,
      category: "Supplies",
      description: "Educational materials and equipment",
      amount: 125000,
      date: "2024-12-12",
      status: "pending",
      paymentMethod: "Purchase Order",
    },
    {
      id: 4,
      category: "Maintenance",
      description: "Building repairs and upkeep",
      amount: 75000,
      date: "2024-12-08",
      status: "paid",
      paymentMethod: "Check",
    },
  ]);

  // Sample budget data
  const budgetData = [
    {
      category: "Staff Salaries",
      allocated: 10000000,
      spent: 8500000,
      percentage: 85,
    },
    { category: "Utilities", allocated: 600000, spent: 450000, percentage: 75 },
    {
      category: "Supplies",
      allocated: 1500000,
      spent: 1250000,
      percentage: 83,
    },
    {
      category: "Maintenance",
      allocated: 800000,
      spent: 650000,
      percentage: 81,
    },
    {
      category: "Technology",
      allocated: 1200000,
      spent: 980000,
      percentage: 82,
    },
    { category: "Events", allocated: 400000, spent: 250000, percentage: 63 },
  ];

  // New billing form state
  const [newBill, setNewBill] = useState({
    studentId: "",
    billType: "tuition",
    amount: "",
    dueDate: "",
    semester: "Fall 2024",
    description: "",
  });

  // Filter billings
  const filteredBillings = billings.filter((bill) => {
    const matchesSearch =
      bill.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bill.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bill.billType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === "all" || bill.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  // Handle add new bill
  const handleAddBill = (e) => {
    e.preventDefault();
    const newBillData = {
      id: billings.length + 1,
      studentName: `Student ${newBill.studentId}`, // In real app, fetch from student DB
      studentId: newBill.studentId,
      billType: newBill.billType,
      amount: parseFloat(newBill.amount),
      dueDate: newBill.dueDate,
      status: "pending",
      createdDate: new Date().toISOString().split("T")[0],
      semester: newBill.semester,
      description: newBill.description,
    };

    setBillings([...billings, newBillData]);
    setNewBill({
      studentId: "",
      billType: "tuition",
      amount: "",
      dueDate: "",
      semester: "Fall 2024",
      description: "",
    });
    setShowAddBillModal(false);
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  // Get status badge
  const getStatusBadge = (status) => {
    const statusConfig = {
      paid: {
        color: "bg-green-100 text-green-800",
        icon: CheckCircle,
        label: "Paid",
      },
      pending: {
        color: "bg-yellow-100 text-yellow-800",
        icon: Clock,
        label: "Pending",
      },
      overdue: {
        color: "bg-red-100 text-red-800",
        icon: AlertCircle,
        label: "Overdue",
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

  // Calculate collection rate
  const collectionRate = () => {
    const totalBills = billings.length;
    const paidBills = billings.filter((b) => b.status === "paid").length;
    return totalBills > 0 ? ((paidBills / totalBills) * 100).toFixed(1) : 0;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Finance Management
            </h1>
            <p className="text-gray-600 mt-2">
              Manage school finances, billing, and budget tracking
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="current_month">Current Month</option>
              <option value="current_quarter">Current Quarter</option>
              <option value="current_year">Current Year</option>
              <option value="last_month">Last Month</option>
            </select>
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <p className="text-2xl font-semibold text-gray-900">
                {formatCurrency(financialSummary.totalRevenue)}
              </p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />+
                {financialSummary.monthlyGrowth}% from last month
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <TrendingDown className="w-4 h-4 text-red-600" />
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-500">
                Total Expenses
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {formatCurrency(financialSummary.totalExpenses)}
              </p>
              <p className="text-xs text-gray-500 mt-1">77% of total revenue</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-blue-600" />
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-500">Net Income</p>
              <p className="text-2xl font-semibold text-gray-900">
                {formatCurrency(financialSummary.netIncome)}
              </p>
              <p className="text-xs text-blue-600 mt-1">23% profit margin</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-yellow-600" />
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-500">
                Pending Payments
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {formatCurrency(financialSummary.pendingPayments)}
              </p>
              <p className="text-xs text-red-600 mt-1">
                {formatCurrency(financialSummary.overduePayments)} overdue
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="mb-6">
        <nav className="flex space-x-8" aria-label="Tabs">
          {[
            { id: "overview", name: "Overview", icon: PieChart },
            { id: "billing", name: "Student Billing", icon: FileText },
            { id: "expenses", name: "Expenses", icon: CreditCard },
            { id: "budget", name: "Budget Tracking", icon: TrendingUp },
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
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Collection Rate
                  </p>
                  <p className="text-3xl font-bold text-green-600">
                    {collectionRate()}%
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Active Students
                  </p>
                  <p className="text-3xl font-bold text-blue-600">1,247</p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Average Fee
                  </p>
                  <p className="text-3xl font-bold text-purple-600">
                    {formatCurrency(35000)}
                  </p>
                </div>
                <BookOpen className="w-8 h-8 text-purple-500" />
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Recent Transactions
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {billings.slice(0, 5).map((bill) => (
                  <div
                    key={bill.id}
                    className="flex items-center justify-between py-2"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <FileText className="w-4 h-4 text-gray-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {bill.studentName}
                        </p>
                        <p className="text-xs text-gray-500">
                          {bill.billType} - {bill.studentId}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">
                        {formatCurrency(bill.amount)}
                      </p>
                      {getStatusBadge(bill.status)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Billing Tab */}
      {activeTab === "billing" && (
        <div className="space-y-6">
          {/* Billing Controls */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <h3 className="text-lg font-medium text-gray-900">
                  Student Billing
                </h3>
                <button
                  onClick={() => setShowAddBillModal(true)}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create Bill
                </button>
              </div>

              {/* Search and Filters */}
              <div className="mt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search by student name, ID, or bill type..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="paid">Paid</option>
                  <option value="pending">Pending</option>
                  <option value="overdue">Overdue</option>
                </select>
              </div>
            </div>

            {/* Billing Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Bill Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Due Date
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
                  {filteredBillings.map((bill) => (
                    <tr key={bill.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {bill.studentName}
                          </div>
                          <div className="text-sm text-gray-500">
                            {bill.studentId}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {bill.billType}
                        </div>
                        <div className="text-xs text-gray-500">
                          {bill.semester}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {formatCurrency(bill.amount)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {bill.dueDate}
                        </div>
                        {bill.paidDate && (
                          <div className="text-xs text-green-600">
                            Paid: {bill.paidDate}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(bill.status)}
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
                            title="Edit Bill"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          {bill.status === "pending" && (
                            <button
                              className="text-purple-600 hover:text-purple-900"
                              title="Record Payment"
                            >
                              <CreditCard className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredBillings.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">
                    No bills found matching your criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Expenses Tab */}
      {activeTab === "expenses" && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  Expense Management
                </h3>
                <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Expense
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
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
                  {expenses.map((expense) => (
                    <tr key={expense.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {expense.category}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {expense.description}
                        </div>
                        <div className="text-xs text-gray-500">
                          {expense.paymentMethod}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {formatCurrency(expense.amount)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {expense.date}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(expense.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-green-600 hover:text-green-900">
                            <Edit className="w-4 h-4" />
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

      {/* Budget Tab */}
      {activeTab === "budget" && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Budget Tracking
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Monitor budget allocation and spending across categories
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {budgetData.map((budget, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-900">
                        {budget.category}
                      </h4>
                      <span className="text-sm text-gray-500">
                        {formatCurrency(budget.spent)} /{" "}
                        {formatCurrency(budget.allocated)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className={`h-2 rounded-full ${
                          budget.percentage > 90
                            ? "bg-red-500"
                            : budget.percentage > 75
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                        style={{ width: `${budget.percentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{budget.percentage}% used</span>
                      <span>
                        {formatCurrency(budget.allocated - budget.spent)}{" "}
                        remaining
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Bill Modal */}
      {showAddBillModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full m-4">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Create New Bill
              </h3>
            </div>
            <form onSubmit={handleAddBill} className="px-6 py-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Student ID
                </label>
                <input
                  type="text"
                  required
                  value={newBill.studentId}
                  onChange={(e) =>
                    setNewBill({ ...newBill, studentId: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., STU-2024-001"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bill Type
                </label>
                <select
                  value={newBill.billType}
                  onChange={(e) =>
                    setNewBill({ ...newBill, billType: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="tuition">Tuition Fee</option>
                  <option value="laboratory">Laboratory Fee</option>
                  <option value="library">Library Fee</option>
                  <option value="medical">Medical Fee</option>
                  <option value="registration">Registration Fee</option>
                  <option value="miscellaneous">Miscellaneous Fee</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount (PHP)
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  step="0.01"
                  value={newBill.amount}
                  onChange={(e) =>
                    setNewBill({ ...newBill, amount: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Due Date
                </label>
                <input
                  type="date"
                  required
                  value={newBill.dueDate}
                  onChange={(e) =>
                    setNewBill({ ...newBill, dueDate: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Semester
                </label>
                <select
                  value={newBill.semester}
                  onChange={(e) =>
                    setNewBill({ ...newBill, semester: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Fall 2024">Fall 2024</option>
                  <option value="Spring 2025">Spring 2025</option>
                  <option value="Summer 2025">Summer 2025</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description (Optional)
                </label>
                <textarea
                  value={newBill.description}
                  onChange={(e) =>
                    setNewBill({ ...newBill, description: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  placeholder="Additional notes about this bill..."
                />
              </div>
            </form>

            <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowAddBillModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddBill}
                className="px-4 py-2 bg-blue-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-blue-700"
              >
                Create Bill
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
