
import Card from "@/components/card";
import { SearchIcon } from "@/components/header/icons";
import { useGetAllCars } from "@/core/services/api/getAllCars/getAllCars.api";
import { Input } from "@heroui/input";
import {  useMemo, useState } from "react";

interface ICar {
  id: string;
  name: string;
  image: string;
  title: string;
  description: string;
  date: string;
}

export default function IndexPage() {

const[searchParams,setSearchParams]=useState("")


  const { data, isLoading, isError } = useGetAllCars();

console.log(data)
const newData = useMemo(() => {

  if (!data?.data) return [];

   return data.data.filter((item: any) =>
     item.name.toUpperCase().includes(searchParams.toUpperCase())
   );

}, [data, searchParams]);

if (isLoading) return <div>Loading...</div>;
if (isError) return <div>Error...</div>;



  return (
    <div className="py-20 flex flex-wrap gap-20 justify-center">
      <div className="h-10 w-full flex justify-center">
          <Input
          className="w-[20%]"
            onChange={(e) => {
              setSearchParams(e.target.value);
            }}
          />
      </div>
      {newData?.map((item: ICar) => (
        <Card
          key={item.id}
          _id={item.id}
          title={item.title}
          name={item.name}
          img={item.image}
        />
      ))}
    </div>
  );
}
