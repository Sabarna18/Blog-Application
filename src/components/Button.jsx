import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-black",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 cursor-pointer transition duration-500 border-2 
         border-transparent rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}
