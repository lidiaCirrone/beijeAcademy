import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";

// import { path } from '../routes/routes';

function Home() {

   // const navigate = useNavigate();
   // const params = useParams()
   // const location = useLocation()
   // console.log(params);
   // console.log(location);


   const localStorageUsers = localStorage.getItem('users');
   let users = localStorageUsers ? JSON.parse(localStorageUsers) : [];

   const [state, setState] = useState({
      firstNameInput: '',
      lastNameInput: '',
      emailInput: '',
      passwordInput: ''
   })

   const saveFirstName = (e) => {
      setState({
         ...state,
         firstNameInput: e.target.value
      })
   }

   const saveLastName = (e) => {
      setState({
         ...state,
         lastNameInput: e.target.value
      })
   }

   const saveEmail = (e) => {
      setState({
         ...state,
         emailInput: e.target.value
      })
   }

   const savePassword = (e) => {
      setState({
         ...state,
         passwordInput: e.target.value
      })
   }

   const handleSignUp = () => {

      if (state.firstNameInput === '' || state.lastNameInput === '' || state.email === '' || state.passwordInput === '') {
         console.log('all fields must be filled in');
      } else {

         if (localStorageUsers !== null && JSON.parse(localStorageUsers).find(user => user.email === state.emailInput)) {
            alert('sorry, this email has already been used');
         } else {
            let userData = {
               firstName: state.firstNameInput,
               lastName: state.lastNameInput,
               email: state.emailInput,
               password: state.passwordInput
            }
            users.push(userData);
            localStorage.setItem('users', JSON.stringify(users));
            setState({
               firstNameInput: '',
               lastNameInput: '',
               emailInput: '',
               passwordInput: ''
            })

         }
      }
   }

   return (
      <main>
         <input type='text' placeholder='First name...' onChange={saveFirstName} value={state.firstNameInput} />
         <input type='text' placeholder='Last name...' onChange={saveLastName} value={state.lastNameInput} />
         <input type='text' placeholder='Email...' onChange={saveEmail} value={state.emailInput} />
         <input type='password' placeholder='Password...' onChange={savePassword} value={state.passwordInput} />

         <button onClick={handleSignUp}>Sign Up</button>
      </main>
   );
}

export default Home;
