import html2pdf from "html2pdf.js";
import printJS from "print-js";
import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { IoPrint } from "react-icons/io5";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetchVouchers } from "../../../services/voucher";

const VoucherDetailCard = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/vouchers/" + id,
    fetchVouchers
  );

  if (isLoading)
    return (
      <div className="ml-32 mt-32">
        <span className="loading loading-spinner text-accent"></span>
      </div>
    );

  const handlePrint = () => {
    printJS({
      printable: "printArea",
      type: "html",
      scanStyles: true,
      css: [
        "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
      ],
    });
  };

  const handlePdf = () => {
    const element = document.getElementById("printArea");

    // Check if the element exists to avoid errors
    if (!element) {
      console.error("Element with id 'printArea' not found.");
      return;
    }

    // Correct options for html2pdf
    const opt = {
      margin: [10, 5], // Adjusted to avoid content clipping
      filename: "invoice.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 2, // Higher scale for better PDF quality
        logging: true, // Enable logging for debugging
        useCORS: true, // Handles cross-origin images
      },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" }, // Updated for standard A4
    };

    // Use html2pdf library to generate the PDF
    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .catch((error) => {
        console.error("Error generating PDF:", error);
      });
  };




  return (
    <div className="flex gap-x-20">
      <div id="printArea" className="w-[14.8cm] p-10 bg-neutral/30 rounded-xl">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">INVOICE</h1>
            <p className="text-xl">{data?.data?.voucher_id}</p>
          </div>
          <div className="text-right">
            <p className="italic">Invoice to</p>
            <p className="font-bold">{data?.data?.customer_name}</p>
            <p>Date: {data?.data?.sale_date}</p>
          </div>
        </div>

        <table className="table table-zebra">
          <thead>
            <tr className="border-b-2 border-gray-500">
              <th className="text-left py-2 text-sm">No</th>
              <th className="text-left py-2 text-sm">Description</th>
              <th className="text-right py-2 text-sm">Qty</th>
              <th className="text-right py-2 text-sm">Price</th>
              <th className="text-right py-2 text-sm">Total</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.records.map((record, index) => (
              <tr key={record.id} className="border-b border-gray-500">
                <td className="py-2 text-sm">{index + 1}</td>
                <td className="py-2 text-sm">{record.product.product_name}</td>
                <td className="text-right py-2 text-sm">{record.quantity}</td>
                <td className="text-right py-2 text-sm">
                  {record.product.price}
                </td>
                <td className="text-right py-2 text-sm">{record.cost}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-b border-gray-500">
              <td className="py-2 text-right text-sm" colSpan={4}>
                Total
              </td>
              <td className="py-2 text-right text-sm">
                {parseFloat(data?.data?.total).toFixed(2)}
              </td>
            </tr>
            <tr className="border-b border-gray-500">
              <td className="py-2 text-right text-sm" colSpan={4}>
                Tax
              </td>
              <td className="py-2 text-right text-sm">
                {parseFloat(data?.data?.tax).toFixed(2)}
              </td>
            </tr>
            <tr className="border-b border-gray-500">
              <td className="py-2 text-right text-sm" colSpan={4}>
                Net Total
              </td>
              <td className="py-2 text-right text-sm">
                {parseFloat(data?.data?.net_total).toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>

        <div className="text-xs my-10">
          <div>
            <h2 className="font-bold mb-2">Payment Transfer to</h2>
            <p>09123456789</p>
            <p>02593566346238</p>
            <p>300459812010</p>
          </div>
          <div>
            <h2 className="font-bold text-lg">InvoiceGenerator</h2>
            <p>48, Rose Street, Jasmine.</p>
            <p>+00-123-456-789</p>
            <p>enquiry@example.com</p>
          </div>
        </div>

        <div className="border-t-2 border-gray-300 pt-4">
          <p className="mt-4 text-center text-sm">Thank You</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <button
          className=" btn btn-accent text-neutral"
          onClick={handlePrint}
        >
          Print Voucher
          <IoPrint className=" text-xl"/>
        </button>

        <button
          className="btn btn-accent text-neutral"
          onClick={handlePdf}
        >
          Download PDF
          <FaFileDownload className=" text-xl"/>
        </button>
      </div>
    </div>
  );
};

export default VoucherDetailCard;
