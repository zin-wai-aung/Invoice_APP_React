import React from "react";
import Container from "../../components/Container";
import Breadcrumb from "../../components/BreadCrumb";
import ProductCreateCard from "../../components/product/ProductCreateCard";

const ProductCreatePage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb
          currentPageTitle={"Create Product"}
          links={[{ title: "Product Module", path: "/dashboard/product" }]}
        />
        <ProductCreateCard />
      </Container>
    </section>
  );
};

export default ProductCreatePage;
