import { useState } from 'react';
import Model from 'react-modal';

export default function EditTask() {
    const [visible, setvisible] = useState(false)
    return (
        <>

            <button onClick={() => setvisible(true)}>Edit Task</button>
            <Model isOpen={visible} onRequestClose={() => setvisible(false)} style={{
                content:{
                    width: "500px",
                    heigth: "500px",
                    backgroundColor: "pink",
                    padding: "20px",
                    position: "absolute",
                    top: "100px",
                    left: "500px"
                }
            }}>
                <h3 style={{ background: "white" }}>EDIT TASK</h3>
                <button onClick={() => setvisible(false)}>close model</button>
                <br /><br />
                Title: <br /><input type="text" style={{backgroundColor: "lightgrey"}}/> <br /><br />
                Description: <br /><textarea style={{backgroundColor: "lightgrey"}} name="description" id="" cols="30" rows="10"></textarea> <br /><br /> 
                Team: <br /><input type="text" style={{backgroundColor: "lightgrey"}}/> <br /><br />
                Assignees: <br /><input type="text" style={{backgroundColor: "lightgrey"}}/> <br /><br />
                Priority: &nbsp;
                Sort By:&nbsp;
                    <select name="priority" id="priority">
                        <option value="p0">P0</option>
                        <option value="p1">P1</option>
                        <option value="p2">P2</option>
                    </select> &nbsp;
                Status: <input type="text" style={{backgroundColor: "lightgrey", width: "100px"}} placeholder='Completed'/>
                <br /><br />
                <div className='footer' style={{paddingLeft: "250px"}}>
                    <button>Submit</button> &nbsp;
                    <button>Reset</button>
                </div>
            </Model>

        </>

    )
}