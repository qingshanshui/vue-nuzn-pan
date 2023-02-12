import request from '/@/utils/axios';

// 上传文件
export function SaveUpload(data: object) {
    return request({
        url: '/v1/list',
        method: 'get',
        params: data,
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    });
}