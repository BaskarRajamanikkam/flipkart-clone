import React, { useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string';

const HomeCategoryBox = ({ label, icon, selected }) => {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();

   const handleClick = useCallback(() => {
        let currentQuery = {};
  
        // Parse current params
        if (params) {
            currentQuery = qs.parse(params.toString());
        }
  
        // Update the query parameter with the selected category
        const updatedQuery = {
            ...currentQuery,
            category: label,
        };
  
        // Toggle category if already selected
        if (params.get('category') === label) {
            delete updatedQuery.category;
        }
  
        // Determine the path based on the category
        const path = 'products'; // e.g., "Mobiles" -> "/mobiles"
        const url = qs.stringifyUrl({ url: `/${path}`, query: updatedQuery }, { skipNull: true });
  
        // Navigate to the new URL
        navigate(url);
    }, [label, navigate, params]);

   
  return (
    <div onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-1 p-2 border-b-2 hover:text-neutral-800 transition cursor-pointer
        ${selected ? "border-b-neutral-800" : "border-transparent"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}`}
    >
      <img
        src={icon}
        alt={label}
        draggable="false"
        className="size-16 object-contain"
      />
      <span className="text-base   text-gray-800 font-medium group-hover:text-primary-blue">
        {label}
      </span>
    </div>
  );
};

export default HomeCategoryBox;
