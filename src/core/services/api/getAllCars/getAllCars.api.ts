import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { CarsDto } from "./type";

const getAllCars = async (): Promise<AxiosResponse> => {
  const data: AxiosResponse<CarsDto> = await axios.get(
    "https://66e3fba7d2405277ed128b1e.mockapi.io/api/brand/cars"
  );
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
