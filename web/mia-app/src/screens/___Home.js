import React, { useState } from 'react';

// ASSETS
import logo from '../../assets/images/ui/logo.svg';

// COMPONENTS
import UiButton from '../components/funcComponents/ui/uiButton/UiButton';
import UiInputBox from '../components/funcComponents/ui/uiInputBox/UiInputBox';
import UiModal from '../components/funcComponents/ui/uiModal/UiModal';
import UiCard from '../components/funcComponents/ui/uiCard/UiCard';
import UiHeader from '../components/funcComponents/ui/uiCard/UiHeader';
import UiContent from '../components/funcComponents/ui/uiCard/UiContent';
import UiFooter from '../components/funcComponents/ui/uiCard/UiFooter';
import UiClassButton from '../../components/classComponents/ui/UiClassButton';

// STYLES
import './Home.css';

// UTILS
import { checkEmail, checkPassword } from '../utils/utils';



function Home() {

   // 1st parameter: value to be read
   // 2nd parameter: function that allows me to change the state
   const [name, setName] = useState('Search');

   let firstName = null;
   let lastName = null;
   let dateOfBirth = null;
   let email = null;
   let password = null;

   function callbackFirstName(firstNameValue) {
      firstName = firstNameValue;
      // change state
      setName(firstNameValue);
   }

   function callbackLastName(lastNameValue) {
      lastName = lastNameValue;
   }

   function callbackDateOfBirth(dateOfBirthValue) {
      dateOfBirth = dateOfBirthValue;
   }

   function callbackEmail(emailValue) {
      console.log('email address:', emailValue)
      console.log('email validation:', checkEmail(emailValue));
      if (checkEmail(emailValue)) {
         email = emailValue;
      }
   }

   function callbackPassword(passwordValue) {
      console.log('password:', passwordValue)
      console.log('password validation:', checkPassword(passwordValue));
      if (checkPassword(passwordValue)) {
         password = passwordValue;
      }
   }

   function registration(e) {
      if (firstName !== null && lastName !== null && email !== null && password !== null) {
         console.log('registration:', 'SUCCESSFUL REGISTRATION!')
         let user = {
            userFirstName: firstName,
            userLastName: lastName,
            userDateOfBirth: dateOfBirth,
            userEmail: email,
            userPassword: password
         }
         console.log('user data:', user);
      } else {
         console.log('registration:', 'you must fill in all required fields')
      }
   }

   return (
      <>
         <UiModal title={'Modal no.1'}>
            <>
               <p>The quick brown fox</p>
               <p>jumped over</p>
               <p>the lazy dog</p>
            </>
         </UiModal>

         <header>
            <img src={logo} className="App-logo" alt="logo" />
         </header>

         <main>

            <div className={'flex-container'}>
               <UiInputBox
                  label={'First name*'}
                  name={'firstname'}
                  placeholder={'First name'}
                  required
                  callback={callbackFirstName}
                  tabIndex={'1'}
               />
            </div>
            
            {name}

            <div className={'flex-container'}>
               <UiInputBox
                  label={'Last name*'}
                  name={'lastname'}
                  placeholder={'Last name'}
                  required
                  callback={callbackLastName}
                  tabIndex={'2'}
               />
            </div>

            <div className={'flex-container'}>
               <UiInputBox
                  label={'Date of birth'}
                  name={'dateofbirth'}
                  placeholder={'Date of birth'}
                  type={'date'}
                  callback={callbackDateOfBirth}
                  tabIndex={'3'}
               />
            </div>

            <div className={'flex-container'}>
               <UiInputBox
                  label={'Email address*'}
                  name={'email'}
                  placeholder={'Email address'}
                  required
                  callback={callbackEmail}
                  tabIndex={'4'}
               />
            </div>

            <div className={'flex-container'}>
               <UiInputBox
                  label={'Password*'}
                  name={'password'}
                  placeholder={'Password'}
                  type={'password'}
                  required
                  callback={callbackPassword}
                  minLength={'8'}
                  tabIndex={'5'}
               />
            </div>

            <UiButton
               label={'Register'}
               callback={registration}
               tabIndex={'6'}
            />


            <div className={'card-container'}>
               <UiCard
                  header={<UiHeader title='Title' />}
                  content={<UiContent />}
                  footer={<UiFooter />}
               />
               <UiCard
                  header={<UiHeader title='Title' />}
                  content={<UiContent />}
                  footer={<UiFooter />}
               />
            </div>

            <UiClassButton
               label={'Press'}
               callback={registration}
            />

         </main>

      </>
   );
}

export default Home;
