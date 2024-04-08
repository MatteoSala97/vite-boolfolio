import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue'
import ProjectList from './pages/ProjectList.vue'
import SingleProject from './pages/SingleProject.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/project-list',
            name: 'project-list',
            component: ProjectList
        },
        {
            path: '/blog/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound
        }
    ]
})

export { router };