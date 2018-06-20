import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    fetchGetAllInformationComment,
    fetchDeleteInformationComment,
    changeInformationCommentFiltrate,
} from '../action/InformationCommentAction';
import { Layout, Popconfirm } from 'antd';
import SearchComponent from '../component/SearchComponent';
import TableComponent from '../component/TableComponent';

const { Content } = Layout;

class InformationCommentContainer extends Component {
    constructor(props) {
        super(props);
        // 绑定回调方法
        this.handleGet = this.handleGet.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    }

    componentWillMount() {
        // 初始化数据
        this.handleGet();
    }

    componentWillReceiveProps(nextProp) {
        if (nextProp !== undefined && nextProp !== null) {
            // 将回调函数赋值给本方法内的变量
            var handleDelete = this.handleDelete;

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
                            width: 120,     // 列固定
                            render: (text, record) => {
                                // 用对象封装代表本条点击的数据(record)
                                let dataObj = record;

                                for (let key in dataObj) {
                                    if (key === 'content') {
                                        var msgContent = dataObj[key];
                                    }
                                    if (key === 'comment_id') {
                                        var commentId = dataObj[key];     // 本条记录的资讯评论id
                                    }
                                }

                                // 拼接提示文案
                                const msgText = (
                                    <div>
                                        <h4>删除评论</h4>
                                        <p>评论内容: { msgContent }</p>
                                        <p>删除后不可恢复，是否确认？</p>
                                    </div>
                                );

                                function deleteConfirm() {
                                    // 通过回调方法删除资讯评论
                                    handleDelete(commentId);
                                }

                                return (
                                    <span>
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

    // --------------------------数据(增删改查)回调方法-------------------
    // 获取资讯评论数据
    /**
     * 
     * @param {*} keyword 搜索关键字
     * @param {*} pageNum 页码
     */
    handleGet(keyword, pageNum) {
        const { dispatch } = this.props;

        // 1.处理搜索关键字参数
        if (keyword !== null && keyword !== undefined) {        // 1.1从搜索框唤起
            // 更新props中的内容
            dispatch(changeInformationCommentFiltrate(keyword));
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
        dispatch(fetchGetAllInformationComment(keyword, pageNum));
    }

    // 删除资讯评论
    handleDelete(informationCommentId) {
        const { dispatch } = this.props;
        // 提交删除请求
        dispatch(fetchDeleteInformationComment(informationCommentId));

        setTimeout(this.handleGet, 200);
    }

    // 搜索框内容改变时的回调
    handleSearchInputChange(text) {
        const { dispatch } = this.props;

        // 仅更新store中的对应数据，不发起新的请求
        dispatch(changeInformationCommentFiltrate(text));
    }

    render() {
        return ( 
            <Content style={ {margin: '24px 16px', padding: 24, background: '#fff', minHeight: 615} }>
                <SearchComponent text={ this.props.keyword } onGet={ this.handleGet } onChange={ this.handleSearchInputChange } />
                <TableComponent rowKey='comment_id' tableData={ this.props.payload } onGet={ this.handleGet } loading={ this.props.isFetching } />
            </Content>
        );
    }
}

// 对属性进行限定
InformationCommentContainer.propTypes = {
    dispatch: PropTypes.func.isRequired
}

// 从state中注入数据
function mapStateToProps(state) {
    return {
        payload: state.getInformationComment.payload,    // 表格和分页渲染所需数据
        isFetching: state.getInformationComment.isFetching,    // 获取资讯评论数据加载态
        status: state.getInformationComment.status,    // 获取资讯评论数据返回结果
        receiveAt: state.getInformationComment.receiveAt,    // 获取资讯评论数据成功时间
        deleteStatus: state.deleteInformationComment.status,    // 删除资讯评论返回结果
        keyword: state.changeInformationCommentFiltrate.keyword,    // 搜索关键字
    }
}

export default connect(mapStateToProps)(InformationCommentContainer);