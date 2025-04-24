import axios, { AxiosResponse } from "axios";
import Http from "../../interceptor/index.interceptor";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

// detail
export const carDetail = (params: string | undefined): Promise<AxiosResponse<any>> =>
  axios.get(
    `https://66e3fba7d2405277ed128b1e.mockapi.io/api/brand/cars/${params}`
  );

// this should use in components
export const useCarDetail = (
  params: string | undefined // params
): UseQueryResult<any, any> =>
  useQuery({
    queryKey: ["carDetail", params], // key
    queryFn: () => carDetail(params), // function
  });
