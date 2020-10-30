import React, { useContext } from 'react';
import { Form, Input } from 'antd';
import { Cookies } from 'react-cookie';
import UserContext from '../../context/UserContext';

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
    <Form
      name="Username form"
      initialValues={{ remember: true }}
      onFinish={onFinish}>
      <Form.Item
        label="Your name"
        name="username"
        rules={[{ required: true, message: 'Type in your name' }]}
      ><Input /></Form.Item>
    </Form>
  )
}

export default UserForm;
