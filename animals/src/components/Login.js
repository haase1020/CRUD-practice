import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Login(props) {
    // How can we log in? What do we need to do?

const [login, setLogin] = useState({
    usename:'',
    password: ''
});


const handleChange = (event) =>{
    setLogin({
        ...login,
        [event.target.name]: event.target.value
    })
};
const handleSubmit = (event) => {
event.preventDefault()
axiosWithAuth().post().then(response => {
    console.log('response', response)
    localStorage.setItem('token', response.data.payload)
    //make history a hook
    //might have to change the route
    props.history.push('/creatures')
})
.catch(error => {
    console.log(`login error: ${error}`)
})
}

    return (
        <div>
            <form className='' onSubmit={handleSubmit}>
                <input type='text'
                placeholder='username'
                name='username'
                value={login.username}
                label='username'
                onChange={handleChange}
                className=''
                />
                <input type='password'
                placeholder='password'
                name='password'
                value={login.password}
                label='password'
                onChange={handleChange}
                className=''
                />
                <button className='start'>Login</button>
            </form>
        </div>
    )
}