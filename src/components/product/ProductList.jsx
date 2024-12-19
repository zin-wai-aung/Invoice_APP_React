import React, { useState } from "react";
import { HiSearch, HiX } from "react-icons/hi";
import { HiPlus } from "react-icons/hi2";
import useSWR from "swr";
import ProductListSkeletonLoader from "./ProductListSkeletonLoader";
import EmptyStage from "../EmptyStage";
import ProductListRow from "./ProductListRow";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import Pagination from "../Pagination";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductList = () => {
  const [fetchUrl, setFetchUrl] = useState(
    import.meta.env.VITE_API_URL + "/products"
  );

  const { data, isLoading, error } = useSWR(fetchUrl, fetcher);

  const handleSearch = debounce((e) => {
    e.preventDefault();
    setFetchUrl(`${import.meta.env.VITE_API_URL}/products?`);
  }, 500);

  const updateFetchUrl = (url) => {
    setFetchUrl(url);
  };

  return (
    <div>
      <div className=" flex justify-between mb-3">
        <div className="">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <HiSearch className="w-4 h-4 text-stone-500 dark:text-stone-400" />
            </div>
            <input
              type="text"
              onChange={handleSearch}
              className="bg-gray-50 border border-gray-300 text-stone-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Product"
            />
          </div>
        </div>
        <div className="">
          <Link
            to="/product/create"
            className="text-white flex justify-center items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add new Product
            <HiPlus />
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-stone-500 dark:text-stone-400">
          <thead className="text-xs text-stone-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-stone-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>

              <th scope="col" className="px-6 py-3 text-end">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Created At
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Updated At
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <ProductListSkeletonLoader />
            ) : data?.data?.length === 0 ? (
              <EmptyStage type={"Product"} />
            ) : (
              data?.data?.map((product) => (
                <ProductListRow product={product} key={product.id} />
              ))
            )}
          </tbody>
        </table>
      </div>
      {!isLoading && (
        <Pagination
          links={data?.links}
          meta={data?.meta}
          updateFetchUrl={updateFetchUrl}
        />
      )}{" "}
    </div>
  );
};

export default ProductList;
