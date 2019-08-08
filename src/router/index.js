import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

function lazyLoad(view) {
  return () => import(`@/pages/${view}.vue`);
}

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      component: lazyLoad("index"),
      children: [
        {
          path: "/:category",
          name: "category",
          component: lazyLoad("index")
        }
      ]
    }
  ]
});
