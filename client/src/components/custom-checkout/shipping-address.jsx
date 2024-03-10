import { Formik } from "formik";
import React from "react";

const validate = (values) => {
  const { name, email } = values;
  const errors = {};
  if (!email) {
    errors.email = "Required";
  }
  if (!name) {
    errors.name = "Required";
  }

  return errors;
};

const ShippingAddress = ({ setShipping }) => {
  const initialValues = {
    email: "",
    name: "",
  };
  return (
    <div>
      <h4>Shipping Address</h4>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values) => {
          console.log(values);
          setShipping(values);
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          const { name, email } = errors;
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  //   className={"nomad-input" + (name ? "error" : "")}
                  className={"nomad-input"}
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  //   className={"nomad-input" + (email ? "error" : "")}
                  className={"nomad-input"}
                  placeholder="Email"
                />
              </div>
              <div className="submit-btn">
                <button
                  type="submit"
                  className="button is-black nomad-btn submit"
                >
                  CONTINUE
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ShippingAddress;
