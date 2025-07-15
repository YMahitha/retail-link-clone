// src/pages/Apps.js
import React, { useState } from 'react';
import { FunnelIcon } from '@heroicons/react/24/solid';

const appsData = [
  { name: "Decision Support - New", domain: "Accounting / Finance", category: "Analysis" },
  { name: "Appointment Scheduler 2.0", domain: "Ethics & Compliance", category: "Admin" },
  { name: "APIS - Accounts Payable Inquiry", domain: "Accounting / Finance", category: "Finance" },
  { name: "International Freight Billing", domain: "Ethics & Compliance", category: "Logistics" },
  { name: "Online Itemfile", domain: "Merchandising", category: "Item Management" },
  { name: "Global Specifications/Support", domain: "Product Development", category: "Quality" },
  { name: "Order Management System", domain: "Replenishment", category: "Logistics" },
  { name: "Item 360", domain: "Merchandising", category: "Item Management" },
  { name: "Sam’s Item Link", domain: "Merchandising", category: "Item Management" },
  { name: "Global Trade Document Portal", domain: "Sourcing / Global Procurement", category: "Compliance" },
  { name: "Import PO Revisions (New)", domain: "Sourcing / Global Procurement", category: "Logistics" },
  { name: "Import PO Delivery", domain: "Sourcing / Global Procurement", category: "Logistics" },
  { name: "Event Management System", domain: "Admin", category: "Operations" },
  { name: "Supplier Profile", domain: "Merchandising", category: "Supplier Info" },
  { name: "Supplier Center", domain: "Accounting / Finance", category: "Admin" },
  { name: "On Time In Full (OTIF) Scorecard", domain: "Ethics & Compliance", category: "Logistics" },
  { name: "Modular Planning", domain: "Merchandising", category: "Planning" },
  { name: "EDI-B2B", domain: "Miscellaneous", category: "Technology" },
  { name: "MADRID 2.0", domain: "Merchandising", category: "Item Management" },
  { name: "PO Tracking", domain: "Sourcing / Global Procurement", category: "Logistics" },
  { name: "Where’s My Stuff", domain: "Ethics & Compliance", category: "Tracking" },
  { name: "SWAS Report", domain: "Merchandising", category: "Reporting" },
  { name: "Supplier One", domain: "Merchandising", category: "Supplier Info" },
  { name: "Club Receiving Scheduler", domain: "Ethics & Compliance", category: "Operations" },
  { name: "CO-OP Agreement New", domain: "Accounting / Finance", category: "Finance" },
  { name: "EMS", domain: "Marketing", category: "Promotion" },
  { name: "SQEP Dashboard", domain: "Ethics & Compliance", category: "Quality" },
  { name: "Accounting Reporting", domain: "Accounting / Finance", category: "Finance" },
  { name: "Critical Path Visibility", domain: "Sourcing / Global Procurement", category: "Logistics" },
  { name: "Global Supply Chain Visibility", domain: "Ethics & Compliance", category: "Logistics" },
  { name: "Sam’s Item Data Management", domain: "Merchandising", category: "Item Management" },
  { name: "Factory Audit System", domain: "Merchandising", category: "Compliance" },
  { name: "Request Status", domain: "Accounting / Finance", category: "Finance" },
  { name: "FIXit", domain: "Operations", category: "Admin" },
  { name: "Accounting Scorecard", domain: "Accounting / Finance", category: "Finance" },
  { name: "Item Share", domain: "Merchandising", category: "Collaboration" },
  { name: "Space Management", domain: "Merchandising", category: "Planning" },
  { name: "CPFR", domain: "Replenishment", category: "Planning" },
  { name: "Deals New", domain: "Accounting / Finance", category: "Finance" },
  { name: "Helios - Intl Supply Chain", domain: "Replenishment", category: "Logistics" },
  { name: "Advanced Shipment Notification", domain: "Ethics & Compliance", category: "Logistics" },
  { name: "Out Of Stock - Root Cause", domain: "Merchandising", category: "Analysis" },
  { name: "OTIF Scorecard Intl 2.0", domain: "Replenishment", category: "Logistics" },
  { name: "Quality Control Inspections", domain: "Merchandising", category: "Quality" },
  { name: "Aspen", domain: "Ethics & Compliance", category: "Reporting" },
  { name: "Product Removal", domain: "Merchandising", category: "Admin" },
  { name: "Sams OTIF Next Gen", domain: "Ethics & Compliance", category: "Logistics" },
  { name: "Claims Management System", domain: "Accounting / Finance", category: "Claims" },
  { name: "Product Quality And Complaints", domain: "Miscellaneous", category: "Quality" },
  { name: "Supplier Facility Hub", domain: "Merchandising", category: "Supplier Info" },
  { name: "Request For Routing - Walmart", domain: "Ethics & Compliance", category: "Logistics" },
  { name: "ASN Statistics", domain: "Merchandising", category: "Logistics" },
  { name: "PLUM", domain: "Merchandising", category: "Analytics" },
  { name: "Active Trading", domain: "Merchandising", category: "Trading" },
  { name: "Walmart Sustainability Portal", domain: "Miscellaneous", category: "Sustainability" },
  { name: "TAPO X Reference", domain: "Replenishment", category: "Technology" },
  { name: "Carrier Portal For Logistics", domain: "Ethics & Compliance", category: "Logistics" },
  { name: "Delivery Confirmation", domain: "Ethics & Compliance", category: "Logistics" },
  { name: "Change Your PIN", domain: "Admin", category: "Security" },
  { name: "Samsclub Customer Service", domain: "Admin", category: "Support" },
  { name: "Customized Classifications", domain: "Replenishment", category: "Item Setup" },
  { name: "DSD Accuracy Dashboard", domain: "Accounting / Finance", category: "Finance" },
  { name: "Product Safety And Compliance", domain: "Marketing", category: "Compliance" },
  { name: "Invoice Match Rate", domain: "Accounting / Finance", category: "Finance" },
  { name: "Warehouse Inventory Analytics", domain: "Merchandising", category: "Analytics" },
  { name: "Change Your Hint", domain: "Admin", category: "Security" },
  { name: "Global Pharmacy Host 2012", domain: "Merchandising", category: "Healthcare" },
  { name: "Brand Acquisition Manager", domain: "Sourcing / Global Procurement", category: "Sourcing" },
  { name: "Grocery Dedicated Billing", domain: "Ethics & Compliance", category: "Billing" },
  { name: "Customs Classification", domain: "Sourcing / Global Procurement", category: "Logistics" },
  { name: "Wal-Mart Exception Reporting", domain: "Merchandising", category: "Reporting" },
  { name: "Category And Consumer Insights", domain: "Admin", category: "Insights" },
  { name: "Assortment Planning And Review", domain: "Merchandising", category: "Planning" },
  { name: "SAM’S CLUB Exception Reporting", domain: "Merchandising", category: "Reporting" },
  { name: "Exchange Rate", domain: "Accounting / Finance", category: "Finance" },
  { name: "Sam’s Instant Savings Hub", domain: "Marketing", category: "Promotion" },
  { name: "Import Freight Invoices", domain: "Ethics & Compliance", category: "Finance" },
  { name: "Producer Portal", domain: "Accounting / Finance", category: "Supplier Info" },
  { name: "Concorde", domain: "Accounting / Finance", category: "Finance" },
  { name: "Supplier Compliance - CA", domain: "Loss Prevention", category: "Compliance" },
  { name: "WMCA Recall Tool", domain: "Loss Prevention", category: "Compliance" },
  { name: "Next Generation Product Setup", domain: "Ethics & Compliance", category: "Item Setup" },
  { name: "Walmart Connect Contact Portal", domain: "Marketing", category: "Advertising" },
  { name: "Brazil Global Credit", domain: "Accounting / Finance", category: "Finance" },
  { name: "WebMTracks External", domain: "Merchandising", category: "Tracking" },
  { name: "WebMtracks", domain: "Admin", category: "Tracking" },
  { name: "Fixit LMD", domain: "Ethics & Compliance", category: "Maintenance" },
  { name: "Alethia - Complaints Manager", domain: "Miscellaneous", category: "Support" },
  { name: "AegisOne Product Removal", domain: "Ethics & Compliance", category: "Item Management" },
  { name: "New Item Verification", domain: "Miscellaneous", category: "Item Management" },
  { name: "Quote Management", domain: "Sourcing / Global Procurement", category: "Sourcing" },
];

