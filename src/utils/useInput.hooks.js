import { useState } from "react";

const useInput = (initialValue) => {
  const [formValue, setFormValue] = useState(initialValue);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (event.target.type == "checkbox") {
      return setFormValue((prev) => ({
        ...prev,
        [name]: event.target.checked,
      }));
    }
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const resetFormFields = () => {
    setFormValue(initialValue);
  };

  return {
    formValue,
    handleChange,
    errors,
    setErrors,
    resetFormFields,
  };
};

export default useInput;
