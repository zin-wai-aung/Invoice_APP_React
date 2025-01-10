import React from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Sortable = ({ children ,handleSort,sort_by,isRight}) => {
  return (
    <div className={`flex items-center gap-1 ${isRight && "justify-end"}`}>
      <span className=" flex flex-col">
        <button
          className=" hover:bg-accent hover:text-black"
          onClick={handleSort.bind(null, {
            sort_by: sort_by,
            sort_direction: "asc",
          })}
        >
          <HiChevronUp />
        </button>
        <button
          className=" hover:bg-accent hover:text-black"
          onClick={handleSort.bind(null, {
            sort_by: sort_by,
            sort_direction: "desc",
          })}
        >
          <HiChevronDown />
        </button>
      </span>
      <span> {children} </span>
    </div>
  );
};

export default Sortable;
