import React from 'react';

const Section = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Ganttify</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Product</li>
              <li>Pricing</li>
              <li>Customer Success</li>
              <li>Templates</li>
              <li>Trust & Security</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Project Management</li>
              <li>Goal Management</li>
              <li>Agile Management</li>
              <li>Task Management</li>
              <li>Productivity</li>
              <li>Work Management</li>
              <li>Project Planning</li>
              <li>To Do Lists</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Company</li>
              <li>Leadership</li>
              <li>Customers</li>
              <li>Careers</li>
              <li>Changelog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Help Center</li>
              <li>FAQ</li>
              <li>Developers & API</li>
              <li>Community</li>
              <li>Events</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Helpful Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Legal Center</li>
              <li>Privacy Policy</li>
              <li>Partnerships</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section;