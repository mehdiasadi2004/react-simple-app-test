import { useMutation, useQueryClient } from "@tanstack/react-query";
import Http from "../../interceptor/index.interceptor";
import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface IAddCarParams {
  name: any;
  titel: any;
  desc: any;
  image: string | undefined;
  date: string;
  id: string;
}

export const AddCar = async (
  params: IAddCarParams
): Promise<AxiosResponse | void> => {
  try {
    const response: AxiosResponse = await axios.post(
      `https://66e3fba7d2405277ed128b1e.mockapi.io/api/brand/cars`,
      params
    );
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
