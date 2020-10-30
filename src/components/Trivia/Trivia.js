import React, { useContext, useEffect, useState } from 'react';
import { Space, Card, Button, Radio } from 'antd';
import { Cookies } from 'react-cookie';
import Questions from '../../assets/data/Apprentice_TandemFor400_Data.json';
import UserContext from '../../context/UserContext';
import SessionForm from '../User/UserForm';
import shuffleArray from '../../utils/shuffleArray';
import './trivia.css';

const Trivia = () => {
  const [questions] = useState(shuffleArray(Questions));
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [currIdx, setCurrIdx] = useState(0);
  const [options, setOptions] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const cookies = new Cookies();
    setUser(cookies.get('user'));
  }, [setUser]);

  useEffect(() => {
    const allOptions = [...questions[currIdx].incorrect, questions[currIdx].correct];
    setOptions(shuffleArray(allOptions));
  }, [currIdx, questions]);

  const handleCheck = () => {
    setSubmitted(true);
  }

  const handleNext = () => {
    setCurrIdx(currIdx + 1);
    setSubmitted(false);
  }

  const handleChange = (event) => {
    setSelected(event.target.value);
    if (event.target.value === questions[currIdx].correct) setScore(score + 1);
  }

  const setRadioClass = (option) => {
    console.log('curr option', option);
    if ((submitted && selected === option && option === questions[currIdx].correct) ||
      (submitted && option === questions[currIdx].correct)) {
        return 'correct';
    }
    if (submitted && selected === option && option !== questions[currIdx].correct) {
      return 'incorrect';
    }
    return '';
  }

  const Answer = () => (
    <div className='Answer'>
      <p>The correct answer is: {questions[currIdx].correct}</p>
      <p>You answered: {selected}</p>
    </div>
  )

  return (
    <div className='trivia'>
      <Space direction='vertical' align='center'>
        {!user && <SessionForm />}
        {user && currIdx < 10 ?
          (<>
            <div>Hi, {user || user.name}</div>
            <Card title={questions[currIdx] && questions[currIdx].question}>
              <Radio.Group onChange={handleChange} value={selected}>
                {options.map((option, idx) => (
                  <Radio
                    className={setRadioClass(option)}
                    key={idx} value={option}
                    disabled={submitted}
                  >{option}</Radio>
                ))}
              </Radio.Group>
              {submitted
                ? <Button onClick={handleNext}>Next</Button>
                : <Button disabled={!selected} onClick={handleCheck}>Check</Button>
              }
            </Card>
            {submitted && <Answer />}
          </>
          ) : (
            <div>Score: {score}/10</div>
          )
        }
      </Space>
    </div>
  )
}

export default Trivia ;
