import axios from "axios";
import type { Product } from "../types/product";

export const getProducts = async (category: string): Promise<Product[]> => {
  const url =
    category === "all"
      ? "https://fakestoreapi.com/products"
      : `https://fakestoreapi.com/products/category/${category}`;
  const { data } = await axios.get<Product[]>(url);
  return data;
};

export const getProductById = async (
  id: string | undefined
): Promise<Product> => {
  const { data } = await axios.get<Product>(
    `https://fakestoreapi.com/products/${id}`
  );
  return data;
};
