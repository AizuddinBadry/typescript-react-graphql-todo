import React from 'react';
import { Formik } from 'formik';
import { useLazyQuery } from '@apollo/client';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';

import { QUERY_USER_LOGIN } from '../graphql/users/queries';

export default function Login() {
  const [queryUserLogin] = useLazyQuery(QUERY_USER_LOGIN);

  return (
    <>
      <Navbar bgColor="black" />
      <Card>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const { email, password } = values;
            queryUserLogin({
              variables: { email, password },
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </div>
              <div className="my-3">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
              </div>
              <Button
                buttonType="primary"
                className={`
                      w-full block
                      h-12
                  `}
                size="xs"
                type="button"
              >
                Login
              </Button>
            </form>
          )}
        </Formik>
      </Card>
    </>
  );
}
