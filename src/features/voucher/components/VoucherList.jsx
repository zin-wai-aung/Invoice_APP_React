import { HiSearch } from "react-icons/hi";
import EmptyStage from "../../../components/EmptyStage";
import { Link } from "react-router-dom";
import Pagination from "../../../components/Pagination";
import Sortable from "../../../components/Sortable";
import VoucherListRow from "./VoucherListRow";
import VoucherListSkeletonLoader from "./VoucherListSkeletonLoader";
import { FiMonitor } from "react-icons/fi";
import useVoucher from "../hooks/useVoucher";
const VoucherList = () => {
  const {data,isLoading,handleSearch,updateFetchUrl,handleSort} = useVoucher()
  return (
    <div>
      <div className=" flex justify-between mb-3">
        <div className="">
          <label className="input input-bordered flex items-center">
            <input
              onChange={handleSearch}
              type="text"
              className="grow focus:outline-none focus:ring-0 border-none"
              placeholder="Search Invoice"
            />
            <HiSearch size={18} className=" text-neutral-500" />
          </label>
        </div>
        <div className="">
          <Link to="/dashboard/product-create">
            <button className="btn btn-active btn-accent">
              Create Sale
              <FiMonitor size={14} />
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
                <Sortable handleSort={handleSort} sort_by={`voucher_id`}>
                  # ID
                </Sortable>
              </th>
              <th>
                {" "}
                <Sortable handleSort={handleSort} sort_by={`customer_name`}>
                  Customer
                </Sortable>
              </th>
              <th>
                {" "}
                <Sortable isRight={true} handleSort={handleSort} sort_by={`tax`}>
                  Tax
                </Sortable>
              </th>
              <th>
                <Sortable isRight={true} handleSort={handleSort} sort_by={`total`}>
                  Total
                </Sortable>
              </th>
              <th>Created at</th>
              <th>Updated at</th>
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
                <VoucherListRow voucher={voucher} key={voucher.id} />
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

export default VoucherList;
