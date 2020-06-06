import React, { useContext, useEffect, useRef } from "react";
import { useFormik } from "formik";
import AssgnContext from "../../../stateGlobal/assignment/Context";
import * as assgnAction from "../../../stateGlobal/assignment/action";
import * as yup from "yup";
import styles from "./index.module.css";

export default function AssgnmenCreator() {
  const { dispatchassgnment } = useContext(AssgnContext);
  const inputTitle = useRef(null);
  useEffect(() => {
    inputTitle.current.focus();
  }, []);
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      title: "",
      date: "",
      time: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: yup.object({
      title: yup.string().required("Preenchimento da tarefa e obrigatorio"),
    }),
    onSubmit: (values, formikBag) => {
      dispatchassgnment(
        assgnAction.addAssignment(values.title, values.date, values.time)
      );
      formikBag.setFieldValue("title", "", false);
      formikBag.setFieldValue("date", "", false);
      formikBag.setFieldValue("time", "", false);
    },
  });

  return (
    <header className={styles.headerContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          className={styles.inputDateTime}
          type="date"
          {...getFieldProps("date")}
        />
        <input
          className={styles.inputDateTime}
          type="time"
          {...getFieldProps("time")}
        />

        <input
          maxLength="40"
          className={styles.inputForm}
          placeholder={touched.title && errors.title ? errors.title : "Tarefa"}
          ref={inputTitle}
          type="text"
          autoComplete="off"
          {...getFieldProps("title")} // quando fazemos um spredd em um objeto tranformandos as chaves desse objeto em atributos para o nosso elemento HTML
        />

        <button className={styles.buttonForm} type="submit">
          Adicionar Tarefa
        </button>
      </form>
    </header>
  );
}
