import { createContext, useState, useEffect, useMemo } from "react";

export const JobContext = createContext();

export const JobContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]); // Ensuring it's always an array
  const [savedJobs, setSavedJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [Loading,setLoding]=useState(false)
  const [view,setview]=useState(false)


  // Fetch jobs
  useEffect(() => {
    const fetchJobs = async () => {
      setLoding(true); // Start loading

      try {
        const res = await fetch("http://localhost:8000/jobs");
        const data = await res.json();
        // Ensure the data is an array before setting state
        if (Array.isArray(data)) {
            console.log(data)
          setJobs(data);
        } else {
          console.error("API response is not an array:", data);
          setJobs([]); // Fallback to empty array
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setJobs([]); // Prevents `undefined` issues
      } finally{
        setLoding(false)
      }
    };

    fetchJobs();
  }, []);



  return (
    <JobContext.Provider value={{ jobs,debouncedSearchTerm,setDebouncedSearchTerm, savedJobs, setSavedJobs, searchTerm, setSearchTerm ,Loading,setLoding,view,setview}}>
      {children}
    </JobContext.Provider>
  );
};
