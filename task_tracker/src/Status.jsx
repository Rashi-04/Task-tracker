import Task from "./Task";
import "./Status.css";
export default function Status(props){
    return(
        <div className="status">
            <h2 style={{backgroundColor: props.board?.color, color: "white"}}>{props.board?.heading}</h2>
            {
                props.board?.cards?.map((item) => <Task bid= {props.board?.id} key={item.id} card={item} addCard = {props.addCard} removeCard ={props.removeCard}/>)
            }
        </div>
    )
}