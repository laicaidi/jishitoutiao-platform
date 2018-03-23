import React, { Component } from 'react';
import { Input } from 'antd';

const Search = Input.Search;

export default class SearchComponent extends Component {
    constructor(props) {
        super(props);
        // onSearch与本组件的this绑定
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(value) {
        // 调用props中的回调方法
        (this.props.onGet)(value);
    }
  
    render() {
        let text = this.props.text;

        return (
            <Search size="default"
                placeholder="请输入关键字搜索"
                onSearch={ this.onSearch }
                enterButton
                style={ {width:"400px"} }
                defaultValue={ text } />
        )
    }
}

