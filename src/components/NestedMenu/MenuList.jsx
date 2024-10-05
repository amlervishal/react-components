import MenuItem from "./MenuItem";

export default function MenuList({ list = [] }) {
  return (
    <>
      <ul className="w-full">
        {list && list.length > 0
          ? list.map((item, index) => (
              <li key={index}>
                <MenuItem item={item} />
              </li>
            ))
          : "List not available!"}
      </ul>
    </>
  );
}
