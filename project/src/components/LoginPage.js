import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "./LoginPage.css";

const LoginPage = () => {
  const handleSuccess = (response) => {
    console.log(response);
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <GoogleOAuthProvider clientId="520939030046-vtrtisp7hbufakv84f1ij8i2q1nhem3p.apps.googleusercontent.com ">
      <div className="flex h-screen relative overflow-hidden bg-purple-300">
        <div className="flex bg-purple-300 opacity-85">
          <img
            src="https://www.rajalakshmi.org/image/banner-1.jpg"
            className="absolute object-cover h-full opacity-75"
            alt="college building"
          />
        </div>
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
        <div className="circle circle5"></div>
        <div className="circle circle6"></div>

        <div className="flex items-start justify-start">
          <img
            src="./logo2.png"
            alt="College Logo"
            className="h-20 transform transition-transform duration-500 ease-in-out hover:scale-110 bright"
          />
        </div>
        {/* Login Form */}
        <div className="form-container  bg-purple-400 flex align-middle items-end flex-col justify-center  p-8 z-10 form-border bottom-0">
          <h1 className="text-3xl font-bold mb-6 text-purple-600 text-center">
            LOGIN
          </h1>
          <form className="w-full ">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-purple-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 p-2 w-full border border-purple-300 rounded-md shadow-sm"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-purple-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 w-full border border-purple-300 rounded-md shadow-sm"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600"
            >
              Login
            </button>
            <div className="my-4 flex items-center justify-between">
              <span className="block w-full border-t border-purple-300"></span>
              <span className="mx-2 text-gray-500">or</span>
              <span className="block w-full border-t border-purple-300"></span>
            </div>
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={handleError}
              className="w-full"
            />
          </form>
        </div>
        {/* Background Image */}

        <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-300 via-gray-100 to-blue-300"></div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
