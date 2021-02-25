import React,{useState, useEffect} from 'react'
import "./App.css";
import Forms from './components/Forms';
import Todolist from './components/Todolist';

function App() {
   

    const [inputText, setInputText]=useState("");
    const [todos, setTodos]=useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(()=>{
        getLocalTodos();
    },[]); 
    useEffect(()  => {
        filterHandler();
        saveLocalTodos();
    },[todos, status]);
    //function
    const filterHandler = () => {
        switch(status)
        {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed == true));
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter(todo => todo.completed == false));
                break;
            default:
            setFilteredTodos(todos);
            break;
        }
    }
    const saveLocalTodos = () => {
    
             localStorage.setItem('todos', JSON.stringify(todos));
    }
    const getLocalTodos =() =>{
        if(localStorage.getItem('todos') === null)
        {
            localStorage.setItem('todos', JSON.stringify([]));
        }else {
             let todoLocal=JSON.parse(localStorage.getItem('todos'));
             setTodos(todoLocal);
        }  

    }
    return (
        <div className="app">
            <header>
            <h1>My Todo List App</h1>
            </header>
            <Forms inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}/>
            <Todolist todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
        </div>
    )
}

export default React.memo(App)
