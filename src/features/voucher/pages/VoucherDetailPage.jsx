import React from "react";
import Container from "../../../components/Container";
import Breadcrumb from "../../../components/BreadCrumb";
import VoucherDetailCard from "../components/VoucherDetailCard";

const VoucherDetailPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb
          currentPageTitle={"Invoice Detail"}
          links={[{ title: "Invoice Module", path: "/dashboard/invoices" }]}
        />
        <VoucherDetailCard />
      </Container>
    </section>
  );
};

export default VoucherDetailPage;
