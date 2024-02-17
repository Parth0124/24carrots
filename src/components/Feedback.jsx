import { ArrowRightIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

const slideStyles = {
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#000",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "black",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const Feedback = () => {
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const slides = [
    {
      url: "https://24carrots.com/wp-content/uploads/2023/10/4.2-Lorely-Meza.jpg",
      author: "ROBIN",
      title: "EXECUTIVE ASSISTANT, CORELOGIE",
      details:
        "The staff was top-notch – professional, hardworking, and just a pleasure to work with.",
    },
    {
        url: "https://24carrots.com/wp-content/uploads/2023/10/4.1-Kay-McCoy.jpg",
        author: "Amanda & Jethro",
        title: "THE COLONY HOUSE",
        details:
          "I could not stop getting compliments about how elicious the food was! My [guests] still texted me the day after that the food was delicious.",
      },
      {
        url: "https://24carrots.com/wp-content/uploads/2023/10/4.3-Desert-Born-Studios.jpg",
        author: "Kellie & Paul",
        title: "FRANCISCAN GARDEN",
        details:
          "From the moment we inquired with the venue, through all the planning, execution, and clean-up of the wedding day, we had an amazing experience working with the team.",
      },
      {
          url: "https://24carrots.com/wp-content/uploads/2023/10/4.4-Lorely-Meza.jpg",
          author: "Kimberly",
          title: "CRESTON",
          details:
            "24 Carrots made our week-long event a stress-free and successful one!",
        },
    
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? currentIndex : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="h-[100vh] w-full flex gap-10 mt-0 transition-all duration-500">
      <div
        style={sliderStyles}
        className="w-[50%] h-[90%] flex justify-end items-center pr-20 transition-all duration-500"
      >
        <div
          style={slideStylesWidthBackground}
          className="w-[70%] h-[70%] rounded-md  "
        ></div>
      </div>
      <div className=" font-serif w-[50%] h-[90%] relative">
        <div className="flex flex-col  justify-start items-start pt-5  translate-y-36">
          {/* list */}

          <div className="">
            {slides.map((slide, slideIndex) => (
              <div
                style={dotStyle}
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={` flex flex-col gap-5   `}
              >
                <span className="w-[500px] text-white transition-all duration-500 ">
                  {" "}
                  {slideIndex === currentIndex ? slide.details : <span className="hidden"></span>}
                </span>
                <h2 className="text-xl p-1 text-white">
                  {slideIndex === currentIndex ? slide.author : <span className="hidden"></span>}
                </h2>

                <span className="transition-all duration-500 text-gray-500 text-md">
                  {slideIndex === currentIndex ? slide.title : <span className="hidden"></span>}
                </span>
              </div>
            ))}
          </div>
          <div className="flex item-center justify-between gap-10   ">
            <div
              style={dotsContainerStyles}
              className="flex items-center  text-2xl "
            >
              {slides.map((slide, slideIndex) => (
                <div
                  style={dotStyle}
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className={`w-8 h-1  ${
                    currentIndex === slideIndex
                      ? "bg-green-950"
                      : "bg-slate-500"
                  }`}
                ></div>
              ))}
            </div>
            <button onClick={goToNext} className=" flex items-center gap-3">
              {" "}
              NEXT TESTIMONIAL{" "}
              <ArrowRightIcon className="text-md flex items-center text-white  p-3   rounded-full h-10 w-10 border-2" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
