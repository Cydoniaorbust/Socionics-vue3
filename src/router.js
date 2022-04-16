import { createRouter, createWebHistory } from 'vue-router'

// const routes = [
// 	{ path: '/about', name: 'about', component: () => import('../views/AboutView.vue') }
// ]
var routes = [
	{ path: '/calc', name: 'Calc', meta: { title: 'Калькулятор' } },
	{ path: '/table', name: 'Table', meta: { title: 'Таблица' } },
	{ path: '/funcs', name: 'Funcs', meta: { title: 'Функции' } },
	{ path: '/:catchAll(.*)', redirect: '/calc' },
]

routes.forEach(route => {
	if (route.name)
		route.component = () => import(`@/pages/Page${route.name}.vue`)
})

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

router.afterEach((to/*, from*/) => {
	window.document.title = (to.meta.title || 'Unknown') + ' | Cyorbu(c)'
});

export default router
