import menuData from "./menuData";
import MenuList from "./MenuList";

export default function Menu() {
    return (
        <>
        <div className="grid grid-cols-1 gap-10 place-content-start justify-items-center mx-auto p-10 w-screen h-screen">
                <h4 className="text-2xl font-semibold tracking-widest text-center">NESTED MENU</h4>
                <h6 className="font-light tracking-wide">Recursive / Tree-view / Nested Menu</h6>
            <div className="w-11/12 md:w-3/4 border rounded-md p-5 pl-0 shadow-lg text-slate-500" >
                <MenuList list={menuData} />
            </div>
        </div>
        </>
    )
}