import React from 'react';
import { Modal, Form, Input, Select, Radio, InputNumber } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;
const RadioGroup = Radio.Group;
const Option = Select.Option;

export const AddCrawlerManagementComponent = Form.create()(
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form, bodyHeight, confirmLoading, initData } = this.props;
            const { getFieldDecorator } = form;
    
            // 爬虫源和类别元数据
            const sourceOptionObj = this.props.sourceOption;
            const categoryListObj = this.props.categoryList;
    
            // 将爬虫源数据封装成下拉列表需要的数组
            const sourceOptions = [];
            for (let arrIndex in sourceOptionObj) {        // 取出对象
                for (var keyIndex in sourceOptionObj[arrIndex]) {       // 取出字段
                    if (keyIndex === 'bid') {
                        var bid = sourceOptionObj[arrIndex][keyIndex];
                    }
                    if (keyIndex === 'bname') {
                        var bname = sourceOptionObj[arrIndex][keyIndex];
                    }
                }
                sourceOptions.push(<Option key={ bid }>{ bname }</Option>);        // 保存到数组
            }
    
            // 将类别数据封装成下拉列表需要的数组
            const categoryOptions = [];
            for (let arrIndex in categoryListObj) {
                for (var ckeyIndex in categoryListObj[arrIndex]) {
                    if (ckeyIndex === 'cid') {
                        var cid = categoryListObj[arrIndex][ckeyIndex];
                    }
                    if (ckeyIndex === 'cname') {
                        var cname = categoryListObj[arrIndex][ckeyIndex];
                    }
                }
                categoryOptions.push(<Option key={ cid }>{ cname }</Option>);
            }
    
            // 判断initData并赋值
            if (initData !== undefined && initData !== null) {
                for (let key in initData) {
                    // 获取该条数据，填充至对应控件
                    if (key === 'bid') {
                        var bidInit = initData[key];
                    } else if (key === 'sld') {
                        var sldInit = initData[key];
                    } else if (key === 'cid') {
                        var cidInit = initData[key];
                    } else if (key === 'crawler_name') {
                        var crawlerNameInit = initData[key];
                    } else if (key === 'base_url') {
                        var baseUrlInit = initData[key];
                    } else if (key === 'crawler_directory') {
                        var crawlerDirectoryInit = initData[key];
                    } else if (key === 'crawler_weight_factor') {
                        var crawlerWeightFactorInit = initData[key];
                    } else if (key === 'crawler_weight_score') {
                        var crawlerWeightScoreInit = initData[key];
                    } else if (key === 'crawler_status') {
                        var crawlerStatusInit = initData[key];
                    } else if (key === 'remark') {
                        var remarkInit = initData[key];
                    } else if (key === 'crawler_switch') {
                        var crawlerSwitchInit = initData[key];
                    }
                }
            }
    
            return(
                <Modal
                    visible={ visible }
                    title='新增爬虫'
                    okText='提交'
                    cancelText='取消'
                    onCancel={ onCancel }
                    onOk={ onCreate }
                    style={ {top: 30, bottom: 30} }     // 距离顶部和底部的距离都为30
                    bodyStyle={ {height: bodyHeight - 170,  overflow: 'auto'} }      // 高度固定，内容区域初始化滚动条
                    destroyOnClose={ true }     // 关闭时销毁 Modal 里的子元素，每次打开均重新加载(滚动条回顶部)
                    confirmLoading={ confirmLoading }       // 点击提交按钮时的加载态
                    >
                    <Form layout='vertical'>
                        <FormItem label='源'>
                            { getFieldDecorator('bid', {
                                initialValue: bidInit,
                                rules: [{
                                    required: true,
                                    message: '请选择源'
                                }]
                            })(
                                <Select 
                                    showSearch
                                    style={ {width: 200} }
                                    >
                                    { sourceOptions }
                                </Select>
                            ) }
                        </FormItem>
    
                        <FormItem label='二级源名'>
                            { getFieldDecorator('sld', {
                                initialValue: sldInit
                            })(
                                <Input />
                            ) }
                        </FormItem>
    
                        <FormItem label='所属类别'>
                            { getFieldDecorator('cid', {
                                initialValue: cidInit,
                                rules: [{
                                    required: true,
                                    message: '请选择类别'
                                }]
                            })(
                                <Select
                                    showSearch
                                    style={ {width: 200} }
                                    >
                                    { categoryOptions }
                                </Select>
                            ) }
                        </FormItem>
    
                        <FormItem label='爬虫名'>
                            { getFieldDecorator('crawler_name', {
                                initialValue: crawlerNameInit,
                                rules: [{
                                    required: true,
                                    message: '请输入爬虫名，且仅支持英文或数字',
                                    pattern: '^[a-zA-Z_0-9]+$'
                                }]
                            })(
                                <Input />
                            ) }
                        </FormItem>
    
                        <FormItem label='爬虫base_url'>
                            { getFieldDecorator('base_url', {
                                initialValue: baseUrlInit,
                                rules: [{
                                    required: true,
                                    message: '请输入爬取url',
                                    pattern: '(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]'
                                }]
                            })(
                                <Input />
                            ) }
                        </FormItem>
    
                        <FormItem label='爬虫文件所在目录'>
                            { getFieldDecorator('crawler_directory', {
                                initialValue: crawlerDirectoryInit,
                                rules: [{
                                    required: true,
                                    message: '请输入爬虫所在目录',
                                }]
                            })(
                                <Input />
                            ) }
                        </FormItem>
    
                        <FormItem label='爬虫权重系数'>
                            { getFieldDecorator('crawler_weight_factor', {
                                initialValue: crawlerWeightFactorInit,
                                rules: [{
                                    required: true,
                                    message: '请输入爬虫权重系数'
                                }]
                            })(
                                <InputNumber min={ 0 } step={ 0.1 } />
                            ) }
                        </FormItem>
    
                        <FormItem label='爬虫权重分'>
                            { getFieldDecorator('crawler_weight_score', {
                                initialValue: crawlerWeightScoreInit,
                                rules: [{
                                    required: true,
                                    message: '请输入爬虫权重分,必须为正整数'
                                }]
                            })(
                                <InputNumber min={ 0 } />
                            ) }
                        </FormItem>
    
                        <FormItem label='状态'>
                            { getFieldDecorator('crawler_status', {
                                initialValue: crawlerStatusInit,
                                rules: [{
                                    required: true,
                                    message: '请选择状态',
                                    pattern: 'ABNORMAL|NORMAL'
                                }]
                            })(
                                <RadioGroup name='crawler_status' >
                                    <Radio value='NORMAL'>正常</Radio>
                                    <Radio value='ABNORMAL'>异常</Radio>
                                </RadioGroup>
                            ) }
                        </FormItem>
    
                        <FormItem label='备注'>
                            { getFieldDecorator('remark', {
                                initialValue: remarkInit
                            })(
                                <TextArea rows={ 4 } />
                            ) }
                        </FormItem>
                        
                        <FormItem label='开关'>
                            { getFieldDecorator('crawler_switch', {
                                initialValue: crawlerSwitchInit,
                                rules: [{
                                    required: true,
                                    message: '请选择开关',
                                    pattern: 'ON|OFF'
                                }]
                            })(
                                <RadioGroup name='crawler_switch' >
                                    <Radio value='ON'>开启</Radio>
                                    <Radio value='OFF'>关闭</Radio>
                                </RadioGroup>
                            ) }
                        </FormItem>
                    </Form>
                </Modal>
            );
        }
    }
);