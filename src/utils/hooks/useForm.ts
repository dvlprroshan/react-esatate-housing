import { useState } from "react";

const useForm = <T>(initialValues: T): [T, (e: any) => void] => {
  const [values, setValues] = useState<T>(initialValues);

  return [
    values,
    (e: any) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};

export default useForm;
