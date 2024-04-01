import { useState } from 'react';
import Model from 'react-modal';

export default function DeleteTask(props) {
    const [visible, setvisible] = useState(props.value);
    function removeCard(){
        props.removeCard(props.cid, props.bid);
    
    }
    return (
        <>

            <button onClick={() => setvisible(true)}>Delete Task</button>
            <Model isOpen={visible} onRequestClose={() => setvisible(false)} style={{
                content: {
                    width: "300px",
                    heigth: "50px",
                    backgroundColor: "pink",
                    padding: "0px",
                    position: "absolute",
                    top: "300px",
                    left: "500px"
                }
            }}>
                <div className="modal">
                    <div className="head" >
                        <h3 style={{ background: "white" }}>Delete task</h3>
                        <button onClick={() => setvisible(false)}>close model</button>
                    </div>
                    <div className="body">
                        <p>Do you want to delete task</p>
                        <span>Task 1</span> &nbsp;
                        <button onClick={removeCard}>Yes</button> &nbsp;
                        <button>No</button>
                    </div>

                </div>

            </Model>

        </>

    )
}