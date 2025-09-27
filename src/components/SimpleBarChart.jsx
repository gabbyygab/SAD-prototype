// Chart Component (Simple bar representation)
const SimpleBarChart = ({ data, dataKey, nameKey, title }) => (
  <div className="space-y-3">
    <h4 className="font-medium text-gray-700 text-sm">{title}</h4>
    {data.map((item, index) => (
      <div key={index} className="flex items-center space-x-3">
        <div className="w-20 text-sm text-gray-600 truncate">
          {item[nameKey]}
        </div>
        <div className="flex-1 bg-gray-200 rounded-full h-2">
          <div
            className="bg-gray-600 h-2 rounded-full"
            style={{
              width: `${Math.min((item[dataKey] / 100) * 100, 100)}%`,
            }}
          ></div>
        </div>
        <div className="w-12 text-sm font-medium text-gray-700">
          {typeof item[dataKey] === "number"
            ? item[dataKey].toFixed(1)
            : item[dataKey]}
        </div>
      </div>
    ))}
  </div>
);
export default SimpleBarChart;
