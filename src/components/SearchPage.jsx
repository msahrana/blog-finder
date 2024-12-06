"use client";
import React, {useState, useEffect} from "react";
import {data} from "@/data";
import ResultCard from "./ResultCard";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [results, setResults] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setAllData(data);
      setResults(data); // Initialize results with all data
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    const filtered = allData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) &&
        (category === "All" || item.category === category)
    );
    setResults(filtered);
  };

  const handleReset = () => {
    setQuery("");
    setCategory("");
    setResults(allData); // Reset results to show all data
  };

  return (
    <div className="p-4 max-w-screen-2xl mx-auto text-[#3D5C65]">
        <h1 className="text-4xl font-bold my-5 text-center">All Blogs</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          className="flex-grow p-2 border rounded-md"
          placeholder="Search articles by name ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="p-2 border rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Tech">Tech</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Education">Education</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <button
          className="bg-[#58C3E5] text-white px-5 py-2 rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="bg-[#FF6600] text-white px-5 py-2 rounded-md"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {results.length > 0 ? (
          results.map((result) => (
            <ResultCard key={result.id} result={result} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
