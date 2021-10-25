import React from "react";

const useWindowScrollPosition = (): number => {
  const [scrollPos, setWindowSize] = React.useState<number>(0);

  React.useEffect(() => {
    const handleScroll = () => setWindowSize(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPos;
};

export default useWindowScrollPosition;
