const routes = [
  {
    path: "/",
    name: "index",
    title: "首頁",
    redirect: '/import',
    component: () => import("../layout/Layout.vue"),
    children: [
      {
        path: "import",
        name: "import",
        title: "測試import",
        component: () => import("../views/import/Page.vue"),
      },
      {
        path: "children",
        name: "children",
        title: "測試child",
        component: () => import("../views/child/Page.vue"),
      },
      {
        path: "lib",
        name: "lib",
        title: "lib",
        component: () => import("../views/library/Page.vue"),
      },
      {
        path: "model",
        name: "model",
        title: "model",
        component: () => import("../views/vmodel/Page.vue"),
      },
      {
        path: "emit",
        name: "emit",
        title: "emit",
        component: () => import("../views/emit/Page.vue"),
      }
    ]
  },
];
 
export default routes;