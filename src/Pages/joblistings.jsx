import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { JobContext } from '../Context/JobContext'
import { FaLocationDot } from "react-icons/fa6";
import HOC from '../Component/HOC'


const JobDetails = () => {
  const { id } = useParams();
  const { jobs, view, setview } = useContext(JobContext);
  const job = jobs.find((job) => job.id === id);

  if (!job) return <h2>Job not found!</h2>;


  const HandelView = () => {
    setview(!view)
  }
  return (
    <div className=" bg-indigo-50 shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 m-20">
      <h1 className="text-3xl font-bold ">{job.title}</h1>
      <p className="text-gray-700"> {view ? job.description : `${job.description.substring(0, 100)}...`}{" "}

        <button onClick={HandelView} className="font-bold cursor-pointer">{view ? "ViewLess" : "ViewMore"}</button>
      </p>
      <p className="text-indigo-500">Salary:{job.salary}/year</p>
      <p className="text-orange-600 flex items-center gap-1 py-0.5">
  <FaLocationDot />
  {job.location}
</p>

    </div>
  );
};

export default HOC (JobDetails);
