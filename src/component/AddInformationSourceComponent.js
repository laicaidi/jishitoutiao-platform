import React from 'react';
import { Modal, Form, Input, Select, InputNumber, DatePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const FormItem = Form.Item;
const Option = Select.Option;

export const AddInformationSourceComponent = Form.create()(
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form, bodyHeight, confirmLoading, initData, disabledDate } = this.props;
            const { getFieldDecorator } = form;
    
            // 爬虫选项
            let crawlwerOptions = [];
            // 源选项
            let sourceOptions = [];
            // 类别选项
            let categoryOptions = [];
    
            // 判断initData并赋值
            if (initData !== undefined && initData !== null) {
                for (let key in initData) {
                    // 获取该条数据，填充至对应控件
                    if (key === "crawler_id") {
                        var crawlerIdInit = initData[key];
                    }
                    if (key === "crawler_name") {
                        var crawlerNameInit = initData[key];
                    }
                    if (key === "bid") {
                        var bidInit = initData[key];
                    }
                    if (key === "bname") {
                        var bnameInit = initData[key];
                    }
                    
                    if (key === "cid") {
                        var cidInit = initData[key];
                    }
                    if (key === "cname") {
                        var cnameInit = initData[key];
                    }
                    if (key === "title") {
                        var titleInit = initData[key];
                    }
                    if (key === "read_count") {
                        var readCountInit = initData[key];
                    }
                    if (key === "comment_count") {
                        var commentCountInit = initData[key];
                    }
                    if (key === "like_count") {
                        var likeCountInit = initData[key];
                    }
                    if (key === "word_count") {
                        var wordCountInit = initData[key];
                    }
                    if (key === "url") {
                        var urlInit = initData[key];
                    }
                    if (key === "created_time") {
                        var createdTimeInit = initData[key];
                    }
                }
                crawlwerOptions.push(<Option key={ crawlerIdInit }>{ crawlerNameInit }</Option>);
                sourceOptions.push(<Option key={ bidInit }>{ bnameInit }</Option>);
                categoryOptions.push(<Option key={ cidInit }>{ cnameInit }</Option>);
            }
    
            const dataTimeFormat = 'YYYY-MM-DD HH:mm:ss';
        
            return(
                <Modal
                    visible={ visible }
                    title="新增源数据"
                    okText="提交"
                    cancelText="取消"
                    onCancel={ onCancel }
                    onOk={ onCreate }
                    style={ {top: 30, bottom: 30} }     // 距离顶部和底部的距离都为30
                    bodyStyle={ {height: bodyHeight - 170,  overflow: "auto"} }      // 高度固定，内容区域初始化滚动条
                    destroyOnClose={ true }     // 关闭时销毁 Modal 里的子元素，每次打开均重新加载(滚动条回顶部)
                    confirmLoading={ confirmLoading }       // 点击提交按钮时的加载态
                    >
                    <Form layout="vertical">
                        <FormItem label="源">
                            { getFieldDecorator('bid', {
                                initialValue: bidInit,
                                rules: [{
                                    required: true,
                                    message: "请选择源"
                                }]
                            })(
                                <Select
                                    disabled
                                    style={ {width: 200} }
                                    >
                                    { sourceOptions }
                                </Select>
                            ) }
                        </FormItem>
    
                        <FormItem label="类别">
                            { getFieldDecorator('cid', {
                                initialValue: cidInit,
                                rules: [{
                                    required: true,
                                    message: "请选择类别"
                                }]
                            })(
                                <Select
                                    disabled
                                    style={ {width: 200} }
                                    >
                                    { categoryOptions }
                                </Select>
                            ) }
                        </FormItem>
    
                        <FormItem label="爬虫名">
                            { getFieldDecorator('crawler_id', {
                                initialValue: crawlerIdInit,
                                rules: [{
                                    required: true,
                                    message: "请选择爬虫"
                                }]
                            })(
                                <Select 
                                    disabled
                                    style={ {width: 200} }
                                    >
                                    { crawlwerOptions }
                                </Select>
                            ) }
                        </FormItem>
    
                        
    
                        <FormItem label="标题">
                            { getFieldDecorator('title', {
                                initialValue: titleInit,
                                rules: [{
                                    required: true,
                                    message: "请输入标题"
                                }]
                            })(
                                <Input />
                            ) }
                        </FormItem>
    
                        <FormItem label="阅读数">
                            { getFieldDecorator('read_count', {
                                initialValue: readCountInit
                            })(
                                <InputNumber min={ 0 } step={ 1 } />
                            ) }
                        </FormItem>
    
                        <FormItem label="评论数">
                            { getFieldDecorator('comment_count', {
                                initialValue: commentCountInit
                            })(
                                <InputNumber min={ 0 } step={ 1 } />
                            ) }
                        </FormItem>
    
                        <FormItem label="点赞数">
                            { getFieldDecorator('like_count', {
                                initialValue: likeCountInit
                            })(
                                <InputNumber min={ 0 } step={ 1 } />
                            ) }
                        </FormItem>
    
    
                        <FormItem label="文章字数">
                            { getFieldDecorator('word_count', {
                                initialValue: wordCountInit
                            })(
                                <InputNumber min={ 0 } step={ 1 } />
                            ) }
                        </FormItem>
    
                        <FormItem label="资讯URL">
                            { getFieldDecorator('url', {
                                initialValue: urlInit,
                                rules: [{
                                    required: true,
                                    message: "请输入url",
                                    pattern: '(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]'
                                }]
                            })(
                                <Input />
                            ) }
                        </FormItem>
    
                        <FormItem label="资讯创建时间">
                            { getFieldDecorator('created_time', {
                                initialValue: moment(createdTimeInit),
                                rules: [{
                                    required: true,
                                    message: "请编辑资讯创建时间",
                                }]
                            })(
                                <DatePicker
                                    disabledDate={ disabledDate }
                                    showTime
                                    format={ dataTimeFormat }
                                    placeholder="请选择资讯创建时间"
                                        />
                            ) }
                        </FormItem>
                    </Form>
                </Modal>
            );
        }
    }
);