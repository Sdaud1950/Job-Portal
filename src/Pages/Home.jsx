import React, { useContext, } from 'react'
import { JobContext } from '../Context/JobContext'
import JobCard from '../Component/JobCard'

const Home = () => {
    const { jobs,Loading,searchTerm } = useContext(JobContext)
  
const filterData=jobs.filter((job)=>job.title.toLowerCase().includes(searchTerm.toLowerCase()))
return (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Latest Jobs</h1>

    {/* ✅ Added Search Component */}

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Loading ? (
        <h1>Loading...</h1>
      ) : filterData.length > 0 ? (
        filterData.map((job) => <JobCard key={job.id} job={job} />) // ✅ Corrected
      ) : (
        <p>No jobs found</p> // ✅ Show message if no matching jobs
      )}
    </div>
  </div>
);
}

export default Home
