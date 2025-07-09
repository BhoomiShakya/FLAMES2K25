import React from "react";
import Child from "./Child";

function Parent({user_for_parent}){
    return(
        <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Parent Component</h2>
            <Child user_for_child = {user_for_parent}  />
        </div>
    )
}

export default Parent;