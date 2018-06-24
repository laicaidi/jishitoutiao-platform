import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    fetchGetAllCrawlerManagement,
    fetchAddCrawlerManagement,
    fetchDeleteCrawlerManagement,
    fetchUpdateCrawlerManagement,
    changeCrawlerManagementFiltrate
} from '../action/CrawlerManagementAction';
import { Layout, Button, Divider, Popconfirm, Select } from 'antd';
import SearchComponent from '../component/SearchComponent';
import TableComponent from '../component/TableComponent';
import { AddCrawlerManagementComponent } from '../component/AddCrawlerManagementComponent';
import { UpdateCrawlerManagementComponent } from '../component/UpdateCrawlerManagementComponent';

const { Content } = Layout;
const Option = Select.Option;

class CrawlerManagementContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addModalVisible: false,    // 新增爬虫对话框显示状态
            updateModalVisible: false    // 更新爬虫对话框显示状态
        }
        // 绑定回调方法
        this.handleGet = this.handleGet.bind(this);
        this.handleAdd= this.handleAdd.bind(this);
        this.handleShowAddModal = this.handleShowAddModal.bind(this);
        this.handleAddModalCancel = this.handleAddModalCancel.bind(this);
        this.handleShowCopyModal = this.handleShowCopyModal.bind(this);
        this.addResult = this.addResult.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleShowUpdateModal = this.handleShowUpdateModal.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleUpdateModalCancel = this.handleUpdateModalCancel.bind(this);
        this.updateResult = this.updateResult.bind(this);
        this.handleSourceChange = this.handleSourceChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleSwitchChange = this.handleSwitchChange.bind(this);
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    }
    
    componentWillMount() {
        // 初始化数据
        this.handleGet();
    }

    componentWillReceiveProps(nextProp) {
        if (nextProp !== undefined && nextProp !== null) {
            // 将回调函数赋值给本方法内的变量
            var handleShowUpdateModal = this.handleShowUpdateModal;
            var handleDelete = this.handleDelete;
            var handleShowCopyModal = this.handleShowCopyModal;

            var payloadObj = nextProp.payload;      // store中取出payload数据

            for (let field in payloadObj) {
                // 判断columns节点，挂载的是表格标题所需的数据
                if (field === "columns") {
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

                        // 在数组末尾添加操作标题
                        payloadObj[field].push({
                            title: '操作',
                            key: 'action',
                            width: 150,     // 列固定
                            render: (text, record) => {
                                // 用对象封装代表本条点击的数据(record)
                                let dataObj = record;

                                for (let key in dataObj) {
                                    if (key === 'bname') {
                                        var msgBName = dataObj[key];
                                    }
                                    if (key === 'crawler_name') {
                                        var msgCrawlerName = dataObj[key];
                                    }
                                    if (key === 'crawler_id') {
                                        var crawlerId = dataObj[key];     // 本条记录的爬虫id
                                    }
                                }

                                // 拼接提示文案
                                const msgText = (
                                    <div>
                                        <h4>删除爬虫</h4>
                                        <p>源名称: { msgBName }</p>
                                        <p>爬虫名称: { msgCrawlerName }</p>
                                        <p>删除后不可恢复，是否确认？</p>
                                    </div>
                                );

                                function showUpdateModal() {
                                    // 通过回调方法，显示更新爬虫对话框，并传递代表本条数据的对象
                                    handleShowUpdateModal(dataObj);
                                }

                                function showCopyAddModal() {
                                    handleShowCopyModal(dataObj);
                                }

                                function deleteConfirm() {
                                    // 通过回调方法删除爬虫
                                    handleDelete(crawlerId);
                                }

                                return (
                                    <span>
                                        <a onClick={ showUpdateModal }>修改</a>
                                        <Divider type="vertical" />
                                        <a onClick={ showCopyAddModal }>复制</a>
                                        <Divider type="vertical" />
                                        <Popconfirm 
                                                placement="topRight" 
                                                title={ msgText } 
                                                onConfirm={ deleteConfirm }
                                                okText="确定"
                                                cancelText="取消">
                                            <a>删除</a>
                                        </Popconfirm>
                                    </span>
                                )
                            }
                        });
                    }
                }
            }
        }
    }

    // --------------------------对话框回调方法--------------------------
    // 显示新增爬虫对话框
    handleShowAddModal = () => {
        const form = this.addFormRef.props.form;
        form.resetFields();     // 重置表单的值
        // 将显示状态开启
        this.setState({ addModalVisible: true, initData: null });
    }

    // 显示复制(新增)爬虫对话框
    handleShowCopyModal = (dataObj) => {
        const form = this.addFormRef.props.form;
        form.resetFields();
        // 1.将显示状态开启
        // 2.并将点击的数据传给添加组件 
        this.setState({ addModalVisible: true, initData: dataObj });
    }

    // 关闭新增爬虫对话框
    handleAddModalCancel = () => {
        const form = this.addFormRef.props.form;
        form.resetFields(); 
        // 1.将显示状态开启
        // 2.将initData清空，以避免传递错误数据
        this.setState({ addModalVisible: false, initData: null }); 
    }

    // 显示更新爬虫对话框
    handleShowUpdateModal = (dataObj) => {
        const form = this.updateFormRef.props.form;
        form.resetFields();   // 重置表单的值
        // 将显示状态开启，并将点击的数据存入state
        this.setState({ updateModalVisible: true, initData: dataObj });
    }

    // 关闭更新爬虫对话框
    handleUpdateModalCancel = () => {
        const form = this.updateFormRef.props.form;
        form.resetFields();
        this.setState({ updateModalVisible: false, initData: null });
    }

    // --------------------------数据(增删改查)回调方法-------------------
    // 获取爬虫数据
    /**
     * 
     * @param {*} keyword 搜索关键字
     * @param {*} pageNum 页码
     * @param {*} bkey 源key
     * @param {*} ckey 类别key
     * @param {*} crawlerStatus 爬虫状态
     * @param {*} crawlerSwitch 爬虫开关
     */
    handleGet(keyword, pageNum, bkey, ckey, crawlerStatus, crawlerSwitch) {
        const { dispatch } = this.props;

        // 1.处理搜索关键字参数
        if (keyword !== undefined && keyword != null) {     // 1.1从搜索框唤起
            dispatch(changeCrawlerManagementFiltrate(keyword, this.props.bkey, this.props.ckey, this.props.crawlerStatus, this.props.crawlerSwitch));
        } else {        // 1.2如果未定义或为null，证明非搜索框激活
            keyword = "";
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
            bkey = ""; 
            if (this.props.bkey !== undefined && this.props.bkey !== null) {
                bkey = this.props.bkey;
            }
        }
        if (bkey === "all") {
            bkey = "";
        }

        // 4.处理ckey
        if (ckey === undefined || ckey === null) {
            ckey = "";
            if (this.props.ckey !== undefined && this.props.ckey !== null) {
                ckey = this.props.ckey;
            }
        }
        if (ckey === "all") {
            ckey = "";
        }

        // 5.处理crawlerStatus
        if (crawlerStatus === undefined || crawlerStatus === null) {
            crawlerStatus = "";
            if (this.props.crawlerStatus !== undefined && this.props.crawlerStatus !== null) {
                crawlerStatus = this.props.crawlerStatus;
            }
        }
        if (crawlerStatus === "all") {
            crawlerStatus = "";
        }

        // 6.处理crawlerSwitch
        if (crawlerSwitch === undefined || crawlerSwitch === null) {
            crawlerSwitch = "";
            if (this.props.crawlerSwitch !== undefined && this.props.crawlerSwitch !== null) {
                crawlerSwitch = this.props.crawlerSwitch;
            }
        }
        if (crawlerSwitch === "all") {
            crawlerSwitch = "";
        }

        // 7.通过props中的值发起请求
        dispatch(fetchGetAllCrawlerManagement(keyword, pageNum, bkey, ckey, crawlerStatus, crawlerSwitch));
    }

    // 新增爬虫
    handleAdd() {
        const { dispatch } = this.props;
        const form = this.addFormRef.props.form;
        let formData = {};

        // 表单检验
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            for (let key in values) {
                // 赋值给传递对象
                formData[key] = values[key];
            }
            // 提交新增请求
            dispatch(fetchAddCrawlerManagement(formData));

            setTimeout(this.addResult, 200);
        });
    }

    // 新增爬虫对话的表单数据
    wrappedAddFormRef = (formRef) => {
        this.addFormRef = formRef;
    }

    addResult() {
        const { createStatus } = this.props;
        const form = this.addFormRef.props.form;
        for (let key in createStatus) {
          if (key === 'success') {
            const addResultSuccess = createStatus[key];
            if (addResultSuccess) {   // 新增成功
              this.setState({ addModalVisible: false});   // 关闭对话框
              form.resetFields();   // 重置表单组件的值
            }
          }
        }
    }

    // 删除爬虫
    handleDelete(crawlerId) {
        const { dispatch } = this.props;
        // 提交删除请求
        dispatch(fetchDeleteCrawlerManagement(crawlerId));
    }

    // 更新爬虫
    handleUpdate() {
        const { dispatch } = this.props;
        const form = this.updateFormRef.props.form;
        let formData = {};

        // 表单检验
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            for (let key in values) {
                // cid作为url参数，其他字段通过PUT请求的body数据进行请求
                if (key === 'crawler_id') {
                    var crawlerId = values[key];
                } else {
                    formData[key] = values[key];
                }
            }
            // 提交更新请求
            dispatch(fetchUpdateCrawlerManagement(crawlerId, formData));

            setTimeout(this.updateResult, 200);
        });
    }

    // 更新爬虫对话的表单数据
    wrappedUpdateFormRef = (formRef) => {
        this.updateFormRef = formRef;
    }

    updateResult() {
        const { updateStatus } = this.props;
        const form = this.updateFormRef.props.form;
        for (let key in updateStatus) {
            if (key === 'success') {
                const updateResultSuccess = updateStatus[key];
                if (updateResultSuccess) {    // 更新成功     
                    this.setState({ updateModalVisible: false});   // 关闭对话框
                    form.resetFields();   // 重置表单组件的值
                }
            }
        }
    }

    // 源下拉列表更改时的回调
    handleSourceChange(bkey) {
        const { dispatch } = this.props;
        // 1.更新store中对应数据,其他字段使用现有值
        dispatch(changeCrawlerManagementFiltrate(this.props.keyword, bkey, this.props.ckey, this.props.crawlerStatus, this.props.crawlerSwitch));

        // 2.发起请求
        this.handleGet(null, null, bkey, null, null, null);
    }

    // 类别下拉列表更改时的回调
    handleCategoryChange(ckey) {
        const { dispatch } = this.props;
        // 1.更新store中对应数据,其他字段使用现有值
        dispatch(changeCrawlerManagementFiltrate(this.props.keyword, this.props.bkey, ckey, this.props.crawlerStatus, this.props.crawlerSwitch));

        // 2.发起请求
        this.handleGet(null, null, null, ckey, null, null);
    }

    // 爬虫状态下拉列表更改时的回调
    handleStatusChange(crawlerStatus) {
        const { dispatch } = this.props;
        // 1.更新store中对应数据,其他字段使用现有值
        dispatch(changeCrawlerManagementFiltrate(this.props.keyword, this.props.bkey, this.props.ckey, crawlerStatus, this.props.crawlerSwitch));

        // 2.发起请求
        this.handleGet(null, null, null, null, crawlerStatus, null);
    }

    // 爬虫开关下拉列表更改时的回调,其他字段使用现有值
    handleSwitchChange(crawlerSwitch) {
        const { dispatch } = this.props;
        // 1.更新store中对应数据
        dispatch(changeCrawlerManagementFiltrate(this.props.keyword, this.props.bkey, this.props.ckey, this.props.crawlerStatus, crawlerSwitch));

        // 2.发起请求
        this.handleGet(null, null, null, null, null, crawlerSwitch);
    }

    // 搜索框内容改变时的回调
    handleSearchInputChange(text) {
        const { dispatch } = this.props;

        // 仅更新store中的对应数据，不发起新的请求
        dispatch(changeCrawlerManagementFiltrate(text, this.props.bkey, this.props.ckey, this.props.crawlerStatus, this.props.crawlerSwitch));
    }

    render() {
        // 初始化源、类别下拉列表中的选项
        // 爬虫源和类别元数据
        const sourceOptionObj = this.props.sourceOption;
        const categoryListObj = this.props.categoryList;

        // 将爬虫源数据封装成下拉列表需要的数组
        const sourceOptions = [];
        sourceOptions.push(<Option key="all">全部</Option>);      // 先增加一个全部选项
        for (let arrIndex in sourceOptionObj) {        // 取出对象
            for (var keyIndex in sourceOptionObj[arrIndex]) {       // 取出字段
                if (keyIndex === "bkey") {
                    var bkey = sourceOptionObj[arrIndex][keyIndex];
                }
                if (keyIndex === "bname") {
                    var bname = sourceOptionObj[arrIndex][keyIndex];
                }
            }
            sourceOptions.push(<Option key={ bkey }>{ bname }</Option>);        // 保存到数组
        }

        // 将类别数据封装成下拉列表需要的数组
        const categoryOptions = [];
        categoryOptions.push(<Option key="all">全部</Option>);
        for (let arrIndex in categoryListObj) {
            for (var ckeyIndex in categoryListObj[arrIndex]) {
                if (ckeyIndex === "ckey") {
                    var ckey = categoryListObj[arrIndex][ckeyIndex];
                }
                if (ckeyIndex === "cname") {
                    var cname = categoryListObj[arrIndex][ckeyIndex];
                }
            }
            categoryOptions.push(<Option key={ ckey }>{ cname }</Option>);
        }

        // 将爬虫状态数据封装成下拉列表需要的数组
        const statusOptions = [];
        statusOptions.push(<Option key="all">全部</Option>);
        statusOptions.push(<Option key="NORMAL">正常</Option>);
        statusOptions.push(<Option key="ABNORMAL">异常</Option>);

        // 将爬虫开关数据封装成下拉列表需要的数组
        const switchOptions = [];
        switchOptions.push(<Option key="all">全部</Option>);
        switchOptions.push(<Option key="ON">开启</Option>);
        switchOptions.push(<Option key="OFF">关闭</Option>);

        return ( 
            <Content style={ {margin: '24px 16px', padding: 24, background: '#fff', minHeight: 615} }>
                <div>
                    <span>源: </span><Select showSearch style={ {width: 150} } defaultValue="all" optionFilterProp="children" onChange={ this.handleSourceChange }>{ sourceOptions }</Select>
                    <span style={ {marginLeft: 24} }>类别: </span><Select showSearch style={ {width: 150} } defaultValue="all" optionFilterProp="children" onChange={ this.handleCategoryChange }>{ categoryOptions }</Select>
                    <span style={ {marginLeft: 24} }>爬虫状态: </span><Select showSearch style={ {width: 150} } defaultValue="all" optionFilterProp="children" onChange={ this.handleStatusChange }>{ statusOptions }</Select>
                    <span style={ {marginLeft: 24} }>爬虫开关: </span><Select showSearch style={ {width: 150} } defaultValue="all" optionFilterProp="children" onChange={ this.handleSwitchChange }>{ switchOptions }</Select>
                </div>
                <div style={ {marginTop: 24} }>
                    <SearchComponent text={ this.props.keyword } onGet={ this.handleGet } onChange={ this.handleSearchInputChange } />
                    <Button type="primary" style={ {float: 'right'} } onClick={ this.handleShowAddModal }>新增爬虫</Button>
                </div>
                <TableComponent rowKey='crawler_id' tableData={ this.props.payload } onGet={ this.handleGet } loading={ this.props.isFetching } />
                <AddCrawlerManagementComponent 
                    wrappedComponentRef={ this.wrappedAddFormRef }
                    visible={ this.state.addModalVisible }
                    onCancel={ this.handleAddModalCancel }
                    onCreate={ this.handleAdd }
                    bodyHeight = { this.props.height }
                    confirmLoading = { this.props.isCreating }
                    initData = { this.state.initData }
                    sourceOption = { sourceOptionObj }
                    categoryList = { categoryListObj }
                />
                <UpdateCrawlerManagementComponent 
                    wrappedComponentRef={ this.wrappedUpdateFormRef }
                    visible={ this.state.updateModalVisible }
                    onCancel={ this.handleUpdateModalCancel }
                    onUpdate={ this.handleUpdate }
                    bodyHeight = { this.props.height }
                    confirmLoading={ this.props.isUpdating }
                    initData={ this.state.initData }
                    sourceOption = { sourceOptionObj }
                    categoryList = { categoryListObj }
                />
            </Content>
        );
    }
}

