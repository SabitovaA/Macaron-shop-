import React from "react";
import cls from './Form.module.css'

function Form({register, errors, length, nameInput, nameType, classInput,placeholder}) {
  return (
    <>
      <input
        {...register(nameInput, {
          required: "#Field is required",
          minLength: length && {value: 13, message: "min 13 numbers" },
          maxLength: length && {value: 13, message: "max 13 numbers" }
        })}
        type={nameType}
        className={cls[classInput]}
        placeholder={placeholder}
      />
      {errors && (
        <p className={cls.error__messege}>{errors?.message}</p>
      )}
    </>
  );
}

export default Form;
