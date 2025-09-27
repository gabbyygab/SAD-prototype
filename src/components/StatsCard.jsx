export default function StatsCard({ title, value, icon, bgColor }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm mb-1">{title}</p>
          <p className="text-3xl font-bold text-black">{value}</p>
        </div>
        <div
          className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center text-white text-xl`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
