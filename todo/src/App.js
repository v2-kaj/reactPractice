import logo from './logo.svg';
import React from'react'
import './App.css';

let id=0

const Todo = props =>(
  <li>
    <input type="checkbox" onChange={props.onToggle} checked={props.todo.checked}/>
    <button onClick={props.onDelete}>Delete</button> 
    <span>{props.todo.text}</span>
  </li>
)

class App extends React.Component{
  constructor(){
    super()
    this.state={
      todos:[],
    }
  }

toggleTodo(id){
  this.setState({
    todos:this.state.todos.map(todo=>{
      if (todo.id !== id) return todo
      return {
        id:todo.id,
        text:todo.text,
        checked: !todo.checked
      }
    })
  })
}

removeTodo(id){ 
  this.setState({
    todos: this.state.todos.filter(todo => todo.id!==id)
  })
}

addTodo(){
const text= prompt("Todo please:")
this.setState({
  todos:[...this.state.todos,{id:id++, text:text, checked:false}],
})
}

render(){
  return (
  <div>
    <button onClick={()=> this.addTodo() }>Add TODO</button>
    <div>Total: {this.state.todos.length}</div>
    <div>Completed: {this.state.todos.filter(todo=>todo.checked).length}</div>
    <div>Uncompleted: {this.state.todos.filter(todo=>todo.checked===false).length}</div>
    <ul>
      {this.state.todos.map(todo => (
      <Todo 
        onToggle={()=>this.toggleTodo(todo.id)}
        onDelete={()=>this.removeTodo(todo.id)} 
        todo={todo}
      />
      ))}
    </ul>
  </div>
  )}
}
export default App;
