import React from "react";
import { SubHeader } from "../Components/Subheader";
import hacker from "../imgs/hacker.gif";
import lag from "../imgs/lag.gif";
import bus from "../imgs/bus.gif";
import star from "../imgs/star.png";
import pepog from "../imgs/pepog.png";

export const Networks: React.FC = () => {
    return(
        <div className="Networks">
            <div className="TitleBox">
                <div>
                    <img src={hacker} />
                </div>
                <h1>Networks</h1>
                <div>
                    <img src={lag} />
                </div>
            </div>
            <SubHeader main="Characteristics" rest="of a Network" />
            <div className="NetworkDef">
                <img src={pepog} />
                <h3 className="Cringe Learn">LEARN</h3>
                <p>
                    A <b>network</b> is the name given to <b>two or more</b> computers connected together with the ability to  
                    <b> transmit data</b> between eachother.
                </p>
            </div>
            <div className="LanAndWan">
                <div>
                    <h3>Local Area Network</h3>
                    <p>A network which is spread over a <b>small geographical area</b> or a single site eg School.</p>
                </div>
                <div>
                    <h3>Wide Area Network</h3>
                    <p>
                        A network which is spread over a <b>large geographical area</b>. Large corporations with offices in multiple locations
                        will often have a WAN allowing them to communicate between different sites. The internet is a WAN.
                    </p>
                </div>
            </div>
            <h2>Topologies</h2>
            <div className="CardAndText">
                <div className="CardAndText-Wrapper">
                    <div className=".Text">
                        <p>
                            In the bus topology, all the <b>terminals</b> (devices) are connected to a <b>backbone</b> cable, the ends of which
                            are connected to a terminator. Its relatively <b>inexpensive</b> to set up and doesnt require extra hardware. But
                            if the <b>backbone fails the entire network fails</b>. Performance decreases as users increase. All computers
                            can see the data transmission.
                        </p>
                    </div>
                    <div className=".Img">
                        <img src={bus} />
                    </div>
                </div>
            </div>
            <div className="CardAndText">
                <div className="CardAndText-Wrapper">
                    <div className=".Img">
                        <img src={star} />
                    </div>
                    <div className=".Text">
                        <p>
                            <b>Star</b> topologies use a central node, often a <b>switch</b>. MAC (Media Access Control) addresses
                            are used to identify each device on the network. The performance is the same even with high traffic. If
                            one cable fails only that machine dies. <b>Transmits data faster</b> beacuse there are no data collisions
                            and is easy to add new stations. However its expensive due to switch and cabling and if the central switch
                            fails the whole network fails.
                        </p>
                    </div>
                </div>
            </div>
            <div className="NetworkDef">
                <img src={pepog} />
                <h3 className="Cringe Learn">LEARN</h3>
                <p>
                    A <b>protocol</b> is a set of rules defining how two computers <b>communicate</b> with each other.
                </p>
            </div>
            <h2>The TCP/IP Stack</h2>
            <div>
                <p>
                    TCP/IP stands for transmission control protocol / internet protocol. A stack of networking protocols that work together
                    passing packets during communication.
                </p>
            </div>
            <div className="TCPIP">
                <ul>
                    <li>Application Layer</li>
                    <ul>
                        <li>Selects the appropraite protocol based on the application</li>
                        <li>Eg if the app is a browser then itll select either HTTP POP3 FTP etc</li>
                    </ul>
                    <li>Transport Layer</li>
                    <ul>
                        <li>If using TCP then establishes an end to end connection between source and destination so if any packets lost its asks again</li>
                        <li>Splits the data into packets and labels the packets with</li>
                        <ul>
                            <li>Packet Number</li>
                            <li>Total Number Of Packets</li>
                            <li>The Port Number Usef For Communication</li>
                        </ul>
                    </ul>
                    <li>Internet Layer</li>
                    <ul>
                        <li>Adds the source and desination IP addresses</li>
                        <li>Routers operate on the network layer and forwards the packets</li>
                    </ul>
                    <li>Network</li>
                    <ul>
                        <li>The connection between the network devices, it adds the MAC address for the NIC of the destination and source computers</li>
                    </ul>
                </ul>
            </div>
        </div>
    )
}