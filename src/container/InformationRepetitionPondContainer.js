import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    fetchGetAllInformationRepetitionPond,
    fetchCleanInformationRepetitionPond,
    changeInformationRepetitionPondFiltrate
} from '../action/InformationRepetitionPondAction';
import { Layout, Select, Tabs, Button, Modal } from 'antd';
import SearchComponent from '../component/SearchComponent';
import TableComponent from '../component/TableComponent';

const { Content } = Layout;
const Option = Select.Option;
const TabPane = Tabs.TabPane;

class InformationRepetitionPondContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cleanModalVisible: false,    // 清空对话框显示状态
        }

        // 绑定回调方法
        this.handleGet = this.handleGet.bind(this);
        this.handleShowCleanModal = this.handleShowCleanModal.bind(this);
        this.handleCleanModalCancel = this.handleCleanModalCancel.bind(this);
        this.handleClean = this.handleClean.bind(this);
        this.handleSourceChange = this.handleSourceChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    }

    componentWillMount() {
        // 初始化数据
        this.handleGet();
    }

    componentWillReceiveProps(nextProp) {
        if (nextProp !== undefined && nextProp !== null) {
            var payloadObj = nextProp.payload;      // store中取出payload数据

            for (let field in payloadObj) {
                // 判断columns节点，挂载的是表格标题所需的数据
                if (field === 'columns') {
                    let pushed = false;
                    for (let i = 0; i < payloadObj[field].length; i++) {
                        // 因antd字段名为dataIndex，所以将后台返回的data_index赋值给dataIndex
                        payloadObj[field][i]['dataIndex'] = payloadObj[field][i]['data_index'];

                        // 判断是否已经增加过序号和操作列，如已添加过，则无需在增加
                        if (payloadObj[field][i].key === 'index') {
                            pushed = true;
                        }
                    }

                    // 如未添加序号及操作列，则添加
                    if (!pushed) {
                        // 在数组首位添加序号标题
                        payloadObj[field].unshift({
                            title: '序号',
                            dataIndex: 'index',
                            key: 'index',
                            render: (text, record, index) => {
                                return (
                                    <span>{index + 1}</span>
                                )
                            }
                        });
                    }
                }
            }
        }
    }

    // --------------------------数据(增删改查)回调方法-------------------
    // 获取滤重池数据
    /**
     * 
     * @param {*} keyword 搜索关键字
     * @param {*} pageNum 页码
     * @param {*} bkey 源key
     * @param {*} ckey 类别key
     */
    handleGet(keyword, pageNum, bkey, ckey) {
        const { dispatch } = this.props;

        // 1.处理搜索关键字参数
        if (keyword !== null && keyword !== undefined) {        // 1.1从搜索框唤起
            // 更新props中的内容
            dispatch(changeInformationRepetitionPondFiltrate(keyword, this.props.bkey, this.props.ckey));
        } else {        // 1.2如果未定义或为null，证明非搜索框激活
            keyword = '';
            if (this.props.keyword !== undefined && this.props.keyword !== null) {   // 1.3且prop中有，则证明是其他组件激活，从prop中取值
                keyword = this.props.keyword;
            }
        }

        // 2.处理页码参数，未定义或为空时，默认取第一页
        if (pageNum === undefined || pageNum === null) {
            pageNum = 1;
        }
   
        // 3.处理bkey
        if (bkey === undefined || bkey === null) {
            bkey = ''; 
            if (this.props.bkey !== undefined && this.props.bkey !== null) {
                bkey = this.props.bkey;
            }
        }
        if (bkey === 'all') {
            bkey = '';
        }

        // 4.处理ckey
        if (ckey === undefined || ckey === null) {
            ckey = '';
            if (this.props.ckey !== undefined && this.props.ckey !== null) {
                ckey = this.props.ckey;
            }
        }
        if (ckey === 'all') {
            ckey = '';
        }

        // 5.通过props中的值发起请求
        dispatch(fetchGetAllInformationRepetitionPond(keyword, pageNum, bkey, ckey));
    }

    // 显示清空滤重池对话框
    handleShowCleanModal = () => {
        this.setState({ cleanModalVisible: true });
    }

    // 关闭清空滤重池对话框
    handleCleanModalCancel = () => {
        this.setState({ cleanModalVisible: false }); 
    }

    // 清空滤重池
    handleClean() {
        const { dispatch } = this.props;
        // 提交清空请求
        dispatch(fetchCleanInformationRepetitionPond(this.handleGet));
    }

    // 源下拉列表更改时的回调
    handleSourceChange(bkey) {
        const { dispatch } = this.props;
        // 1.更新store中对应数据,其他字段使用现有值
        dispatch(changeInformationRepetitionPondFiltrate(this.props.keyword, bkey, this.props.ckey));

        // 2.发起请求
        this.handleGet(null, null, bkey, null);
    }

    // 类别标签更改时的回调
    handleCategoryChange(ckey) {
        const { dispatch } = this.props;
        // 1.更新store中对应数据,其他字段使用现有值
        dispatch(changeInformationRepetitionPondFiltrate(this.props.keyword, this.props.bkey, ckey));

        // 2.发起请求
        this.handleGet(null, null, null, ckey);
    }

    // 搜索框内容改变时的回调
    handleSearchInputChange(text) {
        const { dispatch } = this.props;

        // 仅更新store中的对应数据，不发起新的请求
        dispatch(changeInformationRepetitionPondFiltrate(text, this.props.bkey, this.props.ckey));
    }

    render() {
        // 处理状态和批次号数据
        const { redisData } = this.props;
        if (redisData !== undefined && redisData !== null) {
            for (let key in redisData) {
                if (key === 'string:information_repetition_pond:batch') {
                    var batch = redisData[key];
                }
            }
        }

        // 初始化源、类别下拉列表中的选项
        // 滤重池源和类别元数据
        const sourceOptionObj = this.props.sourceOption;
        const categoryListObj = this.props.categoryList;

        // 将滤重池源数据封装成下拉列表需要的数组
        const sourceOptions = [];
        sourceOptions.push(<Option key='all'>全部</Option>);      // 先增加一个全部选项
        for (let arrIndex in sourceOptionObj) {        // 取出对象
            for (var keyIndex in sourceOptionObj[arrIndex]) {       // 取出字段
                if (keyIndex === 'bkey') {
                    var bkey = sourceOptionObj[arrIndex][keyIndex];
                }
                if (keyIndex === 'bname') {
                    var bname = sourceOptionObj[arrIndex][keyIndex];
                }
            }
            sourceOptions.push(<Option key={ bkey }>{ bname }</Option>);        // 保存到数组
        }

        // 类别标签的初始化数据
        var categoryTabs = [];       
        // 将其他类别加到数组
        for (let arrIndex in categoryListObj) {
            let categoryTabObj = {};
            for (var ckeyIndex in categoryListObj[arrIndex]) {
                if (ckeyIndex === 'ckey') {
                    categoryTabObj.key = categoryListObj[arrIndex][ckeyIndex];
                }
                if (ckeyIndex === 'cname') {
                    categoryTabObj.tab = categoryListObj[arrIndex][ckeyIndex];
                }
            }
            categoryTabs.push(categoryTabObj);
        }
        let categoryTabObj = {};
         // 在首位增加全部类别，作为默认
        categoryTabObj.key = 'all';
        categoryTabObj.tab = '全部类别';
        categoryTabs.unshift(categoryTabObj);

        return ( 
            <Content style={ {margin: '24px 16px', padding: '6px 24px', background: '#fff', minHeight: 615} }>
                <Tabs
                    onChange={ this.handleCategoryChange }
                    defaultActiveKey='all'
                    >
                    { categoryTabs.map(pane => <TabPane tab={ pane.tab } key={ pane.key } >
                        <div style={ {marginTop: 8} }>
                            <span>源: </span><Select showSearch style={ {width: 150} } value={ this.props.bkey } optionFilterProp='children' onChange={ this.handleSourceChange }>{ sourceOptions }</Select>
                            <span style={ {float: 'right'} }>批次号: { batch } </span>
                        </div>
                        <div style={ {marginTop: 24} }>
                            <SearchComponent text={ this.props.keyword } onGet={ this.handleGet } onChange={ this.handleSearchInputChange } />
                            <Button type='primary' style={ {float: 'right'} } onClick={ this.handleShowCleanModal }>清空滤重池表</Button>
                        </div>
                        <TableComponent rowKey='repetition_pond_id' tableData={ this.props.payload } onGet={ this.handleGet } loading={ this.props.isFetching } /> 
                    </TabPane>) }
                </Tabs>
                <Modal title='清空滤重池'
                    visible={ this.state.cleanModalVisible }
                    okText='确认'
                    onOk={ this.handleClean }
                    confirmLoading={ this.props.isCleaning }
                    cancelText='取消'
                    onCancel={ this.handleCleanModalCancel }
                    >
                    <p>确定清空滤重池表？清空后不可恢复，是否确认？</p>
                </Modal>
            </Content>
        );
    }
}

