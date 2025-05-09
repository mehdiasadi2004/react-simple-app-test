import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { CarsDto } from "./type";
import Http from "../../interceptor/index.interceptor";

const getAllCars = async (): Promise<AxiosResponse> => {
  const data: AxiosResponse<CarsDto> = await Http.get("/posts");
  console.log(data)
  return data; // فقط data را برگردانید
};

export const useGetAllCars = (): {
  data: AxiosResponse | undefined;
  isLoading: boolean;
  isError: boolean;
} => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllCars"],
    queryFn: getAllCars,
  });

  return { data, isLoading, isError };
};
