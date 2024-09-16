import { Form, Formik, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

import { nanoid } from "nanoid";

import s from "./ContactForm.module.css";

import React from "react";

const ContactForm = ({ onSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={Yup.object({
          name: Yup.string().mip(3).max(50).required(),
          number: Yup.string().min(3).max(50).required(),
        })}
        onSubmit={(values, { resetForm }) => {
          onSubmit({ ...values, id: nanoid() });
        }}
      >
        <Form className={s.formContainer}>
          <label className={s.label} htmlFor="name">
            Name:
          </label>
          <Field className={s.field} type="text" id="name" name="name" />
          <ErrorMessage name="name" />
          <label className={s.label} htmlFor="namber">
            Number:
          </label>
          <Field className={s.field} type="text" id="number" name="number" />
          <ErrorMessage name="number" />
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
