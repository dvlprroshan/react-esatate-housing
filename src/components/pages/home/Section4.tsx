import HeadingGrp from "@/com_g/HeadingGrp";
import { GiRocket } from "react-icons/gi";

// why choose us section
const Section4 = () => {
    return (
        <div className="section4">
            <br />
            <HeadingGrp
                title="Why Choose Us"
                subTitle="We provide full service at every step"
            />
            <div className="main-content">
                <div className="animated-img">
                    <div className="main-img"></div>
                </div>
                <div className="content">
                    <div className="card-1">
                        <div className="title">OUR TEAM OF PROFESSIONALS</div>
                        <div className="dec">
                            We use modern technology along with our market knowledge,
                            unsurpassed negotiation and sales skills, professional experience{" "}
                        </div>
                    </div>
                    <div className="card-2">
                        <div className="title">PROVEN RESULTS</div>
                        <div className="dec">
                            We use modern technology along with our market knowledge,
                            unsurpassed negotiation and sales skills, professional experience{" "}
                        </div>
                    </div>
                    <div className="card-3">
                        <div className="title">PRICING STRATEGIES</div>
                        <div className="dec">
                            We use modern technology along with our market knowledge,
                            unsurpassed negotiation and sales skills, professional experience{" "}
                        </div>
                    </div>
                    <div className="card-4">
                        <div className="title">BUYING STRATEGIES</div>
                        <div className="dec">
                            We use modern technology along with our market knowledge,
                            unsurpassed negotiation and sales skills, professional experience{" "}
                        </div>
                    </div>
                </div>

                <GiRocket className="vector-icon" style={{ stroke: "url(#blue-gradient)" }} />

            </div>
        </div>
    );
};

export default Section4;
