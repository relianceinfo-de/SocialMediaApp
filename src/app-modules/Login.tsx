
import { Fragment, FunctionComponent } from "react"
import {  Route } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';


/**
 * validationSchema {
 * username: string;
 * email: pattern | email
 * password: minmum of 6
 * 
 * }
 * onSubmit 
 * error
 * components
 */
const newFunction = () => {
  return [1, 2, 3, 4]
}


const Login: FunctionComponent<any> = (props) => {
  const TYPE = 'type';

  const a = true;
  const b = false;

  console.log( true && a && a && 'yhhjnjn' ); //0
  // 0 , undefined , null ==> false
  // ""
  // a == true && (
  //   <h1>
  //     jfudjs
  //   </h1>
  // )
  // true && true  =>  //if block
  // false && false => //if block

  // if(a === true && b === false){
  //   // here
  // }else{
  //   //there

  // }


  return (
    /**
     * TODO: Use Formik for Validation
     */
    <div className="flex flex-col">
      <Formik
        initialValues={{ email: 'email@yahoo.com', password: 'password' }} //Default values

        // validate={

        //   (values) => {

        //     const errors: any = {};
        //     console.log(errors['email']);

        //     if (!values.email) {
        //       errors.email = 'Required';
        //     } else if (
        //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //     ) {
        //       errors.email = 'Invalid email address';
        //     }

        //     return errors;
        //   }
        // }

      validationSchema={
        Yup.object({
          // firstName: Yup.string()
          //   .max(15, 'Must be 15 characters or less')
          //   .required('Required'),
          // lastName: Yup.string()
          //   .max(20, 'Must be 20 characters or less')
          //   .required('Required'),
          password: Yup.string().min(6, 'Hey we need min of 6').required('Password is definetly required'), //.matches(''),
          email: Yup.string().email('Invalid email address').required('Required'),
        })
      }
        onSubmit={
          async (values, { setSubmitting }) => {
            setTimeout(
              async () => {
              alert( JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 4000);
          }} >

        {({
          values,
          errors,
          touched,
          dirty,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          
          /* and other goodies */
        }) => (
          // <form onSubmit={handleSubmit}>
          //   <p>
          //   {errors.email && touched.email && errors.email} 
          //   {errors.password && touched.password && errors.password} 
          //   </p>
          //   <input
          //     type="email"
          //     name="email"
          //     onChange={handleChange}
          //     onBlur={handleBlur}
          //     value={values.email}
          //   />

          
            
          //   <input
          //     type="password"
          //     name="password"
          //     onChange={handleChange}
          //     onBlur={handleBlur}
          //     value={values.password}
          //   />

          //   {errors.password && touched.password && errors.password}
          //   <button type="submit" disabled={isSubmitting}>
          //     Submit
          //   </button>
          // </form>

          <Form>
            <ErrorMessage name="email" component="div" />
            <ErrorMessage name="password" component="div" />

          <Field type="email" name="email" />


          <Field type="password" name="password" />


          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>


        )}
     
      </Formik>

      {/* <h1>Welcome to Login Page</h1>
          <input name="email" type={'email'} />
          <input type="password" name="password"/>
          <input type="submit" value={'Login'} /> */}
    </div>

  )
}

export default Login;


// const Basic = () => (
//   <div>
//     <Formik
//       initialValues={{ email: '', password: '' }}
//       validate={values => {
//         const errors = {};
//         if (!values.email) {
//           errors.email = 'Required';
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = 'Invalid email address';
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         isSubmitting,
//         /* and other goodies */
//       }) => (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.email}
//           />
//           {errors.email && touched.email && errors.email}
//           <input
//             type="password"
//             name="password"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.password}
//           />
//           {errors.password && touched.password && errors.password}
//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </form>
//       )}
//     </Formik>
//   </div>
// );

