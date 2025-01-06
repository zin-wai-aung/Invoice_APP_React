import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { HiPlus } from "react-icons/hi2";
import useSWR from "swr";
import ProductListSkeletonLoader from "./ProductListSkeletonLoader";
import EmptyStage from "../EmptyStage";
import ProductListRow from "./ProductListRow";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import Pagination from "../Pagination";
import useCookie from "react-use-cookie";
import { FaPlus } from "react-icons/fa";


const ProductList = () => {

  const [token] = useCookie("my_token");

  const fetcher = (url) => fetch(url, {
    headers: {
      "Authorization": `Bearer ${token}`,
  }
}).then((res) => res.json());


  const [fetchUrl, setFetchUrl] = useState(
    import.meta.env.VITE_API_URL + "/products"
  );

  const { data, isLoading, error } = useSWR(fetchUrl, fetcher);

  const handleSearch = debounce((e) => {
    e.preventDefault();
    setFetchUrl(`${import.meta.env.VITE_API_URL}/products?q=${e.target.value}`);
  }, 500);

  const updateFetchUrl = (url) => {
    setFetchUrl(url);
  };

  return (
    <div>
      <div className=" flex justify-between mb-3">
        <div className="">
          <label className="input input-bordered flex items-center">
            <input
              onChange={handleSearch}
              type="text"
              className="grow focus:outline-none focus:ring-0 border-none"
              placeholder="Search Product"
            />
            <HiSearch size={18} className=" text-neutral-500" />
          </label>
        </div>
        <div className="">
          <Link to="/dashboard/product/create">
            <button className="btn btn-active btn-accent">
              Add new Product
              <FaPlus size={14} />
            </button>
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Created at</th>
              <th>Updated at</th>
              <th>Action</th>
            </tr>
          </thead>
            <tbody>
              {isLoading ? (
                <ProductListSkeletonLoader />
              ) : data?.data?.length === 0 ? (
                <EmptyStage type={"Product"} />
              ) : (
                data?.data?.map((product) => (
                  <ProductListRow token={token} product={product} key={product.id} />
                ))
              )}
            </tbody>
        </table>
      </div>
      {/* {!isLoading && (
        <Pagination
          links={data?.links}
          meta={data?.meta}
          updateFetchUrl={updateFetchUrl}
        />
      )}{" "} */}
    </div>
  );
};

export default ProductList;
