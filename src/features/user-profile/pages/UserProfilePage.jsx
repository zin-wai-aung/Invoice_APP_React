import React from "react";
import Container from "../../../components/Container";
import Breadcrumb from "../../../components/Breadcrumb";
import { HiPencilSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";
import useUserStore from "../../../stores/useUserStore";
import { BiUser } from "react-icons/bi";

const UserProfilePage = () => {
  const {
    user: { name, email, profile_image },
  } = useUserStore();

  return (
    <section>
      <Container>
        <Breadcrumb
          currentIcon={<BiUser />}
          currentPageTitle={"User Profile"}
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

              <Link
                to={"user-change-image"}
                className=" absolute -bottom-4 left-[5.5rem] flex justify-center items-center rounded-full bg-accent text-black p-3 hover:bg-blue-200"
              >
                <HiPencilSquare size={23} />
              </Link>
            </div>

            {/* Name */}
            <div className=" w-full">
              <span className=" italic text-neutral-300">Your Name</span>
              <div className="flex justify-between items-center space-x-3">
                <span type="text" className="input input-bordered mt-1 w-full">
                  {name}
                </span>
                <Link
                  to={"user-change-name"}
                  className="flex justify-center items-center rounded-full bg-accent text-black p-3 hover:bg-blue-200"
                >
                  <HiPencilSquare size={23} />
                </Link>
              </div>
            </div>

            {/* Email */}
            <div className=" w-full">
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
            <div className=" w-full">
              <span className=" italic text-neutral-300">Your Password</span>
              <div className="flex justify-between items-center space-x-3">
                <span className="input input-bordered mt-1 w-full text-xl">
                  ..........
                </span>
                <Link
                  to={"user-change-password"}
                  className="flex justify-center items-center rounded-full bg-accent text-black p-3 hover:bg-blue-200"
                >
                  <HiPencilSquare size={23} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UserProfilePage;
