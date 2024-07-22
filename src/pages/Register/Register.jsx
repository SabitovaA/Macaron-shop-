import React, { useState } from "react";
import cls from "./Register.module.css";
import { useForm } from "react-hook-form";
import Form from "../../UI/form/Form";

function Register() {
  const [isChekt1, setIsChekt1] = useState(false);
  const [isChekt2, setIsChekt2] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const hanleChekbox1Change = () => {
    setIsChekt1(!isChekt1);
    if (!isChekt1) {
      setIsChekt2(false);
    }
  };
  const hanleChekbox2Change = () => {
    setIsChekt2(!isChekt2);
    if (!isChekt2) {
      setIsChekt1(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cls.container__register}>
      <label className={cls.register__box}>
        <h3>Registration forms</h3>
        <div className={cls.checkbox__box}>
          Man
          <input
            type="checkbox"
            onChange={hanleChekbox1Change}
            checked={isChekt1}
          />
          Woman
          <input
            type="checkbox"
            onChange={hanleChekbox2Change}
            checked={isChekt2}
          />
        </div>
        <div className={cls.name}>
          Name
          <div className={cls.name_container}>
            <div className={cls.input__with_error}>
              <Form
                register={register}
                errors={errors?.first}
                nameInput={"first"}
                nameType={"text"}
                classInput={"name__input"}
                placeholder={"First"}
              />
            </div>

            <div className={cls.input__with_error}>
              <Form
                register={register}
                errors={errors?.last}
                nameInput={"last"}
                nameType={"text"}
                classInput={"name__input"}
                placeholder={"Last"}
              />
            </div>
          </div>
        </div>
        <div className={cls.name}>
          Adresse
          <div className={cls.name_container}>
            <div className={cls.input__with_error}>
              <Form
                register={register}
                errors={errors?.street}
                nameInput={"street"}
                nameType={"text"}
                classInput={"name__input"}
                placeholder={"Street"}
              />
            </div>

            <div className={cls.input__with_error}>
              <Form
                register={register}
                errors={errors?.home}
                nameInput={"home"}
                nameType={"number"}
                classInput={"name__input"}
                placeholder={"home number"}
              />
            </div>
          </div>
        </div>
        <div className={cls.name_container}>
          <div className={cls.input__with_error}>
            <Form
              register={register}
              errors={errors?.country}
              nameInput={"country"}
              nameType={"text"}
              classInput={"name__input"}
              placeholder={"Country"}
            />
          </div>
          <div className={cls.input__with_error}>
            <Form
              register={register}
              errors={errors?.postal}
              nameInput={"postal"}
              nameType={"number"}
              classInput={"name__input"}
              placeholder={"postal"}
            />
          </div>
        </div>
        <div className={cls.long}>
          Telephone number
          <Form
            register={register}
            errors={errors?.tel}
            nameInput={"tel"}
            nameType={"tel"}
            classInput={"input__long"}
            placeholder={"+49..."}
            length={true}
          />
        </div>
        <div className={cls.long}>
          Email adresse
          <Form
            register={register}
            errors={errors?.email}
            nameInput={"email"}
            nameType={"email"}
            classInput={"input__long"}
            placeholder={"Email"}
          />
        </div>
        <div className={cls.long}>
          New password
          <Form
            register={register}
            errors={errors?.password}
            nameInput={"password"}
            nameType={"password"}
            classInput={"input__long"}
            placeholder={"Password"}
          />
        </div>
        <button disabled={!isValid} className={cls.register__button}>
          Register
        </button>
        <p className={cls.account__register}>
          Do you have account?
          <a className={cls.login} href="">
            Login
          </a>
        </p>
      </label>
    </form>
  );
}

export default Register;
