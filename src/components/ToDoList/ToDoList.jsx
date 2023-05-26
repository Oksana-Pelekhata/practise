import React, { Component } from 'react'
import  todo  from '../../data/todo.json'
import {ToDo} from '../ToDo/ToDo'

export class ToDoList extends Component {

    state = {
       toDoList: todo,
   }

    // handleState = () => console.log(this.state.toDoList)
    
    handleCheckComplited = (id) => {
        this.setState((prevState) => {
            return {
                toDoList: prevState.toDoList.map(todo => todo.id === id ?
                    { ...todo, completed: !todo.completed } :
            todo)
       }
       })
    }

   handleDelete = (id) => {
       this.setState((prevState) => {
           return {
                toDoList: prevState.toDoList.filter(todo => todo.id !== id)
            }
        })
	}

	render() {
		return (
			<>
				<h1>My To-Do list</h1>
                <ul className='list-group list-group-flush'>
					{this.state.toDoList.map((todo) => (
						<ToDo
							key={todo.id}
                            todo={todo}
                            handleCheckComplited={this.handleCheckComplited} 
                            handleDelete={this.handleDelete}
						/>
					))}
				</ul>
			</>
		)
	}
}
