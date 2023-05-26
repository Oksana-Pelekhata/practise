import { Component } from 'react';
// import { SignUpForm } from './LoginForm/LoginForm';
// import {ColorPicker} from './ColorPicker/ColorPicker'

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// const containerStyles = {
//   maxWidth: 1170,
//   marginLeft: 'auto',
//   marginRight: 'auto',
//   paddingLeft: 15,
//   paddingRight: 15,
// };

// export class App extends Component{

//   render() {
//     return (
//       <div style={containerStyles}>
//         {/* <SignUpForm /> */}
//         <ColorPicker options={colorPickerOptions}  />
//       </div>
//     )
//   }
// }

// const Button = ({ changeMessage, label }) => (
//   <button type="button" onClick={changeMessage}>
//     {label}
//   </button>
// );

// export class App extends Component {
//   state = {
//     message: new Date().toLocaleTimeString(),
//   };

//   // Метод, який будемо передавати в Button для виклику під час кліку
//   updateMessage = evt => {
//     console.log(evt); // Доступний об'єкт події
//     this.setState({
//       message: new Date().toLocaleTimeString(),
//     });
//   };

//   render() {
//     return (
//       <>
//         <span>{this.state.message}</span>
//         <Button label="Change message" changeMessage={this.updateMessage} />
//       </>
//     );
//   }
// }


//****  Модуль 2 заняття 2  */
import { ToDoList } from './ToDoList/ToDoList'
import { Modal } from './Modal/Modal'
import {Header} from './Header/Header.jsx'
import {FormLogin} from './FormLogin/FormLogin';
import { useId } from 'react';
import { nanoid } from 'nanoid'

export class App extends Component {
	state = {
		isShowModal: false,
	}

	showModal = () => {
		this.setState({ isShowModal: true })
	}

	closeModal = () => {
		this.setState({ isShowModal: false })
	}

  createUser = (data) => {
    const newUser = {
      ...data,
    id: nanoid(),}
console.log(newUser)
  }
	render() {
		return (
			<div className='container'>
				<Header showModal={this.showModal} />
				{/* <Counter /> */}
				{/* <ToDoList /> */}
				{this.state.isShowModal && (
          <Modal closeModal={this.closeModal}><FormLogin createUser={this.createUser} closeModal={this.closeModal} /></Modal>
				)}
			</div>
		)
	}
}