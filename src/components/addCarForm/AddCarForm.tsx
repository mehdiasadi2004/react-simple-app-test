import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Modal,
  ModalContent,
  Button,
  Input,
  useDisclosure,
} from "@heroui/react";
import { Field } from "../Field/Field";
import { useAddCar } from "@/core/services/api/AddCar/AddCar.api";
import { todayDate } from "@/core/utils/today";

// ✅ اسکیمای اعتبارسنجی
const validationSchema = Yup.object({
  Name: Yup.string().required("Name is required"),
  Title: Yup.string().required("Title is required"),
  Description: Yup.string().required("Description is required"),
});

const AddCarForm = () => {
  const addCar = useAddCar();
  const [photo, setPhoto] = useState<File | null>(null);
  const { isOpen, onOpen, onOpenChange,onClose } = useDisclosure();

  const handleSubmit = (values: any) => {
    console.log("Form Values:", values);
    console.log("Photo File:", photo?.name);


    const data = {
      name: values.Name,
      title: values.Title,
      desc: values.Description,
      image: photo?.name,
    };
    addCar.mutate(data);
onClose()
  };

  return (
    <>
      <Button onPress={onOpen}>Add Car</Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <div className="flex flex-col items-center justify-center w-full py-6">
            <Formik
              initialValues={{ Name: "", Title: "", Description: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="w-[400px]  py-4 rounded-lg  flex flex-col gap-1 ">
                <Field name="Name" type="text" label="Name" />
                <Field name="Title" type="text" label="Title" />
                <Field name="Description" type="text" label="Description" />

                <div className="flex flex-col gap-3 mb-4">
                  <label className="block font-medium ">Photo</label>
                  <Input
                    name="Photo"
                    type="file"
                    onChange={(e) => {
                      const file = e.currentTarget.files?.[0] || null;
                      setPhoto(file);
                    }}
                    classNames={{
                      inputWrapper: "h-[56px]",
                      input: "text-[14px] font-medium t",
                    }}
                  />
                </div>

                <Button
                  type="submit"
                  color="primary"
                  size="lg"
                  className="w-full mt-4"
                >
                  Add Car
                </Button>
              </Form>
            </Formik>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddCarForm;
