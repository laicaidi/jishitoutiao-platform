import React, { Component } from 'react';
import { Layout, Icon, Menu } from 'antd';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class SiderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'dark',
            width: props.width || -1,
            height: props.height || -1,
        };
    }

    changeTheme = (value) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        })
    }

    componentDidMount() {
        this.updateSize();
        window.addEventListener('resize', () => this.updateSize());
      }
    
      componentWillUnmount() {
        window.removeEventListener('resize', () => this.updateSize());
      }
    
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
        return (     
            <Sider trigger={ null } collapsible collapsed={ this.state.collapsed } className="sider" style={{overflow:"auto"}}>
                <Menu theme={ this.state.theme } mode="inline" defaultOpenKeys={ ['crawler-system'] } defaultSelectedKeys={ ['crawler-source'] } style={ {height: this.state.height-65} }>
                    
                    <SubMenu key="crawler-system" title={ <span><Icon type="mail" /><span>爬虫系统</span></span> }>
                        <Menu.Item key="crawler-source">源管理</Menu.Item>
                        <Menu.Item key="crawler-category">类别管理</Menu.Item>
                        <Menu.Item key="crawler-management">爬虫管理</Menu.Item>
                        <Menu.Item key="crawler-user-agent">爬虫user-agent管理</Menu.Item>
                        <Menu.Item key="dynamic-ip">动态ip</Menu.Item>
                        <Menu.Item key="crawler-set">爬虫时间设置</Menu.Item>
                    </SubMenu>

                    <SubMenu key="rinse-system" title={ <span><Icon type="pie-chart" /><span>清洗系统</span></span> }>
                        <Menu.Item key="information-source">源数据</Menu.Item>
                        <Menu.Item key="information-repetiton-pond">滤重池</Menu.Item>
                        <Menu.Item key="information-repetition-result">滤重结果</Menu.Item>
                        <Menu.Item key="information-illegality-pond">滤非法池</Menu.Item>
                        <Menu.Item key="information-illegality-result">滤非法结果</Menu.Item>
                        <Menu.Item key="information-illegality-set">滤非法设置</Menu.Item>
                    </SubMenu>

                    <SubMenu key="weight-system" title={ <span><Icon type="desktop" /><span>权重得分系统</span></span> }>
                        <Menu.Item key="information-weight-source">源数据</Menu.Item>
                        <Menu.Item key="information-weight-score">得分数据</Menu.Item>
                        <Menu.Item key="information-weight-filtrate">筛选600</Menu.Item>
                        <Menu.Item key="information-weight-set">权重设置</Menu.Item>
                    </SubMenu>

                    <SubMenu key="store-system" title={ <span><Icon type="inbox" /><span>存储系统</span></span> }>
                        <Menu.Item key="information-output-list">资讯列表源</Menu.Item>
                        <Menu.Item key="information-output-article">资讯内容</Menu.Item>
                        <Menu.Item key="information-comment">评论内容</Menu.Item>
                    </SubMenu>

                    <SubMenu key="user-system" title={ <span><Icon type="appstore" /><span>用户系统</span></span> }>
                        <Menu.Item key="user">用户列表</Menu.Item>
                    </SubMenu>
                </Menu>
                
                {/* <Switch checked={ this.state.theme === 'dark' }
                        onChange={ this.changeTheme }
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                        style={ {position: 'absolute', bottom: '5px', left: '5px'} }/> */}
            </Sider>  
        )
    }
}