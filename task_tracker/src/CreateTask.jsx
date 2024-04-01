import { useState } from 'react';
import Model from 'react-modal';

export default function CreateTask() {
    const [visible, setvisible] = useState(false);
    return (
        <>

            <button onClick={() => setvisible(true)}>Add New Task</button>
            <Model isOpen={visible} onRequestClose={() => setvisible(false)} style={{
                content: {
                    width: "500px",
                    padding: "10px",
                    height: "500px",
                    backgroundColor: "pink",
                    position: "absolute",
                    top: "100px",
                    left: "500px"
                }
            }}>
                <h3 style={{ background: "white" }}>CREATE A TASK</h3>
                <button onClick={() => setvisible(false)}>close model</button>
                <br />
                <form action="">
                    <br />
                    Title: <input type="text" /> <br /><br />
                    Description: <input type="text" /> <br /><br />
                    Team: <input type="text" /> <br /><br />
                    Assignees: <input type="text" /> <br /><br />
                    Priority:
                    Sort By:&nbsp;
                    <select name="priority" id="priority">
                        <option value="p0">P0</option>
                        <option value="p1">P1</option>
                        <option value="p2">P2</option>
                    </select>
                    <br /><br />
                    <button type='submit' className='create'>Create</button>
                </form>

            </Model>

        </>

    )
}