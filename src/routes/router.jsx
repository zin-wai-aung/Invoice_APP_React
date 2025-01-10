import { createBrowserRouter } from "react-router-dom";

import PublicLayout from '../features/public/components/PublicLayout'
import publicRoute from "./publicRoute";
import authRoute from "./authRoute";
import dashboardRoute from "./dashboardRoute";
import NotFoundPage from "../components/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        errorElement:<NotFoundPage/>,
        children:[...publicRoute]
    },
    ...authRoute,
    ...dashboardRoute
])

export default router;