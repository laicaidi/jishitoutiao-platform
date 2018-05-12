import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Pagination } from 'antd';

export default class PaginationComponent extends Component {
    constructor(props) {
        super(props);
        // onChange与本组件this绑定
        this.onChange = this.onChange.bind(this);
    }

    onChange(pageNum, pageSize) {
        // 调用props中的回调方法,第一个参数是搜索关键字，本次属于从页码标签激活，可不传
        (this.props.onGet)(null, pageNum);
    }

    render() {
        // 从TableComponent组件中获取传递props渲染数据，关键字为pagedata
        let pageObj = this.props.pagedata;
        var len = 0;        // 每页显示数量
        var current = 1;        // 当前显示页码

        for (let key in pageObj) {
            if (key === "pageSize") {
                len = pageObj[key];     // 从props中获每页显示数量取值
            }
            if (key === 'defaultCurrent') {
                current = pageObj[key];     // 从props中获取当前页码数据
            }
        }
        
        return (
            <Pagination
                total={ pageObj['total'] }
                showTotal={ total => `共计 ${ total } 条记录` }
                pageSize={ len }
                current={ current }
                style={ {marginTop: '10px',float: 'right'} }
                onChange={ this.onChange } />
        )
    }
}

// 对属性进行限定
// PaginationComponent.propTypes = {
//     // onGet: PropTypes.func.isRequired,       // 回调方法
// }