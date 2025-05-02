import React from "react";
import Container from "../../../components/Container";
import Breadcrumb from "../../../components/Breadcrumb";
import ProductEditForm from "../components/ProductEditForm";

const ProductEditPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb
          currentPageTitle={"Edit Product"}
          links={[{ title: "Product Module", path: "/dashboard/products" }]}
        />
        <ProductEditForm />
      </Container>
    </section>
  );
};

export default ProductEditPage;
