import { Form, Input } from 'antd';
import React from 'react';
import MyButton from '../Button';
import styles from "./styles.module.css";

const NewPost = ({onFinish}) => {
 
  return (
    
        <Form 
          onFinish={onFinish}
          className={styles.newPostForm}
        >

          <Form.Item
            label="Post title"
            name="title"  
            rules={[
              {
                required: true,
                message: 'Please input post title!',
              },
            ]}
            style={{width: 500}}
          >
            <Input />
          </Form.Item>
          <MyButton name='Add new post' />
        </Form>
    
  );
};

export default NewPost;