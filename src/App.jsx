import Accordian from "./components/Accordian/Accordian";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div>
        {/* Accordian Component */}
        <Accordian />

        {/* <div>
          <Button className="font-base m-10 tracking-wider">
            Hello Default
          </Button>
          <Button variant="secondary" className="font-base m-10 tracking-wider">
            Hello Secondary
          </Button>
          <Button
            variant="destructive"
            className="font-base m-10 tracking-wider"
          >
            Hello Destructive
          </Button>
          <Button variant="outline" className="font-base m-10 tracking-wider">
            Hello Outline
          </Button>
          <Button variant="ghost" className="font-base m-10 tracking-wider">
            Hello Ghost
          </Button>
        </div> */}
        
      </div>
    </>
  );
}

export default App;
