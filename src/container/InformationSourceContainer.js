import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    fetchGetAllInformationSource,
    fetchAddInformationSource,
    fetchDeleteInformationSource,
    fetchUpdateInformationSource,
    changeInformationSourceFiltrate
} from '../action/InformationSourceAction';
import { Layout, Divider, Popconfirm, Select, Tabs } from 'antd';
import moment from 'moment';
import SearchComponent from '../component/SearchComponent';
import TableComponent from '../component/TableComponent';
import { AddInformationSourceComponent } from '../component/AddInformationSourceComponent';
import { UpdateInformationSourceComponent } from '../component/UpdateInformationSourceComponent';

const { Content } = Layout;
const Option = Select.Option;
const TabPane = Tabs.TabPane;

class InformationSourceContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addModalVisible: false,    // 新增资讯源对话框显示状态
            updateModalVisible: false    // 更新资讯源对话框显示状态
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
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.handleDisabledDate = this.handleDisabledDate.bind(this);
        this.getMyDate = this.getMyDate.bind(this);
        this.getzf = this.getzf.bind(this);
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
                                    if (key === 'title') {
                                        var msgTitle = dataObj[key];
                                    }
                                    if (key === 'information_id') {
                                        var informationId = dataObj[key];     // 本条记录的资讯源id
                                    }
                                }

                                // 拼接提示文案
                                const msgText = (
                                    <div>
                                        <h4>删除资讯源</h4>
                                        <p>标题: { msgTitle }</p>
                                        <p>删除后不可恢复，是否确认？</p>
                                    </div>
                                );

                                function showUpdateModal() {
                                    // 通过回调方法，显示更新资讯源对话框，并传递代表本条数据的对象
                                    handleShowUpdateModal(dataObj);
                                }

                                function showCopyAddModal() {
                                    handleShowCopyModal(dataObj);
                                }

                                function deleteConfirm() {
                                    // 通过回调方法删除资讯源
                                    handleDelete(informationId);
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
    // 显示新增资讯源对话框
    handleShowAddModal = () => {
        const form = this.addFormRef.props.form;
        form.resetFields();     // 重置表单的值
        // 将显示状态开启
        this.setState({ addModalVisible: true, initData: null });
    }

    // 显示复制(新增)资讯源对话框
    handleShowCopyModal = (dataObj) => {
        const form = this.addFormRef.props.form;
        form.resetFields();
        // 1.将显示状态开启
        // 2.并将点击的数据传给AddInformationSourceComponent 
        this.setState({ addModalVisible: true, initData: dataObj });
    }

    // 关闭新增资讯源对话框
    handleAddModalCancel = () => {
        const form = this.addFormRef.props.form;
        form.resetFields(); 
        // 1.将显示状态开启
        // 2.将initData清空，以避免传递错误数据给AddCrawlerSourceComponent
        this.setState({ addModalVisible: false, initData: null }); 
    }

    // 显示更新资讯源对话框
    handleShowUpdateModal = (dataObj) => {
        const form = this.updateFormRef.props.form;
        form.resetFields();   // 重置表单的值
        // 将显示状态开启，并将点击的数据存入state
        this.setState({ updateModalVisible: true, initData: dataObj });
    }

    // 关闭更新资讯源对话框
    handleUpdateModalCancel = () => {
        const form = this.updateFormRef.props.form;
        form.resetFields();
        this.setState({ updateModalVisible: false, initData: null });
    }

    // --------------------------数据(增删改查)回调方法-------------------
    // 获取资讯源数据
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
            dispatch(changeInformationSourceFiltrate(keyword, this.props.bkey, this.props.ckey));
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

        // 5.通过props中的值发起请求
        dispatch(fetchGetAllInformationSource(keyword, pageNum, bkey, ckey));
    }

    // 新增资讯源
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
                if (key === "created_time") {       // 将毫秒数转化为年月日+时分秒格式的字符串，如:1970-01-18 07:12:39
                    formData[key] = this.getMyDate(values[key]);
                } else {
                   // 赋值给传递对象
                    formData[key] = values[key]; 
                }
            }
            // 提交新增请求
            dispatch(fetchAddInformationSource(formData));

            setTimeout(this.addResult, 200);
        });
    }

    // 新增资讯源对话的表单数据
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
              this.handleGet();
            }
          }
        }
    }

    // 删除资讯源
    handleDelete(informationId) {
        const { dispatch } = this.props;
        // 提交删除请求
        dispatch(fetchDeleteInformationSource(informationId));

        setTimeout(this.handleGet, 200);
    }

    // 更新资讯源
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
                if (key === 'information_id') {
                    var informationId = values[key];
                } else if (key === "created_time") {       // 将毫秒数转化为年月日+时分秒格式的字符串，如:1970-01-18 07:12:39
                    formData[key]   = this.getMyDate(values[key]);
                } else {
                    formData[key] = values[key];
                }
            }
            // 提交更新请求
            dispatch(fetchUpdateInformationSource(informationId, formData));

            setTimeout(this.updateResult, 200);
        });
    }

    // 更新资讯源对话的表单数据
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
              this.handleGet();
            }
          }
        }
    }

    // 源下拉列表更改时的回调
    handleSourceChange(bkey) {
        const { dispatch } = this.props;
        // 1.更新store中对应数据,其他字段使用现有值
        dispatch(changeInformationSourceFiltrate(this.props.keyword, bkey, this.props.ckey));

        // 2.发起请求
        this.handleGet(null, null, bkey, null);
    }

    // 类别标签更改时的回调
    handleCategoryChange(ckey) {
        const { dispatch } = this.props;
        // 1.更新store中对应数据,其他字段使用现有值
        dispatch(changeInformationSourceFiltrate(this.props.keyword, this.props.bkey, ckey));

        // 2.发起请求
        this.handleGet(null, null, null, ckey);
    }

    // 搜索框内容改变时的回调
    handleSearchInputChange(text) {
        const { dispatch } = this.props;

        // 仅更新store中的对应数据，不发起新的请求
        dispatch(changeInformationSourceFiltrate(text, this.props.bkey, this.props.ckey));
    }

    // 不可选择日期的回调
    handleDisabledDate = (current) => {
        return current && current > moment().endOf('day');      // 今日以后的日期不可选择
    }

    // 毫秒转换成 年月日+时分秒 格式的  1970-01-18 07:12:39   
    // 补0操作： 比如2012-2-2  就会变成    2012-02-02
    getMyDate(str) {
        let oDate = new Date(str);
        let oYear = oDate.getFullYear();
        let oMonth = oDate.getMonth() + 1;
        let oDay = oDate.getDate();
        let oHour = oDate.getHours();
        let oMin = oDate.getMinutes();
        let oSen = oDate.getSeconds();
        // 最后拼接时间
        var oTime = oYear +'-'+ this.getzf(oMonth) +'-'+ this.getzf(oDay) +' '+ this.getzf(oHour) +':'+ this.getzf(oMin) +':'+ this.getzf(oSen);
        return oTime;
    }
    // 补0方法
    getzf(num) {
        if (parseInt(num, 10) < 10) {
            num = '0' + num;
        }
        return num;
    }

    render() {
        // 处理状态和批次号数据
        const { redisData } = this.props;
        if (redisData !== undefined && redisData !== null) {
            for (let key in redisData) {
                if (key === "string:information_source:status") {
                    var status = redisData[key];
                }
                if (key === "string:information_source:batch") {
                    var batch = redisData[key];
                }
            }
        }

        // 初始化源、类别下拉列表中的选项
        // 资讯源源和类别元数据
        const sourceOptionObj = this.props.sourceOption;
        const categoryListObj = this.props.categoryList;

        // 将资讯源源数据封装成下拉列表需要的数组
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

        // 类别标签的初始化数据
        var categoryTabs = [];       
        // 将其他类别加到数组
        for (let arrIndex in categoryListObj) {
            let categoryTabObj = {};
            for (var ckeyIndex in categoryListObj[arrIndex]) {
                if (ckeyIndex === "ckey") {
                    categoryTabObj.key = categoryListObj[arrIndex][ckeyIndex];
                }
                if (ckeyIndex === "cname") {
                    categoryTabObj.tab = categoryListObj[arrIndex][ckeyIndex];
                }
            }
            categoryTabs.push(categoryTabObj);
        }
        let categoryTabObj = {};
         // 在首位增加全部类别，作为默认
        categoryTabObj.key = "all";
        categoryTabObj.tab = "全部类别";
        categoryTabs.unshift(categoryTabObj);

        return ( 
            <Content style={ {margin: '24px 16px', padding: '6px 24px', background: '#fff', minHeight: 615} }>
                <Tabs
                    onChange={ this.handleCategoryChange }
                    defaultActiveKey="all"
                    >
                    { categoryTabs.map(pane => <TabPane tab={ pane.tab } key={ pane.key } >
                        <div style={ {marginTop: 8} }>
                            <span>源: </span><Select showSearch style={ {width: 150} } value={ this.props.bkey } optionFilterProp="children" onChange={ this.handleSourceChange }>{ sourceOptions }</Select>
                            <span style={ {float: 'right'} }>批次号: { batch } </span>
                        </div>
                        <div style={ {marginTop: 24} }>
                            <SearchComponent text={ this.props.keyword } onGet={ this.handleGet } onChange={ this.handleSearchInputChange } />
                            <span style={ {float: 'right'} }>状态: { status === 'leisure' ? '空闲': '处理中..' }</span>
                        </div>
                        <TableComponent rowKey='information_id' tableData={ this.props.payload } onGet={ this.handleGet } loading={ this.props.isFetching } /> 
                    </TabPane>) }
                </Tabs>
                <AddInformationSourceComponent 
                    wrappedComponentRef={ this.wrappedAddFormRef }
                    visible={ this.state.addModalVisible }
                    onCancel={ this.handleAddModalCancel }
                    onCreate={ this.handleAdd }
                    bodyHeight = { this.props.height }
                    confirmLoading = { this.props.isCreating }
                    initData = { this.state.initData }
                    sourceOption = { sourceOptionObj }
                    categoryList = { categoryListObj }
                    disabledDate = {this.handleDisabledDate}
                />
                <UpdateInformationSourceComponent 
                    wrappedComponentRef={ this.wrappedUpdateFormRef }
                    visible={ this.state.updateModalVisible }
                    onCancel={ this.handleUpdateModalCancel }
                    onUpdate={ this.handleUpdate }
                    bodyHeight = { this.props.height }
                    confirmLoading={ this.props.isUpdating }
                    initData={ this.state.initData }
                    sourceOption = { sourceOptionObj }
                    categoryList = { categoryListObj }
                    disabledDate = {this.handleDisabledDate}
                />
            </Content>
        );
    }
}

