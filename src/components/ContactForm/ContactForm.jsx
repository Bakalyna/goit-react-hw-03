import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleFormSubmit = (values, actions) => {
    onSubmit({ id: nanoid(), ...values });
    actions.resetForm();
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short...')
      .max(50, 'Too long...')
      .required('required'),
    number: Yup.string()
      .min(3, 'Too short...')
      .max(10, 'Too long...')
      .required('required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleFormSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" as="span" />

        <label htmlFor={numberFieldId}>Number</label>
        <Field type="" name="number" id={numberFieldId} />
        <ErrorMessage name="number" as="span" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;

