import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchGetAllCrawlerSource,
  fetchAddCrawlerSource,
  fetchDeleteCrawlerSource,
  fetchUpdateCrawlerSource,
} from '../action/CrawlerSourceAction';
import '../css/App.css';
import { Layout, Button, message, Divider, Popconfirm  } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
//import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import SiderComponent from '../component/SiderComponent';
import HeaderComponent from '../component/HeaderComponent';
import SearchComponent from '../component/SearchComponent';
import TableComponent from '../component/TableComponent';
import { AddCrawlerSourceComponent } from '../component/AddCrawlerSourceComponent';
import { UpdateCrawlerSourceComponent } from '../component/UpdateCrawlerSourceComponent';

const { Content } = Layout;
moment.locale('zh-cn');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width || -1,     // 整体布局宽
      height: props.height || -1,   // 整体布局高
      addModalVisible: false,    // 新增爬虫源对话框显示状态
      updateModalVisible: false    // 更新爬虫源对话框显示状态
    }
    // 绑定回调方法
    this.handleGet = this.handleGet.bind(this);
    this.handleAdd= this.handleAdd.bind(this);
    this.handleShowAddModal = this.handleShowAddModal.bind(this);
    this.handleShowCopyModal = this.handleShowCopyModal.bind(this);
    this.addResult = this.addResult.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteResult = this.deleteResult.bind(this);
    this.handleShowUpdateModal = this.handleShowUpdateModal.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateResult = this.updateResult.bind(this);
    this.handleUpdateModalCancel = this.handleUpdateModalCancel.bind(this);
    this.handleAddModalCancel = this.handleAddModalCancel.bind(this);
    this.sleep = this.sleep.bind(this);

    // 初始化数据
    this.handleGet();
  }

  // -------自动适应屏幕宽高+初始化数据-------
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

  componentWillReceiveProps(nextProp) {
    if (nextProp !== undefined && nextProp !== null) {
      // 将回调函数赋值给本方法内的变量
      var handleShowUpdateModal = this.handleShowUpdateModal;
      var handleDelete = this.handleDelete;
      var handleShowCopyModal = this.handleShowCopyModal;

      var payloadObj = nextProp.payload;     // store中取出payload数据

      for (let key in payloadObj) {
        // 判断columns节点，挂载的是表格标题所需的数据
        if (key === 'columns') {
          let pushed = false;
          for (let i = 0; i < payloadObj[key].length; i++) {
            // 因antd字段名为dataIndex，所以将后台返回的data_index赋值给dataIndex
            payloadObj[key][i]['dataIndex'] = payloadObj[key][i]['data_index'];

            // 判断是否已经增加过序号和操作列，如已添加过，则无需在增加
            if (payloadObj[key][i].key === 'index') {
              pushed = true;
            }
          }

          // 如未添加序号及操作列，则添加
          if (!pushed) {
            // 在数组首位添加序号标题
            payloadObj[key].unshift({
              title: '序号',
              dataIndex: 'index',
              key: 'index'
            });
      
            // 在数组末尾添加操作标题
            payloadObj[key].push({
              title: '操作',
              key: 'action',
              width: 150,     //列固定
              render: (text, record) => {
                // 用对象封装代表本条点击的数据(record)
                let dataObj = record;

                for (let key in dataObj) {
                  if (key === 'bkey') {
                      var msgkey = dataObj[key];
                  } 
                  if (key === 'bname') {
                      var msgname = dataObj[key];
                  }  
                  if (key === 'bid') {        //本条记录的bid
                      var bid = dataObj[key];
                  }
                }
                
                // 拼接提示文案
                const msgtext = (
                  <div>
                      <h4>删除爬虫源</h4>
                      <p style={{textAlign: "auto"}}>源key: { msgkey }</p>
                      <p>源name: { msgname }</p>
                      <p>删除后不可恢复，是否确认？</p>
                  </div>
                );

                function showUpdateModel() {    
                  // 通过回调方法，显示更新爬虫对话框，并传递代表本条数据的对象
                  handleShowUpdateModal(dataObj);
                }

                function showCopyAddModel() {
                  handleShowCopyModal(dataObj);
                }

                function deleteConfirm() {
                  // 通过回调方法删除爬虫
                  handleDelete(bid);
                }

                return (
                  <span>
                    <a onClick={ showUpdateModel }>修改</a>
                    <Divider type="vertical" />
                    <a onClick={ showCopyAddModel }>复制</a>
                    <Divider type="vertical" />
                    <Popconfirm 
                          placement="topRight" 
                          title={ msgtext }
                          onConfirm={ deleteConfirm } 
                          okText="确定"
                          cancelText="取消">
                        <a>删除</a>
                    </Popconfirm>
                  </span>
                )
              },
            });
          }
        }

        //判断list节点,挂载的是表格所需数据
        if (key === 'list') {
          // 判断是否已增加过序号数据，如已增加过，则不处理;未增加过，则增加序号序列
          if (payloadObj[key][0]['index'] !== 1) {    // 未增加过
            for (let i = 0; i < payloadObj[key].length; i++) {
              payloadObj[key][i]['index'] = i + 1 + "";
            }
          }
        }
      }
    }
  }

  // 封装休眠方法
  sleep = (n) => {
    var start = new Date().getTime();
    console.log('休眠前: ' + start);
    while (true) {
      if (new Date().getTime() - start > n) {
        break;
      }
    }
    console.log('休眠后: ' + new Date().getTime());
  }

  // --------------------------对话框回调方法--------------------------
  // 显示新增爬虫对话框
  handleShowAddModal = () => {
    const form = this.addForm;
    form.resetFields();   // 重置表单的值
    // 将显示状态开启
    this.setState({ addModalVisible: true, initData: null });
  }

  // 显示复制(新增)爬虫对话框
  handleShowCopyModal = (dataObj) => {
    const form = this.addForm;
    form.resetFields();   // 重置表单的值
    // 1.将显示状态开启
    // 2.并将点击的数据传给AddCrawlerSourceComponent 
    this.setState({ addModalVisible: true, initData: dataObj });
  }

  // 关闭新增爬虫源对话框
  handleAddModalCancel = () => {
    const form = this.addForm;
    form.resetFields(); 
    // 1.将显示状态开启
    // 2.将initData清空，以避免传递错误数据给AddCrawlerSourceComponent
    this.setState({ addModalVisible: false, initData: null }); 
  }

  // 显示更新爬虫对话框
  handleShowUpdateModal = (dataObj) => {
    const form = this.updateForm;
    form.resetFields();   // 重置表单的值
    // 将显示状态开启，并将点击的数据存入state，传递给UpdateCrawlerSourceComponent
    this.setState({ updateModalVisible: true, initData: dataObj });
  }

  // 关闭更新爬虫源对话框
  handleUpdateModalCancel = () => {
    const form = this.updateForm;
    form.resetFields();
    this.setState({ updateModalVisible: false, initData: null });
  }

  // --------------------------数据(增删改查)回调方法-------------------
  // 获取爬虫源数据
  handleGet(keyword, pageNum) {
    const { dispatch } = this.props;

    // 1.处理搜索关键字参数
    let keywordParam;
    if (keyword === undefined) {    // 1.1如果为未定义，
      if (this.props.keyword === undefined) {   // 且prop中没有，则证明是首次加载，直接赋值为""
        keywordParam = "";
      } else {    // prop中有，则证明其他组件激活，从props中获取
        keywordParam = this.props.keyword;
      }    
    } else if (keyword === null) {    // 1.2为null,证明从其他非自身组件激活回调，从props中获取
      keywordParam = this.props.keyword;
    } else {
      keywordParam = keyword;   // 1.3如果有值,证明是从搜索框自身组件激活的回调，将值传给参数
    }

    // 2.处理页码参数，未定义或为空时，默认取第一页
    if (pageNum === undefined || pageNum === null) {
      pageNum = 1;
    }

    // 3.通过props中的值发起请求
    dispatch(fetchGetAllCrawlerSource(keywordParam, pageNum));
  }

  // 新增爬虫源
  handleAdd() {
    const { dispatch } = this.props;
    const form = this.addForm;
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
      dispatch(fetchAddCrawlerSource(formData));

      // 休眠150毫秒，等待发起请求
      this.sleep(150);

      // 100毫秒后(删除成功/失败)，弹出message
      setTimeout(this.addResult, 100);

      // 休眠100毫秒，等待确定新增成功/失败
      this.sleep(100);

      // 150毫秒(弹出message)后，手动刷新首页数据
      setTimeout(this.handleGet, 150);
    });
  }

  // 新增爬虫源对话的表单数据
  addFormRef = (form) => {
    this.addForm = form;
  }

  // 根据新增返回status的状态，弹出对应的成功/失败message
  addResult() {
    const { createStatus } = this.props;
    const form = this.addForm;
    let addResultSuccess = false;
    let addResultMessage = '';

    for (let key in createStatus) {
      if (key === 'success') {    // 是否成功标识
        if (createStatus[key]) {    // 成功
          addResultSuccess = true;
        }
      }
      if (key === 'message') {    // 服务端返回文案
        addResultMessage = createStatus[key];
      }
    }

    if (addResultSuccess) {   // 新增成功
      message.success(addResultMessage);
      this.setState({ addModalVisible: false});   // 关闭对话框
      form.resetFields();   // 重置表单组件的值
    } else {
      message.error(addResultMessage);
    }
  }

  // 删除爬虫源
  handleDelete(id) {
    const { dispatch } = this.props;
    // 提交删除请求
    dispatch(fetchDeleteCrawlerSource(id));

    // 休眠150毫秒，等待发起请求
    this.sleep(150);

    // 100毫秒后(删除成功/失败)，弹出message
    setTimeout(this.deleteResult, 100);

    // 休眠100毫秒，等待删除成功/失败状态生效
    this.sleep(100);

    // 150毫秒(弹出message)后，手动刷新首页数据
     setTimeout(this.handleGet, 150);
  }

  // 根据删除请求返回status的状态，弹出对应的成功/失败message
  deleteResult() {
    const { deleteStatus } = this.props;
    let deleteResultSuccess = false;
    let deleteResultMessage = '';

    for (let key in deleteStatus) {
      if (key === 'success') {    // 是否成功标识
        if (deleteStatus[key]) {    // 成功
          deleteResultSuccess = true;
        }
      }
      if (key === 'message') {
        deleteResultMessage = deleteStatus[key];
      }
    }

    if (deleteResultSuccess) {    // 删除成功
      message.success(deleteResultMessage);
    } else {
      message.error(deleteResultMessage);
    }
  }

  // 更新爬虫源
  handleUpdate() {
    const { dispatch } = this.props;
    const form = this.updateForm;
    let formData = {};

    // 表单检验
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      for (let key in values) {
        // bid作为url参数，其他字段通过post的body数据进行请求
        if (key === 'bid') {
          var bid = values[key];
        } else {
          formData[key] = values[key];
        }
      }
      // 提交更新请求
      dispatch(fetchUpdateCrawlerSource(bid, formData));

      // 休眠150毫秒，等待发起请求
      this.sleep(150);

      // 100毫秒后(删除成功)，弹出message
      setTimeout(this.updateResult, 100);

      // 休眠100毫秒，等待更新成功/失败状态生效
      this.sleep(100);

      // 150毫秒(弹出message)后，手动刷新首页数据
      setTimeout(this.handleGet, 150);
    });
  }

  // 更新爬虫源对话的表单数据
  updateFormRef = (form) => {
    this.updateForm = form;
  }

  // 根据更新请求返回status的状态，弹出对应的成功/失败message
  updateResult() {
    const { updateStatus } = this.props;
    const form = this.updateForm;
    let updateResultSuccess = false;
    let updateResultMessage = '';

    for (let key in updateStatus) {
      if (key === 'success') {    // 是否成功标识
        if (updateStatus[key]) {    // 成功
          updateResultSuccess = true;
        }
      }
      if (key === 'message') {
        updateResultMessage = updateStatus[key];
      }
    }

    if (updateResultSuccess) {    // 更新成功
      message.success(updateResultMessage); 
      this.setState({ updateModalVisible: false});   // 关闭对话框
      form.resetFields();   // 重置表单组件的值
    } else {
      message.error(updateResultMessage);
    }
  }
 
  render() {
    // 从props中获取搜索输入框的内容
    let keyword = this.props.keyword;

    // 从props中获取渲染所需的数据(标题+表格内容)
    const { payload, isFetching, isCreating, isUpdating } = this.props;

    return (
      <Layout style={ {width: this.state.width, height: this.state.height} }>
        <HeaderComponent />
        <Layout>        
          <SiderComponent />
          <Content style={ {margin: '24px 16px', padding: 24, background: '#fff', minHeight: 615, overflow:"auto"} }>
            <SearchComponent text={ keyword } onGet={ this.handleGet } />
            <Button type="primary" style={ {float: 'right'} } onClick={ this.handleShowAddModal }>新增源</Button>
            <TableComponent tabledata={ payload } onGet={ this.handleGet } loading={ isFetching } />
          </Content>
        </Layout>  
        <AddCrawlerSourceComponent
          ref={ this.addFormRef }
          visible={ this.state.addModalVisible }
          onCancel={ this.handleAddModalCancel }
          onCreate={ this.handleAdd }
          bodyHeight = { this.state.height }
          confirmLoading = { isCreating }
          initData = { this.state.initData }
        />
        <UpdateCrawlerSourceComponent
          ref={ this.updateFormRef }
          visible={ this.state.updateModalVisible }
          onCancel={ this.handleUpdateModalCancel }
          onUpdate={ this.handleUpdate }
          bodyHeight = { this.state.height }
          confirmLoading={ isUpdating }
          initData={ this.state.initData }
        />
      </Layout>
    );
  }
}

