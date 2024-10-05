import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export default function StarRatingsItem({ noOfStars = 5, children }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleOnClick(getCurrentIndex) {
    // console.log("Set Rating Click Index",getCurrentIndex)
    setRating(getCurrentIndex);
  }

  function hadleMouseEnter(getCurrentIndex) {
    // console.log("Mouse Enter index", getCurrentIndex);
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    // console.log("Mouse Leave index", getCurrentIndex);
    setHover(rating)
  }

  return (
    <div className="w-11/12 md:w-1/2 flex justify-between items-center border rounded-sm px-4 md:px-10 py-2 drop-shadow-sm shadow-md">
      <h4 className="text-xl tracking-wider text-slate-700">{children}</h4>
      <div className="flex text-xl">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;

          return (
            <AiFillStar
              key={index}
              className={index <= (hover || rating) ? "fill-yellow-400" : "fill-slate-400"}
              onClick={() => handleOnClick(index)}
              onMouseEnter={() => hadleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
    </div>
  );
}
