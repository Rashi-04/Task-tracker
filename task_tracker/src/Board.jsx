import Status from "./Status";
import "./Board.css";
import { useState } from "react";
import CreateTask from "./CreateTask";

export default function Board() {




    const [boards, setBoards] = useState([
        {
            id: Date.now() + Math.random() * 2,
            heading: "Pending",
            color: "gray",
            cards: [
                {
                    id: Date.now() + Math.random(),
                    title: "task 2",
                    dec: "this is the dec.",
                    name: "@pravinn"
                },
                {
                    id: Date.now() + Math.random(),
                    title: "task 2",
                    dec: "this is the dec.",
                    name: "@pravinn"
                },
                {
                    id: Date.now() + Math.random(),
                    title: "task 2",
                    dec: "this is the dec.",
                    name: "@pravinn"
                },
            ]
        },
        {
            id: Date.now() + Math.random() * 2,
            heading: "In Progress",
            color: "orange",
            cards: [
                {
                    id: Date.now() + Math.random(),
                    title: "task 2",
                    dec: "this is the dec.",
                    name: "@pravinn"
                },
                {
                    id: Date.now() + Math.random(),
                    title: "task 2",
                    dec: "this is the dec.",
                    name: "@pravinn"
                },
                {
                    id: Date.now() + Math.random(),
                    title: "task 2",
                    dec: "this is the dec.",
                    name: "@pravinn"
                },
            ]
        },
        {
            id: Date.now() + Math.random() * 2,
            heading: "Completed",
            color: "green",
            cards: [
                {
                    id: Date.now() + Math.random(),
                    title: "task 2",
                    dec: "this is the dec.",
                    name: "@pravinn"
                },
                {
                    id: Date.now() + Math.random(),
                    title: "task 2",
                    dec: "this is the dec.",
                    name: "@pravinn"
                },
                {
                    id: Date.now() + Math.random(),
                    title: "task 2",
                    dec: "this is the dec.",
                    name: "@pravinn"
                },
            ]
        },
        {
            id: Date.now() + Math.random() * 2,
            heading: "Deployed",
            color: "purple",
            cards: [
                {
                    id: Date.now() + Math.random(),
                    title: "task 2",
                    dec: "this is the dec.",
                    name: "@pravinn"
                },
                {
                    id: Date.now() + Math.random(),
                    title: "task 2",
                    dec: "this is the dec.",
                    name: "@pravinn"
                },
                {
                    id: Date.now() + Math.random(),
                    title: "task 2",
                    dec: "this is the dec.",
                    name: "@pravinn"
                },
            ]
        },
        {
            id: Date.now() + Math.random() * 2,
            heading: "Deffered",
            color: "pink",
            cards: [
                {
                    id: Date.now() + Math.random(),
                    title: "task 2",
                    dec: "this is the dec.",
                    name: "@pravinn"
                },
                {
                    id: Date.now() + Math.random(),
                    title: "task 2",
                    dec: "this is the dec.",
                    name: "@pravinn"
                },
                {
                    id: Date.now() + Math.random(),
                    title: "task 2",
                    dec: "this is the dec.",
                    name: "@pravinn"
                },
            ]
        }
    ]);

    const addCard = (title, bid) => {
        const card = {
            id: Date.now() + Math.random(),
            title,
            dec: "",
            name,
        };

        const index = boards.findIndex(item => item.id === bid)
        if (index < 0) return;
        const tempBoards = [...boards];
        tempBoards[index].cards.push(card);
        setBoards(tempBoards);
    };

    const removeCard = (cid, bid) =>{
        const bIndex = boards.findIndex((item) => item.id === bid)
        if (bIndex < 0) return;
        const cIndex = boards[bIndex].findIndex((item) => item.id === cid)
        if (cIndex < 0) return;
        const tempBoards = [...boards];
        tempBoards[bIndex].cards.splice(cIndex, 1);
        setBoards(tempBoards);

    };
    
    return (
        <div className="board">
            <div className="nav">
                <h1>Task Board</h1>
                <img src="./profile-icon.png" alt="profile-icon" />
            </div>
            <div className="main">
                <div className="details">
                    Filter By: &nbsp;
                    <input type="text" placeholder="Assignee Name" />&nbsp;
                    <input type="date" />&nbsp;
                    <div className="addNew" style={{ display: "inline" }}>
                        <CreateTask addCard={addCard}/>
                    </div>
                    <br />
                    Sort By:&nbsp;
                    <select name="priority" id="priority">
                        <option value="p0">P0</option>
                        <option value="p1">P1</option>
                        <option value="p2">P2</option>
                    </select>
                </div>

                <div className="cards">
                    {
                        boards.map((item) => <Status key={item.id} board={item} addCard={addCard} removeCard={removeCard}/>)
                    }
                </div>
            </div>
        </div>
    )
}