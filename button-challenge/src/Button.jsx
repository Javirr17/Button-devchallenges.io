import React from "react";
import "./Button.css";

function Button({ variant, disableShadow, disabled, children, startIcon, endIcon, size, color }) {
    return(
        <div className={`default ${variant ? `${variant}` : ""} 
        ${disableShadow ? "no-shadow" : ""}
        ${disabled ? "disabled" : ""}
        ${(startIcon || endIcon) ? "modified" : ""}
        ${size==="sm" ? "small" : (size==="lg" ? "large" : "")}
        ${color==="primary" ? "clr-primary" : (color==="secondary" ? "clr-secondary" : (color==="danger" ? "clr-danger" : ""))}`}>
            <span class="material-symbols-outlined">{startIcon}</span>
            {children}
            <span class="material-symbols-outlined">{endIcon}</span>
        </div>
    );
}

export default Button;