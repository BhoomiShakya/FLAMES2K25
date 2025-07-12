import React from "react";
import {useNavigate} from 'react-router-dom';

function About(){

    const navigate = useNavigate();
    
    const handleSubmit = ()=>{
        alert("Message Sent!");
        navigate("/")
    }

    return (
        <div>
                <h1 className="text-2xl font-bold text-blue-700">Welcome to ABOUT page </h1>
                <button onClick={handleSubmit}  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Click Me</button>
        </div>
    )
}

export default About;