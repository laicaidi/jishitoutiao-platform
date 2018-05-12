import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Table } from 'antd';
import PaginationComponent from '../component/PaginationComponent';

export default class TableComponent extends Component {

    render() {
        let columnsArr = [];     // 封装表格标题的数组
        let dataSourceArr = [];       // 封装表格内容的数组
        let pageObj = {};       // 分页对象
        
        // 从container传递来的props渲染所需数据，value是关键字，用payloadObj对象获取
        let tableObj = this.props.tableData;

        if (tableObj !== undefined && tableObj !== null) {
            for (let key in tableObj) {
                if (key === "columns") {        // 对象columns节点，存储标题数据
                    columnsArr = tableObj[key];
                }  
                if (key === "list") {       // 对象list节点，存储内容数据
                    dataSourceArr = tableObj[key];
                }  
                if (key === "total_record") {       // 总记录数，封装到page对象中
                    pageObj['total'] = tableObj[key];
                }  
                if (key === "page_size") {      // 每页显示数量，同样封装到page对象中
                    pageObj['pageSize'] = tableObj[key];
                }    
                if (key === "page_num") {       // 当前选中的页码
                    pageObj['defaultCurrent'] = tableObj[key];
                }
            }
        }   

        return (
            <div style={ {marginTop: '16px'} }>
                <Table 
                    columns={ columnsArr } 
                    dataSource={ dataSourceArr }
                    rowKey="index" 
                    pagination={ false }
                    loading = { this.props.loading }
                    // 如果是得分数据/得分筛选/列表输出页，字段太多需要横向滚动，其他页面不需要
                    scroll={ this.props.tag === 'InformationWeightSort' || this.props.tag === 'InformationWeightFiltrate' || this.props.tag === 'InformationOutputList' ? {x: 2700}  : {}}
                    />
                <PaginationComponent pagedata={ pageObj } onGet={ this.props.onGet } />
            </div>
        ) 
    }
}

// 对属性进行限定
// TableComponent.propTypes = {
//     // onGet: PropTypes.func.isRequired,       // 回调方法
//     columnsArr: PropTypes.array.isRequired       // 表格标题
//     //isFetching: PropTypes.bool.isRequired,
// }