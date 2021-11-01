import HeadingGrp from "@/com_g/HeadingGrp";
import { ImQuotesLeft } from "react-icons/im";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useState } from "react";
import useTimeInterval from "@/hooks/useTimeInterval";
// section 5 client review
const Section5 = () => {
    const reviewData: {
        name: string;
        review: string;
        rating: number;
        desc: string | JSX.Element;
        id: number;
    }[] = [
            {
                name: "Roshan Kumar",
                desc: (
                    <>
                        Founder of <b>WebUiSoft</b>
                    </>
                ),
                review:
                    "As a buyer in a busy market where everyone is a real estate agent, I seek transparency in true numbers & Finderland is my first and only choice.Searches for multiplexes, property comparisons, and the loan estimator.",
                rating: 4,
                id: 0,
            },
            {
                name: "Dvlpr Roshan",
                desc: "Tech Leader",
                review:
                    "As a buyer in a busy market where everyone is a real estate agent, I seek transparency in true numbers & Finderland is my first and only choice.Searches for multiplexes, property comparisons, and the loan estimator.",
                rating: 3,
                id: 1,
            },
            {
                name: "Ujjwal Thakur",
                desc: (
                    <>
                        Founder<b> of MyFansClub</b>
                    </>
                ),
                review:
                    "As a buyer in a busy market where everyone is a real estate agent, I seek transparency in true numbers & Finderland is my first and only choice.Searches for multiplexes, property comparisons, and the loan estimator.",
                rating: 3,
                id: 2,
            },
            {
                name: "Neha Singh",
                desc: "Singer, HouseWife",
                review:
                    "As a buyer in a busy market where everyone is a real estate agent, I seek transparency in true numbers & Finderland is my first and only choice.Searches for multiplexes, property comparisons, and the loan estimator.",
                rating: 4,
                id: 3,
            },
            {
                name: "Priynka Mishra",
                desc: "designer at MakeMyDress.com",
                review:
                    "As a buyer in a busy market where everyone is a real estate agent, I seek transparency in true numbers & Finderland is my first and only choice.Searches for multiplexes, property comparisons, and the loan estimator.",
                rating: 3,
                id: 4,
            },
        ];

    const [currentSlide, setCurrentSlide] = useState<{ id: number }>({
        id: 0,
    });

    // handle slide right with changing id and if id is greater than length of reviewData then set it to 1
    const handleNextSlide = () => {
        if (currentSlide.id < reviewData.length - 1) {
            setCurrentSlide({ id: currentSlide.id + 1 });
        } else {
            setCurrentSlide({ id: 0 });
        }
    };


    useTimeInterval((e: any) => {
        handleNextSlide();
    }, 8000);

    return (
        <div className="section5">
            <HeadingGrp title="Client review" subTitle="our client review" />
            <div className="slider">
                <style jsx>{`
          .slide {
            transform: translateX(-${currentSlide.id * 100}%);
          }
        `}</style>
                {reviewData.map((item, index) => {
                    return (
                        <div className="slide " key={index}>
                            <div className="quote">
                                <ImQuotesLeft className="upper-quote" />
                                <div className="review">{item.review} </div>
                                <ImQuotesLeft className="bottom-quote" />
                            </div>
                            <div className="rating">
                                {new Array(item.rating).fill(0).map((_, i) => (
                                    <AiFillStar key={i} className="icons" />
                                ))}
                                {new Array(5 - item.rating).fill(0).map((_, i) => (
                                    <AiOutlineStar key={i} className="icons" />
                                ))}
                            </div>
                            <div className="name">{item.name}</div>
                            <div className="desc">{item.desc}</div>
                        </div>
                    );
                })}
            </div>
            <div className="navigator">
                {reviewData.map((_, index) => {
                    return (
                        <div
                            className={`nav-item ${_.id === currentSlide.id ? "active" : ""}`}
                            key={index}
                            onClick={() => setCurrentSlide({ id: _.id })}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
};
export default Section5;
