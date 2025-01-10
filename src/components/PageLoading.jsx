import React from "react";

const PageLoading = () => {
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="h-1 w-full overflow-hidden">
        <div className="page-loading-progress w-full h-full bg-accent left-right" />
      </div>
    </div>
  );
};

export default PageLoading;
