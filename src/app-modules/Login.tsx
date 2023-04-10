
import { Fragment, FunctionComponent } from "react"
import { Route } from 'react-router-dom';

const Login: FunctionComponent<any> = (props) => {
    return (
      /**
       * TODO: Use Formik for Validation
       */
        <div className="flex flex-col">
          
          <h1>Welcome to Login Page</h1>
          <input name="email" type={'email'} />
          <input type="password" name="password"/>
          <input type="submit" value={'Login'} />
        </div>

    )
}

export default Login;