import React, { useState } from 'react';

// COMPONENTS
import UiInputBox from '../../components/hookComponents/ui/uiInputBox/UiInputBox';
import UiButton from '../../components/hookComponents/ui/uiButton/UiButton';

// STYLES
import './Home.css';


function Home() {

   const [state, setState] = useState({
      transcript: [],
      subjectInput: '',
      writtenGradeInput: '',
      oralGradeInput: ''
   });

   const subjectCallback = (value) => {
      console.log(value);
      setState({
         ...state,
         subjectInput: value
      })
   }

   const writtenGradeCallback = (value) => {
      console.log(value);
      setState({
         ...state,
         writtenGradeInput: value
      })
   }

   const oralGradeCallback = (value) => {
      console.log(value);
      setState({
         ...state,
         oralGradeInput: value
      })
   }

   const addExam = (e) => {
      if (state.subjectInput !== '' && state.writtenGradeInput !== '' && state.oralGradeInput !== '') {
         if (state.writtenGradeInput < -8 || state.writtenGradeInput > 8) {
            console.log('insertion:', 'the grade for a written exam can only be between -8 and 8');
         } else if (state.oralGradeInput < 0 || state.oralGradeInput > 24) {
            console.log('insertion:', 'the grade for an oral exam can only be between 0 and 24');
         } else {

            let examData = {
               subject: state.subjectInput,
               writtenGrade: parseInt(state.writtenGradeInput),
               oralGrade: parseInt(state.oralGradeInput)
            };
            console.log('exam data:', examData);

            let newTranscript = state.transcript;
            newTranscript.push(examData);
            setState({
               transcript: newTranscript,
               subjectInput: '',
               writtenGradeInput: '',
               oralGradeInput: ''
            });

            alert('SUCCESSFUL REGISTRATION!');
            console.log('transcript object data:', state.transcript);
         }
      } else {
         console.log('insertion:', 'you must fill in all required fields')
      }
   }

   return (
      <main>
         <UiInputBox
            label={'Subject'}
            value={state.subjectInput}
            placeholder={'insert subject here'}
            callback={subjectCallback}
            tabIndex={'1'}
         />
         <UiInputBox
            label={'Written exam grade'}
            value={state.writtenGradeInput}
            type={'number'}
            min={-8}
            max={8}
            placeholder={'grade'}
            callback={writtenGradeCallback}
            tabIndex={'2'}
         />
         <UiInputBox
            label={'Oral exam grade'}
            value={state.oralGradeInput}
            type={'number'}
            min={0}
            max={24}
            placeholder={'grade'}
            callback={oralGradeCallback}
            tabIndex={'3'}
         />

         <UiButton
            label={'Register'}
            callback={addExam}
            tabIndex={'4'}
         />
      </main>
   );
}

export default Home;
