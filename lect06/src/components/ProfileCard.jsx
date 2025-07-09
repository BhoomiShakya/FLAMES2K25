import React from "react";

function ProfileCard(){
    return(
        <div className="bg-white shadow-md rounded-2xl p-5 w-64 text-center hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-gray-700">Sia </h3>
            <p className="text-sm text-gray-400">Associate Data Scientist</p>
        </div>
    )
}

export default ProfileCard;