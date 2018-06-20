import React from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

export const AddCrawlerUserAgentComponent = Form.create()(
   class extends React.Component {
       render() {
            const { visible, onCancel, onCreate, form, bodyHeight, confirmLoading, initData } = this.props;
            const { getFieldDecorator } = form;
      
            // 判断initData并赋值
            if (initData !== undefined && initData !== null) {
                for (let key in initData) {
                  // 获取该条数据，填充至对应控件
                  if (key === 'accept') {
                      var acceptInit = initData[key];
                  } else if (key === 'accept_encoding') {
                      var acceptEncodingInit = initData[key];
                  } else if (key === 'accept_language') {
                      var acceptLanguageInit = initData[key];
                  } else if (key === 'connection') {
                      var connectionInit = initData[key];
                  } else if (key === 'host') {
                      var hostInit = initData[key];
                  } else if (key === 'user_agent') {
                      var userAgentInit = initData[key];
                  } else if (key === 'remark') {
                      var remarkInit = initData[key];
                  }
                }
            }
      
            return (
              <Modal
                visible={ visible }
                title="新增user_agent"
                okText="提交"
                cancelText="取消"
                onCancel={ onCancel }
                onOk={ onCreate }
                style={ {top: 30, bottom: 30} }       // 距离顶部和底部的距离都为30
                bodyStyle={{height: bodyHeight - 170, overflow:"auto"}}       // 高度固定，内容区域初始化滚动条
                destroyOnClose={ true }      // 关闭时销毁 Modal 里的子元素，每次打开均重新加载(滚动条回顶部)
                confirmLoading={ confirmLoading }     // 点击提交按钮时的加载态
                >
                <Form layout='vertical'>
                  <FormItem label="Accept">
                        { getFieldDecorator('accept', {
                          initialValue: acceptInit
                      })(
                          <TextArea rows={ 4 } />
                      ) }
                  </FormItem>
        
                  <FormItem label="Accept-Encoding">
                      { getFieldDecorator('accept_encoding', {
                          initialValue: acceptEncodingInit
                      })(
                          <Input />
                      ) }
                  </FormItem>
                  
                  <FormItem label="Accept-Language">
                      { getFieldDecorator('accept_language', {
                          initialValue: acceptLanguageInit
                      })(
                          <Input />
                      ) }
                  </FormItem>
      
                  <FormItem label="Connection">
                      { getFieldDecorator('connection', {
                          initialValue: connectionInit
                      })(
                          <Input />
                      ) }
                  </FormItem>
      
                  <FormItem label="Host">
                      { getFieldDecorator('host', {
                          initialValue: hostInit
                      })(
                          <Input />
                      ) }
                  </FormItem>
      
                  <FormItem label="User-Agent">
                      { getFieldDecorator('user_agent', {
                          initialValue: userAgentInit,
                          rules: [{
                              required: true,
                              message: '请填写User_Agent'
                          }]
                      })(
                          <TextArea rows={ 6 } />
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