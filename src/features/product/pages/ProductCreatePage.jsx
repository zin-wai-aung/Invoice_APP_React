import React from "react";
import Container from "../../../components/Container";
import Breadcrumb from "../../../components/BreadCrumb";
import ProductCreateForm from "../components/ProductCreateForm";

const ProductCreatePage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb
          currentPageTitle={"Create Product"}
          links={[{ title: "Product Module", path: "/dashboard/products" }]}
        />
        <ProductCreateForm />
      </Container>
    </section>
  );
};

export default ProductCreatePage;
