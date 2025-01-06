import useCookie from "react-use-cookie";
import Container from "../../components/Container";
import Breadcrumb from "../../components/BreadCrumb";
import {
  HiCamera,
  HiPencilSquare
} from "react-icons/hi2";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useUserStore from "../../stores/useUserStore";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { BiEditAlt, BiUser } from "react-icons/bi";

const UserProfileChangeImagePage = () => {
  const [userCookie, setUserCookie] = useCookie("user");
  const { name, email, profile_image } = JSON.parse(userCookie);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [token] = useCookie("my_token");

  const { user, setUser } = useUserStore();

  const fileInputRef = useRef(null);

  const handleUpdateImage = async (event) => {
    // console.log(event.target.files[0]);
    const formData = new FormData();
    formData.append("profile_image", event.target.files[0]);

    const res = await fetch(
      import.meta.env.VITE_API_URL + "/user-profile/change-profile-image",
      {
        method: "POST",
        body: formData,
        headers: {
          //   "Content-Type": "application/json",
          //   "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = await res.json();

    console.log(json);

    if (res.status === 200) {
      toast.success(json.message);
      setUserCookie(JSON.stringify(json.user));
      setUser(json.user);
      
      reset();
    } else {
      toast.error(json.message);
    }
  };

  const handleImageUploader = () => {
    console.log(fileInputRef.current);
    fileInputRef.current.click();
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
          currentPageTitle={"Change Photo"} currentIcon={<BiEditAlt/>}
        />
       
        <div className="flex justify-center items-center mt-10">
          <div className=" w-1/2 border border-neutral rounded-xl p-5 px-20 flex flex-col items-center space-y-5">
            {/* profile picture */}
            <div className=" relative">
              <img
                className=" w-52 h-52 rounded-full"
                src={
                  profile_image
                    ? profile_image
                    : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                }
                alt="user photo"
              />

              <button
                onClick={handleImageUploader}
                className=" absolute -bottom-4 left-[5.5rem] flex justify-center items-center rounded-full bg-accent text-black p-3 hover:bg-blue-200"
              >
                <HiCamera size={23} />
              </button>
            </div>

            {/* Name */}
            <div className=" w-full hidden">
              <span className=" italic text-neutral-300">Your Name</span>
              <div className="flex justify-between items-center space-x-3">
                <span type="text" className="input input-bordered mt-1 w-full">
                  {name}
                </span>
                <div
                  to={"user-change-name"}
                  className="flex justify-center items-center rounded-full bg-accent text-black p-3 hover:bg-blue-200"
                >
                  <HiPencilSquare size={23} />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className=" w-full hidden">
              <span className=" italic text-neutral-300">Your Email</span>
              <div className="flex justify-between items-center space-x-3">
                <span type="text" className="input input-bordered mt-1 w-full">
                  {email}
                </span>
                <button className="btn btn-disabled flex justify-center items-center rounded-full bg-accent text-black p-3">
                  <HiPencilSquare size={23} />
                </button>
              </div>
            </div>

            {/* Password */}
            <div className=" w-full hidden">
              <span className=" italic text-neutral-300">Your Password</span>
              <div className="flex justify-between items-center space-x-3">
                <span className="input input-bordered mt-1 w-full text-xl">
                  ..........
                </span>
                <div
                  to={"user-change-password"}
                  className="flex justify-center items-center rounded-full bg-accent text-black p-3 hover:bg-blue-200"
                >
                  <HiPencilSquare size={23} />
                </div>
              </div>
            </div>
          </div>

          <form className=" flex gap-5 items-end ">
            <div className=" ">
              <input
                onChange={handleUpdateImage}
                ref={fileInputRef}
                className=" hidden w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="profile_image"
                type="file"
              />
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default UserProfileChangeImagePage;
