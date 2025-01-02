import React from 'react';
import MetaData from '../../components/Layouts/MetaData';
import FormSidebar from './FormSidebar';
import { TextField } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
        <MetaData title='Log in | Flipkart' />
        <main className="pt-20 w-full">
        <div className="flex sm:w-[50%] sm:mt-4 m-auto mb-7 bg-white shadow-lg">
          <FormSidebar
            title="Looks like you're new here!"
            tag="Sign up with your email to get started"
          />
          <div className="flex-1 overflow-hidden">
            <form action="" className="p-5 sm:p-7">
              <div className="flex flex-col gap-4 items-start">
                <div className="flex flex-col w-full justify-between sm:flex-col gap-3 items-center">
                  <TextField fullWidth id="name" label="email" />
                  <TextField fullWidth id="name" label="password" />
                </div>
                <button
                  type="submit"
                  className="text-white py-3 w-full bg-[#2874f0] shadow hover:shadow-lg rounded-sm font-medium"
                >
                  Log in
                </button>
                <Link
                  to="/account/signup"
                  className="hover:bg-gray-50 text-[#2874f0] text-center py-3 w-full shadow border rounded-sm font-medium"
                >
                  New User? Sign up
                </Link>
              </div>
            </form>

            <div className="flex items-center justify-center">
              <span className="text-lg">or</span>
            </div>

            <div className="mb-4 p-7">
              <button className="flex items-center justify-center gap-4 hover:bg-gray-50 text-[#2874f0] text-center py-3 w-full shadow border rounded-sm font-medium">
                <FcGoogle className="text-2xl" />
                <span> Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Login