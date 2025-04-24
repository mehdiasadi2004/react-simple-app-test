import { AxiosResponse } from "axios";
import Http from "../../interceptor/index.interceptor";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

// detail
export const carDetail = (
  params: string | undefined
): Promise<AxiosResponse<any>> => Http.get(`/brand/cars/${params}`);

// this should use in components
export const useCarDetail = (
  params: string | undefined // params
): UseQueryResult<any, any> =>
  useQuery({
    queryKey: ["carDetail", params], // key
    queryFn: () => carDetail(params), // function
  });
