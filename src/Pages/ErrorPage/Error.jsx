import React from 'react';
import { Link } from 'react-router';


const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-9xl font-extrabold text-gray-300">404</h1>
            <h2 className="text-3xl font-bold text-gray-700 mt-4">Page Not Found</h2>
            <p className="text-gray-500 mt-2">
                Sorry, the page you are looking for doesn’t exist or has been moved.
            </p>
            <Link 
                to="/" 
                className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition-colors"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default Error;