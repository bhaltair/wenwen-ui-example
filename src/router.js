import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Button from "./views/Button.vue";
import Cell from "./views/Cell.vue";
import List from "./views/List.vue";
import Navbar from "./views/Navbar.vue";
import Loading from "./views/Loading.vue";
import Toast from "./views/Toast.vue";
import Spinner from "./views/Spinner.vue";
import Tab from "./views/Tabs.vue";
import Switch from "./views/Switch.vue";
import SwitchCell from "./views/SwitchCell.vue";
import Icon from "./views/Icon.vue";
import Upload from "./views/Upload.vue";
import ActionSheet from "./views/ActionSheet.vue";
import Modal from "./views/Modal.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/button",
      name: "button",
      component: Button
    },
    {
      path: "/cell",
      name: "cell",
      component: Cell
    },
    {
      path: "/list",
      name: "list",
      component: List
    },
    {
      path: "/navbar",
      name: "navbar",
      component: Navbar
    },
    {
      path: "/loading",
      name: "loading",
      component: Loading
    },
    {
      path: "/toast",
      name: "toast",
      component: Toast
    },
    {
      path: "/spinner",
      name: "spinner",
      component: Spinner
    },
    {
      path: "/tab",
      name: "tab",
      component: Tab
    },
    {
      path: "/switch",
      name: "switch",
      component: Switch
    },
    {
      path: "/switch-cell",
      name: "switch-cell",
      component: SwitchCell
    },
    {
      path: "/icon",
      name: "icon",
      component: Icon
    },
    {
      path: "/upload",
      name: "upload",
      component: Upload
    },
    {
      path: "/actionSheet",
      name: "actionSheet",
      component: ActionSheet
    },
    {
      path: "/modal",
      name: "modal",
      component: Modal
    }
  ]
});
