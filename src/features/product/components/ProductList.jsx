import { HiSearch } from "react-icons/hi";
import ProductListSkeletonLoader from "./ProductListSkeletonLoader";
import EmptyStage from "../../../components/EmptyStage";
import ProductListRow from "./ProductListRow";
import { Link } from "react-router-dom";
import Pagination from "../../../components/Pagination";
import { FaPlus } from "react-icons/fa";
import Sortable from "../../../components/Sortable";
import useProduct from "../hooks/useProduct";
const ProductList = () => {
  
  const { data, isLoading, handleSearch, updateFetchUrl, handleSort } = useProduct();

  return (
    <div className=" mb-10">
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
          <Link to="/dashboard/product-create">
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
              <th>
                {" "}
                <Sortable handleSort={handleSort} sort_by={`id`}>
                  #
                </Sortable>
              </th>
              <th>
                {" "}
                <Sortable handleSort={handleSort} sort_by={`product_name`}>
                  Product Name
                </Sortable>
              </th>
              <th>
                <Sortable handleSort={handleSort} sort_by={`price`}>
                  Price
                </Sortable>
              </th>
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
                <ProductListRow
                  product={product}
                  key={product.id}
                />
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
