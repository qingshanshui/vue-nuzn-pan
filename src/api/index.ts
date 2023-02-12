import request from '/@/axios';

// 上传文件
export function SaveUpload(data: object) {
    return request({
        url: '/basic/files/upload/formFile',
        method: 'post',
        data: data,
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    });
}