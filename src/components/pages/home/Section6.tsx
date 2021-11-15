import HeadingGrp from "@/com_g/HeadingGrp";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
// section 6 of home page

const Section6 = () => {
    const cardData = [
        {
            id: 1,
            title: "Delhi / NCR",
            dec: "2+ properties",
        },
        {
            id: 2,
            title: "Delhi / NCR",
            dec: "2+ properties",
        },
        {
            id: 3,
            title: "Delhi / NCR",
            dec: "2+ properties",
        },
        {
            id: 4,
            title: "Delhi / NCR",
            dec: "2+ properties",
        },
        {
            id: 5,
            title: "Delhi / NCR",
            dec: "2+ properties",
        },
        {
            id: 6,
            title: "Delhi / NCR",
            dec: "2+ properties",
        },
    ];

    return (
        <div className="section-6">
            <HeadingGrp title="TOP CITIES" subTitle="Explore Popular Indian cities" />
            <div className="main-con">
                {cardData.map((item, index) => (
                    <div className="card" key={index} >
                        <div className="card-img">
                            <img src={`/assets/images/section6/${item.id}.png`} />
                        </div>
                        <div className="card-content">
                            <div className="card-title">${item.title}</div>
                            <div className="card-dec">{item.dec}</div>
                        </div>
                    </div>
                ))}
                <div className="  card view-all">
                    <BsFillArrowRightCircleFill className="icon" />
                    <div className="text">View All</div>
                </div>
            </div>
        </div>
    );
};

export default Section6;