// 对属性进行限定
InformationSourceContainer.propTypes = {
    dispatch: PropTypes.func.isRequired
}

// 从state中注入数据
function mapStateToProps(state) {
    return {
        payload: state.getInformationSource.payload,    // 表格和分页渲染所需数据
        redisData: state.getInformationSource.redisData,        // redis中的状态(status)和批次号(batch)数据
        isFetching: state.getInformationSource.isFetching,    // 获取资讯源数据加载态
        status: state.getInformationSource.status,    // 获取资讯源数据返回结果
        receiveAt: state.getInformationSource.receiveAt,    // 获取资讯源数据成功时间
        isCreating: state.addInformationSource.isCreating,   // 新增资讯源加载态
        createStatus: state.addInformationSource.status,    //  新增资讯源返回结果(包含提示信息)
        deleteStatus: state.deleteInformationSource.status,    // 删除资讯源返回结果
        isUpdating: state.updateInformationSource.isUpdating,   // 更新资讯源加载态
        updateStatus: state.updateInformationSource.status,    // 更新资讯源返回结果
        height: state.updateScreen.height,   // 屏幕高(浏览器可视区域)
        sourceOption: state.getMeta.sourceOption,   // 资讯源源元数据
        categoryList: state.getMeta.categoryList,   // 类别元数据
        keyword: state.changeInformationSourceFiltrate.keyword,    // 搜索关键字
        bkey: state.changeInformationSourceFiltrate.bkey,     // 源下拉列表选项
        ckey: state.changeInformationSourceFiltrate.ckey,     // 选中的类别标签
    }
}

export default connect(mapStateToProps)(InformationSourceContainer);