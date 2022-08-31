import React from "react";
import "./Button.css";

function Button({ variant, disableShadow, disabled, children }) {
    return(
        <div className={`default ${variant ? `${variant}` : ""} 
        ${disableShadow ? "no-shadow" : ""}
        ${disabled ? "disabled" : ""}`}>
            {children}
        </div>
    );
}

export default Button;