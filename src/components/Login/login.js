import React from 'react';
import { Formik } from 'formik';
import './login.css'
const Login = () => (
<div>
  <h1> Howl Login </h1>
  <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
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
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
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
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <label className="login-form-labels">Username(email):</label>
           <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
           {errors.email && touched.email && errors.email}
           <label className="login-form-labels">Password:</label>
           <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
           {errors.password && touched.password && errors.password}
           <div className="spacer"></div>
           <button type="submit" disabled={isSubmitting}>Login</button>
         </form>
       )}
     </Formik>
</div>
);
 
export default Login;