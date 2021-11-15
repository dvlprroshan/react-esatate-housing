import { capitalize } from "@/helpers/string";
import Select from 'react-select';
import { useState } from 'react';

// data of filters for search
const dropdownItems = {
    // ** first value of all properties is default value.
    // ! readonly data

    // vaild cities:
    city: ["All", "Delhi", "Mumbai", "Patna", "Jaipur"],

    // valid properties type:
    type: [
        "All",
        "Appartment",
        "Office Space",
        "Sky Villa",
        "Farm House",
    ],

    // valid properties status:
    status: ["All", "Rent", "Buy", "Advance Booking"],
};

const SearchPanel = () => {
    // options types for search to select field
    type dropdownItemsType = {
        city: typeof dropdownItems.city[number];
        type: typeof dropdownItems.type[number];
        status: typeof dropdownItems.status[number];
    };


    // initialize state for form values with default value
    const [selectedValue, setSelectedValue] = useState<dropdownItemsType>({
        city: dropdownItems.city[0],
        type: dropdownItems.type[0],
        status: dropdownItems.status[0],
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(selectedValue);
    };

    // returning form elements
    return (
        <form className="properties_search">
            <div className="firstCon">
                {/* print all selection boxes with requird props */}
                {Object.entries(dropdownItems).map(
                    (item): React.ReactElement => (
                        <Select
                            // key, intanceId both are for unique ID
                            key={`key-${item[0]}`}
                            instanceId={`id-${item[0]}`}
                            // element name helps in targeting data in post request.
                            name={item[0]}
                            className="inputSelect"
                            placeholder={`Select ${capitalize(item[0])}:`}
                            // all vaild options for items
                            options={item[1].map((e: any) => ({
                                value: e,
                                label: e,
                            }))}
                            // set data to component state when data changes
                            onChange={(e: any) =>
                                setSelectedValue({ ...selectedValue, [item[0]]: e.value })
                            }
                        />
                    )
                )}
            </div>
            {/* this element is just for styling with own way */}
            <div className="secondCon">
                <button type="submit" onClick={handleSubmit} className="btn-search">
                    Find Properties
                </button>
            </div>

            {/* short text */}
            <div className="guidedText">
                Select Your Prefered City, Properties Type, and status then Click the
                search box
            </div>
        </form>
    );
};

export { dropdownItems };

export default SearchPanel;