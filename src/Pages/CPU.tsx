import React from "react";
import smort from "../imgs/smort.gif";
import steer from "../imgs/steer.gif";
import lag from "../imgs/lag.gif";
import blobdance from "../imgs/blobdance.gif";
import vs from "../imgs/vs.png";
import jamjam from "../imgs/jamjam.gif";
import clap from "../imgs/clap.gif";
import leave from "../imgs/leave.gif";
import { DropDown } from "../Components/DropDown";
import { SubHeader } from "../Components/Subheader";

export const CPU: React.FC = () => {
    return(
        <div className="CPU">
            <div className="TitleBox">
                <div>
                    <img src={jamjam} alt="" />
                </div>
                <h1>Processor Architecture</h1>
                <div>
                    <img src={clap} alt="" />
                </div>
            </div>
            <SubHeader main="Components" rest=" Of A Processor" />
            <div className="Mods">
                <DropDown header="The Arithmatic And Logic Unit" >
                    <p>
                        As you would expect this completes all the <b>arithmetical</b> operations such as addition, dealing with floating 
                        point maths. As well as <b>logical</b> operations such as AND, OR, NOT and XOR.
                    </p>
                </DropDown>
                <DropDown header="The Control Unit">
                    <p>
                        This directs the operations of the CPU. It coordinates the activites of the CPU, manages the flow of data, accepts the
                        next instruction, <b>decodes</b> the instructions, <b>storing</b> the results of instrcutions back in memory
                    </p>
                </DropDown>
                <DropDown header="Registers">
                    <p>
                        Thye are small memory cells that operate at a <b>very high speed</b> to temporarily store data.
                    </p>
                    <table>
                        <tr>
                            <th>Registers</th>
                            <th>Purpose</th>
                        </tr>
                        <tr>
                            <td>Program Counter (PC)</td>
                            <td>Holds the address of the next instruction</td>
                        </tr>
                        <tr>
                            <td>Accumlator (ACC)</td>
                            <td>Stores the results from calculations</td>
                        </tr>
                        <tr>
                            <td>Memory Address Registor(MAR)</td>
                            <td>Holds the address where datas is to be read or written from</td>
                        </tr>
                        <tr>
                            <td>Memory Data Registor (MDR)</td>
                            <td>Temp stores data that has been read or that needs to be written</td>
                        </tr>
                        <tr>
                            <td>Current Instruction Registor (CIR)</td>
                            <td>Holds the current instruction being exectued. Divided into operan and opcode</td>
                        </tr>
                    </table>
                </DropDown>
                <DropDown header="Buses">
                    <p>
                        They are a set of parallel wires which connect two or more components. The <b>w i d t h</b> is the number of parallel
                        wires the bus has, typically 8, 16, 32 or 64 wires w i d e. 
                    </p>
                </DropDown>
                <DropDown header="The Data Bus">
                    <p>
                        This is used to transport <b>data</b> and <b>instructions</b> between components and is bi-directional so data can flow both ways
                    </p>
                </DropDown>
                <DropDown header="The Address Bus">
                    <p>
                        This is the bus used to transmit the addresses specifiying where data is to be sent to or retrieved from. The width 
                        of the bus is the same as the number of addressable memory locations.
                    </p>
                </DropDown>
                <DropDown header="The Control Bus">
                    <p>
                        This is used to transmit control signals between internal and external components and is bi-directional. Some example
                        signals include: Memory write, memory read and clock. There are more but i cant be bothered to add them.
                    </p>
                </DropDown>
            </div>
            <h2 className="AssemblyTitle">Assembly Language</h2>
            <div className="Assembly">
                <p className="AssemblyP">
                    A <b>simplified</b> version of machine code. Its divided into operand and opcode. The <b>operand</b> contains the address
                    of the data. The <b>opcode</b> specifies the type of instruction eg ADD
                </p>
            </div>
            <div className="AssemblyInstructions">
                <table>
                    <tr>
                        <th>Action</th>
                        <th>Mnemonic</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>Load</td>
                        <td>LDA</td>
                        <td>Load the content of the given location into the ACC</td>
                    </tr>
                    <tr>
                        <td>Store</td>
                        <td>STA</td>
                        <td>Store the content of the ACC in the given location. ACC does not change</td>
                    </tr>
                    <tr>
                        <td>Add</td>
                        <td>ADD</td>
                        <td>Add the value in the given location to the ACC</td>
                    </tr>
                    <tr>
                        <td>Subtract</td>
                        <td>SUB</td>
                        <td>Subtracts the value in the given location to the ACC</td>
                    </tr>
                    <tr>
                        <td>Input</td>
                        <td>INP</td>
                        <td>Cop the value from the input to the ACC</td>
                    </tr>
                    <tr>
                        <td>Output</td>
                        <td>OUT</td>
                        <td>Copy the value from the ACC to the output</td>
                    </tr>
                    <tr>
                        <td>End</td>
                        <td>HLT</td>
                        <td>Stops the program</td>
                    </tr>
                    <tr>
                        <td>Branch If Zero</td>
                        <td>BRZ</td>
                        <td>If the ACC is 0 then the PC will be set to the given address</td>
                    </tr>
                    <tr>
                        <td>Branch If Zero Or Positive</td>
                        <td>BRP</td>
                        <td>If the ACC is 0 or positive then the PC will be set to the given address</td>
                    </tr>
                    <tr>
                        <td>Branch Always</td>
                        <td>BRA</td>
                        <td>Set the ACC to the given memory address</td>
                    </tr>
                    <tr>
                        <td>Data Location</td>
                        <td>DAT</td>
                        <td>Create a varible with a 3 letter code stored after the machine code</td>
                    </tr>
                </table>
            </div>
            <h2>Fetch Decode Execute Cycle</h2>
            <div className="Fetch">
                <div>
                    <h3>Fetch</h3>
                    <ul>
                        <li>- Address from the PC is copied to the MAR</li>
                        <li>- Instruction held at the address is copied to the MDR by the data bus</li>
                        <li>- Simultaneously, the PC is increased by 1</li>
                        <li>- The value in the MDR is copied to the CIR</li>
                    </ul>
                </div>
                <div>
                    <h3>Decode</h3>
                    <ul>
                        <li>- The contents of the CIR are split into operand and opcode</li>
                    </ul>
                </div>
                <div>
                    <h3>Execute</h3>
                    <ul>
                        <li>- The decoded instruction is executed</li>
                        <li>
                            <img src={smort} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
            <h2>Factors Affecting CPU Performance</h2>
            <div className="Factors">
                <div>
                    <h3>Clock Speed</h3>
                    <p>
                        All processor activites begin on a clock pulse, and each CPU operation starts as the clock changes from 0 to 1. The
                        clock speed is the time taken for one clock cycle to complete.
                    </p>
                    <img src={steer} alt="" />
                </div>
                <div>
                    <h3>Number Of Cores</h3>
                    <p>
                        A core is an <b>independent</b> processor that is able to run its own fetch-execute cycle. Multiple cores means it can
                        complete mutliple istructions at any given time. However not all programs are designed to use multiple cores so dont 
                        do so efficently.
                    </p>
                    <img src={lag} alt="" />
                </div>
                <div>
                    <h3>Amount and Type of Cache</h3>
                    <p>
                        Cache memory is the CPU's onboard memory. Instructions from main memory are copied to the cache, so if required again
                        can be accessed quicker. As cache fills up, unused instructions are replaced. Goes from lvl 1-3 with 1 being the 
                        fastest and 3 the slowest.
                    </p>
                    <img src={blobdance} alt="" />
                </div>
            </div>
            <h2>Computer Architecture</h2>
            <div className="Arch">
                <div>
                    <h3>Von Neumann</h3>
                    <p>
                        This architecture includes the basic components of the computer and processor in which a shared memory and 
                        shared data bus is used for both data and instructions. Von neuman architecture is built on the stored program
                        concept.
                    </p>
                </div>
                <div>
                    <h3>Harvard Architecture</h3>
                    <p>
                        Harvard architecture has physically separate memories for instructions and data. This is useful for when memories have
                        different characterisitics eg instructions may be read only while data may be read-write. This allows you to optimise the 
                        size of individual memory cells and their buses depending on your needs
                    </p>
                </div>
            </div>
            <div className="ArchTable">
                <table>
                    <tr>
                        <th>Advantages Of Von Neumann</th>
                        <th>Advantages Of Harvard</th>
                    </tr>
                    <tr>
                        <td>- Cheater to develop as the control unit is easier to design</td>
                        <td>- Quicker execution as data and instructions can be fetched in parallel</td>
                    </tr>
                    <tr>
                        <td>- Programs can be optimised in size</td>
                        <td>- Memories can be different sizes, which can make more effcient use of space</td>
                    </tr>
                </table>
            </div>
            <div className="vs">
                <img src={vs} alt="" />
            </div>
            <div className="leave">
                <img src={leave} alt="" />
            </div>
        </div>
    )
}