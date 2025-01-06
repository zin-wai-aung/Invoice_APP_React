import React from "react";
import { Container, ModuleBtn } from "../components";
import { AiFillProduct } from "react-icons/ai";
import { FaFileInvoice } from "react-icons/fa6";
import { MdAssignmentAdd } from "react-icons/md";

const DashboardPage = () => {
  return (
    <section>
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-5">
          <div className=" col-span-1 row-span-1">
            <ModuleBtn
              name={"Product Module"}
              icon={<AiFillProduct className=" size-14" />}
              url={"/dashboard/product"}
            />
          </div>
          <div className=" col-span-1 row-span-1">
            <ModuleBtn
              name={"Sale Module"}
              icon={<MdAssignmentAdd className=" size-14" />}
              url={"/dashboard/sale"}
            />
          </div>
          <div className=" col-span-1 row-span-1">
            <ModuleBtn
              name={"Invoice Module"}
              icon={<FaFileInvoice className=" size-14" />}
              url={"/dashboard/voucher"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DashboardPage;
