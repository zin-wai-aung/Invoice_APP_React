import { useState } from "react";
import useSWR from "swr";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";
import { fetchProducts } from "../../../services/product";
import { urlToParamObject } from "../../../utils/url";
const useProduct = () => {
  const [params, setParams] = useSearchParams();

  const [fetchUrl, setFetchUrl] = useState(
    import.meta.env.VITE_API_URL + "/products"
  );

  const { data, isLoading } = useSWR(fetchUrl, fetchProducts);

  const handleSearch = debounce((e) => {
    e.preventDefault();
    if (e.target.value) {
      setParams({ q: e.target.value });
      setFetchUrl(
        `${import.meta.env.VITE_API_URL}/products?q=${e.target.value}`
      );
    } else {
      setParams({});
      setFetchUrl(`${import.meta.env.VITE_API_URL}/products`);
    }
  }, 500);

  const updateFetchUrl = (url) => {
    setParams(urlToParamObject(url));
    setFetchUrl(url);
  };

  const handleSort = (sortData) => {
    const sortParams = new URLSearchParams(sortData).toString();
    setParams(sortData);
    setFetchUrl(`${import.meta.env.VITE_API_URL}/products?${sortParams}`);
  };

  return { data, isLoading,handleSearch, updateFetchUrl, handleSort };
};

export default useProduct;
