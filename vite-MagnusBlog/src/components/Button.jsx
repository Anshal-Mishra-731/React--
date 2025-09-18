import React from "react";
import { forwardRef } from "react";
//user ne yadi koi additional property pass ki toh uske liye ...props spread kardiye
function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}, ref) {
    return (
        <button ref={ref} className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}

export default React.forwardRef(Button);