import React, { Fragment, useState } from 'react'
// import axios from 'axios'
import {Link} from 'react-router-dom'
import {authAxios} from '../services/httpServices';


function Login(props) {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [error, setError]=useState('')

    const submit= async (e) =>{
        e.preventDefault();
            try {
                const {data} = await authAxios.post("token/", {"email":email,"password":password})
                localStorage.setItem("access_token", data.access)
                localStorage.setItem("refresh_token", data.refresh)
                authAxios.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem("access_token")
                window.location = `/`;
                
            } catch (ex) {
                if (ex.response && ex.response.status === 400){
                    console.log(ex.response.data)
                    setError(ex.response.data)
                }
            }
        

    }

    return (
        <Fragment>
           
            <div className="row">
                        <div className="col-6">
                             {error && (
                            <div className="alert alert-danger" role="alert">
                                {error.error}
                            </div>)}
                            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                            <form action="" onSubmit={submit}>
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=> setEmail(e.target.value)}/>
                                    <label htmlFor="floatingInput" name="email" className="form-label">Email address</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="id_passsword" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
                                    <label htmlFor="id_password" className="form-label">Password</label>
                                </div>
                                <div className="checkbox mb-3">
                                    <label>
                                        <input type="checkbox" value="remember-me"/>
                                    </label>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                            </form>
                            <Link to='/register' className="card-link">Don't have an account?</Link>
                            
                        </div>
                    </div> 
        </Fragment>
        
    )

}

export default Login;