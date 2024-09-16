import { Form, Formik, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

import { nanoid } from "nanoid";

import css from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={Yup.object({
        name: Yup.string().mip(3).max(50).required(),
        number: Yup.string().min(3).max(50).required(),
      })}
      onSubmit={(values, { resetForm }) => {
        onSubmit({ ...values, id: nanoid() });
        resetForm();
      }}
    >
      <Form className={css.formContainer}>
        <label className={css.label} htmlFor="name">
          Name:
          <Field className={css.field} type="text" id="name" name="name" />
          <ErrorMessage name="name" />
        </label>

        <label className={css.label} htmlFor="namber">
          Number:
          <Field className={css.field} type="text" id="number" name="number" />
          <ErrorMessage name="number" />
        </label>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
