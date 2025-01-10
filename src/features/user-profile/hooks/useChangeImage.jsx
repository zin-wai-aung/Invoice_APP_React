import useCookie from "react-use-cookie";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useUserStore from "../../../stores/useUserStore";
import { useRef } from "react";
import { changeImage } from "../../../services/profile";

const useChangeImage = () => {
  const [userCookie, setUserCookie] = useCookie("user");
  const { profile_image } = JSON.parse(userCookie);
  const { reset } = useForm();

  const { user, setUser } = useUserStore();

  const fileInputRef = useRef(null);

  const handleUpdateImage = async (event) => {
    const formData = new FormData();
    formData.append("profile_image", event.target.files[0]);

    const res = await changeImage(formData);
    const json = await res.json();

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
    fileInputRef.current.click();
  };

  return {profile_image,fileInputRef,handleUpdateImage,handleImageUploader}
};

export default useChangeImage;
