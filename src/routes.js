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
    {
        path: "/contact-us",
        component: lazy(() => import('./features/company-profile/contact-us/contact-us.jsx')),
        name: "contact-us",
        requireAuth: false,
    },
    {
        path: "/fnavi",
        component: lazy(() => import('./features/company-profile/fNavi/FNavi.jsx')),
        name: "fnavi",
        requireAuth: false,
    },
]