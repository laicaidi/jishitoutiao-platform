import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchUserLogin,
} from '../action/UserAction';
import { Form, Icon, Input, Button} from 'antd';
import {
  withRouter,
} from 'react-router-dom';
import '../css/Login.css';
const FormItem = Form.Item;

const LoginContainer =  Form.create()(
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        width: props.width || -1,     // 整体布局宽
        height: props.height || -1,   // 整体布局高
      }
      // 绑定回调方法
      this.updateSize = this.updateSize.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    // -------自动适应屏幕宽高+获取元数据-------
    componentDidMount() {
      this.updateSize();
      window.addEventListener('resize', () => this.updateSize());
    }
  
    componentWillUnmount() {
      window.removeEventListener('resize', () => this.updateSize());
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      const { dispatch } = this.props;
      let formData = {};
      this.props.form.validateFields((err, values) => {
        if (err) {
          return;
        }
        for (let key in values) {
          // 赋值给传递对象
          formData[key] = values[key];
        }
        // 提交登录请求
        dispatch(fetchUserLogin(formData));
      });
    }
    
    // 自适应屏幕
    updateSize() {
      try {
        let { width, height } = this.props;
        // 如果props没有指定height和width就自适应
        if (!width) {
          width = document.body.clientWidth;
        }
        if (!height) {
          height = document.body.clientHeight;
        }
        this.setState({
          width,
          height
        });
      } catch(ignore) {
      }
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={ this.handleSubmit } className="login-form" >
          <FormItem>
            { getFieldDecorator("username", {
                rules: [{ 
                  required: true,
                  message: '请输入您的用户名'
                 }]
              })(
                <Input prefix={ <Icon type="user" style={ {color: 'rgba(0,0,0,.25)'} } /> } placeholder="username" />
              ) }
          </FormItem>
  
          <FormItem>
            { getFieldDecorator("password", {
                rules: [{
                  required: true,
                  message: "请输入密码"
                }]
            })(
              <Input prefix={ <Icon type="lock" style={ { color: 'rgba(0,0,0,.25)' } } /> } type="password" placeholder="password" />
            ) }
          </FormItem>
  
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form>
      );
    }
  }
)

// 对属性进行限定
LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
}

// 从state中注入数据
function mapStateToProps(state) {
  return {
    auth: state.userLoginState.auth    // 用户(登录)状态
  }
}

export default withRouter(connect(mapStateToProps)(LoginContainer));