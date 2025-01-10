import Container from "../../../components/Container";
import Breadcrumb from "../../../components/BreadCrumb";
import userChangeName from "../hooks/useChangeName";
import { BiUser } from "react-icons/bi";
import { tailspin } from "ldrs";


tailspin.register();


const UserProfileChangeNamePage = () => {
 
  const { register, handleSubmit, errors,isSubmitting, name, handleUpdateName } =
    userChangeName();

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
            <form onSubmit={handleSubmit(handleUpdateName)}>
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
                  Update{" "}
                  {isSubmitting && (
                    <l-tailspin
                      size="20"
                      stroke="5"
                      speed="0.9"
                      color="white"
                    ></l-tailspin>
                  )}
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
