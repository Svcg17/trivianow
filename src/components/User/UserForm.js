import React, { useContext } from 'react';
import { Form, Input, Button, Card } from 'antd';
import { Cookies } from 'react-cookie';
import UserContext from '../../context/UserContext';
import './userForm.css';

/** Display form to get a user name */
const UserForm = () => {
  const { setUser } = useContext(UserContext);
  const cookies = new Cookies();

  /** 
   * Handles form submit - set cookie of current user and set UserContext
   * @values: input from user
   */
  const onFinish = (values) => {
    cookies.set(
      'user',
      values.username, 
      { expires: new Date(Date.now() + 24 * 60 * 60 * 1000) }); // expire in 24 hours
    setUser(values.username);
  }
  
  return (
    <div className='userForm'>
      <Card>
        <Form
          name='Username form'
          layout='vertical'
          initialValues={{ remember: true }}
          size='large'
          onFinish={onFinish}>
          <Form.Item
            label='Type in your name'
            name='username'
            rules={[{ required: true, message: 'Please type your name' }]}
          ><Input /></Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>Submit</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default UserForm;
