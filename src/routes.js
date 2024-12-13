import { lazy } from "react";

export const routes = [
    {
        path: "/",
        component: lazy(() => import('./features/company-profile/homepage/homepage.jsx')),
        name: "homepage",
        requireAuth: false,
    },
    {
        path: "/about",
        component: lazy(() => import('./features/company-profile/about-us/about.jsx')),
        name: "about",
        requireAuth: false,
    },
    {
        path: "/product-and-services",
        component: lazy(() => import('./features/company-profile/product-and-services/product-and-services.jsx')),
        name: "product-and-services",
        requireAuth: false,
    },
]