import {useState} from "react";
export default function CreateForm(props) {
    const [todoName, todoNameSet] =  useState("")
    const [todoDesc, todoDescSet] = useState("")
    let storageData = props?.todos.length === 0 ? [] : JSON.parse(props.todos)
        const createClick = async () => {
            storageData.push(
                {
                    todoId: new Date().getMilliseconds() * 39595 * new Date().getTime(),
                    todoName: todoName,
                    todoDesc: todoDesc
                }
            )
            await fetch('/api/controller', {
                method: 'POST',
                body: JSON.stringify(storageData),
            })
        }
    return (
        <>
            <div className="input-group">
                <input className="input-item" type="text" value={todoName} onChange={(e) => todoNameSet(e.target.value)}
                       placeholder="Enter a todo name"/>
                <textarea className="textarea-item" value={todoDesc} onChange={(e) => todoDescSet(e.target.value)}
                          placeholder="Enter todo description"></textarea>
                <button onClick={createClick} ><a href="/">Send</a></button>
            </div>
        </>
    )
}
