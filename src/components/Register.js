import React from 'react'
import {Link} from 'react-router-dom';
import { CreateFormPath } from '../constants/RoutePath';

function Register() {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <Link className="btn btn-primary btn-lg" to={CreateFormPath}>Register</Link>
        </div>
    )
}

export default Register;
