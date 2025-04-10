import React from 'react'

const SideBar = ({ open, setOpen, Menus}) => {
    return (
        <div
            className={`${open ? "w-72" : "w-20"
                } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
        >
            <img
                src="./src/assets/control.png"
                className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
                <img
                    src="./src/assets/logo.png"
                    className={`rounded-md cursor-pointer duration-500 ${open && "rotate-[360deg]"
                        }`}
                />
                <h1
                    className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                        }`}
                >
                    Getting Things Done
                </h1>
            </div>
            <ul className="pt-6">
                {Menus.map((Menu, index) => (
                    <MenuItem key={index} Menu={Menu} open={open} />
                ))}
            </ul>
        </div>
    );
};

const MenuItem = ({ Menu, open }) => {
    return (
        <li
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${Menu.title === "Dashboard" && "bg-light-white"}`}
        >
            <img src={`./src/assets/${Menu.src}.png`} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
            </span>
        </li>
    );
};

export default SideBar;