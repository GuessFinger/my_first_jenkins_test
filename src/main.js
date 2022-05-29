import {createApp} from 'vue'
import App from './App.vue'
import A from './components/A';
import B from './components/B';
import C from './components/C';
import User from "@/components/User";

import {createRouter, createWebHashHistory} from 'vue-router';

const Router = createRouter({
    history: createWebHashHistory(),
    strict: true,
    routes: [
        {
            path: '/',
            redirect: '/a'
        },
        {
            path: '/a/q',
            component: () => A,
            meta: {helloFlag: false}
        },
        {
            path: '/b',
            component: () => B,
            children: [
                {
                    path: 'c/:id',
                    component: () => C
                }
            ]
        },
        {
            path: '/:orderId(\\d+)',
            component: () => A
        },
        {
            path: '/user/:userId',
            name: 'user',
            component: () => User
        },
        {
            path: '/user?:id=',
            component: () => User
        },
        {
            path: '/dd',
            components: {
                default: A,
                b: B,
                c: C
            }
        },
        {
            path: '/aaa',
            alias: '/bbb',
            component: () => A
        },
        {
            path: '/testa',
            props: {test1: false},
            component: () => A
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition);
        return {
            top: 0
        };
    }
})

Router.beforeEach((to, from, next) => {
    console.log('before', to, from);
    next();
})

Router.beforeResolve((to, from) => {
    console.log('resolve', to, from);
})

Router.afterEach((to, from, failure) => {
    console.log('after', to, from, failure);
})


createApp(App).use(Router).mount('#app');

