export const APP_ROUTES = [
    { path: 'second', loadComponent: () => import('../app/second/second.component').then(mod => mod.SecondComponent) },
]