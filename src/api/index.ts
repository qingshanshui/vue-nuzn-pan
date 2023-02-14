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

// 获取文件信息
export function GetFile(data: object) {
    return request({
        url: '/v1/get',
        method: 'POST',
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

// 文件下载
export function GetFileDownload(data: object) {
    return request({
        url: '/v1/download',
        method: 'GET',
        params: data,
        responseType: 'blob',
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}