
import { Fragment, FunctionComponent } from "react"
import { Route } from 'react-router-dom';

const Register: FunctionComponent<any> = (props) => {
    return (
        <Fragment>
          <h1>Welcome to Register Page</h1>
          <input name="email" type='email' />
          <input type="text" name="username"/>
          <input type="password" name="password"/>
          <input type="password_confirm" name="password_confirm"/>
        </Fragment>

    )
}

export default Register;