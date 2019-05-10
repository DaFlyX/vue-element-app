export default {
	path: '/article',
	component: () => import('@/views/Article'),
	children: [{
			path: 'all',
			component: () => import('@/views/Article')
		},
		{
			path: 'python',
			component: () => import('@/views/Article')
		},
		{
			path: 'golang',
			component: () => import('@/views/Article')
		},
		{
			path: 'linux',
			component: () => import('@/views/Article')
		},
		{
			path: 'tjgj',
			component: () => import('@/views/Article')
		},
		{
			path: 'qt',
			component: () => import('@/views/Article')
		}
	]
}
