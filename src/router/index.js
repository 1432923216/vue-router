import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  // mode:history,
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: ()=>import('../components/HelloWorld.vue')
    },
    {
      path: "/Detail",
      name: "Detail",
      component: ()=>import('../components/Detail.vue')
    },
    {
      path: "/Detail/:id",
      name: "Detail",
      component: ()=>import('../components/Detail.vue')
    },
    {
      path: "*",
      name: "Detail",
      component: ()=>import('../components/404.vue')
    }
  ]
});
