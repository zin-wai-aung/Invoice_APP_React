import React from "react";
import useRecordStore from "../../stores/useRecordStore";
import VoucherTableRow from "./VoucherTableRow";

const VoucherTable = () => {
  const { records } = useRecordStore();

  const total = records.reduce((a, b) => a + b.cost, 0);
  const tax = total * 0.07;
  const net_total = total + tax;

  return (
    <div className="relative shadow-md sm:rounded-lg overflow-hidden">
      <table className="table table-zebra">
        <thead className="shadow-md">
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th className="text-end">Price</th>
            <th className=" text-center">Quantity</th>
            <th className=" text-end">Cost</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="recordGroup">
          {records.length === 0 && (
            <tr className="hidden last:table-row border-b border-neutral-content/40">
              <td colSpan={6} className="px-6 py-6 text-center">
                There is no record. Buy Something
              </td>
            </tr>
          )}

          {records.map((record, index) => (
            <VoucherTableRow
              key={record.product.id}
              record={record}
              index={index}
            />
          ))}
        </tbody>
        <tfoot>
          <tr className="border-b border-neutral-content/40">
            <td className="px-6 py-4 text-end" colSpan={4}>
              Total
            </td>
            <td className="px-6 py-4 text-end">{total.toFixed(2)}</td>
            <td className="px-6 py-4 text-end"> </td>
          </tr>
          <tr className="border-b border-neutral-content/40">
            <td className="px-6 py-4 text-end" colSpan={4}>
              Tax (Vat 7%)
            </td>
            <td className="px-6 py-4 text-end">{tax.toFixed(2)}</td>
            <td className="px-6 py-4 text-end"> </td>
          </tr>
          <tr className="border-b border-neutral-content/40">
            <td className="px-6 py-4 text-end" colSpan={4}>
              Net Total (THB)
            </td>
            <td className="px-6 py-4 text-end">{net_total.toFixed(2)}</td>
            <td className="px-6 py-4 text-end"> </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default VoucherTable;
