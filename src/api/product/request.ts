import { ParamsReq } from "@/types/product";
import axiosInstance from "@/lib/axios";

export const fetchProducts = async (params?: ParamsReq) =>
  await axiosInstance.get("https://dummyjson.com/products", { params });
