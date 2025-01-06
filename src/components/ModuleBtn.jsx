import React from "react";
import { Link } from "react-router-dom";

const ModuleBtn = ({ name, icon, url }) => {
  return (
    <Link
      to={url}
      className="flex h-full flex-col gap-3 items-center bg-accent text-black p-5 rounded-lg "
    >
      {icon}
      {name}
    </Link>
  );
};

export default ModuleBtn;
