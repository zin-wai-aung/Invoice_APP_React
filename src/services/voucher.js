import { getCookie } from "react-use-cookie";

//get vouchers
export const fetchVouchers = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie("my_token")}`,
    },
  }).then((res) => res.json());

//create product
export const storeVoucher = (currentVoucher) => {
  return fetch(import.meta.env.VITE_API_URL + `/vouchers`, {
    method: "POST",
    body: JSON.stringify(currentVoucher),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("my_token")}`,
    },
  });
};

//delete voucher
export const destroyVoucher = (id) => {
  return fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("my_token")}`,
    },
  });
};