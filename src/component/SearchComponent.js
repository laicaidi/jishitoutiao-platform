import React, { Component } from 'react';
import { Input } from 'antd';

const Search = Input.Search;

export default class SearchComponent extends Component {
    constructor(props) {
        super(props);
        // onSearch与本组件的this绑定
        this.onhandleSearch = this.onhandleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onhandleSearch(keyword) {
        // 调用props中的回调方法
        (this.props.onGet)(keyword);
    }

    handleChange(event) {
        // 调用props中的回调，将store中的keyword更新
        (this.props.onChange)(event.target.value);
    }
  
    render() {
        return (
            <Search size="default"
                placeholder="请输入关键字搜索"
                onSearch={ this.onhandleSearch }
                enterButton
                style={ {width:"400px"} }
                value={ this.props.text }
                onChange={ this.handleChange } />
        )
    }
}

