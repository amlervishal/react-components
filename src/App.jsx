import Accordian from "./components/Accordian/Accordian";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Menu from "./components/NestedMenu/Menu";
import RandomColorGenerator from "./components/RandomColorGenerator/RandomColorGenerator";
import StarRatings from "./components/StarRatings/StarRatings";

function App() {
  return (
    <>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {/* Nested Menu */}
        <div className="snap-start">
          <Menu />
        </div>
        {/* ImageSlider */}
        <div className="snap-start">
          <ImageSlider url={"https://picsum.photos/v2/list"} limit={5} />
        </div>
        {/* Accordian */}
        <div className="snap-start">
          <Accordian />
        </div>
        {/* Color Generator */}
        <div className="snap-start">
          <RandomColorGenerator />
        </div>
        {/* Star Ratings */}
        <div className="snap-start">
          <StarRatings />
        </div>
        {/*  */}
       
      </div>
    </>
  );
}

export default App;
