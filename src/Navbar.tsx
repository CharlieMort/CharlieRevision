import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar: React.FC = () => {
    const location = useLocation();

    console.log(location.pathname);

    return(
        <nav>
            <ul className="NavLinks">
                <Link to="/" className="Shake" style={{textDecoration: "none"}}>
                    <li className={location.pathname === "/" ? "CurrentPage" : ""}>Home</li>
                </Link>
                <Link to="/cringe_loser_gamer_house" className="Shake" style={{textDecoration: "none"}}>
                    <li className={location.pathname === "/cringe_loser_gamer_house" ? "CurrentPage" : ""}>Cringe<br></br>(Maths)</li>
                </Link>
                <Link to="/ball_goes_boing" className="Shake" style={{textDecoration: "none"}}>
                    <li className={location.pathname === "/ball_goes_boing" ? "CurrentPage" : ""}>Smort Place<br></br>(Physics)</li>
                </Link>
                <Link to="/chad_subject_for_chad_gamers" className="Shake" style={{textDecoration: "none"}}>
                    <li className={location.pathname === "/chad_subject_for_chad_gamers" ? "CurrentPage" : ""}>Chads Go Here<br></br>(Computing)</li>
                </Link>
            </ul>
        </nav>
    )
}