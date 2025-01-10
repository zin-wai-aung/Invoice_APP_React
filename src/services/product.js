import { getCookie } from "react-use-cookie";

//get products
export const fetchProducts = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie("my_token")}`,
    },
  }).then((res) => res.json());

//create product
export const storeProduct = (product_name,price) => {
  return fetch(import.meta.env.VITE_API_URL + `/products`, {
    method: "POST",
    body: JSON.stringify({
      product_name: product_name,
      price: price,
      created_at: new Date().toISOString(),
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("my_token")}`,
    },
  });
}

//delete product
export const destroyProduct = (id) => {
  return fetch(import.meta.env.VITE_API_URL + `/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("my_token")}`,
    },
  });
}

//update product
export const editProduct = (id,product_name,price) => {
  return fetch(import.meta.env.VITE_API_URL + `/products/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      product_name: product_name,
      price: price,
      created_at: new Date().toISOString(),
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("my_token")}`,
    },
  });
}