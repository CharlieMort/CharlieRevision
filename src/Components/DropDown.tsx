import React, { useState } from "react";

interface Props {
    header: string
}

export const DropDown: React.FC<Props> = ({header, children}) => {
    const [reveal, setReveal] = useState<boolean>(false);
    
    return(
        <div className="DropDown">
            <button onClick={() => setReveal(!reveal)} className="DropDown-Header">
                <h2>{header}</h2>
                <h1>{reveal ? "-" : "+"}</h1>
            </button>
            {
                reveal && 
                <div className="DropDown-Div">
                    {children}
                </div>
            }
        </div>
    )
}