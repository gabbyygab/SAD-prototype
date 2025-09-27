import { useState } from "react";

export default function StudentFinance() {
  const [selectedSemester, setSelectedSemester] = useState("current");
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const semesters = [
    { id: "current", label: "2nd Semester 2024-2025" },
    { id: "previous", label: "1st Semester 2024-2025" },
    { id: "archived", label: "Previous School Years" },
  ];

  const financialSummary = {
    totalBalance: 45000,
    paidAmount: 35000,
    remainingBalance: 10000,
    nextDueDate: "January 15, 2025",
    paymentPlan: "Quarterly",
  };

  const feeBreakdown = [
    {
      category: "Tuition Fee",
      amount: 35000,
      paid: 25000,
      remaining: 10000,
      status: "partial",
    },
    {
      category: "Miscellaneous Fee",
      amount: 5000,
      paid: 5000,
      remaining: 0,
      status: "paid",
    },
    {
      category: "Laboratory Fee",
      amount: 3000,
      paid: 3000,
      remaining: 0,
      status: "paid",
    },
    {
      category: "Library Fee",
      amount: 1000,
      paid: 1000,
      remaining: 0,
      status: "paid",
    },
    {
      category: "ID Fee",
      amount: 500,
      paid: 500,
      remaining: 0,
      status: "paid",
    },
    {
      category: "Insurance",
      amount: 500,
      paid: 500,
      remaining: 0,
      status: "paid",
    },
  ];

  const paymentHistory = [
    {
      id: 1,
      date: "2024-12-01",
      description: "Tuition Payment - 2nd Quarter",
      amount: 12500,
      method: "Bank Transfer",
      reference: "BT-2024-001",
      status: "completed",
    },
    {
      id: 2,
      date: "2024-11-01",
      description: "Miscellaneous Fee Payment",
      amount: 5000,
      method: "Cash",
      reference: "CSH-2024-002",
      status: "completed",
    },
    {
      id: 3,
      date: "2024-10-15",
      description: "Tuition Payment - 1st Quarter",
      amount: 12500,
      method: "Online Payment",
      reference: "OP-2024-003",
      status: "completed",
    },
    {
      id: 4,
      date: "2024-09-01",
      description: "Laboratory & Library Fees",
      amount: 4000,
      method: "Bank Transfer",
      reference: "BT-2024-004",
      status: "completed",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "paid":
        return "text-[color:var(--success)] bg-[color:var(--success-bg)]";
      case "partial":
        return "text-[color:var(--warning)] bg-[color:var(--warning-bg)]";
      case "overdue":
        return "text-[color:var(--destructive)] bg-[color:var(--destructive-bg)]";
      default:
        return "text-[color:var(--muted-foreground)] bg-[color:var(--muted)]";
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[color:var(--foreground)] mb-2">
          Financial Account
        </h1>
        <p className="text-[color:var(--muted-foreground)]">
          Manage your tuition payments and view financial records
        </p>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-[color:var(--card)] rounded-xl p-6 shadow-sm border border-[color:var(--border)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[color:var(--muted-foreground)]">
                Total Fees
              </p>
              <p className="text-2xl font-bold text-[color:var(--card-foreground)]">
                {formatCurrency(financialSummary.totalBalance)}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl">
              💰
            </div>
          </div>
        </div>

        <div className="bg-[color:var(--card)] rounded-xl p-6 shadow-sm border border-[color:var(--border)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[color:var(--muted-foreground)]">
                Amount Paid
              </p>
              <p className="text-2xl font-bold text-[color:var(--success)]">
                {formatCurrency(financialSummary.paidAmount)}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white text-xl">
              ✅
            </div>
          </div>
        </div>

        <div className="bg-[color:var(--card)] rounded-xl p-6 shadow-sm border border-[color:var(--border)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[color:var(--muted-foreground)]">
                Remaining Balance
              </p>
              <p className="text-2xl font-bold text-[color:var(--destructive)]">
                {formatCurrency(financialSummary.remainingBalance)}
              </p>
            </div>
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white text-xl">
              ⏰
            </div>
          </div>
        </div>

        <div className="bg-[color:var(--card)] rounded-xl p-6 shadow-sm border border-[color:var(--border)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[color:var(--muted-foreground)]">
                Next Due Date
              </p>
              <p className="text-lg font-bold text-[color:var(--card-foreground)]">
                {financialSummary.nextDueDate}
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-xl">
              📅
            </div>
          </div>
        </div>
      </div>

      {/* Fee Breakdown */}
      <div className="bg-[color:var(--card)] rounded-xl shadow-sm border border-[color:var(--border)] overflow-hidden">
        <div className="px-6 py-4 border-b border-[color:var(--border)]">
          <h2 className="text-lg font-semibold text-[color:var(--card-foreground)]">
            Fee Breakdown
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[color:var(--muted)]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Total Amount
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Paid
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Remaining
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[color:var(--border)]">
              {feeBreakdown.map((fee, index) => (
                <tr key={index} className="hover:bg-[color:var(--muted)]/50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-[color:var(--foreground)]">
                      {fee.category}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-[color:var(--foreground)]">
                    {formatCurrency(fee.amount)}
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-[color:var(--success)]">
                    {formatCurrency(fee.paid)}
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-[color:var(--destructive)]">
                    {formatCurrency(fee.remaining)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        fee.status
                      )}`}
                    >
                      {fee.status === "paid"
                        ? "Paid"
                        : fee.status === "partial"
                        ? "Partial"
                        : "Pending"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-[color:var(--card)] rounded-xl shadow-sm border border-[color:var(--border)] overflow-hidden">
        <div className="px-6 py-4 border-b border-[color:var(--border)]">
          <h2 className="text-lg font-semibold text-[color:var(--card-foreground)]">
            Payment History
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[color:var(--muted)]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Reference
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-[color:var(--muted-foreground)] uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[color:var(--border)]">
              {paymentHistory.map((payment) => (
                <tr
                  key={payment.id}
                  className="hover:bg-[color:var(--muted)]/50"
                >
                  <td className="px-6 py-4 text-sm text-[color:var(--foreground)]">
                    {new Date(payment.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-[color:var(--foreground)]">
                      {payment.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-[color:var(--success)]">
                    {formatCurrency(payment.amount)}
                  </td>
                  <td className="px-6 py-4 text-sm text-[color:var(--muted-foreground)]">
                    {payment.method}
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-[color:var(--muted-foreground)]">
                    {payment.reference}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-2 py-1 rounded-full text-xs font-medium text-[color:var(--success)] bg-[color:var(--success-bg)]">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Actions */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setShowPaymentModal(true)}
          className="bg-[color:var(--primary)] text-[color:var(--primary-foreground)] px-6 py-3 rounded-lg font-semibold hover:bg-[color:var(--primary)]/90 transition-colors duration-200 flex items-center space-x-2"
        >
          <span>💳</span>
          <span>Make Payment</span>
        </button>
        <button className="bg-[color:var(--secondary)] text-[color:var(--primary)] px-6 py-3 rounded-lg font-semibold hover:bg-[color:var(--secondary)]/90 transition-colors duration-200 flex items-center space-x-2">
          <span>📄</span>
          <span>Download Statement</span>
        </button>
        <button className="border border-[color:var(--border)] text-[color:var(--foreground)] px-6 py-3 rounded-lg font-semibold hover:bg-[color:var(--muted)] transition-colors duration-200 flex items-center space-x-2">
          <span>🖨️</span>
          <span>Print Receipt</span>
        </button>
        <button className="border border-[color:var(--border)] text-[color:var(--foreground)] px-6 py-3 rounded-lg font-semibold hover:bg-[color:var(--muted)] transition-colors duration-200 flex items-center space-x-2">
          <span>📧</span>
          <span>Email Statement</span>
        </button>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[color:var(--card)] rounded-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-[color:var(--card-foreground)] mb-4">
              Make Payment
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[color:var(--foreground)] mb-2">
                  Payment Amount
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-[color:var(--border)] rounded-lg focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent"
                  placeholder="Enter amount"
                  defaultValue={financialSummary.remainingBalance}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[color:var(--foreground)] mb-2">
                  Payment Method
                </label>
                <select className="w-full px-3 py-2 border border-[color:var(--border)] rounded-lg focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent">
                  <option>Online Payment</option>
                  <option>Bank Transfer</option>
                  <option>Credit Card</option>
                  <option>GCash</option>
                  <option>PayMaya</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button className="flex-1 bg-[color:var(--primary)] text-[color:var(--primary-foreground)] py-2 px-4 rounded-lg font-semibold hover:bg-[color:var(--primary)]/90 transition-colors duration-200">
                  Proceed to Payment
                </button>
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="flex-1 border border-[color:var(--border)] text-[color:var(--foreground)] py-2 px-4 rounded-lg font-semibold hover:bg-[color:var(--muted)] transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
