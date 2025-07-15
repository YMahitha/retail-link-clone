import React from 'react';

const announcements = [
  {
    title: 'Announcement: New Store Opening Announcement – 2467 Pace, FL',
    date: 'Jul 14, 2025',
    image: '/assets/feeds/feed1.jpg',
  },
  {
    title: 'Announcement: New Store Opening – 1484 Melissa, TX',
    date: 'Jul 04, 2025',
    image: '/assets/feeds/feed2.jpg',
  },
  {
    title: 'Announcement: New Hampshire PFAS',
    date: 'Jun 30, 2025',
    image: '/assets/feeds/feed3.jpg',
  },
  {
    title: 'Announcement: Washington Limits Lead in Aluminum and Brass',
    date: 'Jun 25, 2025',
    image: '/assets/feeds/feed4.jpg',
  },
  {
    title: 'Announcement: Apparel Products PFAS Compliance Dates',
    date: 'Jun 25, 2025',
    image: '/assets/feeds/feed5.jpg',
  },
  {
    title: 'Announcement: Oregon Updates List of Chemicals of High Concern to',
    date: 'Jun 25, 2025',
    image: '/assets/feeds/feed6.jpg',
  },
  {
    title: 'Announcement: Welcome to Supplier Academy Webinar – New Webinar',
    date: 'Jun 18, 2025',
    image: '/assets/feeds/feed7.jpg',
  },
  {
    title: 'Announcement: California Regulations for Micromobility',
    date: 'Jun 16, 2025',
    image: '/assets/feeds/feed8.jpg',
  },
  {
    title: 'Announcement: New Store Opening – 1725 Eagle Mountain, UT',
    date: 'Jun 16, 2025',
    image: '/assets/feeds/feed9.jpg',
  },
  {
    title: 'Announcement: Supercenter Conversion Ceremony – 2280',
    date: 'Jun 12, 2025',
    image: '/assets/feeds/feed10.jpg',
  },
  {
    title: 'Announcement: New Store Opening – 2983 Milton, FL',
    date: 'Jun 12, 2025',
    image: '/assets/feeds/feed11.jpg',
  },
  {
    title: 'Announcement: Bisphenol in Products for Juveniles in California',
    date: 'Jun 11, 2025',
    image: '/assets/feeds/feed12.jpg',
  },
  {
    title: 'Announcement: New Store Opening – 263 Frisco, TX',
    date: 'May 30, 2025',
    image: '/assets/feeds/feed13.jpg',
  },
  {
    title: 'Announcement: Store 1317 Asheville, NC – Re-Open Announcement',
    date: 'May 28, 2025',
    image: '/assets/feeds/feed14.jpg',
  },
  {
    title: 'Announcement: Updated Safety Standard for Stationary Activity',
    date: 'May 20, 2025',
    image: '/assets/feeds/feed15.jpg',
  },
  {
    title: 'Announcement: Ability for Suppliers to Submit Co-ops in Supplier One for',
    date: 'May 14, 2025',
    image: '/assets/feeds/feed16.jpg',
  },
  {
    title: 'Announcement: Changes to PFAS-Related Claims',
    date: 'Apr 30, 2025',
    image: '/assets/feeds/feed17.jpg',
  },
  {
    title: 'Announcement: New Store Opening Announcement – 7011 Liberty, NC',
    date: 'Apr 22, 2025',
    image: '/assets/feeds/feed18.jpg',
  },
  {
    title: 'Announcement: New Store Opening Re-Announcement – 2500',
    date: 'Apr 22, 2025',
    image: '/assets/feeds/feed19.jpg',
  },
  {
    title: 'Announcement: Changes to "Made in USA" Claims for Private Brands',
    date: 'Apr 18, 2025',
    image: '/assets/feeds/feed20.jpg',
  },
  {
    title: 'Announcement: New Survey: Admin User Access Review',
    date: 'Nov 21, 2024',
    image: '/assets/feeds/feed21.jpg',
  },
];

const Feeds = () => {
  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Announcements</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Announcements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {announcements.map((item, index) => (
            <div key={index} className="rounded shadow bg-white overflow-hidden border">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-sm font-medium text-gray-900 leading-snug">{item.title}</h2>
                <p className="text-xs text-gray-500 mt-1">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* News Sidebar */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-white shadow rounded border p-6 h-full flex flex-col items-center text-center">
            <h2 className="text-lg font-medium text-gray-800 mb-4">News</h2>
            <p className="text-sm text-gray-600 mb-4">There are no news to display today.</p>
            <img src="/assets/feeds/news-icon.png" alt="News" className="w-24 h-24 opacity-70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
