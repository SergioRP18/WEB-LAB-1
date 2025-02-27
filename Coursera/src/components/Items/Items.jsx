import React from "react";
import "./Items.css";

const Items = ({ items }) => {
    return (
        <div className="content-items">
            <h2>Invest in your career</h2>
            <div className="cards-items">
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <img src={item.image}/>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Items;