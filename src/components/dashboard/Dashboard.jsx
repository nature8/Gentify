import React from 'react';
import assets from '../../assets/assets.js'

const Dashboard = () => {
  return (
    <div className="features-section  mt-10 bg-gray-50 py-12 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-800">Everything Your Team Looking For</h1>
        <p className="text-lg text-gray-500 mt-4">Ganttify's exceptional flexibility can handle any type of work. And we never stop innovating</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="feature-item p-6 bg-white rounded-lg shadow-md">
          <div className="feature-image bg-gray-200 rounded-md mb-4" style={{ height: '200px', width: '100%' }}>
          <img src={assets.Image1} alt="Feature Image" className="rounded-md mb-4" style={{ height: '200px', width: '100%' }} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Project Management</h3>
          <p className="text-gray-600 mt-2">Manage your projects from start to finish. With all of your projects in Ganttify, you’ll always know who’s doing what, by when.</p>
        </div>
        <div className="feature-item p-6 bg-white rounded-lg shadow-md">
          <div className="feature-image bg-gray-200 rounded-md mb-4" style={{ height: '200px', width: '100%' }}>
          <img src={assets.Image2} alt="Feature Image" className="rounded-md mb-4" style={{ height: '200px', width: '100%' }} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Workflows and Automations</h3>
          <p className="text-gray-600 mt-2">Create more efficient processes so you can seamlessly manage projects across departments and get more done in less time.</p>
        </div>
        <div className="feature-item p-6 bg-white rounded-lg shadow-md">
          <div className="feature-image bg-gray-200 rounded-md mb-4" style={{ height: '200px', width: '100%' }}>
          <img src={assets.Image3} alt="Feature Image" className="rounded-md mb-4" style={{ height: '200px', width: '100%' }} />    
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Goals and Reporting</h3>
          <p className="text-gray-600 mt-2">See how each project and portfolio ladders up to company objectives and keep everyone focused on the work that matters.</p>
        </div>
        <div className="feature-item p-6 bg-white rounded-lg shadow-md">
          <div className="feature-image bg-gray-200 rounded-md mb-4" style={{ height: '200px', width: '100%' }}>
          <img src={assets.Image4} alt="Feature Image" className="rounded-md mb-4" style={{ height: '200px', width: '100%' }} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Resource Management</h3>
          <p className="text-gray-600 mt-2">Get the visibility you need to plan accurate timelines, adjust workloads, and stay on track to achieve your objectives.</p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
