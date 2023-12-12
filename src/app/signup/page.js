"use client";

import Link from 'next/link'
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Warning } from '../components/svgs/Svg';

const Signup = () => {

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Please include a valid email address").required('Required'),
    password: Yup.string()
      .min(8, 'Too Short! min 8')
      .max(16, 'Too Long! max 16')
      .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Password must contain at least one uppercase letter, one numeric value, and one special character')
      .required('Required'),
    termsAndConditions: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      termsAndConditions: false
    }, onSubmit, validationSchema: SignupSchema
  });

  async function onSubmit(values) {
    console.log(values);
  }



  return (
    <>
      <main className="w-full max-w-md mx-auto">
        <div className="bg-white shadow-xl rounded-xl dark:bg-neutral-950 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Create an account
              </h1>
              <p className="mt-2 flex flex-row gap-x-1 justify-center text-sm text-gray-600 dark:text-gray-400">
                Already have an account?
                <Link href="/signin" className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Sign in here
                </Link>
              </p>
            </div>
            <div className="mt-5">
              {/* Form */}
              <form method='POST' onSubmit={formik.handleSubmit} noValidate>
                <div className="grid gap-y-4">
                  {/* Form Group */}
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 dark:text-white">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="name"
                        id="name"
                        name="name"
                        className="py-3 px-4 block w-full border-2 outline-none border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-gray-700 dark:text-gray-200 dark:focus:ring-gray-600"
                        {...formik.getFieldProps("name")}
                        aria-describedby="name-error"
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <>
                          <p className="text-xs text-red-600 dark:text-rose-500 mt-2 flex items-center gap-x-2" id="name-error">
                            {formik.errors.name} <Warning />

                          </p>
                        </>
                      ) : null}

                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 dark:text-white">
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="py-3 px-4 block w-full border-2 outline-none border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-gray-700 dark:text-gray-200 dark:focus:ring-gray-600"
                        {...formik.getFieldProps("email")}
                        aria-describedby="email-error"
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <>
                          <p className="text-xs text-red-600 dark:text-rose-500 mt-2 flex items-center gap-x-2" id="email-error">
                            {formik.errors.email} <Warning />
                          </p>
                        </>
                      ) : null}

                    </div>
                  </div>
                  {/* End Form Group */}
                  {/* Form Group */}
                  <div>
                    <div className="flex justify-between items-center">
                      <label htmlFor="password" className="block text-sm mb-2 dark:text-white">
                        Password
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="py-3 px-4 block w-full border-2 outline-none border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-gray-700 dark:text-gray-200 dark:focus:ring-gray-600"
                        aria-describedby="password-error"
                        {...formik.getFieldProps("password")}
                      />
                      {
                        formik.touched.password && formik.errors.password ?
                          (
                            <p className="text-xs text-red-600 dark:text-rose-500 mt-2 grid grid-flow-col justify-start gap-x-2" id="password-error">
                              {formik.errors.password} <Warning />
                            </p>
                          ) : null
                      }
                    </div>
                  </div>
                  {/* End Form Group */}
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-3">
                      <div className="flex">
                        <input id="remember-me"
                          name="termsAndConditions"
                          type="checkbox"
                          className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          {...formik.getFieldProps("termsAndConditions")}
                        />
                      </div>
                      <div className="">
                        <label htmlFor="remember-me" className="text-sm dark:text-white">
                          I accept the{" "}
                          <Link href="#!" className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            Terms and Conditions
                          </Link>
                        </label>
                      </div>
                    </div>
                    {formik.touched.termsAndConditions && formik.errors.termsAndConditions ? (
                      <span className='text-xs text-rose-600'>{formik.errors.termsAndConditions}</span>
                    ) : null}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"


                  >
                    Sign up
                  </button>
                </div>
              </form>
              {/* End Form */}
            </div>
          </div>
        </div>
      </main>

    </>
  )
}

export default Signup