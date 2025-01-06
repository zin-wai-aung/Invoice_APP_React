import React, { useRef, useState } from "react";
import { HiChevronDown, HiChevronUp, HiSearch } from "react-icons/hi";
import { HiComputerDesktop } from "react-icons/hi2";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import useSWR from "swr";
import { debounce } from "lodash";
import Pagination from "../Pagination";
import {VoucherListSkeletonLoader,VoucherListRow} from "./";
import EmptyStage from "../EmptyStage";
import useCookie from "react-use-cookie";


const VoucherList = () => {

  const location = useLocation();
  const [params, setParams] = useSearchParams(); 


   const [token] = useCookie("my_token");
    
      const fetcher = (url) => fetch(url, {
        headers: {
          "Authorization": `Bearer ${token}`,
      }
      }).then((res) => res.json());
    
  
  const [fetchUrl, setFetchUrl] = useState(
    import.meta.env.VITE_API_URL + "/vouchers"+location.search
  );

  const searchInput = useRef();

  const { data, isLoading, error } = useSWR(fetchUrl, fetcher);

  const handleSearch = debounce((e) => {
    e.preventDefault();
    if(e.target.value){
      setParams({q:e.target.value })
    setFetchUrl(`${import.meta.env.VITE_API_URL}/vouchers?q=${e.target.value}`);
    } else {
      setParams({})
    setFetchUrl(`${import.meta.env.VITE_API_URL}/vouchers`);

    }
  }, 500);

  const updateFetchUrl = (url) => {
    const currentUrl = new URL(url);
    const newSearchParams = new URLSearchParams(currentUrl.search)
    const paramObject = Object.fromEntries(newSearchParams);
    setParams(paramObject);
    setFetchUrl(url);
  };

   const handleSort = (sortData) => {
     const sortParams = new URLSearchParams(sortData).toString();
     setParams(sortData);
     setFetchUrl(`${import.meta.env.VITE_API_URL}/vouchers?${sortParams}`);
   };
  
  return (
    <div>
      <div className=" flex justify-between mb-3">
        <div className="">
          <div className="">
            <label className="input input-bordered flex items-center">
              <input
                ref={searchInput}
                onChange={handleSearch}
                type="text"
                className="grow focus:outline-none focus:ring-0 border-none"
                placeholder="Search Product"
              />
              <HiSearch size={18} className=" text-neutral-500" />
            </label>
          </div>
        </div>
        <div className="">
          <Link to="/dashboard/sale">
            <button className="btn btn-active btn-accent">
              Create Sale
              <HiComputerDesktop />
            </button>
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="table table-zebra">
          {/* head */}
          <thead className=" shadow-lg">
            <tr>
              <th>
                <div className="flex items-center gap-1">
                  <span className=" flex flex-col">
                    <button
                      className=" hover:bg-accent hover:text-black"
                      onClick={handleSort.bind(null, {
                        sort_by: "id",
                        sort_direction: "asc",
                      })}
                    >
                      <HiChevronUp />
                    </button>
                    <button
                      className=" hover:bg-accent hover:text-black"
                      onClick={handleSort.bind(null, {
                        sort_by: "id",
                        sort_direction: "desc",
                      })}
                    >
                      <HiChevronDown />
                    </button>
                  </span>
                  <span>#</span>
                </div>
              </th>
              <th>Voucher ID</th>
              <th>Customer</th>
              <th className=" pe-10">
                <div className="flex items-center justify-end gap-1">
                  <span className=" flex flex-col">
                    <button
                      className=" hover:bg-accent hover:text-black"
                      onClick={handleSort.bind(null, {
                        sort_by: "total",
                        sort_direction: "asc",
                      })}
                    >
                      <HiChevronUp />
                    </button>
                    <button
                      className=" hover:bg-accent hover:text-black"
                      onClick={handleSort.bind(null, {
                        sort_by: "total",
                        sort_direction: "desc",
                      })}
                    >
                      <HiChevronDown />
                    </button>
                  </span>
                  <span>Total</span>
                </div>
              </th>
              <th>Created at</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <VoucherListSkeletonLoader />
            ) : data?.data?.length === 0 ? (
              <EmptyStage type={"Voucher"} />
            ) : (
              data?.data?.map((voucher) => (
                <VoucherListRow
                  token={token}
                  voucher={voucher}
                  key={voucher.id}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      {!isLoading && (
        <Pagination
          links={data.links}
          meta={data.meta}
          updateFetchUrl={updateFetchUrl}
        />
      )}
    </div>
  );
};

export default VoucherList;
