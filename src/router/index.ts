import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from 'vue-router';

export const notFoundAndNoPower = [
    {
        path: '/:path(.*)*',
        name: 'notFound',
        component: () => import('/@/views/home/index.vue'),
        meta: {
            title: '404',
            isHide: true,
        },
    },
];

// 创建 路由实例
export const router = createRouter({
    history: createWebHashHistory(),
    routes: [...notFoundAndNoPower],
});