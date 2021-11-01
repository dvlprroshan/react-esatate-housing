// Section2 component
import React from "react";

const Section2 = () => {
    const cardsData = [
        {
            title: "Buying a Home",
            link: "#",  
            image: "/assets/images/section2-card/1.png",
        },
        {
            title: "Renting a home",
            link: "#",
            image: "/assets/images/section2-card/2.png",
        },
        {
            title: "Sell/Rent properties",
            link: "#",
            image: "/assets/images/section2-card/3.png",
        },
        {
            title: "PG and co-living",
            link: "#",
            image: "/assets/images/section2-card/4.png",
        },
        {
            title: "Commercial spaces",
            link: "#",
            image: "/assets/images/section2-card/5.png",
        },
    ];

    return (
        <div className="section2">
            <div className="heading">
                GET STARTED WITH EXPLORING REAL ESTATE OPTIONS
            </div>

            <div className="card-con">
                {cardsData.map((card, index) => (
                    <a className="card" href={card.link} key={index}>
                        <div className="card-img">
                            <img src={card.image} alt="" />
                        </div>
                        <div className="card-title">{card.title}</div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Section2;
