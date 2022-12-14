import React from "react";
import Popper from "popper.js";

const DropDown = ({ color = 'white', operator, onClick }) => {
    // DropDown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    const onDropDownChange = (operator = '+') => {
        closeDropdownPopover();
        onClick(operator);
    }
    // bg colors
    let bgColor;
    color === "white"
        ? (bgColor = "bg-slate-700")
        : (bgColor = "bg-" + color + "-500");

    return (
        <div className="relative inline-flex align-middle w-full h-full">
            <button
                className={
                    "text-white bg-white border border-black font-bold flex text-sm p-3 h-full rounded shadow hover:shadow-lg outline-none focus:outline-none mr-3 ease-linear transition-all duration-150 " +
                    bgColor
                }
                type="button"
                ref={btnDropdownRef}
                onClick={() => {
                    dropdownPopoverShow
                        ? closeDropdownPopover()
                        : openDropdownPopover();
                }}
            >
                <div className="flex flex-col h-full mr-4">
                    <label className="text-neutral-500 font-normal text-sm flex-1">Operator</label>
                    <label className="text-xl font-normal text-gray-700 text-left">{operator}</label>
                </div>
                <div className="h-full flex flex-1 items-center">
                    <svg className="ml-2 w-6 h-6" aria-hidden="true" fill="none" stroke="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </button>
            <div
                ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? "block " : "hidden ") +
                    (color === "white" ? "bg-white " : bgColor + " ") +
                    "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                }
                style={{ minWidth: "8.2rem" }}
            >
                <a
                    href="#pablo"
                    className={
                        "text-xl font-normal py-2 px-4 block w-full whitespace-nowrap bg-transparent " +
                        (color === "white" ? " text-slate-700" : "text-white")
                    }
                    onClick={() => onDropDownChange('+')}
                >
                    +
                </a>
                <a
                    href="#pablo"
                    className={
                        "text-xl font-normal py-2 px-4 block w-full whitespace-nowrap bg-transparent " +
                        (color === "white" ? " text-slate-700" : "text-white")
                    }
                    onClick={() => onDropDownChange('-')}
                >
                    -
                </a>
                <a
                    href="#pablo"
                    className={
                        "text-xl font-normal py-2 px-4 block w-full whitespace-nowrap bg-transparent " +
                        (color === "white" ? " text-slate-700" : "text-white")
                    }
                    onClick={() => onDropDownChange('*')}
                >
                    *
                </a>
                <a
                    href="#pablo"
                    className={
                        "text-xl font-normal py-2 px-4 block w-full whitespace-nowrap bg-transparent " +
                        (color === "white" ? " text-slate-700" : "text-white")
                    }
                    onClick={() => onDropDownChange('/')}
                >
                    /
                </a>
            </div>
        </div>
    );
};

export default DropDown;