import  { AxiosResponse } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import Http from "../../interceptor/index.interceptor";
// detail
export const carDetail = (params: string | undefined): Promise<AxiosResponse<any>> =>
  Http.get(`/Car/${params}`);

// this should use in components
export const useCarDetail = (
  params: string | undefined // params
): UseQueryResult<any, any> =>
  useQuery({
    queryKey: ["carDetail", params], // key
    queryFn: () => carDetail(params), // function
  });