// 对属性进行限定
App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

// 从state中注入数据
function mapStateToProps(state) {
  return {
      payload: state.getCrawlerSource.payload,    // 表格和分页渲染所需数据
      isFetching: state.getCrawlerSource.isFetching,    // 获取爬虫数据加载态
      status: state.getCrawlerSource.status,    // 获取爬虫数据返回结果
      receiveAt: state.getCrawlerSource.receiveAt,    // 获取爬虫数据成功时间
      keyword: state.getCrawlerSource.keyword,    // 搜索关键字
      isCreating: state.addCrawlerSource.isCreating,   // 新增爬虫加载态
      createStatus: state.addCrawlerSource.status,    //  新增爬虫返回结果(包含提示信息)
      deleteStatus: state.deleteCrawlerSource.status,    // 删除爬虫返回结果
      isUpdating: state.updateCrawlerSource.isUpdating,   // 更新爬虫加载态
      updateStatus: state.updateCrawlerSource.status    // 更新爬虫返回结果
  }
}

/* 把所有的 ActionCreators 作为 props 注入到组件中,通过回调方法解决，无实际意义，仅供参考
写法一：
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({},
                                          this.handleGetAll,
                                          this.handleAddCrawlerSource,
                                          this.handleDeleteCrawlerSource,
                                          this.handleUpdateCrawlerSource)
                                          ,dispatch)
}

写法二：
const mapDispatchToProps = dispatch => ({
  handleGetAll: () => dispatch(fetchGetAllCrawlerSource()),
  handleAddCrawlerSource: (formData) => dispatch(fetchAddCrawlerSource(formData)),
  handleDeleteCrawlerSource: (id) => dispatch(fetchDeleteCrawlerSource(id)),
  handleUpdateCrawlerSource: (formData) => dispatch(fetchUpdateCrawlerSource(formData))
});
*/
export default connect(mapStateToProps)(App);