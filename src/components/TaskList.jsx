import axios from 'axios';
import * as React from 'react';

const TaskList = () => {
    const [taskList, setTaskList] = React.useState([]);
    React.useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then((response) => setTaskList(response.data))
            .catch(error => console.log(error))
    }, []);
    return (
        <ul>
            {taskList.map((task, index) => {
                <li key={`${index}-${task.id}`}>
                    <div style={{ display: "flex", gap: 10 }}>
                        <div>{task.id}</div>
                        <div>{task.title}</div>
                        <input type='checkbox' value={task.completed} />
                    </div>

                </li>
            })}
        </ul>
    )
}

export default TaskList;