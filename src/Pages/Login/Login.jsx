import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    //navigate for go to home page............................
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const loginHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        let email = form.email.value;
        let password = form.password.value;
        form.reset();
        //navigate for go to home page loaction....................................
        navigate(from, {replace: true})
        loginUser(email, password)
        .then((userCredential)=>alert("Login successfully", userCredential))
        .catch ((error)=>(alert(`Failed to login account for ${error}`)))
    };

    return (
        <div className='d-flex justify-content-center mt-5'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className='text-center'>Card Title</Card.Title>

                    <form onSubmit={loginHandler} className='d-flex flex-column '>
                        <input type="email" name='email' placeholder='email' className='mb-2 px-3 py-2'/>
                        <input type="password" name='password' placeholder='password' className='mb-2 px-3 py-2'/>
                        
                        <button class="btn btn-primary">Login</button><hr />
                    </form>
                    <p className='text-center'>New in Dragon.Please <Link to='/register'>Register</Link></p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;