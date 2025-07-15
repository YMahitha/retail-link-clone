// src/pages/Docs.js
import React from 'react';
import { DocumentTextIcon } from '@heroicons/react/24/solid';

const documents = [
  { title: "Store/Club/DC & GLN Lists", domain: "Merchandising", updated: "Last Updated On: Jan 04, 2025" },
  { title: "Supplier Replenishment Info", domain: "Replenishment", updated: "Last Updated On: Feb 10, 2012" },
  { title: "Supplier Guide", domain: "Merchandising", updated: "Last Updated On: Jan 19, 2016" },
  { title: "Forms", domain: "Admin", updated: "Last Updated On: Mar 09, 2005" },
  { title: "Walmart GRS Guide", domain: "Compliance", updated: "Last Updated On: Jun 23, 2023" },
  { title: "OTIF Scorecard Process", domain: "Logistics", updated: "Last Updated On: May 15, 2024" },
  { title: "EDI Implementation Guide", domain: "Technology", updated: "Last Updated On: Apr 10, 2017" },
  { title: "Packaging Guidelines", domain: "Sustainability", updated: "Last Updated On: Aug 14, 2022" },
  { title: "Routing Guide", domain: "Logistics", updated: "Last Updated On: Jul 30, 2023" },
  { title: "PO Terms & Policies", domain: "Merchandising", updated: "Last Updated On: Dec 01, 2023" },
  { title: "Item Setup Guide", domain: "Item Management", updated: "Last Updated On: Jan 06, 2024" },
  { title: "Markdown Guidelines", domain: "Pricing", updated: "Last Updated On: Feb 20, 2023" },
  { title: "Returns Policy", domain: "Customer Support", updated: "Last Updated On: Sep 12, 2023" },
  { title: "Quality Standards Manual", domain: "Compliance", updated: "Last Updated On: Nov 03, 2022" },
  { title: "Factory Audit Process", domain: "Ethics", updated: "Last Updated On: Apr 27, 2021" },
  { title: "Accounts Payable Terms", domain: "Finance", updated: "Last Updated On: May 12, 2020" },
  { title: "EDI 856 ASN Requirements", domain: "Technology", updated: "Last Updated On: Jun 19, 2019" },
  { title: "Supply Chain Standards", domain: "Logistics", updated: "Last Updated On: Jul 11, 2023" },
  { title: "Compliance Requirements", domain: "Compliance", updated: "Last Updated On: Aug 03, 2022" },
  { title: "Transportation Manual", domain: "Logistics", updated: "Last Updated On: Sep 27, 2023" },
  { title: "Item360 User Guide", domain: "Item Management", updated: "Last Updated On: Oct 01, 2023" },
  { title: "Supplier Performance Guide", domain: "Merchandising", updated: "Last Updated On: Jan 02, 2024" },
  { title: "Forecasting & Replenishment", domain: "Replenishment", updated: "Last Updated On: Feb 14, 2023" },
  { title: "Labeling Requirements", domain: "Compliance", updated: "Last Updated On: Mar 08, 2022" },
  { title: "New Supplier Onboarding", domain: "Admin", updated: "Last Updated On: Apr 17, 2024" },
  { title: "Hazmat Guidelines", domain: "Safety", updated: "Last Updated On: May 23, 2023" },
  { title: "Supplier Center Help", domain: "Support", updated: "Last Updated On: Jun 10, 2022" },
  { title: "Invoice Guidelines", domain: "Finance", updated: "Last Updated On: Jul 01, 2023" },
  { title: "Sam’s Club Requirements", domain: "Merchandising", updated: "Last Updated On: Aug 05, 2023" },
  { title: "Club Channel Playbook", domain: "Sales", updated: "Last Updated On: Sep 08, 2023" },
  { title: "Packaging Specifications", domain: "Sustainability", updated: "Last Updated On: Oct 18, 2023" },
  { title: "Retail Link Training", domain: "Training", updated: "Last Updated On: Nov 27, 2023" },
  { title: "EDI 810 Invoice Guidelines", domain: "Technology", updated: "Last Updated On: Dec 21, 2023" },
  { title: "Retail Link Login Help", domain: "Support", updated: "Last Updated On: Jan 03, 2024" },
  { title: "U.S. Label Compliance", domain: "Compliance", updated: "Last Updated On: Feb 12, 2023" },
  { title: "Import Routing Requirements", domain: "Logistics", updated: "Last Updated On: Mar 07, 2023" },
  { title: "Forecast Accuracy Report", domain: "Replenishment", updated: "Last Updated On: Apr 15, 2023" },
  { title: "EDI Connectivity Checklist", domain: "Technology", updated: "Last Updated On: May 29, 2023" },
  { title: "EDI 850 Purchase Order", domain: "Technology", updated: "Last Updated On: Jun 30, 2023" },
  { title: "Walmart Supplier Agreement", domain: "Legal", updated: "Last Updated On: Jul 22, 2023" },
  { title: "Walmart Sustainability Goals", domain: "Sustainability", updated: "Last Updated On: Aug 14, 2023" },
  { title: "Claims Processing Guide", domain: "Support", updated: "Last Updated On: Sep 26, 2023" },
  { title: "New Item Setup Checklist", domain: "Item Management", updated: "Last Updated On: Oct 09, 2023" },
  { title: "Store Labor Standards", domain: "Operations", updated: "Last Updated On: Nov 16, 2023" },
  { title: "Global Ethics Compliance", domain: "Ethics", updated: "Last Updated On: Dec 07, 2023" },
  { title: "EDI 997 Functional Acknowledgment", domain: "Technology", updated: "Last Updated On: Jan 11, 2024" },
  { title: "Digital Shelf Guide", domain: "Ecommerce", updated: "Last Updated On: Feb 01, 2024" },
  { title: "Global Sourcing Guide", domain: "Sourcing", updated: "Last Updated On: Mar 12, 2024" },
];

const Docs = () => {
  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Documents</h1>

      {/* Filters Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {['Sort', 'Filter docs...', 'Domain', 'Category'].map((label, idx) => (
          <div key={idx}>
            <label className="block text-xs text-gray-500 mb-1">{label}</label>
            <div className="relative">
              {label === 'Filter docs...' ? (
                <input
                  type="text"
                  placeholder="Filter docs..."
                  className="w-full border border-gray-300 rounded px-3 py-1 text-sm text-gray-700"
                />
              ) : (
                <select className="w-full border border-gray-300 rounded px-3 py-1 text-sm text-gray-700">
                  <option>{label === 'Sort' ? 'Name' : 'All'}</option>
                </select>
              )}
              {label === 'Filter docs...' && (
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 14.414V20a1 1 0 01-1.447.894l-4-2A1 1 0 019 18v-3.586L3.293 6.707A1 1 0 013 6V4z"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Document Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="border rounded bg-white shadow-sm hover:shadow-md p-4 flex items-start space-x-3"
          >
            <DocumentTextIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div className="flex flex-col">
              <h2 className="text-sm font-medium text-gray-800">{doc.title}</h2>
              <span className="text-xs text-gray-500">{doc.domain}</span>
              <span className="text-xs text-gray-400">{doc.updated}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Docs;
