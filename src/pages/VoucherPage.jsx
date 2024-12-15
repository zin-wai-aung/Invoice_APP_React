import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import VoucherList from "../components/VoucherList";

const VoucherPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"Voucher Module"} />
        <VoucherList/>
    </Container>
    </section>
  );
};

export default VoucherPage;
