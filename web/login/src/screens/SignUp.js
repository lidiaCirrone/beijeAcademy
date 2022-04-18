import React, { useState } from 'react';
import { useNavigate, useLocation, useParams, Link, Navigate } from 'react-router-dom';
import { routes } from '../routes/routes';


function SignUp() {

   const navigate = useNavigate();
   const location = useLocation()
   const params = useParams();

   console.log('navigate', navigate);
   console.log('location', location);
   console.log('location state isLogged', location?.state?.isLogged);
   console.log('location state user', location?.state?.user);
   console.log('params', params);

   const localStorageUsers = localStorage.getItem('users');
   const localStorageLoggedUser = localStorage.getItem('loggedUser');
   console.log('loggedUser', localStorageLoggedUser);
   let users = localStorageUsers ? JSON.parse(localStorageUsers) : [];
   let currentUser = {};

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
            currentUser = {
               firstName: state.firstNameInput,
               lastName: state.lastNameInput,
               email: state.emailInput,
               password: state.passwordInput
            }
            users.push(currentUser);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('loggedUser', JSON.stringify(currentUser));
            setState({
               firstNameInput: '',
               lastNameInput: '',
               emailInput: '',
               passwordInput: ''
            })

            navigate('/news');
         }
      }
   }

   if (localStorageLoggedUser === null) {
      return (
         <main className='mt-50'>
            <h1>Sign Up</h1>
            <input type='text' placeholder='First name...' onChange={saveFirstName} value={state.firstNameInput} />
            <input type='text' placeholder='Last name...' onChange={saveLastName} value={state.lastNameInput} />
            <input type='text' placeholder='Email...' onChange={saveEmail} value={state.emailInput} />
            <input type='password' placeholder='Password...' onChange={savePassword} value={state.passwordInput} />

            <button onClick={handleSignUp}>Sign Up</button>

            <p>already registered? Log in <Link to={routes.LOGIN}>here</Link></p>
         </main>
      );
   } else {
      return <Navigate to="/news" state={{ from: location }} />
   }
}

export default SignUp;
