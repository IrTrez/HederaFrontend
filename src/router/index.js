import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import("../views/About.vue"),
    },
    {
        path: "/market",
        name: "Market",
        component: () =>
            import("../views/Market.vue"),
    },
    {
        path: "/mytokens",
        name: "Mytokens",
        component: () =>
            import("../views/Mytokens.vue"),
    },
    {
        path: "/new",
        name: "NewToken",
        redirect: "/new/1",
        component: () =>
            import("../views/NewToken.vue"),
        children: [
            {
                path: "1",
                name: "NewToken1",
                component: () => import("../components/NewToken1.vue"),
            },
            {
                path: "2",
                name: "NewToken2",
                component: () => import("../components/NewToken2.vue"),
            },
            {
                path: "3",
                name: "NewToken3",
                component: () => import("../components/NewToken3.vue"),
            },
        ],
    },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
