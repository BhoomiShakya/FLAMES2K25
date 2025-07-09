import React from "react";
function Child({ user_for_child }) {
    return (
        <div className="border-l-4 border-blue-300 pl-4 mb-4">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Child Component</h2>
            <p className="text-sm text-gray-700 mt-2">
                <strong>Name: </strong> {user_for_child.name}<br/>
                <strong>Email: </strong> {user_for_child.email}<br/>
                <strong>Role: </strong> {user_for_child.role}<br/>

            </p>
        </div>
    )
}

export default Child;