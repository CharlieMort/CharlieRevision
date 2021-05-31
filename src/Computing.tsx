import React from "react";
import { Link, useLocation } from "react-router-dom";
import PepeJam from "./imgs/pepejam.gif"
import PepeSmart from "./imgs/pepesmart.gif.png";

interface Props {

}

export const Computing: React.FC<Props> = () => {
    const location = useLocation();

    return(
        <div className="Computing">
            <div className="TopRow">
                <img src={PepeJam} className="PepeJam" />
                <div className="Welcome">
                    <h1><u>Welcome <span className="ChadCA">C</span><span className="ChadHD">H</span><span className="ChadCA">A</span><span className="ChadHD">D</span> <span>GAMERS</span></u></h1>
                    <h2><span className="Small">Big</span> <span className="ComputingTxt">Computing</span> Revision Is Here</h2>
                </div>
                <div className="PepeSmart-Wrapper">
                    <img src={PepeSmart} className="PepeSmart" />
                </div>
            </div>
            <div className="SubjectLinks">
                <Link className="SubjectTopic" to={`${location.pathname}/processor_architecture`}>
                    <button>Processor architecture</button>
                </Link>
                <Link className="SubjectTopic" to={`${location.pathname}/networks`}>
                    <button>Networks</button>
                </Link>
                <Link className="SubjectTopic" to={`${location.pathname}/boolean_logic`}>
                    <button>Boolean Logic</button>
                </Link>
                <Link className="SubjectTopic" to={`${location.pathname}/half_full_adders`}>
                    <button>Half + Full Adders</button>
                </Link>
                <Link className="SubjectTopic" to={`${location.pathname}/databases_sql`}>
                    <button>Databases + SQL</button>
                </Link>
                <Link className="SubjectTopic" to={`${location.pathname}/software_lifecycle`}>
                    <button>Software Lifecycle</button>
                </Link>
                <Link className="SubjectTopic" to={`${location.pathname}/number_representation`}>
                    <button>Number Representation</button>
                </Link>
                <Link className="SubjectTopic" to={`${location.pathname}/data_structures`}>
                    <button>Data Structures</button>
                </Link>
                <Link className="SubjectTopic" to={`${location.pathname}/sorting_searching`}>
                    <button>Sorting + Searching</button>
                </Link>
            </div>
        </div>
    )
}