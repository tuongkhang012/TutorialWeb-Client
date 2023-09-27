import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TestZone from '../views/TestZone.vue'
import StudentView from '../views/StudentView.vue'
import SchoolView from '../views/SchoolView.vue'
import EquipmentView from '../views/EquipmentView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const routes = [
    { 
        path: '/',
        component: HomeView,
        meta: {
            title: 'Home',
        }
    },
    { 
        path: '/about',
        component: AboutView,
        meta: {
            title: 'About',
        }
    },
    { 
        path: '/test',
        component: TestZone,
        meta: {
            title: 'Shitpost',
        }
    },
    { 
        path: '/students',
        component: StudentView,
        meta: {
            title: 'Student',
        }
    },
    { 
        path: '/login',
        component: LoginView,
        meta: {
            title: 'Login',
        }
    },
    { 
        path: '/register',
        component: RegisterView,
        meta: {
            title: 'Register',
        }
    },
    { 
        path: '/schools',
        component: SchoolView,
        meta: {
            title: 'School',
        }
    },
    { 
        path: '/equips',
        component: EquipmentView,
        meta: {
            title: 'Equipment',
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active",
})

router.beforeEach((to, from) => {
    document.title = to.meta?.title ?? 'Blank'
})

export default router;