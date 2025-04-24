import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { CarsDto } from "./type";
import Http from "../../interceptor/index.interceptor";




const getAllCars = async (): Promise<AxiosResponse> => {
  const data: AxiosResponse<CarsDto> = await Http.get("/brand/cars");
  return data; // فقط data را برگردانید
};

// هوک برای گرفتن داده موردنیاز از API
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
