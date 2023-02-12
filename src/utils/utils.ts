import {Folder, AlertCircleSharp, DocumentText} from '@vicons/ionicons5'

/**
 * 匹配 文件后缀 对应的 图标
 * @param obj
 * @constructor
 */
export function FileSelectIcon(obj: any) {
    if (obj.isDir) return Folder
    let icon = AlertCircleSharp
    switch (Array.isArray(obj.name.match(/.[^.]+$/))&&obj.name.match(/.[^.]+$/)[0]) {
        case ".txt":
            icon = DocumentText
            break;
        default:
            break;
    }
    return icon
}
