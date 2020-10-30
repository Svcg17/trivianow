import React from 'react';
import { Button } from 'antd';

/** Displays Trivia Now's homepage */
const Homepage = ({ history }) => {
  return(
    <div className='Homepage'>
      <div>Trivia Now Logo</div>
      <Button onClick={() => history.push('/trivia')}>Start Now</Button>
    </div>
  )
};

export default Homepage;
