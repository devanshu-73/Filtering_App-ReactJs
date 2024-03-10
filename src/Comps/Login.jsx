import { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Login = () => {
    const [formValue, setFormValue] = useState({
        username: '',
        password: '',
    })
    const handleOnChange = (e) => {
        const {name,value} = e.target;
        setFormValue({...formValue,[name]:value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        // =========== Registration Process ===============
        let data = {
            username:formValue.username,
            password:formValue.password
        }
        const res = await axios.post('http://localhost:3001/users',data)
        console.log('Response : ',res.data);
        // =========== Login Process ===============

        // const res = await axios.get('http://localhost:3001/users')
        // const founduser = res.data.find(user=>user.username === formValue.username && user.password === formValue.password)
        // if (founduser) {
        //     alert("Login SuccessFully");
        // } 
        // else{
        //     alert("Login Error");
        // }
        setFormValue({username:'',password:''})
    }

    return (
        <>
            <div>
                <div className="background">
                    <div className="shape" />
                    <div className="shape" />
                </div>
                <form onSubmit={handleSubmit}>
                    <h3>Login | Devanshu </h3>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Email or Phone" onChange={handleOnChange} value={formValue.username} id="username" name='username' />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" onChange={handleOnChange} value={formValue.password} id="password" name='password' />
                    <button type='submit'>Log In</button>
                </form>
            </div>
        </>
    )
}

export default Login;
