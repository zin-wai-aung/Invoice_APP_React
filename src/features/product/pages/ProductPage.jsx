import React from "react";
import Container from "../../../components/Container";
import ProductList from '../components/ProductList'
import Breadcrumb from "@/components/Breadcrumb";

const ProductPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"Product Module"} />
        <ProductList/>
      </Container>
    </section>
  );
};

export default ProductPage;
