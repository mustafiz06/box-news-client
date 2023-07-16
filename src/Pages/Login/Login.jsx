import React, { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    const { loginUser, user } = useContext(AuthContext);
    useTitle('Login')

    //navigate for go to home page............................
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log(from);

    const [error, setError] = useState();
    const [loginSuccess, setLoginSuccess] = useState();

    const loginHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        let email = form.email.value;
        let password = form.password.value;
        form.reset();
        // navigate for go to home page loaction....................................
        // navigate('/')
        // navigate(from, {replace: true})
        loginUser(email, password)
            .then((userCredential) => {
                setLoginSuccess("Login Success")
                setError('')
                if (user.emailVerified) {
                    navigate('/')
                } else {
                    toast.error("You are not verified yet")
                }
            })
            .catch((error) => {
                setError("Invalid Email or Password")
                setLoginSuccess('')
            })
    };

    return (
        <div className='d-flex justify-content-center mt-5'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className='text-center'>Card Title</Card.Title>

                    <form onSubmit={loginHandler} className='d-flex flex-column '>
                        <input type="email" name='email' placeholder='email' className='mb-2 px-3 py-2' />
                        <input type="password" name='password' placeholder='password' className='mb-2 px-3 py-2' />

                        <button class="btn btn-primary">Login</button><hr />
                    </form>
                    <p className='text-center'>
                        <span className='text-danger'>{error}</span>
                        <span className='text-success'>{loginSuccess}</span>
                    </p>
                    <p className='text-center'>New in Dragon.Please <Link to='/register'>Register</Link></p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;