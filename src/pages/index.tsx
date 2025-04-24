
import Card from "@/components/card";
import { useGetAllCars } from "@/core/services/api/getAllCars/getAllCars.api";

interface ICar {
  id: string;
  name: string;
  image: string;
  titel: string;
  desc: string;
  date:string;
}

export default function IndexPage() {
  const { data, isLoading, isError } = useGetAllCars();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  return (
    <div className="py-20 flex flex-wrap gap-20 justify-center">
      {data?.data.map((item: ICar) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.titel}
          name={item.name}
          img={item.image}
        />
      ))}
    </div>
  );
}