const uniqueDomains = [...new Set(appsData.map(app => app.domain))];
const uniqueCategories = [...new Set(appsData.map(app => app.category))];

const Apps = () => {
  const [search, setSearch] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredApps = appsData.filter(app =>
    app.name.toLowerCase().includes(search.toLowerCase()) &&
    (selectedDomain === 'All' || app.domain === selectedDomain) &&
    (selectedCategory === 'All' || app.category === selectedCategory)
  );

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Apps</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 items-end">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Sort</label>
          <select className="w-full border border-gray-300 rounded p-2">
            <option>Most Used</option>
            <option>Name</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Filter apps</label>
          <div className="relative">
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2 pl-10"
              placeholder="Search apps..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FunnelIcon className="w-5 h-5 absolute left-2 top-2.5 text-gray-400" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Domain</label>
          <select
            className="w-full border border-gray-300 rounded p-2"
            value={selectedDomain}
            onChange={(e) => setSelectedDomain(e.target.value)}
          >
            <option>All</option>
            {uniqueDomains.map((d, idx) => (
              <option key={idx}>{d}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
          <select
            className="w-full border border-gray-300 rounded p-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option>All</option>
            {uniqueCategories.map((c, idx) => (
              <option key={idx}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredApps.map((app, index) => (
          <div key={index} className="border rounded p-4 hover:shadow-md">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold text-gray-800">{app.name}</div>
              <div className="text-gray-400 text-xs">{app.domain}</div>
            </div>
            <div className="text-xs text-gray-500">{app.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
