import { useEffect, useState } from "react";
import { LuChevronLeftSquare } from "react-icons/lu";
import { LuChevronRightSquare } from "react-icons/lu";
import { GoDash } from "react-icons/go";

export default function ImageSlider({ url, limit }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    setLoading(true);
    try {
      const response = await fetch(`${getUrl}?page=5&limit=${limit}`);
      if (!response.ok) {
        throw new Error(
          `Error getting images from API Statur ${response.status}`
        );
      }

      const data = await response.json();

      if (data && data.length > 0) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url, limit]);

  useEffect(() => {
    if (images.length > 0 && currentSlide >= images.length) {
      setCurrentSlide(0);
    }
  }, [images, currentSlide]);

  function handleDotClick(index) {
    setCurrentSlide(index);
    setActiveDot(index);
  }

  function renderDots() {
    return images.map((_, index) => (
      <span
        key={index}
        className={`cursor-pointer ${
          index === activeDot ? "text-slate-800" : "text-slate-200"
        } text-5xl font-bold`}
        onClick={() => handleDotClick(index)}
      >
        <GoDash size={48} />
      </span>
    ));
  }

  function handleNextSlide() {
    const nextSlide = (currentSlide + 1) % images.length;
    setCurrentSlide(nextSlide);
    setActiveDot(nextSlide);
  }

  function handlePrevSlide() {
    const prevSlide = (currentSlide - 1 + images.length) % images.length;
    setCurrentSlide(prevSlide);
    setActiveDot(prevSlide);
  }

  console.log("Current images state:", images);
  console.log("Current slide index:", currentSlide);

  return (
    <div className="grid grid-cols-1 gap-10 place-content-center justify-items-center mx-auto p-10 w-screen h-screen ">
      <h2 className="font-bold tracking-widest text-2xl">IMAGE SLIDER</h2>
      <h4 className="font-light tracking-widest">Simple image slider without timeout</h4>

      {loading ? (
        <h3>Loading images... please wait...</h3>
      ) : (
        images.length > 0 && (
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-around gap-4">
              <LuChevronLeftSquare
                onClick={handlePrevSlide}
                className="stroke-slate-500 text-2xl drop-shadow-md cursor-pointer"
              />

              <div className="w-[75vw] h-[50vh] overflow-hidden rounded-lg shadow-lg">
                <img
                  src={images[currentSlide].download_url}
                  className="h-full w-full object-cover"
                />
              </div>

              <LuChevronRightSquare
                className="stroke-slate-500 text-2xl drop-shadow-md cursor-pointer"
                onClick={handleNextSlide}
              />
            </div>
            <div className="flex justify-between">{renderDots()}</div>
          </div>
        )
      )}
    </div>
  );
}
