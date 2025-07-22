// hooks/useProducts.js
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setLoading, setError } from "../redux/slices/productSlice";
import { useEffect } from "react";

export const useProducts = () => {
  const dispatch = useDispatch();
  const { products, total, loading, error } = useSelector((state) => state.product);
  const token = useSelector((state) => state.auth.token);

  console.log("useProducts token:", token);

  const fetchProducts = async () => {
    dispatch(setLoading(true));
    try {
      const res = await fetch("http://localhost:3000/api/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      console.log("Products fetched:", data);
      dispatch(setProducts({ products: data.products, total: data.total }));
    } catch (err) {
      dispatch(setError("Failed to fetch products"));
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [token]);

  return {
    products,
    total,
    loading,
    error,
    fetchProducts,
  };
};
