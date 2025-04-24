import { Input } from "@heroui/input";
import { useField } from "formik";

export const Field = ({ label, ...props }: any) => {
  const [field, meta] = useField(props.name);

  return (
    <div className="mb-4 flex flex-col gap-3">
      <label className="block font-medium ">{label}</label>
      <Input
        {...field}
        {...props}
        isInvalid={meta.touched && !!meta.error}
        errorMessage={meta.touched && meta.error}
        classNames={{
          label: "text-[20px] font-bold",
          inputWrapper: "h-[56px]",
          input: "text-[14px] font-medium ",
        }}
      />
    </div>
  );
};
