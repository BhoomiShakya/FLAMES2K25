import React from "react";
import Cards from "./Card";

function Tours({tours}){
    return (
        <div className="container">
            <div>
                <h2 className="heading01">Plan with Love</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour)=>{
                        return <Cards key={tour.id} {...tour}/>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;
