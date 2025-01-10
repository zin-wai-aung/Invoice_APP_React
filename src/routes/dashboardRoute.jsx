import DashboardLayout from "../features/dashboard/components/DashboardLayout";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import productRoute from "./productRoute";
import saleRoute from "./saleRoute";
import voucherRoute from "./voucherRoute";
import userProfileRoute from "./userProfileRoute";

const dashboardRoute = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      ...productRoute,
      ...voucherRoute,
      ...saleRoute,
      ...userProfileRoute,
    ],
  },
];

export default dashboardRoute;
