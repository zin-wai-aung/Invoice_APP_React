import React from "react";
import {Breadcrumb,Container,} from "../components";
import {VoucherInfo} from "../components/voucher";

const SalePage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"Sale Module"} />
        <VoucherInfo />
      </Container>
    </section>
  );
};

export default SalePage;
