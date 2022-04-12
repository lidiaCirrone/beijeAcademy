import React, { useState } from 'react';

// COMPONENTS
import UiInputBox from '../../components/funcComponents/ui/uiInputBox/UiInputBox';
import UiButton from '../../components/funcComponents/ui/uiButton/UiButton';

// STYLES
import './Home.css';


function Home() {

   let transcriptLS = (localStorage.getItem('transcript')) !== null ? JSON.parse(localStorage.getItem('transcript')) : [];

   const [state, setState] = useState({
      transcript: transcriptLS,
      score: {
         total: transcriptLS.length,
         average: 0,
         failed: 0,
         nailed: 0
      },
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
      console.log(`written exam: ${data.writtenGrade} - oral exam: ${data.oralGrade} - total: ${data.totalGrade}`);

      if (data.totalGrade > 18 && data.writtenGrade > 0) {
         console.log(`You got ${data.totalGrade} - PASS`);
         data.result = 'pass';
      }
      if (data.totalGrade === 30) {
         console.log('high pass!');
         data.result = 'high';
      }
      if (data.totalGrade === 31 || data.totalGrade === 32) {
         console.log('honors!');
         data.result = 'honors';
      }

      return data;
   }

   const calculateScore = (newTranscript) => {

      let totalExams = newTranscript.length;
      let totalScore = 0;
      let examsAverage = 0;
      let failedExams = newTranscript.filter(exam => exam.result === 'fail').length;
      let nailedExams = newTranscript.filter(exam => exam.result === 'high' || exam.result === 'honors').length;
      for (let exam of newTranscript) {
         totalScore += exam.totalGrade;
      }
      examsAverage = totalScore / totalExams;

      let scoreObject = {
         total: totalExams,
         average: examsAverage,
         failed: failedExams,
         nailed: nailedExams
      }
      console.log(scoreObject);

      return scoreObject;
   }

   const addExam = () => {
      if (state.subjectInput !== '' && state.writtenGradeInput !== '' && state.oralGradeInput !== '') {
         if (state.writtenGradeInput < -8 || state.writtenGradeInput > 8) {
            console.log('insertion:', 'the grade for a written exam can only be between -8 and 8');
         } else if (state.oralGradeInput < 0 || state.oralGradeInput > 24) {
            console.log('insertion:', 'the grade for an oral exam can only be between 0 and 24');
         } else {

            let writtenGradeInt = parseInt(state.writtenGradeInput);
            let oralGradeInt = parseInt(state.oralGradeInput);
            let examData = {
               subject: state.subjectInput,
               writtenGrade: writtenGradeInt,
               oralGrade: oralGradeInt,
               totalGrade: writtenGradeInt + oralGradeInt
            };
            examData = assignResult(examData);
            console.log('exam data:', examData);
            let newTranscript = state.transcript;
            newTranscript.push(examData);

            let scoreObject = calculateScore(newTranscript);

            setState({
               transcript: newTranscript,
               score: scoreObject,
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
         <li key={key} className="flex-list">
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
            <li>Total of exams taken: {state.score.total}</li>
            <li>Average: {state.score.average}</li>
            <li>Failed exams: {state.score.failed}</li>
            <li>Nailed exams: {state.score.nailed}</li>
         </ul>

         <ul>
            {state.transcript.map(renderListItem)}
         </ul>

      </main>
   );
}

export default Home;
