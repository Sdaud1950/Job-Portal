import React, { useContext, useEffect, useMemo } from "react";
import { JobContext } from "../Context/JobContext";

const Search = () => {
  const {
    searchTerm,
    setSearchTerm,
    debouncedSearchTerm,
    setDebouncedSearchTerm,
    jobs
  } = useContext(JobContext);

  // Debounce user input
  useEffect(() => {
    const handleDebounce = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(handleDebounce);
  }, [searchTerm, setDebouncedSearchTerm]);


  return (
    <div className="flex justify-end pl-3">
      {/* Search Input */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search jobs..."
        className="p-3 mt-4 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default Search;
