import React from 'react';
import { Button, Typography, Row, Col } from 'antd';
import './homepage.css';

/** Displays Trivia Now's homepage */
const Homepage = ({ history }) => {
  const { Title } = Typography;

  return(
    <div className='homepage'>
      <Row align='middle' justify='center'>
        <Col span={24}>
          <Title>Trivia Now</Title>
          <Title level={2}>Ready to level up your trivia skills?</Title>
        </Col>
       <Col span={24}>
          <Button size='large' onClick={() => history.push('/trivia')}>Start Now</Button>
        </Col>
      </Row>
    </div>
  )
};

export default Homepage;
