import React, { useState } from 'react';

// COMPONENTS
import UiInputBox from '../../components/hookComponents/ui/uiInputBox/UiInputBox';
import UiButton from '../../components/hookComponents/ui/uiButton/UiButton';

// STYLES
import './Home.css';


function Home() {

   let transcriptLS = (localStorage.getItem('transcript')) !== null ? JSON.parse(localStorage.getItem('transcript')) : [];

   const [state, setState] = useState({
      transcript: transcriptLS,
      subjectInput: '',
      writtenGradeInput: '',
      oralGradeInput: ''
   });

   const subjectCallback = (value) => {
      setState({
         ...state,
         subjectInput: value
      })
   }

   const writtenGradeCallback = (value) => {
      setState({
         ...state,
         writtenGradeInput: value
      })
   }

   const oralGradeCallback = (value) => {
      setState({
         ...state,
         oralGradeInput: value
      })
   }

   const assignResult = (data) => {
      data.result = 'fail';
      let total = data.writtenGrade + data.oralGrade;
      console.log(`written exam: ${data.writtenGrade} - oral exam: ${data.oralGrade} - total: ${total}`);

      if (total > 18 && data.writtenGrade > 0) {
         console.log(`You got ${total} - PASS`);
         data.result = 'pass';
      }
      if (total === 30) {
         console.log('high pass!');
         data.result = 'high';
      }
      if (total === 31 || total === 32) {
         console.log('honors!');
         data.result = 'honors';
      }

      return data;
   }

   const addExam = () => {
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
            examData = assignResult(examData);
            console.log('exam data:', examData);

            let newTranscript = state.transcript;
            newTranscript.push(examData);
            setState({
               transcript: newTranscript,
               subjectInput: '',
               writtenGradeInput: '',
               oralGradeInput: ''
            });

            localStorage.setItem('transcript', JSON.stringify(newTranscript));
            console.log('localStorage.getItem("transcript")', localStorage.getItem('transcript'));
            console.log('transcript object data:', state.transcript);
         }
      } else {
         console.log('insertion:', 'you must fill in all required fields')
      }
   }

   const renderListItem = (item, key) => {
      return (
         <li key={key}>
            <span>{item.subject}</span>
            <span>{item.writtenGrade}</span>
            <span>{item.oralGrade}</span>
            <span>{item.writtenGrade + item.oralGrade}</span>
            <span>{item.result}</span>
         </li>
      )
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
            label={'Add'}
            callback={addExam}
            tabIndex={'4'}
         />

         <ul>
            {state.transcript.map(renderListItem)}
         </ul>

      </main>
   );
}

export default Home;
