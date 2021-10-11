import React, { useState } from 'react'
import { useHistory } from 'react-router'
//import { useHistory } from 'react-router-dom';

const Signup = (props) => {
    const [credentials,setCredentials]=useState({name:"",email:"",password:"",cpassword:"" })
    let history=useHistory();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const {name,email,password}=credentials; 
        const response=await fetch("http://localhost:5000/api/auth/createuser",{
  
        method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name,email,password})
        });
        const json=await response.json()
        console.log(json);
        if(json.success)
        {
            //Save auth token and redirect
           localStorage.setItem('token',json.authtoken);
           history.push("/");
           props.showAlert("Account Created Successfully","success")
        }
       else{
           props.showAlert("Invalid Details","danger")
       }
    }

    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    return (
        <div className="mt-2">
            <div className="container my-4" style={{padding:"140px",borderRadius:"4%",backgroundImage: "radial-gradient(circle,  rgb(4 194 246), rgb(86 255 121))"}}>
            <h1>Sign Up to Continue</h1>
            <form onSubmit={handleSubmit} >
            <div className="mb-3">
                    <label htmlForm="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" aria-describedby="textHelp" onChange={onChange} required/>
                   
                </div>
                <div className="mb-3">
                    <label htmlForm="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"  onChange={onChange} required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlForm="password" className="form-label">Password</label>
                    <input type="password" className="form-control"  name="password" id="password"  onChange={onChange} minLength="5" required />
                </div>
                <div className="mb-3">
                    <label htmlForm="password" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control"  name="cpassword" id="cpassword"  onChange={onChange} minLength="5" required />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Signup;