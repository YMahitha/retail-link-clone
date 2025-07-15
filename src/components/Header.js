import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const tabs = ['Home', 'Apps', 'Docs', 'Feeds', 'Business', 'Academy'];

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-md px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-8">
        <img src="/images/image.png" alt="Retail Link" className="h-8 mr-3" />
        <nav className="flex space-x-6">
          {tabs.map((tab) => {
            const path = tab.toLowerCase();
            const isActive = location.pathname === `/${path}` || (tab === 'Home' && location.pathname === '/');
            return (
              <Link
                key={tab}
                to={tab === 'Home' ? '/' : `/${path}`}
                className={`pb-1 border-b-2 text-sm font-medium ${
                  isActive ? 'text-blue-600 border-blue-600' : 'text-gray-700 border-transparent'
                } hover:text-blue-600`}
              >
                {tab}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-3 py-1 text-sm focus:outline-none"
        />
        <span className="text-xl">❓ 🔔 ⚙️ ⭐  👤</span>
      </div>
    </header>
  );
};

export default Header;
