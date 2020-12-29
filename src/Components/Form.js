import React from 'react'


const Form = ({ setInputText, inputText, todos, setTodos, setStatus}) => {
    const inputTextHandler = (e) =>{
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
            {text : inputText, completed : false, id : (Math.random() * 100)}
        ])
        setInputText("")
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)

    }
    return(
        <form >
            <input value = {inputText} onChange = {inputTextHandler} type ='text' className = 'todo-input'></input>
            <button onClick = {submitTodoHandler} type = 'submit' className = 'todo-button'>
                <i className ='fas fa-plus-square'></i>
            </button>
            <div className ='select'>
                <select onChange = {statusHandler} name = 'todos'  className = 'filter-todo'>
                    <option value = 'all'>All</option>
                    <option value = 'completed'>Completed</option>
                    <option value = 'incomplete'>Incomplete</option>
                </select>
            </div>
        </form>
    )
}

export default Form