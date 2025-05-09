import { useMutation, useQueryClient } from "@tanstack/react-query";
import Http from "../../interceptor/index.interceptor";
import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface IAddCarParams {
  name: string;
  title: string;
  description: string;
  image: string | undefined;
}

export const AddCar = async (
  params: IAddCarParams
): Promise<AxiosResponse | void> => {
  try {
    console.log(params);
    const response: AxiosResponse = await Http.post(`/posts`, params);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const useAddCar = () => {
  const navigate = useNavigate();
  const client = useQueryClient();
  return useMutation({
    mutationFn: AddCar,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["getAllCars"] });
      toast.success("car added successfully");
      navigate("/");
    },
    onError: (error) => {
      console.error("Error during add:", error);
      toast.error("Error adding car");
    },
  });
};
