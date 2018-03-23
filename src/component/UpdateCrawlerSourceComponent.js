import React from 'react';
import { Modal, Form, Input } from 'antd';
// import UploadComponent from './UploadComponent';

const FormItem = Form.Item;
const { TextArea } = Input;

export const UpdateCrawlerSourceComponent = Form.create()(
    (props) => {
        const { visible, onCancel, onUpdate, form, bodyHeight, confirmLoading, initData } = props;
        const { getFieldDecorator } = form;

        for (let key in initData) {
            // 获取该条数据，填充至对应控件
            if (key === 'bid') {
                var bidInit = initData[key];
            }
            if (key === 'bkey') {
                var bkeyInit = initData[key];
            }
            if (key === 'bname') {
                var bnameInit = initData[key];
            }
            if (key === 'homepage') {
                var homepageInit = initData[key];
            }
            // if (key === 'logo') {
            //     var logoInit = initData[key];
            // }
            if (key === 'remark') {
                var remarkInit = initData[key];
            }
        }

        return (
            <Modal
                visible={ visible }
                title="修改源"
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
                    <FormItem label="源id">
                        { getFieldDecorator('bid', {
                            initialValue: bidInit,
                            rules: [{required: true}]
                        })(
                            <Input disabled={ true } />
                        ) }
                    </FormItem>

                    <FormItem label="源key">
                        { getFieldDecorator('bkey', {
                            initialValue: bkeyInit,
                            rules: [{required: true, message: '请输入纯英文源key'}]
                        })(
                            <Input />
                        ) }
                    </FormItem>

                    <FormItem label="源名称">
                        { getFieldDecorator('bname', {
                            initialValue: bnameInit,
                            rules: [{required: true, message: '请输入源名称'}]
                        })(
                            <Input />
                        ) }
                    </FormItem>

                    <FormItem label="源网站首页">
                        { getFieldDecorator('homepage',{
                            initialValue: homepageInit
                        })(
                            <Input />
                        ) }
                    </FormItem>

                    {/* <FormItem label="品牌logo">
                        { getFieldDecorator('logo', {
                            initialValue: logoInit
                        })(
                            <UploadComponent />
                        ) }
                    </FormItem> */}

                    <FormItem label="介绍">
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
);