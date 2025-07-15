// src/pages/Business.js
import React, { useState } from 'react';
import { ArrowTrendingDownIcon } from '@heroicons/react/24/solid';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const metrics = [
  {
    title: 'Total Sales',
    value: '$3.6K',
    lastYear: '$50.1K',
    percentChange: '-78.39%',
    trend: 'down',
  },
  {
    title: 'Quantity Sold',
    value: '635.00',
    lastYear: '1.6K',
    percentChange: '-62.16%',
    trend: 'down',
  },
  {
    title: 'All Comp Store Sales',
    value: 'N/A',
    lastYear: 'N/A',
    percentChange: 'N/A',
    trend: 'flat',
  },
];

const weeks = Array.from({ length: 23 }, (_, i) => `Week ${String(i + 1).padStart(2, '0')}`);

const salesData = {
  labels: weeks,
  datasets: [
    {
      label: 'Last Year',
      data: [4000, 3500, 2800, 2600, 2500, 2000, 1800, 1600, 1700, 1400, 1300, 1100, 1050, 1000, 1100, 1200, 1250, 1100, 1150, 1300, 1400, 1200, 1500],
      borderColor: 'orange',
      tension: 0.3,
    },
    {
      label: 'This Year',
      data: [360, 300, 280, 290, 250, 240, 220, 210, 205, 195, 180, 170, 160, 150, 140, 130, 120, 115, 110, 108, 105, 103, 100],
      borderColor: 'blue',
      tension: 0.3,
    },
  ],
};

const qtyData = {
  labels: weeks,
  datasets: [
    {
      label: 'Last Year',
      data: Array.from({ length: 23 }, () => Math.floor(Math.random() * 300 + 300)),
      borderColor: 'orange',
      tension: 0.3,
    },
    {
      label: 'This Year',
      data: Array.from({ length: 23 }, () => Math.floor(Math.random() * 100 + 100)),
      borderColor: 'blue',
      tension: 0.3,
    },
  ],
};

const Business = () => {
  const [activeTab, setActiveTab] = useState('card');

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-2xl font-bold text-blue-800">Business</h1>
        <div className="text-sm text-gray-600 text-right">
          <span className="font-medium">Supplier Number </span>
          <span className="text-black">S1 - 217633</span>
          <div className="text-xs text-gray-500">* Store only data for All Departments as of Jul 11, 2025</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 border-b mb-6">
        <button
          onClick={() => setActiveTab('card')}
          className={`text-sm font-medium pb-2 ${
            activeTab === 'card' ? 'border-b-2 border-yellow-500 text-blue-900' : 'text-gray-500'
          }`}
        >
          Card View
        </button>
        <button
          onClick={() => setActiveTab('graph')}
          className={`text-sm font-medium pb-2 ${
            activeTab === 'graph' ? 'border-b-2 border-yellow-500 text-blue-900' : 'text-gray-500'
          }`}
        >
          Graph View
        </button>
      </div>

      {/* Card View */}
      {activeTab === 'card' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {metrics.map((metric, idx) => (
            <div key={idx} className="border rounded shadow p-4">
              <div className="text-gray-600 text-sm mb-2">{metric.title}</div>
              <div className="text-3xl font-semibold mb-4">{metric.value}</div>
              <div className="text-xs text-gray-600 space-y-1">
                <div>Last Year <span className="ml-2 text-black">{metric.lastYear}</span></div>
                <div>% Change <span className="ml-2 text-red-600">{metric.percentChange}</span></div>
                <div className="flex items-center">
                  Trend
                  {metric.trend === 'down' && <ArrowTrendingDownIcon className="w-4 h-4 ml-2 text-red-500" />}
                  {metric.trend === 'flat' && <span className="ml-2 text-gray-500">—</span>}
                </div>
              </div>
              <div className="text-right mt-2">
                <span className="text-blue-700 text-sm cursor-pointer hover:underline">VIEW MORE</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Graph View */}
      {activeTab === 'graph' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-blue-900 mb-2">Total Sales Overview</h2>
            <Line data={salesData} />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-blue-900 mb-2">Quantity Sold Overview</h2>
            <Line data={qtyData} />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-blue-900 mb-2">All Comp Store Sales Overview</h2>
            <div className="bg-white p-6 shadow rounded">
              <p className="text-sm text-gray-700">There are no any trending all comp store sales contents to display.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Business;       
