import { useState } from "react";
import Model from 'react-modal';
import "./Task.css";
import EditTask from "./EditTask";
import Dropdown from "./Dropdown";
import DeleteTask from "./DeleteTask";

export default function Task(props) {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="task">
            <div className="head">
                <h3>{props.card?.title}</h3>
            </div>
            <div className="body">
                <hr />
                <p>{props.card?.dec}</p>
            </div>
            <div className="lower" >
                <div className="assignee">
                    <span style={{ marginRight: "100px" }}>{props.card?.name}</span>
                    <button onClick={() => setShowDropdown(true)} style={{ width: "30px", display: "inline" }}>...
                        {showDropdown &&(
                            <Dropdown onRequestClose = {()=> setShowDropdown(false)}>
                                <p style={{background: "black"}} ><EditTask addCard={props.addCard}/></p>
                                <p style={{background: "black"}}><DeleteTask removeCard = {props.removeCard} bid={props.bid} cid={props.card?.id}/></p>
                            </Dropdown>
                        )}
                    </button>
                </div>


                <br />
                <button>Assign</button>
            </div>

        </div>
    )
}