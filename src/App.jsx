import Accordian from "./components/Accordian/Accordian";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LoadMore from "./components/LoadMore/LoadMore";
import Menu from "./components/NestedMenu/Menu";
import QRCodeGenerator from "./components/QRCodeGenerator/QRCodeGenerator";
import RandomColorGenerator from "./components/RandomColorGenerator/RandomColorGenerator";
import StarRatings from "./components/StarRatings/StarRatings";

function App() {
  return (
    <>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {/* QRCode Generator */}
        <div className="snap-start">
          <QRCodeGenerator />
        </div>
        {/* Load more demo from API */}
        <div className="snap-start">
          <LoadMore />
        </div>
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
      </div>
    </>
  );
}

export default App;
