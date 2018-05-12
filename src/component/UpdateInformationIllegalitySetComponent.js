import React from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

export const UpdateInformationIllegalitySetComponent = Form.create()(
    class extends React.Component {
        render() {
            const { visible, onCancel, onUpdate, form, bodyHeight, confirmLoading, initData } = this.props;
            const { getFieldDecorator } = form;
    
            for (let key in initData) {
                // 获取该条数据，填充至对应控件
                if (key === 'sid') {
                    var sidInit = initData[key];
                }
                if (key === 'ikey') {
                    var ikeyInit = initData[key];
                }
                if (key === 'ivalue') {
                    var ivalueInit = initData[key];
                }
                if (key === 'remark') {
                    var remarkInit = initData[key];
                }
            }
    
            return (
                <Modal
                    visible={ visible }
                    title="修改设置"
                    okText="提交"
                    cancelText="取消"
                    onCancel={ onCancel }
                    onOk={ onUpdate }
                    style={ {top: 30, bottom: 30} }     // 距离顶部和底部的距离都为30
                    bodyStyle={ {height: bodyHeight - 170, overflow: "auto" } }     // 高度固定，内容区域初始化滚动条
                    destroyOnClose={ true }     // 关闭时销毁 Modal 里的子元素，每次打开均重新加载(滚动条回顶部)
                    confirmLoading={ confirmLoading }
                    >
                    <Form layout="vertical">
                        <FormItem label="设置id">
                            { getFieldDecorator('sid', {
                                initialValue: sidInit,
                                rules: [{required: true}]
                            })(
                                <Input disabled={ true } />
                            ) }
                        </FormItem>
    
                        <FormItem label="键">
                            { getFieldDecorator('ikey', {
                                initialValue: ikeyInit,
                                rules: [{ required: true, 
                                        message: '请输入键，仅支持英文或数字',
                                        pattern: '^[a-zA-Z_0-9]+$'
                                }]
                            })(
                                <Input />
                            ) }
                        </FormItem>
            
                        <FormItem label="值">
                            { getFieldDecorator('ivalue', {
                                initialValue: ivalueInit,
                                rules: [{ required: true, message: '请输入值' }]
                            })(
                                <Input />
                            ) }
                        </FormItem>
            
                        <FormItem label="备注">
                            { getFieldDecorator('remark', {
                                initialValue: remarkInit
                            })(
                                <TextArea rows={ 4 } />
                            ) }
                        </FormItem>
                    </Form>
                </Modal>
            );
        }
    }
);