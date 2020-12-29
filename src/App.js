import React, {useState, useEffect} from 'react'
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

// function App() {
//   return (
//     <div className="App">
//         <Forms />
//     </div>
//   );
// }


function App(){
  // States
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  // Run once in the startup
  useEffect(() =>{
    getLocalTodos()
  }, [])
  // UseEffect
  useEffect(() =>{
    filterHandler()
    saveLocalTodos()
  },[todos, status])

  // Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;

      case 'incomplete':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;

      default:
        setFilteredTodos(todos)
        break; 
    }
  }

  // Save to Local
  const saveLocalTodos = () =>{
      localStorage.setItem("todos", JSON.stringify(todos))
    }

  const getLocalTodos = () =>{
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos",JSON.stringify([]))
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    }
  }

  return(
    <div className = "App">
      <header>
        <h1>Hello Bijay</h1>
      </header>
      <Form setFilteredTodos = {setFilteredTodos} setStatus = {setStatus} todos = {todos} setTodos = {setTodos} inputText ={inputText} setInputText = {setInputText}/>
      <TodoList filteredTodos = {filteredTodos} setTodos = {setTodos} todos ={todos}/>
    </div>
  )
}
export default App;
