import {useEffect, useState} from "react";
export default function CreateForm(props) {
    let info = JSON.parse(props.todos).find(todo => todo.todoId === JSON.parse(props.selectedTodo))
    const [todoName, todoNameSet] =  useState("")
    const [todoDesc, todoDescSet] = useState("")
    const todos = JSON.parse(props.todos)
    const filteredTodo = todos.find(todo => todo.todoId !== JSON.parse(props.selectedTodo))
    console.log(filteredTodo)
    const createClick = async () => {
        let storageData = filteredTodo.length === 0 ? [] : [filteredTodo]
        storageData.push(
            {
                todoId: new Date().getMilliseconds() * 39595 * new Date().getTime(),
                todoName: todoName,
                todoDesc: todoDesc
            }
        )
        console.log(storageData)
        await fetch('/api/controller', {
            method: 'POST',
            body: JSON.stringify(storageData),
        })
    }
    return (
        <>
            <div className="input-group">
                <input className="input-item" type="text" value={todoName} onChange={(e) => todoNameSet(e.target.value)}
                       placeholder={info.todoName}/>
                <textarea className="textarea-item" value={todoDesc} onChange={(e) => todoDescSet(e.target.value)}
                          placeholder={info.todoDesc}></textarea>
                <button onClick={createClick} ><a href="/">Update</a></button>
            </div>
        </>
    )
}
