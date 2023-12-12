"use client";

import Link from 'next/link'
import React from 'react'
import { GoogleIcon, Warning } from '../components/svgs/Svg';
import { useFormik } from 'formik';
import * as Yup from "yup";

const Signin = () => {

  const SigninSchema = Yup.object().shape({
    email: Yup.string().email("Please include a valid email address").required('Required'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(16, 'Too Long!')
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Password must contain at least one uppercase letter, one numeric value, and one special character'
      )
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    }, onSubmit, validationSchema: SigninSchema
  });

  async function onSubmit(values) {
    console.log(values);
  }



  return (
    <>
      <main className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-xl dark:bg-neutral-950 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Sign in
              </h1>
              <p className="mt-2 flex flex-row gap-x-1 justify-center text-sm text-gray-600 dark:text-gray-400">
                Don&apos;t have an account yet?
                <Link href="/signup" className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Sign up here
                </Link>
              </p>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <GoogleIcon />
                Sign in with Google
              </button>
              <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                Or
              </div>
              {/* Form */}
              <form method='POST' onSubmit={formik.handleSubmit} noValidate>
                <div className="grid gap-y-4">
                  {/* Form Group */}
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
                      <Link href="#!" className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        Forgot password?
                      </Link>
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
                  {/* Checkbox */}
                  <div className="flex items-center">
                    <div className="flex">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ms-3">
                      <label
                        htmlFor="remember-me"
                        className="text-sm dark:text-white"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  {/* End Checkbox */}
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Sign in
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

export default Signin