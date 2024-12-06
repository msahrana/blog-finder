import Link from "next/link";
import React from "react";

const ResultCard = ({result}) => {
  const {title, category, snippet, id} = result || {};

  return (
    <div className="card bg-[#f0f3f5] w-full shadow-xl">
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <h3>
          <span className="font-bold">Category: </span>
          {category}
        </h3>
        <p className="text-justify">
          <span className="font-bold">Description: </span>
          {snippet}
        </p>
        <div className="">
          <Link href={`/blog/${id}`}>
            <button className="btn btn-outline btn-info w-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
