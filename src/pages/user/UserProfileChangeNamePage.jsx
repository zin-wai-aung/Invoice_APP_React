import useCookie from "react-use-cookie";
import Container from "../../components/Container";
import Breadcrumb from "../../components/BreadCrumb";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useUserStore from "../../stores/useUserStore";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const UserProfileChangeNamePage = () => {
  const [userCookie, setUserCookie] = useCookie("user");
  const { name, email, profile_image } = JSON.parse(userCookie);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [token] = useCookie("my_token");

  const { user, setUser } = useUserStore();

  const handleUpdateName = async (data) => {

    const res = await fetch(
      import.meta.env.VITE_API_URL + "/user-profile/change-name",
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

    if (res.status === 200) {
      toast.success(json.message);
      setUserCookie(JSON.stringify(json.user));
      setUser(json.user);
      navigate("/dashboard/user-profile");
      reset();
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
          currentPageTitle={"Change Name"}
        />

        <div className="flex justify-center items-center mt-10">
          <div className=" w-1/2 border border-neutral rounded-xl p-5 px-20 flex flex-col items-center space-y-5">
        <form
          onSubmit={handleSubmit(handleUpdateName)}
        >
          <div className=" flex items-end gap-x-3">
            <div className=" ">
              <label className="form-control">
                <div className="label">
                  <span className="label-text"> Update Your Name</span>
                </div>
                <input
                  type="text"
                  {...register("name", {
                    required: true,
                    minLength: 3,
                    maxLength: 30,
                  })}
                  defaultValue={name}
                  className={`input input-bordered w-full ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : ""
                  }`}
                />
              </label>
            </div>

            <button
              type="submit"
              className="inline-flex gap-3 items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
            >
              Update
            </button>
          </div>
          <div className="">
            {errors.name?.type === "required" && (
              <p className=" text-red-500 text-sm mt-1">
                User name is required
              </p>
            )}
            {errors.name?.type === "minLength" && (
              <p className=" text-red-500 text-sm mt-1">
                User name must be greater than 3 characters
              </p>
            )}
            {errors.name?.type === "maxLength" && (
              <p className=" text-red-500 text-sm mt-1">
                User name must be less than 10 characters
              </p>
            )}
          </div>
          </form>
        </div>
        </div>
      </Container>
    </section>
  );
};

export default UserProfileChangeNamePage;
