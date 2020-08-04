import Vue from 'vue'
import Router from 'vue-router'
import Main from "../view/module/body/main/Main";
import Class from "../view/module/body/class/Class";
import Tag from "../view/module/body/tag/Tag";
import Reduce from "../view/module/body/reduce/Reduce";
import My from "../view/module/body/my/My";
import NotFoundPage from "../view/module/NotFoundPage";
import Doc from "../view/module/body/doc/Doc";
import SearchPage from "../view/module/head/SearchPage";

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
Vue.use(Router);
export default new Router({
  mode: 'history',
  routes:[
    {
      path: '/',
      component: Main
    },
    {
      path: '/main',
      component: Main
    },
    {
      path: '/class/:tp',
      name: 'Class',
      props: true,
      component: Class
    },
    {
      path: '/tag',
      component: Tag
    },
    {
      path: '/reduce',
      component: Reduce
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/doc/:type/:id',
      name: "Doc",
      props:true,
      component: Doc
    },
    {
      path: '/search/:data/:start',
      name: 'Search',
      props: true,
      component: SearchPage
    },
    {
      path: '*',
      component: NotFoundPage
    }
  ]
})

