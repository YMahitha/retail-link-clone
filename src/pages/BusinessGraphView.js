import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Link } from 'react-router-dom';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const weeks = Array.from({ length: 23 }, (_, i) => `Week ${String(i + 1).padStart(2, '0')}`);

const mockData = {
  sales: {
    thisYear: [0, 800, 900, 500, 1300, 1500, 1100, 950, 800, 1300, 1100, 900, 1100, 1200, 900, 1000, 1500, 1100, 1000, 1300, 1200, 1400, 2000],
    lastYear: [3800, 3000, 2700, 2100, 1900, 2000, 1800, 1700, 1500, 2000, 1600, 1500, 1800, 2000, 1600, 1700, 2300, 1600, 1800, 2000, 1900, 2100, 1700]
  },
  quantity: {
    thisYear: [10, 50, 40, 60, 50, 30, 45, 38, 60, 41, 48, 35, 28, 37, 46, 42, 51, 40, 44, 50, 47, 39, 55],
    lastYear: [460, 420, 300, 230, 210, 250, 230, 240, 210, 230, 200, 190, 230, 270, 200, 240, 290, 200, 230, 240, 250, 230, 240]
  }
};

const createLineChart = (label, dataThisYear, dataLastYear) => ({
  labels: weeks,
  datasets: [
    {
      label: 'This Year',
      data: dataThisYear,
      borderColor: '#1d4ed8',
      backgroundColor: '#1d4ed8',
      tension: 0.3,
      fill: false
    },
    {
      label: 'Last Year',
      data: dataLastYear,
      borderColor: '#f59e0b',
      backgroundColor: '#f59e0b',
      tension: 0.3,
      fill: false
    }
  ]
});

const BusinessGraphView = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-blue-900">Business</h1>
        <Link to="/business" className="text-sm text-blue-600 underline">Back to Card View</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Sales Overview */}
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-lg font-semibold text-blue-900 mb-1">Total Sales Overview</h2>
          <p className="mb-2">
            <span className="font-bold">This Year: </span>$8.6K &nbsp;&nbsp;
            <span className="font-bold">Last Year: </span>$30.1K &nbsp;&nbsp;
            <span className="text-red-600">% Change: -71.39%</span>
          </p>
          <Line data={createLineChart('Total Sales', mockData.sales.thisYear, mockData.sales.lastYear)} />
        </div>

        {/* Quantity Sold Overview */}
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-lg font-semibold text-blue-900 mb-1">Quantity Sold Overview</h2>
          <p className="mb-2">
            <span className="font-bold">This Year: </span>747.00 &nbsp;&nbsp;
            <span className="font-bold">Last Year: </span>2.6K &nbsp;&nbsp;
            <span className="text-red-600">% Change: -72.16%</span>
          </p>
          <Line data={createLineChart('Quantity Sold', mockData.quantity.thisYear, mockData.quantity.lastYear)} />
        </div>

        {/* All Comp Store Sales Overview */}
        <div className="col-span-1 md:col-span-2 bg-white shadow p-4 rounded">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">All Comp Store Sales Overview</h2>
          <div className="h-32 flex items-center justify-center text-gray-500">
            There are no any trending all comp store sales contents to display.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessGraphView;
