import UserProfilePage from "../features/user-profile/pages/UserProfilePage";
import ChangeNamePage from "../features/user-profile/pages/ChangeNamePage"
import ChangeImagePage from "../features/user-profile/pages/ChangeImagePage"
import ChangePasswordPage from "../features/user-profile/pages/ChangePasswordPage"

const userProfileRoute = [
  {
    path: "user-profile",
    children: [
      {
        index: true,
        element: <UserProfilePage />,
      },
      {
        path: "user-change-name",
        element: <ChangeNamePage />,
      },
      {
        path: "user-change-image",
        element: <ChangeImagePage />,
      },
      {
        path: "user-change-password",
        element: <ChangePasswordPage />,
      },
    ],
  },
];

export default userProfileRoute;
