import React from "react";
import PepeCool from "./imgs/pepecool.png";
import PepeDance from "./imgs/pepedance.gif";
import Brtain from "./imgs/britain.jpg";
import Englund from "./imgs/englund.png";
import arrive from "./imgs/pepoarrive.gif";

export const Home: React.FC = () => {
    return(
        <div className="Home">
            <div className="Why">
                <h2>Why Does This Exist</h2>
                <p>
                    Revising Is <span className="Cringe">CRINGE</span> and im tooo <span className="Chad">KEWL</span> to do it noramlly
                    so i made this to make it bareable ¯\_(ツ)_/¯
                </p>
                <div className="Emotes">
                    <img src={PepeCool} className="Emote" alt="" />
                    <img src={PepeCool} className="Emote" alt="" />
                    <img src={PepeCool} className="Emote" alt="" />
                    <img src={PepeCool} className="Emote" alt="" />
                </div>
            </div>
            <div>
                <img src={PepeDance} className="Dance" alt="" />
            </div>
            <div className="Britain">
                <h2>Made In Bri'an</h2>
                <div className="BritianImages">
                    <img className="Bruv" src={Brtain} alt="" />
                    <img className="Flag" src={Englund} alt="" />
                </div>
            </div>
            <div className="Arrive">
                <img src={arrive} alt="" />
            </div>
            <div className="Useful">
                <h2>Will This Be Useful?</h2>
                <p>no.</p>
            </div>
        </div>
    )
}