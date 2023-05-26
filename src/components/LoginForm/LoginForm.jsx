import { useState } from 'react';

export function SignUpForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(email)

    const handleChange = event => {
        console.log(event.target.name)
        setEmail(event.target.name)

        const {name, value} = event.target

        switch (name) {
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
        
            default: return         
        }
    }
    return (
        <form autoComplete='off'>
                <label>
                    <span>email</span>
                     <input
                        type="email"
                        name='email'
                        onChange={handleChange}
                        value={email}
                    />
            </label>
            
            <label >
                <span>password</span>
                <input
                        type="password"
                        name='password'
                        onChange={handleChange}
                        value={password}
                    />
                </label>

                
                <button type='submit'>Register</button>
            </form>
    )
}
// export class SignupForm extends Component {
//     state = {
//         email: '',
//         password: '',
//     }


//     handleChange = evt => {
//         const { name, value } = evt.target;
//         this.setState({ [name]: value })
//     }

//     render() {
//         return (
//             <form autoComplete='off'>
//                 <label>
//                     <span>email</span>
//                     <input
//                         type="email"
//                         name='email'
//                         onChange={this.handleChange}
//                         value={this.state.email}
//                     />
//                 </label>

//                 <label >
//                     <span>password</span>
//                     <input
//                         type="password"
//                         name='password'
//                         onChange={this.handleChange}
//                         value={this.state.value}
//                     />
//                 </label>
//                 <button type='submit'>Register</button>
//             </form>
//         )
//     }
// }



