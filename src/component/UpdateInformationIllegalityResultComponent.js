import React from 'react';
import { Modal, Form, Input, Select, InputNumber, DatePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const FormItem = Form.Item;
const Option = Select.Option;

export const UpdateInformationIllegalityResultComponent = Form.create()(
    class extends React.Component {
        render() {
            const { visible, onCancel, onUpdate, form, bodyHeight, confirmLoading, initData, disabledDate } = this.props;
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
                    if (key === 'information_id') {
                        var informationIdInit = initData[key];
                    } else if (key === 'crawler_id') {
                        var crawlerIdInit = initData[key];
                    } else if (key === 'crawler_name') {
                        var crawlerNameInit = initData[key];
                    } else if (key === 'bid') {
                        var bidInit = initData[key];
                    } else if (key === 'bname') {
                        var bnameInit = initData[key];
                    } else if (key === 'cid') {
                        var cidInit = initData[key];
                    } else if (key === 'cname') {
                        var cnameInit = initData[key];
                    } else if (key === 'title') {
                        var titleInit = initData[key];
                    } else if (key === 'read_count') {
                        var readCountInit = initData[key];
                    } else if (key === 'comment_count') {
                        var commentCountInit = initData[key];
                    } else if (key === 'like_count') {
                        var likeCountInit = initData[key];
                    } else if (key === 'word_count') {
                        var wordCountInit = initData[key];
                    } else if (key === 'url') {
                        var urlInit = initData[key];
                    } else if (key === 'created_time') {
                        var createdTimeInit = initData[key];
                    } else if (key === 'repetition_num') {
                        var repetitionNumInit = initData[key];
                    } else if (key === 'illegality_result_id') {
                        var illegalityResultIdInit = initData[key];
                    }
                }
                crawlwerOptions.push(<Option key={ crawlerIdInit }>{ crawlerNameInit }</Option>);
                sourceOptions.push(<Option key={ bidInit }>{ bnameInit }</Option>);
                categoryOptions.push(<Option key={ cidInit }>{ cnameInit }</Option>);
            }
    
            return (
                <Modal
                    visible={ visible }
                    title='修改滤非法结果'
                    okText='提交'
                    cancelText='取消'
                    onCancel={ onCancel }
                    onOk={ onUpdate }
                    style={ {top: 30, bottom: 30} }     // 距离顶部和底部的距离都为30
                    bodyStyle={ {height: bodyHeight - 170, overflow: 'auto' } }     // 高度固定，内容区域初始化滚动条
                    destroyOnClose={ true }     // 关闭时销毁 Modal 里的子元素，每次打开均重新加载(滚动条回顶部)
                    confirmLoading={ confirmLoading }
                    >
                    <Form layout='vertical'>
                        <FormItem label='资讯id'>
                            { getFieldDecorator('information_id', {
                                initialValue: informationIdInit,
                                rules: [{
                                    required: true,
                                    message: '请输入资讯id'
                                }]
                            })(
                                <Input disabled={ true } />
                            ) }
                        </FormItem>
    
                        <FormItem label='源'>
                            { getFieldDecorator('bid', {
                                initialValue: bidInit,
                                rules: [{
                                    required: true,
                                    message: '请选择源'
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
    
                        <FormItem label='类别'>
                            { getFieldDecorator('cid', {
                                initialValue: cidInit,
                                rules: [{
                                    required: true,
                                    message: '请选择类别'
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
    
                        <FormItem label='爬虫名'>
                            { getFieldDecorator('crawler_id', {
                                initialValue: crawlerIdInit,
                                rules: [{
                                    required: true,
                                    message: '请选择爬虫'
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
    
                        <FormItem label='标题'>
                            { getFieldDecorator('title', {
                                initialValue: titleInit,
                                rules: [{
                                    required: true,
                                    message: '请输入标题'
                                }]
                            })(
                                <Input />
                            ) }
                        </FormItem>
    
                        <FormItem label='阅读数'>
                            { getFieldDecorator('read_count', {
                                initialValue: readCountInit
                            })(
                                <InputNumber min={ 0 } step={ 1 } />
                            ) }
                        </FormItem>
    
                        <FormItem label='评论数'>
                            { getFieldDecorator('comment_count', {
                                initialValue: commentCountInit
                            })(
                                <InputNumber min={ 0 } step={ 1 } />
                            ) }
                        </FormItem>
    
                        <FormItem label='点赞数'>
                            { getFieldDecorator('like_count', {
                                initialValue: likeCountInit
                            })(
                                <InputNumber min={ 0 } step={ 1 } />
                            ) }
                        </FormItem>
    
    
                        <FormItem label='文章字数'>
                            { getFieldDecorator('word_count', {
                                initialValue: wordCountInit
                            })(
                                <InputNumber min={ 0 } step={ 1 } />
                            ) }
                        </FormItem>
    
                        <FormItem label='资讯URL'>
                            { getFieldDecorator('url', {
                                initialValue: urlInit,
                                rules: [{
                                    required: true,
                                    message: '请输入url',
                                    pattern: '(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]'
                                }]
                            })(
                                <Input />
                            ) }
                        </FormItem>
    
                        <FormItem label='资讯创建时间'>
                            { getFieldDecorator('created_time', {
                                initialValue: moment(createdTimeInit),
                                rules: [{
                                    required: true,
                                    message: '请编辑资讯创建时间',
                                }]
                            })(
                                <DatePicker
                                    disabledDate={ disabledDate }
                                    showTime
                                    format='YYYY-MM-DD HH:mm:ss'
                                    placeholder='请选择资讯创建时间'
                                        />
                            ) }
                        </FormItem>
    
                        <FormItem label='滤重号'>
                            { getFieldDecorator('repetition_num', {
                                initialValue: repetitionNumInit
                            })(
                                <Input disabled={ true } />
                            ) }
                        </FormItem>

                        <FormItem label='滤非法结果id'>
                            { getFieldDecorator('illegality_result_id', {
                                initialValue: illegalityResultIdInit,
                                rules: [{
                                    required: true,
                                    message: '请输入滤非法结果id'
                                }]
                            })(
                                <Input disabled={ true } />
                            ) }
                        </FormItem>
                    </Form>
                </Modal>
            );

        }
    }
);