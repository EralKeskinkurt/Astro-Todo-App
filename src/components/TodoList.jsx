import {useEffect, useState} from "react";
import {MdDelete} from "react-icons/md"
import {BiSolidEditAlt} from "react-icons/bi"
export default function TodoList(){
    const [todos, setTodos] = useState(null)

    useEffect(() =>{
       (async ()=> {
           const res = await fetch('/api/controller', {
               method: 'GET',
           })
           const todoss = await res.json()
           console.log(JSON.parse(todoss?.todo.value))
           setTodos(JSON.parse(todoss?.todo.value))
       })()
    }, [])


    const deleteTodo = async (selectedTodo) => {
       const todo = todos.filter((todo) => todo.todoId !== selectedTodo)
        await fetch("/api/controller", {
            method: 'POST',
            body: JSON.stringify(todo)
        })
        setTodos(todo);
    }
    return (
        <ul className="todo-list">
            {todos?.map(todo =>{
                return (
                    <li className="todo-list-item" key={todo.todoId}><span>{todo.todoName}</span><span className="action-group"><a href={"/update/"+ todo.todoId.toString()}><BiSolidEditAlt className="action-edit" /></a> <MdDelete onClick={() => deleteTodo(todo.todoId)} className="action-delete" /></span></li>
                )
            })}
        </ul>
    )
}