import request from '/@/utils/axios';

// 获取文件列表
export function GetList(data: object) {
    return request({
        url: '/v1/list',
        method: 'POST',
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}