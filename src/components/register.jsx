import React, { useState } from 'react'
import registerUser from '../services/httpServices';
import {Link} from 'react-router-dom'

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const submit = (e) => {
        e.preventDefault();
        registerUser({'first_name':firstName, 'last_name':lastName, 'email':email,'contact':contact, 'password':password,'password2':password2})
        window.location = '/login'
    }


    return (
        <div className="row">
            <div className="col-6">
                <h1 className="h3 mb-3 fw-normal">Create An Account</h1>
                <form action="" onSubmit={submit}>
                    
                    <div className="form-floating">
                        <input type="text" className="form-control" id="firstName" onChange={(e)=> setFirstName(e.target.value)}/>
                        <label htmlFor="firstName" name="firstName" className="form-label">First Name</label>
                    </div>
                    <div className="form-floating">
                    <input type="text" className="form-control" id="lastName" onChange={(e)=> setLastName(e.target.value)}/>
                        <label htmlFor="lastName" name="lastName" className="form-label">Last Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=> setEmail(e.target.value)}/>
                        <label htmlFor="floatingInput" name="email" className="form-label">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="number" className="form-control" id="id_contact" placeholder="Contact" onChange={(e)=> setContact(e.target.value)}/>
                        <label htmlFor="id_contact" className="form-label">Contact</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="id_passsword" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
                        <label htmlFor="id_password" className="form-label">Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="id_passsword2" placeholder="Repeat Password" onChange={(e)=> setPassword2(e.target.value)}/>
                        <label htmlFor="id_passsword2" className="form-label">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/>
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                </form>
                <Link to='/login' className="card-link">Already have an account?</Link>
            </div>
        </div>      
     );
}
 
export default Register;