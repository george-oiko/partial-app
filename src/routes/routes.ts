export const APP_ROUTES = [
    { path: 'first', loadComponent: () => import('../app/first/first.component').then(mod => mod.FirstComponent) },
    { path: 'second', loadComponent: () => import('../app/second/second.component').then(mod => mod.SecondComponent) },
]