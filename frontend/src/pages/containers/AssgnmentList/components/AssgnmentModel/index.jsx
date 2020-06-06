import React from "react";
import styles from "./index.module.css";
import { useFormik } from "formik";
import * as yup from "yup";

export default function AssgnmentModel({
  onModelClose,
  onSubmitNewTitle,
  curID,
  findTitle,
}) {
  const { getFieldProps, handleSubmit, isValid, errors, touched } = useFormik({
    initialValues: {
      title: findTitle(curID),
    },
    validationSchema: yup.object({
      title: yup.string().required("Preenchimento da tarefa e obrigatorio"),
    }),

    onSubmit: (values) => {
      onSubmitNewTitle(curID, values.title);
      onModelClose();
    },
  });
  return (
    <>
      <div className={styles.backDrop} onClick={onModelClose} />
      <div className={styles.containerModel}>
        <form onSubmit={handleSubmit}>
          <input
            maxLength="50"
            className={styles.inputForm}
            placeholder={
              errors.title && touched.title ? errors.title : "Tarefa"
            }
            type="text"
            {...getFieldProps("title")}
          />
          <button
            className={styles.buttonForm}
            disabled={!isValid}
            type="submit"
          >
            Atualizar Tarefa
          </button>
          <button className={styles.buttonForm} onClick={onModelClose}>
            Fechar
          </button>
        </form>
      </div>
    </>
  );
}
