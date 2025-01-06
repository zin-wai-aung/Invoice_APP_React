import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import {NotFoundPage,DashboardPage,SalePage,LoginPage,RegisterPage} from "./pages";

// product
import {
  ProductPage,
  ProductCreatePage,
  ProductEditPage,
} from "./pages/product";

//voucher
import {VoucherPage,VoucherDetailPage} from "./pages/voucher";

//user
import {
  UserProfilePage,
  UserProfileChangeNamePage,
  UserProfileChangeImagePage,
  UserProfileChangePasswordPage,
} from "./pages/user";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "dashboard",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "product",
            element: <ProductPage />,
          },
          {
            path: "product/create",
            element: <ProductCreatePage />,
          },
          {
            path: "product/edit/:id",
            element: <ProductEditPage />,
          },
          {
            path: "sale",
            element: <SalePage />,
          },
          {
            path: "voucher",
            element: <VoucherPage />,
          },
          {
            path: "voucher/detail/:id",
            element: <VoucherDetailPage />,
          },
          {
            path: "user-profile",
            children: [
              {
                index: true,
                element: <UserProfilePage />,
              },
              {
                path: "user-change-name",
                element: <UserProfileChangeNamePage />,
              },
              {
                path: "user-change-image",
                element: <UserProfileChangeImagePage />,
              },
              {
                path: "user-change-password",
                element: <UserProfileChangePasswordPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
