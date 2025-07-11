import React from "react";
import Cards from "./Card";

function Tours({tours, BtnHandler}){
    return (
        <div className="container">
            <div>
                <h2 className="heading01">Plan with Love</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour)=>{
                        return <Cards key={tour.id} {...tour} BtnHandler={BtnHandler}/>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;
