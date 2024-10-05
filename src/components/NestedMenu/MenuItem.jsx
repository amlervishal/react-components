import { useState } from "react";
import MenuList from "./MenuList";

export default function MenuItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  function handleToggle() {
    setIsOpen(!isOpen);
  }


  return (
    <div className="py-2 pl-5">
      <div className="w-full flex justify-between">
        {item.name}
        {item && hasChildren ? (
          <span className="text-xl font-semibold" onClick={handleToggle}>{isOpen ? "-" : "+"}</span>
        ) : null}
      </div>
      {hasChildren && isOpen && <MenuList list={item.children} />}
    </div>
  );
}
