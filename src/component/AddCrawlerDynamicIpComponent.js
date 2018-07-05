import React from 'react';
import { Modal, Form, Input, Radio, InputNumber } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

export const AddCrawlerDynamicIpComponent = Form.create()(
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form, bodyHeight, confirmLoading, initData } = this.props;
            const { getFieldDecorator } = form;
    
            // 判断initData并赋值
            if (initData !== undefined && initData !== null) {
                for (let key in initData) {
                    // 获取该条数据，填充至对应控件
                    if (key === 'ip_address') {
                        var ipAddressInit = initData[key];
                    } else if (key === 'port') {
                        var portInit = initData[key];
                    } else if (key === 'server_address') {
                        var serverAddressInit = initData[key];
                    } else if (key === 'anonymity') {
                        var anonymityInit = initData[key];
                    } else if (key === 'protocol') {
                        var protocolInit = initData[key];
                    } else if (key === 'speed') {
                        var speedInit = initData[key];
                    } else if (key === 'connect_time') {
                        var connectTimeInit = initData[key];
                    } else if (key === 'alive_duration') {
                        var aliveDurationInit = initData[key];
                    } else if (key === 'verify_time') {
                        var verifyTimeInit = initData[key];
                    }
                }
            }
    
            return(
                <Modal
                    visible={ visible }
                    title='新增动态ip'
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
                        <FormItem label='IP地址'>
                            { getFieldDecorator('ip_address', {
                                initialValue: ipAddressInit,
                                rules: [{
                                    required: true,
                                    message: '请输入IP地址',
                                    pattern: '^(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|[1-9])\\.'
                                    +'(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\.'
                                    +'(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\.'
                                    +'(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)$'
                                }]
                            })(
                                <Input />
                            ) }
                        </FormItem>
    
                        <FormItem label='端口'>
                            { getFieldDecorator('port', {
                                initialValue: portInit,
                                rules: [{
                                    required: true,
                                    message: '请输入端口号，且仅支持数字'
                                }]
                            })(
                                <InputNumber min={ 0 } />
                            ) }
                        </FormItem>
    
                        <FormItem label='服务器地址'>
                            { getFieldDecorator('server_address', {
                                initialValue: serverAddressInit
                            })(
                                <Input />
                            ) }
                        </FormItem>
    
                        <FormItem label='是否匿名'>
                            { getFieldDecorator('anonymity', {
                                initialValue: anonymityInit
                            })(
                                <Input />
                            ) }
                        </FormItem>
    
                        <FormItem label='类型'>
                            { getFieldDecorator('protocol', {
                                initialValue: protocolInit,
                                rules: [{
                                    required: true,
                                    message: '请选择类型',
                                    pattern: 'HTTP|HTTPS'
                                }]
                            })(
                                <RadioGroup name='protocol' >
                                    <Radio value='HTTP'>HTTP</Radio>
                                    <Radio value='HTTPS'>HTTPS</Radio>
                                </RadioGroup>
                            ) }
                        </FormItem>
    
                        <FormItem label='速度'>
                            { getFieldDecorator('speed', {
                                initialValue: speedInit
                            })(
                                <Input />
                            ) }
                        </FormItem>
    
                        <FormItem label='连接时间'>
                            { getFieldDecorator('connect_time', {
                                initialValue: connectTimeInit
                            })(
                                <Input />
                            ) }
                        </FormItem>
                        
                        <FormItem label='存活时间'>
                            { getFieldDecorator('alive_duration', {
                                initialValue: aliveDurationInit
                            })(
                                <Input />
                            ) }
                        </FormItem>
    
                        <FormItem label='验证时间'>
                            { getFieldDecorator('verify_time', {
                                initialValue: verifyTimeInit
                            })(
                                <Input />
                            ) }
                        </FormItem>
                    </Form>
                </Modal>
            );
        }
    }
);