import useWindowScrollPosition from "@/hooks/useWindowScrollPosition";
import { TiChevronRight } from "react-icons/ti";
import { useState } from "react";
import useTimeInterval from "@/hooks/useTimeInterval";
import Select from "react-select";
import { capitalize } from "@/helpers/string";

// search box with loaded functionality
const SearchPanel = () => {
  // options types for search to select field
  type dropdownItemsType = {
    city: typeof dropdownItems.city[number];
    type: typeof dropdownItems.type[number];
    status: typeof dropdownItems.status[number];
  };

  // data of filters for search
  const dropdownItems = {
    // ** first value of all properties is default value.
    // ! readonly data

    // vaild cities:
    city: ["All", "Delhi", "Mumbai", "Patna", "Jaipur"] as const,

    // valid properties type:
    type: [
      "All",
      "Appartment",
      "Office Space",
      "Sky Villa",
      "Farm House",
    ] as const,

    // valid properties status:
    status: ["All", "Rent", "Buy", "Advance Booking"] as const,
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
    <form className="properties_search" method="post">
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

// Main component
const HomeTopSection = (): React.ReactElement => {
  // use custom hook to get position of scrollbars.
  const scrollPos = useWindowScrollPosition();
  // get window or nothing (without giving error in SSR)
  let $: any = typeof window === "undefined" ? {} : window;

  // use internal state for current slide info
  const [currentSlide, setCurrentSlide] = useState<{ id: number; src: string }>(
    { id: 1, src: "/assets/images/background-top-section-home.png" }
  );

  // all slides only location -> use id with index
  const sliderSlides: Array<{ id: number; src: string }> = [
    "/assets/images/background-top-section-home.png",
    "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ].map((e, i) => ({ id: i + 1, src: e }));

  // change slide to right or left with current state slide id
  const swipeBackgroundSlider = (dir: "right" | "left" | "default") => {
    // if default then set first slide
    if (dir === "default") {
      setCurrentSlide(sliderSlides[0]);
    } else if (dir === "right") {
      currentSlide.id === sliderSlides.length
        ? setCurrentSlide(sliderSlides[0])
        : setCurrentSlide(sliderSlides[currentSlide.id]);
    } else if (dir === "left") {
      currentSlide.id === 1
        ? setCurrentSlide(sliderSlides[sliderSlides.length - 1])
        : setCurrentSlide(sliderSlides[currentSlide.id - 2]);
    }
  };

  // autoplay in 10s -> move right in every 10s
  useTimeInterval(() => {
    swipeBackgroundSlider("right");
  }, 10000);

  // returning component jsz
  return (
    <div className="home_topSection">
      {/* component jsx style -> dynamic styling  */}
      {/* background for silder and backgroundSize for scroll glow effect */}
      <style jsx>{`
        .home_topSection {
          background: url("${{ ...currentSlide }.src}");
          background-size: ${`${100 + scrollPos * 0.1}% ${
            scrollPos * 0.1 + 100
          }%`};
        }
      `}</style>
      {/* large title box */}
      <div className="title_box">Find Your Favorite Property</div>
      <SearchPanel />
      {/* main slider Navigator */}
      <div className="slider_navigator">
        {/* left swipe slider */}
        <div className="btn-left" onClick={() => swipeBackgroundSlider("left")}>
          <TiChevronRight size={40} style={{ transform: "rotate(180deg)" }} />
        </div>
        {/* right right slider */}
        <div
          className="btn-right"
          onClick={() => swipeBackgroundSlider("right")}
        >
          <TiChevronRight size={40} style={{ transform: "rotate(180deg)" }} />
        </div>
      </div>
      {/* slider position information and navigation */}
      <div className="slider_navigator_info">
        {sliderSlides.map((e) => (
          <div
            className={`item ${currentSlide.id === e.id ? "active" : ""}`}
            key={e.id}
            onClick={() => setCurrentSlide(sliderSlides[e.id - 1])}
          ></div>
        ))}
      </div>
      {/* for down wave effect */}
      <div className="down_wave"></div>
    </div>
  );
};

export default HomeTopSection;
