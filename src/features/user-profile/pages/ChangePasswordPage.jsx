import useCookie, { removeCookie } from "react-use-cookie";
import Container from "../../../components/Container";
import Breadcrumb from "../../../components/BreadCrumb";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useUserStore from "../../../stores/useUserStore";
import { BiUser } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserProfileChangeNamePassword = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [token] = useCookie("my_token");

  const handleUpdatePassword = async (data) => {
    const res = await fetch(
      import.meta.env.VITE_API_URL + "/user-profile/change-password",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = await res.json();

    console.log(json);

    if (res.status === 200) {
      toast.success("Password changed successfully");
      removeCookie("user");
      removeCookie("my_token");
      navigate("/");
    } else {
      toast.error(json.message);
    }
  };

  return (
    <section>
      <Container>
        <Breadcrumb
          links={[
            {
              title: "User Profile",
              path: "/dashboard/user-profile",
              icon: <BiUser />,
            },
          ]}
          currentIcon={<FaLock />}
          currentPageTitle={"Change Password"}
        />

        <div className="flex justify-center items-center mt-10">
          <div className=" w-1/2 border border-neutral rounded-xl p-5 px-20 flex flex-col items-center space-y-5">
            <form onSubmit={handleSubmit(handleUpdatePassword)}>
              {/* current password */}
              <div className=" flex items-end">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text"> Current Password</span>
                  </div>
                  <input
                    type="text"
                    {...register("old_password", {
                      required: true,
                      minLength: 3,
                      maxLength: 30,
                    })}
                    className={`input input-bordered w-full ${
                      errors.old_password
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : ""
                    }`}
                  />
                </label>
                <div className="">
                  {errors.old_password?.type === "required" && (
                    <p className=" text-red-500 text-sm mt-1">
                      Current Password is required
                    </p>
                  )}
                </div>
              </div>

              {/* new password */}
              <div className=" flex items-end">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text"> New Password</span>
                  </div>
                  <input
                    type="text"
                    {...register("new_password", {
                      required: true,
                      minLength: 3,
                      maxLength: 30,
                    })}
                    className={`input input-bordered w-full ${
                      errors.new_password
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : ""
                    }`}
                  />
                </label>
                <div className="">
                  {errors.new_password?.type === "required" && (
                    <p className=" text-red-500 text-sm mt-1">
                      New Password is required
                    </p>
                  )}
                  {errors.new_password?.type === "minLength" && (
                    <p className=" text-red-500 text-sm mt-1">
                      New Password must be at least 8 characters
                    </p>
                  )}
                </div>
              </div>

              {/* confirm new */}
              <div className=" flex items-end">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text"> Confirm New Password</span>
                  </div>
                  <input
                    type="text"
                    {...register("new_password_confirmation", {
                      required: true,
                      minLength: 3,
                      maxLength: 30,
                    })}
                    className={`input input-bordered w-full ${
                      errors.new_password_confirmation
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : ""
                    }`}
                  />
                </label>
                <div className="">
                  {errors.new_password_confirmation?.type === "required" && (
                    <p className=" text-red-500 text-sm mt-1">
                      New Confirm Password is required
                    </p>
                  )}
                  {errors.new_password_confirmation?.type === "minLength" && (
                    <p className=" text-red-500 text-sm mt-1">
                      New Confirm Password must be at least 8 characters
                    </p>
                  )}
                </div>
              </div>

              {/* update button */}
              <div className="">
                <button
                  type="submit"
                  className=" mt-5 w-full gap-3 items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-black"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UserProfileChangeNamePassword;
