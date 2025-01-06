import React from "react";
import { BiUser } from "react-icons/bi";
import { HiChevronRight, HiMiniHome } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Breadcrumb = ({currentIcon, currentPageTitle, links,linkIcon }) => {
  return (
    <div className=" w-full flex gap-3 mb-5">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex  items-center">
            <Link
              to="/dashboard"
              className="inline-flex gap-1 items-center text-sm font-medium text-neutral-500 hover:text-accent dark:text-gray-400 dark:hover:text-accent"
            >
              <HiMiniHome />
              Home
            </Link>
          </li>

          {links &&
            links.map((link, index) => (
              <li key={index} className="inline-flex  items-center">
                <Link
                  to={link.path}
                  className="inline-flex gap-1 items-center text-sm font-medium text-neutral-500  dark:hover:text-white"
                >
                  <HiChevronRight />
                  <span className="ms-1 flex items-center gap-x-1 text-sm font-medium text-neutral-500 hover:text-accent  md:ms-2 dark:text-gray-400">
                    {link.icon}
                    {link.title}
                  </span>
                </Link>
              </li>
            ))}

          <li aria-current="page">
            <div className="flex items-center">
              <HiChevronRight />
              <span className="ms-1 flex items-center gap-x-1 text-sm font-medium text-neutral-content md:ms-2 dark:text-gray-400">
                {currentIcon}
                {currentPageTitle}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
