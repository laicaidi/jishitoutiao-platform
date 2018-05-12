import React from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

export const AddCrawlerCategoryComponent = Form.create()(
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form, bodyHeight, confirmLoading, initData } = this.props;
            const { getFieldDecorator } = form;
    
            // 判断initData并赋值
            if (initData !== undefined && initData !== null) {
                for (let key in initData) {
                    // 获取该条数据，填充至对应控件
                    if (key === "ckey") {
                        var ckeyInit = initData[key];
                    }
                    if (key === "cname") {
                        var cnameInit = initData[key];
                    }
                    if (key === "remark") {
                        var remarkInit = initData[key];
                    }
                }
            }
    
            return(
                <Modal
                    visible={ visible }
                    title="新增类别"
                    okText="提交"
                    cancelText="取消"
                    onCancel={ onCancel }
                    onOk={ onCreate }
                    style={ {top: 30, bottom: 30} }     // 距离顶部和底部的距离都为30
                    bodyStyle={ {height: bodyHeight - 170, overflow: "auto"} }      // 高度固定，内容区域初始化滚动条
                    destroyOnClose={ true }     // 关闭时销毁 Modal 里的子元素，每次打开均重新加载(滚动条回顶部)
                    confirmLoading={ confirmLoading }       // 点击提交按钮时的加载态
                    >
                    <Form layout="vertical">
                        <FormItem label="类别key">
                            { getFieldDecorator('ckey', {
                                initialValue: ckeyInit,
                                rules: [{
                                    required: true,
                                    message: "请输入英文+数字",
                                    pattern: '^[a-zA-Z_0-9]+$'
                                }]
                            })(
                                <Input />
                            ) }
                        </FormItem>
    
                        <FormItem label="类别名称">
                            { getFieldDecorator('cname', {
                                initialValue: cnameInit,
                                rules: [{
                                    required: true,
                                    message: "请输入类别名称"
                                }]
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