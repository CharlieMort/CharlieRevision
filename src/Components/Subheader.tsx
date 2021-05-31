import React from "react";

interface Props {
    main: string,
    rest?: string
}

export const SubHeader: React.FC<Props> = ({main, rest}) => {
    return(
        <h2 className="SubHeader">
            {
                main.split("").map((char, idx) => {
                    if (idx % 2 == 0) return <span className="Increase">{char}</span>
                    return <span className="Increase delayHALF">{char}</span>
                })
            }
             {` ${rest}`}
        </h2>
    )
}