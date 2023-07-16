import React, { useContext, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser}= useContext(AuthContext);
    const [termsAccepted,setTermsAccepted]=useState(false)
    const [error, setError] = useState();
    const [registerSuccess, setRegisterSuccess] = useState();

    const registerHandler= (event)=>{
        event.preventDefault();
        const form = event.target;
        let name = form.name.value;
        let email = form.email.value;
        let password = form.password.value;
        form.reset();
        console.log(name,email,password);
        createUser(email, password)
            .then((userCredential) => {g
                setRegisterSuccess("Successfully Registerd")
                setError('')
            })
            .catch((error) => {
                setError("This email has been used",)
                setRegisterSuccess('')
            })
    }

    const handleAccept=(event)=>{
        setTermsAccepted(event.target.checked)

    }
    return (
        <div className='d-flex justify-content-center mt-5'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className='text-center'>Card Title</Card.Title>

                    <form onSubmit={registerHandler} className='d-flex flex-column '>
                        <input type="text" name='name' placeholder='Name' className='mb-2 px-3 py-2'/>
                        <input type="email" name='email' placeholder='email' className='mb-2 px-3 py-2'/>
                        <input type="password" name='password' placeholder='password' className='mb-2 px-3 py-2'/>
                        <Form.Check
                        type='checkbox'
                        onClick={handleAccept}
                        label={<>Accept <a>Terms and conditions</a></>}
                    ></Form.Check>
                        <button class="btn btn-primary mt-2" disabled={!termsAccepted}>Register</button><hr />
                    </form>
                    <p className='text-center'>
                        <span className='text-danger'>{error}</span>
                        <span className='text-success'>{registerSuccess}</span>
                    </p>
                    <p className='text-center '><small>Already you have account. Please <Link to='/login'>Login</Link></small></p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Register;