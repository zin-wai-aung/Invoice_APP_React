import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/BreadCrumb";
import VoucherDetailCard from "../components/voucher/VoucherDetailCard";

const VoucherDetailPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb
          currentPageTitle={"Voucher Detail"}
          links={[{ title: "Voucher Module", path: "/voucher" }]}
        />
        <VoucherDetailCard/>
      </Container>
    </section>
  );
};

export default VoucherDetailPage;
