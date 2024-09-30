import Accordian from "./components/Accordian/Accordian";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import RandomColorGenerator from "./components/RandomColorGenerator/RandomColorGenerator";
import StarRatings from "./components/StarRatings/StarRatings";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="snap-start">
          <ImageSlider url={"https://picsum.photos/v2/list"} limit={5} />
        </div>
        <div className="snap-start">
          <Accordian />
        </div>
        <div className="snap-start">
          <RandomColorGenerator />
        </div>
        <div className="snap-start">
          <StarRatings />
        </div>
      </div>
    </>
  );
}

export default App;
