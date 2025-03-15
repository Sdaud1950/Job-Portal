import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-indigo-50 shadow-lg p-6 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{job.title}</h3>
      <p className="text-lg text-gray-600 mb-2">{job.location}</p>
      <p className="text-2xl text-green-600 font-semibold mb-4">{job.salary}/year</p>
      <Link
        to={`/job/${job.id}`}
        className="text-blue-500 hover:text-blue-700 font-semibold text-lg transition-colors duration-300"
      >
        View Details
      </Link>
    </div>
  );
};

export default JobCard;