// 对属性进行限定
CrawlerManagementContainer.propTypes = {
    dispatch: PropTypes.func.isRequired
}

// 从state中注入数据
function mapStateToProps(state) {
    return {
        payload: state.getCrawlerManagement.payload,    // 表格和分页渲染所需数据
        isFetching: state.getCrawlerManagement.isFetching,    // 获取爬虫数据加载态
        status: state.getCrawlerManagement.status,    // 获取爬虫数据返回结果
        receiveAt: state.getCrawlerManagement.receiveAt,    // 获取爬虫数据成功时间
        isCreating: state.addCrawlerManagement.isCreating,   // 新增爬虫加载态
        createStatus: state.addCrawlerManagement.status,    //  新增爬虫返回结果(包含提示信息)
        deleteStatus: state.deleteCrawlerManagement.status,    // 删除爬虫返回结果
        isUpdating: state.updateCrawlerManagement.isUpdating,   // 更新爬虫加载态
        updateStatus: state.updateCrawlerManagement.status,    // 更新爬虫返回结果
        height: state.updateScreen.height,   // 屏幕高(浏览器可视区域)
        sourceOption: state.getMeta.sourceOption,   // 爬虫源元数据
        categoryList: state.getMeta.categoryList,   // 类别元数据
        keyword: state.changeCrawlerManagementFiltrate.keyword,    // 搜索关键字
        bkey: state.changeCrawlerManagementFiltrate.bkey,     // 源下拉列表选项
        ckey: state.changeCrawlerManagementFiltrate.ckey,     // 类别下拉列表选项
        crawlerStatus: state.changeCrawlerManagementFiltrate.crawlerStatus,     // 爬虫状态下拉列表选项
        crawlerSwitch: state.changeCrawlerManagementFiltrate.crawlerSwitch      // 爬虫开关下拉列表选项
    }
}

export default connect(mapStateToProps)(CrawlerManagementContainer);