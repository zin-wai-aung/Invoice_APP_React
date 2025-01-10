import { getCookie } from "react-use-cookie";

//change name
export const changeName = (data) => {
   return fetch(
      import.meta.env.VITE_API_URL + "/user-profile/change-name",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${getCookie("my_token")}`,
        },
      }
    ); 
}

//change image
export const changeImage = (formData) => {
    return fetch(
      import.meta.env.VITE_API_URL + "/user-profile/change-profile-image",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${getCookie("my_token")}`,
        },
      }
    );

}