import React from "react";
import { useFormik } from "formik";
import './index.css';

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      if (values.email && values.password) {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRegex.test(values.email)) {
          alert("Login Successful");
        } else {
          document.getElementById("emailError").innerHTML = "Username should be an email";
        }
      } else {
        if (!values.email) {
          document.getElementById("emailError").innerHTML = "Field required";
        }
        if (!values.password) {
          document.getElementById("pswError").innerHTML = "Field required";
        }
      }
    },
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={formik.handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <label htmlFor="emailField" className="block font-medium text-gray-700 mb-2">Email:</label>
        <div className="mt-1">
          <input
            id="emailField"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="form-input w-full border border-blue-700 rounded-lg p-2 text-lg"
          />
        </div>
        <div id="emailError" className="text-red-500 text-sm mt-2"></div>
        <br />
        <label htmlFor="pswField" className="block font-medium text-gray-700 mb-2">Password:</label>
        <input
          id="pswField"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="form-input w-full border border-blue-700 rounded-lg p-2 text-lg"
        />
        <div id="pswError" className="text-red-500 text-sm mt-2"></div>
        <br />
        <button id="submitBtn" type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-full">Submit</button>
      </form>
    </div>
  );
}

export default App;
