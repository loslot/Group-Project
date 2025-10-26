import React from 'react';
import { useNavigate, useLocation } from 'react-router';

export default function NotFound_404() {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the parent route
  const getParentRoute = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    pathSegments.pop(); // Remove the last segment
    return pathSegments.length > 0 ? `/${pathSegments.join('/')}` : '/';
  };

  const handleGoBack = () => {
    const parentRoute = getParentRoute();
    navigate(parentRoute);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
        <button
          onClick={handleGoBack}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Go Back to Parent Page
        </button>
      </div>
    </div>
  );
}