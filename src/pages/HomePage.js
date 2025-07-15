import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DocumentTextIcon } from '@heroicons/react/24/solid';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Announcements */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Announcements</h2>
          {[
            { title: "New Store Opening - 1484", date: "Jul 04, 2025", img: "/images/a1.jpg" },
            { title: "New Hampshire PFAS", date: "Jun 30, 2025", img: "/images/a2.jpg" },
            { title: "Washington Limits Lead", date: "Jun 25, 2025", img: "/images/a3.jpg" }
          ].map((item, i) => (
            <div key={i} className="flex items-start mb-3">
              <img src={item.img} alt="Announcement" className="w-12 h-12 mr-3 rounded object-cover" />
              <div>
                <p className="font-medium text-sm">Announcement: {item.title}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
          <button
            onClick={() => navigate('/feeds')}
            className="text-sm text-blue-600 hover:underline mt-2"
          >
            VIEW ALL
          </button>
        </div>

        {/* Apps */}
        <div className="bg-white rounded shadow p-4 overflow-y-auto max-h-[400px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Apps</h2>
            <span className="text-sm text-gray-600">Most Popular ▼</span>
          </div>
          {[
            { name: "Decision Support - New" },
            { name: "Appointment Scheduler 2.0" },
            { name: "APIS - Accounts Payable Inquiry" },
            { name: "International Freight Billing" },
            { name: "Online Itemfile" },
            { name: "Global Specifications/Support" }
          ].map((app, i) => {
            const colors = [
              "bg-blue-500", "bg-red-400", "bg-pink-500",
              "bg-green-500", "bg-purple-500", "bg-indigo-500"
            ];
            const color = colors[i % colors.length];
            return (
              <div key={i} className="flex items-center mb-3">
                <div className={`w-8 h-8 flex items-center justify-center text-white font-bold text-sm rounded mr-3 ${color}`}>
                  {app.name.charAt(0)}
                </div>
                <p className="text-sm">{app.name}</p>
              </div>
            );
          })}
          <button
            onClick={() => navigate('/apps')}
            className="text-sm text-blue-600 hover:underline mt-2"
          >
            VIEW ALL
          </button>
        </div>

        {/* Docs */}
        <div className="bg-white rounded shadow p-4 overflow-y-auto max-h-[400px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Docs</h2>
            <span className="text-sm text-gray-600">Most Popular ▼</span>
          </div>
          {[
            "Store/Club/DC & GLN Lists",
            "Supplier Replenishment Info",
            "Supplier Guide",
            "Forms",
            "Global Sourcing Guide",
            "Order Management System"
          ].map((doc, i) => (
            <div key={i} className="flex items-center mb-3">
              <DocumentTextIcon className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
              <p className="text-sm">{doc}</p>
            </div>
          ))}
          <button
            onClick={() => navigate('/docs')}
            className="text-sm text-blue-600 hover:underline mt-2"
          >
            VIEW ALL
          </button>
        </div>

        {/* Requests */}
        <div className="bg-white rounded shadow p-4 col-span-1 md:col-span-1">
          <h2 className="text-lg font-semibold mb-2">Requests</h2>
          <p className="text-sm text-gray-500 mb-4">There are no requests to display.</p>
          <div className="w-20 mx-auto">
            <img src="/images/request.png" alt="Request Icon" />
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Walmart Calendar</h2>
          <div className="text-center">
            <p className="text-sm mb-1">July 2025</p>
            <div className="grid grid-cols-7 text-xs text-gray-600 gap-1">
              {["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map(day => (
                <div key={day}>{day}</div>
              ))}
              {Array.from({ length: 31 }).map((_, i) => (
                <div key={i} className={`py-1 rounded ${i + 1 === 13 ? 'bg-blue-600 text-white' : 'text-gray-800'}`}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Business Terms */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Business Terms & Agreements</h2>
          <div className="mb-3">
            <label className="block text-sm mb-1">Select Supplier Number</label>
            <select className="w-full border rounded px-2 py-1 text-sm">
              <option>--Select One--</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="block text-sm mb-1">Select Department-Sequence</label>
            <select className="w-full border rounded px-2 py-1 text-sm">
              <option>--Select One--</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-4 py-1 rounded text-sm">Submit</button>
        </div>

        {/* Onboarding */}
        <div className="bg-white rounded shadow p-4 flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold mb-2">Onboarding</h2>
          <p className="text-sm text-gray-500 mb-2">There are no tasks to display.</p>
          <img src="/images/handshake.png" alt="Onboarding" className="w-16" />
        </div>

        {/* Supplier One */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Supplier One</h2>
          <img src="/images/supplier-one.png" alt="Supplier One" className="w-full mb-2 rounded" />
          <p className="text-sm text-gray-700 mb-3">
            Gain insights to prioritize actions for your business, manage your catalog, view orders, and more with Supplier One.
          </p>
          <button className="bg-blue-600 text-white text-sm px-4 py-1 rounded">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
