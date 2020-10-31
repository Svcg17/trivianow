import React, { useContext, useEffect, useState } from 'react';
import { Card, Button, Typography } from 'antd';
import { Cookies } from 'react-cookie';
import Questions from '../../assets/data/Apprentice_TandemFor400_Data.json';
import UserContext from '../../context/UserContext';
import UserForm from '../User/UserForm';
import shuffleArray from '../../utils/shuffleArray';
import Options from '../Options/Options';
import './trivia.css';

const Trivia = () => {
  const [questions, setQuestions] = useState(shuffleArray(Questions));
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [currIdx, setCurrIdx] = useState(0);
  const [options, setOptions] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const { Title } = Typography;

  /** 
   * Gets a cookie of the current user and saves it in UserContext
   * Sets and combines the current question options (incorrect + correct) into a new shuffled array */
  useEffect(() => {
    const cookies = new Cookies();
    const allOptions = [...questions[currIdx].incorrect, questions[currIdx].correct];
    
    setUser(cookies.get('user'));
    setOptions(shuffleArray(allOptions));
  }, [currIdx, questions, setUser]);

  /** Handles when a user clicks the check button
   * The user has selected an option and can now view whether it was correct or not */
  const checkAnswer = () => {
    setSubmitted(true);
    if (selected === questions[currIdx].correct) setScore(score + 1);
  }

  /** Handles when a user clicks the next button
   * Increments index to display the next question
   */
  const toNextQuestion = () => {
    setCurrIdx(currIdx + 1);
    setSubmitted(false);
  }

  /** Handles when user clicks on any of the radio options
   * Keeps track of the selected answer in state
   */
  const handleChange = (event) => {
    setSelected(event.target.value);
  }

  const restartGame = () => {
    setQuestions(shuffleArray(Questions));
    setCurrIdx(0);
  }

  /** Displays the correct answer and the user's answer once they submit their answer */
  const Answer = () => (
    <div className='Answer'>
      <p>The correct answer is: {questions[currIdx].correct}</p>
      <p>You answered: {selected}</p>
    </div>
  )

  const Conclusion = () => {
    return (
      <>
        <div>Score: {score}/10</div>
        <Button onClick={restartGame}>Restart</Button>
      </>
    )
  }

  return (
    <div className='trivia'>
      {user && currIdx < 10 ? (
        <>
          <Title level={2}>Welcome, {user || user.name}</Title>
          <Card title={questions[currIdx] && questions[currIdx].question}>
            <Options question={questions[currIdx]}
              options={options}
              submitted={submitted}
              handleChange={handleChange}
              selected={selected} /> 
            {submitted
              ? <Button onClick={toNextQuestion}>Next</Button>
              : <Button disabled={!selected} onClick={checkAnswer}>Check</Button>
            }
          </Card>
          {submitted && <Answer />}
        </>
      ) : user && currIdx === 10 ? <Conclusion /> : <UserForm />
      }
    </div>
  )
}

export default Trivia ;
