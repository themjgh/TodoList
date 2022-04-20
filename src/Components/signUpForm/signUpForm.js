import React from 'react';
import { Form, Input, Button ,Row, Col} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './styles/signUpForm.css'

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 8,
        offset: 8,
      },
    },
  };


function SignUpForm (){
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
  };

  return (
    <>
        <Row justify="space-around" align="middle">
          <Col>
            <Form 
      
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
        labelAlign = 'left'
        labelCol={{ span: 10 }}
        

        >

          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input/>
          </Form.Item>


          <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
          </Form.Item>

        <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
        </Form.Item>


        <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>


            </Form>
          </Col>
        </Row>
    </>
  );
    }
export default SignUpForm;