import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import Container from "../../../components/Container";
import VoucherList from "../components/VoucherList";

const VoucherPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"Invoice Module"} />
        <VoucherList />
      </Container>
    </section>
  );
};

export default VoucherPage;
