import { Form, Input } from 'antd';
import MyButton from '../Button';
import styles from "./styles.module.css";



const LoginForm = ({onFinish}) => {

  return (
    <div className={styles.mainContainer}>
        
        <Form
          name="basic"
          layout='vertical'
          onFinish={onFinish}
          className={styles.container}
        ><p className={styles.loginText}>Login</p>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
            style={{width: 200}}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            style={{width: 200}}
          >
            <Input.Password />
          </Form.Item>
          <MyButton name='Login'/>
        </Form>
    </div>
  );
};

export default LoginForm;