import { useMutation } from "@tanstack/react-query";
import Http from "../../interceptor/index.interceptor";
import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// تابع حذف
export const delCar = async (id: string | undefined): Promise<AxiosResponse | void> => {
  try {
    const response: AxiosResponse = await Http.delete(`/cars/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const useDelCar = () => {
    const navigate =useNavigate()
  return useMutation({
    mutationFn: delCar, 
    onSuccess: () => {
      toast.success("car deleted successfully"); 
      navigate("/")
    },
    onError: (error) => {
      console.error("Error during deletion:", error);
      toast.error("Error deleting car"); 
    },
  });
};
