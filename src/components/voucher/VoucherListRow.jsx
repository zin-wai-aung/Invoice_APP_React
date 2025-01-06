import React, { useState } from "react";

import { HiOutlineArrowLongRight,HiOutlineTrash } from "react-icons/hi2";
import ShowDate from "../ShowDate";
import { useSWRConfig } from "swr";
import { bouncy } from "ldrs";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

bouncy.register();
const VoucherListRow = ({
  token,
  voucher: {
    id,
    voucher_id,
    customer_name,
    customer_email,
    total,
    created_at,
  },
}) => {
  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteBtn = async () => {
    setIsDeleting(true);

    await fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    mutate(import.meta.env.VITE_API_URL + `/vouchers`);
    toast.success("Voucher deleted successfully");
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{voucher_id}</td>
      <th className="px-6 py-4 font-medium  whitespace-nowrap flex flex-col">
        <span className="text-slate-300">{customer_name}</span>
        <span className=" text-sm text-slate-500">{customer_email}</span>{" "}
      </th>
      <td className=" text-end pe-10">{total}</td>
      <td>
        <ShowDate timestamp={created_at} />
      </td>

      <td>
        <div className="inline-flex  rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={handleDeleteBtn}
            className="size-10 flex justify-center items-center text-sm font-medium text-red-600 bg-neutral rounded-s-lg hover:bg-neutral-800 hover:text-accent focus:z-10 focus:ring-2"
          >
            {isDeleting ? (
              <l-bouncy size="20" speed="1.75" color="red"></l-bouncy>
            ) : (
              <HiOutlineTrash />
            )}
          </button>
          <Link
            to={`/dashboard/voucher/detail/${id}`}
            className="size-10 flex justify-center items-center text-sm font-medium  bg-neutral rounded-e-lg hover:bg-neutral-800 hover:text-accent focus:z-10 focus:ring-2"
          >
            <HiOutlineArrowLongRight />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default VoucherListRow;
