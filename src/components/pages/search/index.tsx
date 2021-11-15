import Fotter from "@/com_g/Fotter";
import Navbar from "@/com_g/Navbar";
import SearchPanel from "@/com_g/SearchPanel";
import { dropdownItems } from "@/com_g/SearchPanel";
import { capitalize } from "@/helpers/string";

// search page of application
const SearchePage = (props: any): JSX.Element => {
    // available search properties
    const availableProperties = [
        {
            id: 1,
            image: "https://picsum.photos/200/300",
            title: "6BHK Residential Apartment",
            mainTitle: "lorem ipsum",
            address: "Sector - 25, Rewari, Haryana",
            price: "₹3.43 - 3.56Crore",
            area: "5454 - 5652 sq.ft.",
            rating: "4",
        },
    ];

    return (
        <>
            <Navbar activePageMenu="search" />
            <div className="search-main">
                <h1 className="heading">Find Your Favorite Property</h1>
                <SearchPanel />
                <div className="divider">
                    <div className="filter-nav">
                        {Object.keys(dropdownItems).map(
                            (itemType: string, index: number) => {
                                return (
                                    <div className="nav-card">
                                        <div className="card-title">
                                            Properties by {capitalize(itemType)}:
                                        </div>
                                        <ul  className="card-list">
                                            {Object.entries(dropdownItems)[index][1].map(
                                                (item: any) => {

                                                    return <li className="card-item">{item}</li>;
                                                }
                                            )}
                                        </ul>
                                    </div>
                                );
                            }
                        )}
                    </div>
                    <div className="result-con">
                        {availableProperties.map((item: any, index: number) => {
                            return <div className="result-card">
                                <div className="card-image">
                                    <img src={item.image} alt="property" />
                                </div>

                            </div>;
                        })}
                    </div>
                </div>
            </div>
            <Fotter />
        </>
    );
};

export default SearchePage;



// const list = ["apple", "banana", "orange", "grapes", "mango", "pineapple",];
const lislist = ["apple", "banana",]