import { lazy } from "react";
const VoucherPage = lazy(() =>
  import("../features/voucher/pages/VoucherPage")
);
const VoucherDetailPage = lazy(() =>
  import("../features/voucher/pages/VoucherDetailPage")
);

const voucherRoute = [
  {
    path: "invoices",
    element: <VoucherPage />,
  },
  {
    path: "invoice-detail/:id",
    element: <VoucherDetailPage />,
  },
];

export default voucherRoute;
