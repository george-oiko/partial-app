export const APP_ROUTES = [
    { path: 'first', loadComponent: () => import('../app/first/first.component').then(mod => mod.FirstComponent) },
]