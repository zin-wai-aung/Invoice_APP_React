import React from "react";
import toast from "react-hot-toast";
import useRecordStore from "../../stores/useRecordStore";

const VoucherTableRow = ({
  record: {
    product: { id, product_name, price },
    product_id,
    quantity,
    cost,
  },
  index,
}) => {
  const { removeRecord, changeQuantity } = useRecordStore();

  // Fix: Added the removeRecord call inside handleDelete
  const handleDelete = () => {
    removeRecord(product_id); // Pass the product_id to removeRecord
    toast.success("Product removed successfully"); // Notify user about successful deletion
  };

  const handleIncreaseQuantity = () => {
    changeQuantity(product_id, 1); // Ensure correct ID is passed
  };

  const handleDecreaseQuantity = () => {
    changeQuantity(product_id, -1); // Ensure correct ID is passed
  };

  return (
    <tr className="group">
      <td className="px-6 py-4 td-counter">{index + 1}</td>
      <th scope="row">{product_name}</th>
      <td className="px-6 py-4 text-end record-price">{price}</td>
      <td className="px-6 py-4 text-center">
        <button
          onClick={handleDecreaseQuantity}
          className="q-sub pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 -translate-x-6 group-hover:translate-x-0 duration-200 bg-slate-700 text-white p-1 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-3 h-3 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
        </button>
        <span className="record-q w-5 inline-block"> {quantity} </span>
        <button
          onClick={handleIncreaseQuantity}
          className="q-add pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 duration-200 bg-slate-700 text-white p-1 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-3 h-3 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </td>
      <td className="px-6 py-4 text-end relative">
        <span className="record-cost"> {cost} </span>
      </td>
      <td>
        <button
          onClick={handleDelete} // Ensure this triggers the deletion
          className="pointer-events-none duration-200 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto left-full top-3 translate-x-2 active:scale-75 bg-slate-700 text-white p-2 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 pointer-events-none stroke-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default VoucherTableRow;
