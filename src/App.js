import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo';
import {addTodo, generateId} from './lib/todoHelpers';


class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: [
        {id: 1, name: 'Разгон облаков, установление хорошей погоды', isComplete: true},
        {id: 2, name: 'Подвиг', isComplete: false},
        {id: 3, name: 'Война с Англией', isComplete: false}
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmptySubmit = this.handleEmptySubmit.bind(this)
  }

  handleSubmit(evt){
    evt.preventDefault()
    if(this.state.currentTodo) {
      const newId = generateId()
      const newTodo = {id: newId, name: this.state.currentTodo, isComplete:false}
      const updatedTodos = addTodo(this.state.todos, newTodo)
      this.setState({
        todos:updatedTodos,
        currentTodo: '',
        errorMessage:''
      })
    }

  handleEmptySubmit(evt) {
    evt.preventDefault()
    this.setState({
      errorMessage: 'Сдайте Вашу шпагу, барон!'
    })
  }

  handleInputChange(evt){
    this.setState({
      currentTodo: evt.target.value
    })
  }
  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Распорядок дня барона Карла Фридриха Иеронима фон Мюнхгаузена</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          <TodoForm handleInputChange={this.handleInputChange}
          currentTodo={this.state.currentTodo}
          handleSubmit={submitHandler}/>
          <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
