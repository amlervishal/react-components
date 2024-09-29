import Accordian from "./components/Accordian/Accordian";
import RandomColorGenerator from "./components/RandomColorGenerator/RandomColorGenerator";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <div className="snap-start">
          <Accordian />
        </div>
        <div className="snap-start">
          <RandomColorGenerator />
        </div>
      </div>
    </>
  );
}

export default App;
