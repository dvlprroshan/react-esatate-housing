import HeadingGrp from "@/com_g/HeadingGrp";
import { IoMdBed } from "react-icons/io";
import { FaBath, FaCar, FaMap } from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";

type ThirdSectionCardType = {
    image: string;
    title: string;
    price: string;
    status: string;
    smallDetails: { [key: string]: string };
    link: string;
};

const ThirdSectionCard = ({
    image,
    title,
    price,
    status,
    smallDetails,
    link,
}: ThirdSectionCardType) => {
    return (
        <a href={link} className="card" >
            <style jsx>{`
        .card {
          background: url(${image}) no-repeat center center;
        }
      `}</style>
            <div className="inner">
                <div
                    className={`card-label ${status.toUpperCase() == "FOR SALE" ? "red" : "blue"
                        }`}
                >
                    {status.toUpperCase()}
                </div>
                <div className="card-details-info">
                    <div className="card-title">{title}</div>
                    <div className="card-price">{price}</div>
                    <div className="card-details">
                        <IoMdBed className="icons" />
                        <div className="text">{smallDetails.br}</div>
                        <div className="bar"></div>
                        <FaBath className="icons" />
                        <div className="text">{smallDetails.ba}</div>
                        <div className="bar"></div>
                        <FaCar className="icons" />
                        <div className="text">{smallDetails.ga}</div>
                        <div className="bar"></div>
                        <FaMap className="icons" />
                        <div className="text">{smallDetails.sqft}</div>
                    </div>
                </div>
            </div>
        </a>
    );
};

// section 3 ( featured properties ) of home page
const Section3 = () => {
    const dataOfCard = [
        {
            image: "/assets/images/section3-card/1.png",
            title: "luxury House In Noida Sector - 10",
            price: "6.5 Cr",
            status: "For Sale",
            smallDetails: {
                br: "3 Br",
                ba: "6 Ba",
                ga: "6 Ga",
                sqft: "2,000 Sqft",
            },
            link: "#",
        },
        {
            image: "/assets/images/section3-card/2.png",
            title: "luxury House In Noida Sector - 10",
            price: "6.5 Cr",
            status: "For Sale",
            smallDetails: {
                br: "3 Br",
                ba: "6 Ba",
                ga: "6 Ga",
                sqft: "2,000 Sqft",
            },
            link: "#",
        },
        {
            image: "/assets/images/section3-card/3.png",
            title: "luxury House In Noida Sector - 10",
            price: "6.5 Cr",
            status: "For Rent",
            smallDetails: {
                br: "3 Br",
                ba: "6 Ba",
                ga: "6 Ga",
                sqft: "2,000 Sqft",
            },
            link: "#",
        },
        {
            image: "/assets/images/section3-card/4.png",
            title: "luxury House In Noida Sector - 10",
            price: "6.5 Cr",
            status: "For Sale",
            smallDetails: {
                br: "3 Br",
                ba: "6 Ba",
                ga: "6 Ga",
                sqft: "2,000 Sqft",
            },
            link: "#",
        },
        {
            image: "/assets/images/section3-card/5.png",
            title: "luxury House In Noida Sector - 10",
            price: "6.5 Cr",
            status: "For Rent",
            smallDetails: {
                br: "3 Br",
                ba: "6 Ba",
                ga: "6 Ga",
                sqft: "2,000 Sqft",
            },
            link: "#",
        },
        {
            image: "/assets/images/section3-card/6.png",
            title: "luxury House In Noida Sector - 10",
            price: "6.5 Cr",
            status: "For Sale",
            smallDetails: {
                br: "3 Br",
                ba: "6 Ba",
                ga: "6 Ga",
                sqft: "2,000 Sqft",
            },
            link: "#",
        },
    ];

    return (
        <div className="section3">
            <HeadingGrp
                title="FEATURED PROPERTIES"
                subTitle="These are my featured properties"
            />
            <div className="card-con">
                {dataOfCard.map((card, index) => (
                    <ThirdSectionCard key={index} {...card} />
                ))}
            </div>
            <div className="view-all">
                <a href="" className="btn-view-all">View All
                    <BsArrowRightCircleFill className="icon" />
                </a>
            </div>
        </div>
    );
};

export default Section3;
