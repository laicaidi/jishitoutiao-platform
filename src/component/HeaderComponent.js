import React, { Component } from 'react';
import { Layout, Avatar } from 'antd';

const { Header } = Layout;

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          collapsed: false,
        };
      }
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        })
      }

    render() {
        return (
          <Header style={ {background: '#fff', padding: 0} }>
            <span style={ {fontSize: 24, fontFamily: 'STHupo', marginLeft: 16} }>即时头条管理平台</span>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              style={ {float: 'right', width: 30, height: 30, top: 15, right: 16} } />
          </Header>
        )
    }
}