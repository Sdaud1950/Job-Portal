import React from "react";
import { useNavigate } from "react-router";

const HOC = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();

    return (
      <div>
        <button
          onClick={() => navigate("/job")}
          className="bg-blue-500 text-white hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 mt-10 ml-2 transition"
        >
          Go Back to Job Listing...
        </button>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default HOC;
