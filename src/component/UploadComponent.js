import React, { Component } from 'react';
import { Upload, Icon, message, Modal} from 'antd';
import '../css/UploadComponent.css';

function beforeUpload(file) {
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
        message.error('图片必须小于10M');
    }
    return isLt10M;
}

export default class UploadComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
        };
    }

    handleCancel = () => {
        this.setState({previewVisible: false});
    }

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => {
        console.log('UploadComponent handleChange: ' + fileList);
        for (let key in fileList) {
            console.log('fileList[' + key + ']: ' + fileList[key]);
            for (let index in fileList[key]) {
                console.log('fileList[' + key + '][' + index + ']: ' + fileList[key][index]);
            }
        }
        this.setState({ fileList });
    }

    render() {
        const { previewVisible, previewImage, fileList} = this.state;

        const uploadButton = (
            <div>
                <Icon type='plus'/>
                <div className='upload-text'>上传</div>
            </div>
        );
        return (
            <div className='clearfix'>
                <Upload
                    action='//jsonplaceholder.typicode.com/posts/'
                    listType='picture-card'
                    fileList={ fileList }
                    onPreview={ this.handlePreview }
                    onChange={ this.handleChange }
                    beforeUpload= { beforeUpload }
                    >
                    {fileList.length >= 1 ? null : uploadButton}
                </Upload>
                <Modal visible={ previewVisible } footer={ null } onCancel={ this.handleCancel }>
                    <img alt='pic' style={ {width: '100%'} } src={ previewImage } />
                </Modal>
            </div>
        )
    }
}