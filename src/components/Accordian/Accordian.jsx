import { Button } from "../ui/button";
import data from "./data";
import { useState } from "react";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [openItems, setOpenItems] = useState([]);
  const [enableMultiple, setEnableMultiple] = useState(false);

  function toggleItem(id) {
    if (enableMultiple) {
      if (openItems.includes(id)) {
        setOpenItems(openItems.filter((item) => item !== id));
      } else {
        setOpenItems([...openItems, id]);
      }
    } else {
      if (selected === id) {
        setSelected(null);
      } else {
        setSelected(id);
      }
    }
  }

  const handleToggle = () => {
    setEnableMultiple(!enableMultiple);
    setOpenItems([]);
    setSelected(null);
  };

  console.log(selected);

  return (
    <>
      <div className="w-screen h-screen">
        <div className="flex flex-col items-center p-20 gap-5">
          <h2 className="font-bold text-xl tracking-widest drop-shadow-md">ACCORDIAN</h2>
          <Button className="w-auto" variant={enableMultiple ? "outline" :"default"} onClick={handleToggle}>
            {enableMultiple ? "DISABLE" : "ENABLE"} MULTIPLE SELECTION
          </Button>
        </div>

        <div className="flex flex-col mx-auto my-10 w-5/6 md:w-1/2 gap-5 px-5 pt-5 pb-10 border rounded">
          {data.map((item) => (
            <div key={item.id} onClick={() => toggleItem(item.id)}>
              <div className="flex flex-row justify-between font-medium text-xl p-3 border-b-2 border-slate-800">
                <h4 className="tracking-widest">{item.title}</h4>
                <span>
                  {enableMultiple
                    ? openItems.includes(item.id)
                      ? "-"
                      : "+"
                    : selected === item.id
                    ? "-"
                    : "+"}
                </span>
              </div>
              {(enableMultiple
                ? openItems.includes(item.id)
                : selected === item.id) && (
                <div className="p-5">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
