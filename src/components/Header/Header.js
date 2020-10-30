import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

/** Displays the Header */
const TriviaHeader  = () => {
  return (
    <Menu mode='horizontal' >
     <Menu.Item key='1' >
       <Link to='/'>
          Trivia Now Logo
       </Link>
      </Menu.Item>
      <Menu.Item key='2'>
        <Link to='/about'>
          About
        </Link>
      </Menu.Item>
    </Menu> 
  )
};

export default TriviaHeader;