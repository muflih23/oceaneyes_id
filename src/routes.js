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
]