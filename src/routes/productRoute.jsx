import { lazy } from "react";

const ProductCreatePage = lazy(() =>
  import("../features/product/pages/ProductCreatePage")
);
const ProductEditPage = lazy(() =>
  import("../features/product/pages/ProductEditPage")
);
const ProductPage = lazy(() =>
  import("../features/product/pages/ProductPage")
);

const productRoute = [
  {
    path: "products",
    element: <ProductPage />,
  },
  {
    path: "product-create",
    element: <ProductCreatePage />,
  },
  {
    path: "product-edit/:id",
    element: <ProductEditPage />,
  },
];

export default productRoute;