// 对属性进行限定
InformationRepetitionPondContainer.propTypes = {
    dispatch: PropTypes.func.isRequired
}

// 从state中注入数据
function mapStateToProps(state) {
    return {
        payload: state.getInformationRepetitionPond.payload,    // 表格和分页渲染所需数据
        redisData: state.getInformationRepetitionPond.redisData,        // redis中的状态(status)和批次号(batch)数据
        isFetching: state.getInformationRepetitionPond.isFetching,    // 获取滤重池数据加载态
        status: state.getInformationRepetitionPond.status,    // 获取滤重池数据返回结果
        receiveAt: state.getInformationRepetitionPond.receiveAt,    // 获取滤重池数据成功时间
        isCleaning: state.cleanInformationRepetitionPond.isCleaning,        // 清空加载态
        cleanStatus: state.cleanInformationRepetitionPond.status,    // 清空滤重池返回结果
        height: state.updateScreen.height,   // 屏幕高(浏览器可视区域)
        sourceOption: state.getMeta.sourceOption,   // 资讯源元数据
        categoryList: state.getMeta.categoryList,   // 类别元数据
        keyword: state.changeInformationRepetitionPondFiltrate.keyword,    // 搜索关键字
        bkey: state.changeInformationRepetitionPondFiltrate.bkey,     // 源下拉列表选项
        ckey: state.changeInformationRepetitionPondFiltrate.ckey,     // 选中的类别标签
    }
}

export default connect(mapStateToProps)(InformationRepetitionPondContainer);