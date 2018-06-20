import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    fetchGetAllCrawlerCategory,
    fetchAddCrawlerCategory,
    fetchDeleteCrawlerCategory,
    fetchUpdateCrawlerCategory,
    changeCrawlerCategoryFiltrate
} from '../action/CrawlerCategoryAction';
import { Layout, Button, Divider, Popconfirm } from 'antd';
import SearchComponent from '../component/SearchComponent';
import TableComponent from '../component/TableComponent';
import { AddCrawlerCategoryComponent } from '../component/AddCrawlerCategoryComponent';
import { UpdateCrawlerCategoryComponent } from '../component/UpdateCrawlerCategoryComponent';

const { Content } = Layout;

class CrawlerCategoryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addModalVisible: false,    // 新增类别对话框显示状态
            updateModalVisible: false    // 更新类别对话框显示状态
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
                                    if (key === 'ckey') {
                                        var msgKey = dataObj[key];
                                    }
                                    if (key === 'cname') {
                                        var msgName = dataObj[key];
                                    }
                                    if (key === 'cid') {
                                        var cid = dataObj[key];     // 本条记录的bid
                                    }
                                }

                                // 拼接提示文案
                                const msgText = (
                                    <div>
                                        <h4>删除分类</h4>
                                        <p>类别key: { msgKey }</p>
                                        <p>类别名称: { msgName }</p>
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
                                    handleDelete(cid);
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
    // 显示新增类别对话框
    handleShowAddModal = () => {
        const form = this.addFormRef.props.form;
        form.resetFields();     // 重置表单的值
        // 将显示状态开启
        this.setState({ addModalVisible: true, initData: null });
    }

    // 显示复制(新增)类别对话框
    handleShowCopyModal = (dataObj) => {
        const form = this.addFormRef.props.form;
        form.resetFields();
        // 1.将显示状态开启
        // 2.并将点击的数据传给添加组件
        this.setState({ addModalVisible: true, initData: dataObj });
    }

    // 关闭新增类别对话框
    handleAddModalCancel = () => {
        const form = this.addFormRef.props.form;
        form.resetFields(); 
        // 1.将显示状态开启
        // 2.将initData清空，以避免传递错误数据
        this.setState({ addModalVisible: false, initData: null }); 
    }

    // 显示更新类别对话框
    handleShowUpdateModal = (dataObj) => {
        const form = this.updateFormRef.props.form;
        form.resetFields();   // 重置表单的值
        // 将显示状态开启，并将点击的数据存入state
        this.setState({ updateModalVisible: true, initData: dataObj });
    }

    // 关闭更新类别对话框
    handleUpdateModalCancel = () => {
        const form = this.updateFormRef.props.form;
        form.resetFields();
        this.setState({ updateModalVisible: false, initData: null });
    }

    // --------------------------数据(增删改查)回调方法-------------------
    // 获取类别数据
    handleGet(keyword, pageNum) {
        const { dispatch } = this.props;

        // 1.处理搜索关键字参数
        if (keyword !== undefined && keyword !== null) {        // 1.1从搜索框唤起
            dispatch(changeCrawlerCategoryFiltrate(keyword));     
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
  
        // 3.通过props中的值发起请求
        dispatch(fetchGetAllCrawlerCategory(keyword, pageNum));
    }

    // 新增类别
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
            dispatch(fetchAddCrawlerCategory(formData));

            setTimeout(this.addResult, 200);
        });
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

    // 新增类别对话的表单数据
    wrappedAddFormRef = (formRef) => {
        this.addFormRef = formRef;
    }

    // 删除类别
    handleDelete(id) {
        const { dispatch } = this.props;
        // 提交删除请求
        dispatch(fetchDeleteCrawlerCategory(id));

        setTimeout(this.handleGet, 200);
    }

    // 更新类别
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
                if (key === 'cid') {
                    var cid = values[key];
                } else {
                    formData[key] = values[key];
                }
            }
            // 提交更新请求
            dispatch(fetchUpdateCrawlerCategory(cid, formData));

            setTimeout(this.updateResult, 200);
        });
    }

    // 更新类别对话的表单数据
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

    // 搜索框内容改变时的回调
    handleSearchInputChange(text) {
        const { dispatch } = this.props;

        // 仅更新store中的对应数据，不发起新的请求
        dispatch(changeCrawlerCategoryFiltrate(text));
    }

    render() {
        return ( 
            <Content style={ {margin: '24px 16px', padding: 24, background: '#fff', minHeight: 615} }>
                <SearchComponent text={ this.props.keyword } onGet={ this.handleGet } onChange={ this.handleSearchInputChange } />
                <Button type="primary" style={ {float: 'right'} } onClick={ this.handleShowAddModal }>新增类别</Button>
                <TableComponent rowKey='cid' tableData={ this.props.payload } onGet={ this.handleGet } loading={ this.props.isFetching } />
                <AddCrawlerCategoryComponent 
                    wrappedComponentRef={ this.wrappedAddFormRef }
                    visible={ this.state.addModalVisible }
                    onCancel={ this.handleAddModalCancel }
                    onCreate={ this.handleAdd }
                    bodyHeight = { this.props.height }
                    confirmLoading = { this.props.isCreating }
                    initData = { this.state.initData }
                />
                <UpdateCrawlerCategoryComponent 
                    wrappedComponentRef={ this.wrappedUpdateFormRef }
                    visible={ this.state.updateModalVisible }
                    onCancel={ this.handleUpdateModalCancel }
                    onUpdate={ this.handleUpdate }
                    bodyHeight = { this.props.height }
                    confirmLoading={ this.props.isUpdating }
                    initData={ this.state.initData }
                />
            </Content>
        );
    }
}

// 对属性进行限定
CrawlerCategoryContainer.propTypes = {
    dispatch: PropTypes.func.isRequired
}

// 从state中注入数据
function mapStateToProps(state) {
    return {
        payload: state.getCrawlerCategory.payload,    // 表格和分页渲染所需数据
        isFetching: state.getCrawlerCategory.isFetching,    // 获取类别数据加载态
        status: state.getCrawlerCategory.status,    // 获取类别数据返回结果
        receiveAt: state.getCrawlerCategory.receiveAt,    // 获取类别数据成功时间 
        isCreating: state.addCrawlerCategory.isCreating,   // 新增类别加载态
        createStatus: state.addCrawlerCategory.status,    //  新增类别返回结果(包含提示信息)
        deleteStatus: state.deleteCrawlerCategory.status,    // 删除类别返回结果
        isUpdating: state.updateCrawlerCategory.isUpdating,   // 更新类别加载态
        updateStatus: state.updateCrawlerCategory.status,    // 更新类别返回结果
        height: state.updateScreen.height,   // 屏幕高(浏览器可视区域)
        keyword: state.changeCrawlerCategoryFiltrate.keyword    // 搜索关键字
    }
}

export default connect(mapStateToProps)(CrawlerCategoryContainer);