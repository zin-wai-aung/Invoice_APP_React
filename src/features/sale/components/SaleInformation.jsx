import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { tailspin } from "ldrs";
import toast from "react-hot-toast";
import useRecordStore from "../../../stores/useSaleProductStore";
import generateInvoiceNumber from "../../../utils/generateInvoiceNumber";
import { storeVoucher } from "../../../services/voucher";
tailspin.register();

const SaleInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const [isSending, setIsSending] = useState(false);

  const { records, resetRecord } = useRecordStore();

  const onSubmit = async (data) => {
    setIsSending(true);

    const total = records.reduce((a, b) => a + b.cost, 0);
    const tax = total * 0.07;
    const net_total = total + tax;

    const currentVoucher = { ...data, records, total, tax, net_total };

    const res = await storeVoucher(currentVoucher)
    const json = await res.json();

    if (res.status === 201) {
      toast.success("Voucher created successfully");

      resetRecord();

      reset();

      setIsSending(false);

      if (data.redirect_to_detail) {
        navigate(`/dashboard/invoice-detail/${json.data.id}`);
      }
    } else {
      toast.error(res.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex flex-col h-full"
      id="infoForm"
    >
      <div className=" grid grid-cols-1 gap-5 mb-10">
        <div className=" col-span-1">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Voucher Id</span>
            </div>
            <input
              type="text"
              defaultValue={generateInvoiceNumber()}
              {...register("voucher_id", {
                required: true,
              })}
              className={`input input-bordered w-full ${
                errors.voucher_id
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : ""
              }`}
            />
          </label>

          {errors.voucher_id?.type === "required" && (
            <p className=" text-red-500 text-sm mt-1">Voucher ID is required</p>
          )}
        </div>
        <div className=" col-span-1">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Customer Name</span>
            </div>
            <input
              type="text"
              {...register("customer_name", {
                required: true,
              })}
              className={`input input-bordered w-full ${
                errors.customer_name
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : ""
              }`}
            />
          </label>
        </div>
        <div className=" col-span-1">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Customer Email</span>
            </div>
            <input
              type="text"
              {...register("customer_email", {
                required: true,
              })}
              className={`input input-bordered w-full ${
                errors.customer_email
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : ""
              }`}
            />
          </label>
        </div>
        <div className=" col-span-1">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Sale Date</span>
            </div>
            <input
              type="date"
              defaultValue={new Date().toISOString().slice(0, 10)}
              {...register("sale_date", {
                required: true,
              })}
              className={`input input-bordered w-full ${
                errors.sale_date
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : ""
              }`}
            />
          </label>
        </div>
      </div>
      <div className=" flex flex-col justify-end items-end mt-auto gap-3">
        <label className="cursor-pointer label">
          <span className="label-text me-1"> Redirect to Invoice Detail</span>
          <input
            {...register("redirect_to_detail")}
            form="infoForm"
            id="redirect_to_detail"
            type="checkbox"
            className="checkbox checkbox-accent checkbox-sm"
          />
        </label>

        <label className="cursor-pointer label">
          <span className="label-text me-1 text-nowrap">
            {" "}
            Make sure all field are correct
          </span>
          <input
            {...register("all_correct")}
            required
            form="infoForm"
            id="all-correct"
            type="checkbox"
            className="checkbox checkbox-accent checkbox-sm"
          />
        </label>

        <button
          type="submit"
          form="infoForm"
          className=" btn btn-accent w-full btn-lg"
        >
          <span>Confirm Invoice</span>
          {isSending && (
            <l-tailspin
              size="20"
              stroke="5"
              speed="0.9"
              color="white"
            ></l-tailspin>
          )}{" "}
        </button>
      </div>
    </form>
  );
};

export default SaleInformation;
