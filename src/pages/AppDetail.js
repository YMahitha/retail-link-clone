import React from 'react';
import {
  CubeIcon,
  CalendarIcon,
  ChartBarIcon,
  CreditCardIcon,
  DocumentDuplicateIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const appDetails = [
  {
    title: 'Decision Support - New',
    description: 'Advanced analytics and insights platform for supplier performance.',
    icon: ChartBarIcon,
  },
  {
    title: 'Appointment Scheduler',
    description: 'Manage inbound and outbound delivery appointments at distribution centers.',
    icon: CalendarIcon,
  },
  {
    title: 'APIS - Accounts Payable',
    description: 'Accounts payable invoice management and remittance system.',
    icon: CreditCardIcon,
  },
  {
    title: 'International Freight Billing',
    description: 'Tool for handling international shipping and freight invoices.',
    icon: DocumentDuplicateIcon,
  },
  {
    title: 'Online Itemfile',
    description: 'Web-based product setup and maintenance application.',
    icon: CubeIcon,
  },
  {
    title: 'Global Specifications',
    description: 'Access product specs and packaging guidelines for global markets.',
    icon: Cog6ToothIcon,
  },
];

const AppDetail = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">App Details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {appDetails.map((app, i) => {
          const Icon = app.icon;
          return (
            <div
              key={i}
              className="bg-white p-4 rounded shadow flex items-start space-x-4 hover:bg-blue-50 transition duration-200 cursor-pointer"
            >
              <Icon className="w-10 h-10 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-sm font-semibold text-gray-800 mb-1">{app.title}</h2>
                <p className="text-sm text-gray-600">{app.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppDetail;
