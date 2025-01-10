import Container from "../../../components/Container";
import Breadcrumb from "../../../components/BreadCrumb";
import { HiCamera } from "react-icons/hi2";
import { BiEditAlt, BiUser } from "react-icons/bi";
import useChangeImage from "../hooks/useChangeImage";

const UserProfileChangeImagePage = () => {
  
    const {
      profile_image,
      fileInputRef,
      handleUpdateImage,
      handleImageUploader,
    } = useChangeImage()


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
          currentPageTitle={"Change Photo"}
          currentIcon={<BiEditAlt />}
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
