import { createRouter ,createWebHistory } from "vue-router";
// createRouter方法，用于创建路由器实例，可以管理多个路由
export default createRouter({
  // 路由的模式设置
  history: createWebHistory(),
  // 管理路由
  routes: [
    {
      path: "/home",
      // 路由懒加载
      component: () => import("../pages/home/index.vue"),
      meta: {
        title: "首页",
      },
    },
    // 重定向
    {
      path: "/",
      redirect: "/home",
    },
  ],
  // 滚动行为：控制滚动条的位置
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});
