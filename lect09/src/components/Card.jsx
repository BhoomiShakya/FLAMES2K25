import React from "react";

function Cards({id, image, price, name, info, BtnHandler}){
    return (
        <div className="card">
            <img src={image} className="image" />
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">$ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div>
                        {info}
                        <span className="read-more">
                            readmore
                        </span>
                </div>
            </div>
            <button className="btn-red" onClick={()=>BtnHandler(id)}>Not Interested</button>
        </div>
    )
}

export default Cards;
