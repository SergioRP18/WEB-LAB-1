import React from "react";
import "./Sponsors.css";

const Brands = ({ brands }) => {
    return (
        <div className="container-sponsors">
            <div className="content">
                <div className="text-content">
                    <div className="elements">
                        <h2 className="title-sponsors">Learn from 350+ top universities and companies</h2>
                        <div className="icons">
                            {brands.map((brand) => (
                                <img key={brand.id} src={brand.image} alt="Brand" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;