import React, { Component } from 'react';
import { Layout, Icon, Menu } from 'antd';
import { Link } from 'react-router-dom';

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
            <Sider trigger={ null } collapsible collapsed={ this.state.collapsed } className="sider" style={{overflow:"auto", minHeight: 663}}>
                <Menu theme={ this.state.theme } mode="inline" defaultOpenKeys={ ['crawler-system'] } defaultSelectedKeys={ ['crawler-source'] } style={ {height: this.state.height-65} }>
                    
                    <SubMenu key="crawler-system" title={ <span><Icon type="mail" /><span>爬虫系统</span></span> }>
                        <Menu.Item key="crawler-source"><Link to='/crawlersource'>源管理</Link></Menu.Item>
                        <Menu.Item key="crawler-category"><Link to='/crawlercategory'>类别管理</Link></Menu.Item>
                        <Menu.Item key="crawler-management"><Link to='/crawlermanagement'>爬虫管理</Link></Menu.Item>
                        <Menu.Item key="crawler-user-agent"><Link to='/crawleruseragent'>爬虫user-agent管理</Link></Menu.Item>
                        <Menu.Item key="dynamic-ip"><Link to='/crawlerdynamicip'>动态ip</Link></Menu.Item>
                        <Menu.Item key="crawler-set"><Link to='/crawlerset'>爬虫时间设置</Link></Menu.Item>
                    </SubMenu>

                    <SubMenu key="rinse-system" title={ <span><Icon type="pie-chart" /><span>清洗系统</span></span> }>
                        <Menu.Item key="information-source"><Link to='/informationsource'>源数据</Link></Menu.Item>
                        <Menu.Item key="information-repetiton-pond"><Link to='informationrepetitionpond'>滤重池</Link></Menu.Item>
                        <Menu.Item key="information-repetition-result"><Link to='informationrepetitionresult'>滤重结果</Link></Menu.Item>
                        <Menu.Item key="information-illegality-pond"><Link to='informationillegalitypond'>滤非法池</Link></Menu.Item>
                        <Menu.Item key="information-illegality-result"><Link to='informationillegalityresult'>滤非法结果</Link></Menu.Item>
                        <Menu.Item key="information-illegality-set"><Link to='informationillegalityset'>滤非法设置</Link></Menu.Item>
                    </SubMenu>

                    <SubMenu key="weight-system" title={ <span><Icon type="desktop" /><span>权重得分系统</span></span> }>
                        <Menu.Item key="information-weight-source"><Link to='informationweightsource'>源数据</Link></Menu.Item>
                        <Menu.Item key="information-weight-score"><Link to='informationweightsort'>得分数据</Link></Menu.Item>
                        <Menu.Item key="information-weight-filtrate"><Link to='informationweightfiltrate'>筛选600</Link></Menu.Item>
                        <Menu.Item key="information-weight-set"><Link to='informationweightset'>权重设置</Link></Menu.Item>
                    </SubMenu>

                    <SubMenu key="store-system" title={ <span><Icon type="inbox" /><span>存储系统</span></span> }>
                        <Menu.Item key="information-output-list"><Link to='informationoutputlist'>资讯列表源</Link></Menu.Item>
                        <Menu.Item key="information-output-article"><Link to='informationoutputarticle'>资讯内容</Link></Menu.Item>
                        <Menu.Item key="information-comment"><Link to='informationcomment'>评论内容</Link></Menu.Item>
                    </SubMenu>

                    <SubMenu key="user-system" title={ <span><Icon type="appstore" /><span>用户系统</span></span> }>
                        <Menu.Item key="user"><Link to='user'>用户列表</Link></Menu.Item>
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