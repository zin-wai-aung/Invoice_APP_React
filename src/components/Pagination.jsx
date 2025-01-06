import React from "react";

const Pagination = ({
  links:{prev,next},
  meta: { total, to, from },
  updateFetchUrl,
}) => {
  const handlePrev = async () => {
    updateFetchUrl(prev);
  };

  const handleNext = async () => {
    updateFetchUrl(next);
  };

  return (
    <div className="flex justify-between items-center px-6 mt-5">
      {/* Help text */}
      <span className="text-sm text-accent">
        Showing <b> {from} </b> to <b> {to} </b> of <b> {total} </b> Entries
      </span>
      {/* Buttons */}
      <div className="inline-flex mt-2 xs:mt-0">
        <button disabled={!prev} onClick={handlePrev} className="join-item btn text-xl text-accent">
          «
        </button>

        <button disabled={!next} onClick={handleNext} className="join-item btn text-xl text-accent">
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;
